<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Transaksi;
use App\Models\UserMember;
use App\Models\TransaksiItem;
use App\Events\KasirEvent;

class TransactionController extends Controller
{
    public $status = 0,$message;

    public function submitQrcode(Request $r)
    {
        $validator = \Validator::make($r->all(), [
            'no_anggota'=> 'required',
            'token'=>'required',
            'amount'=>'required',
            'metode_pembayaran'=>'required'
        ]);

        if ($validator->fails()){
            $msg = '';
            foreach ($validator->errors()->getMessages() as $key => $value) {
                $msg .= $value[0]."\n";
            }
            return response()->json(['status'=>0,'message'=>$msg], 200);
        }

        $transaksi = Transaksi::where(['amount'=>$r->amount,'is_temp'=>1])->first();

        if($r->amount < 0 || !$transaksi) return response()->json(['status'=>3,'message'=>"Transaksi tidak bisa dilakukan karna harga tidak sesuai"], 200);
        
        $member = UserMember::where('no_anggota_platinum',$r->no_anggota)->first();
    
        if(!$member) return response()->json(['status'=>3,'message'=>"Anggota tidak ditemukan"], 200);
        // 3 Bayar Nanti
        if($r->metode_pembayaran==3){
            $sisa = $member->plafond - $member->plafond_digunakan;
            //cek kuota
            if($sisa<$r->amount)
                return response()->json(['status'=>3,'message'=>"Kuota tidak mencukupi untuk melakukan transaksi"], 200);
            else{
                $this->status = 1;
                $transaksi->payment_date = date('Y-m-d');
                $transaksi->is_temp = 0;
                $transaksi->status = 1;

                $member->plafond_digunakan = $member->plafond_digunakan + $r->amount;
                $member->save();
                
                event(new KasirEvent('Pembayaran berhasil dilakukan',$transaksi->no_transaksi));

                // Sinkron Coopzone
                $response = sinkronCoopzone([
                    'url'=>'koperasi/user/edit',
                    'field'=>'plafond_digunakan',
                    'value'=>$member->plafond_digunakan,
                    'no_anggota'=>$member->no_anggota_platinum
                ]);
            }   
        }

        if($r->metode_pembayaran==5){
            if($member->simpanan_ku<$r->amount)
                return response()->json(['status'=>3,'message'=>"Saldo Coopay tidak mencukupi untuk melakukan transaksi"], 200);
            else{
                $this->status = 1;
                $member->simpanan_ku = $member->simpanan_ku - $r->amount;
                $member->save();

                // Sinkron Coopzone
                $response = sinkronCoopzone([
                    'url'=>'koperasi/user/edit',
                    'field'=>'simpanan_ku',
                    'value'=>$member->simpanan_ku,
                    'no_anggota'=>$member->no_anggota_platinum
                ]);

                $transaksi->payment_date = date('Y-m-d');
                $transaksi->is_temp = 0;
                $transaksi->status = 1;

                event(new KasirEvent('Pembayaran berhasil dilakukan',$transaksi->no_transaksi));
            }
        }
        
        $transaksi->save();

        return response()->json(['status'=>$this->status,'message'=>$this->message], 200);
    }

    public function storePulsa(Request $r)
    {
        $validator = \Validator::make($r->all(), [
            'transaction_id'=> 'required',
            'no_anggota'=> 'required',
            'token'=>'required'
        ]);
        
        if($r->token != env('COOPZONE_TOKEN')) return response()->json(['status'=>'failed','message'=>'Token Invalid'], 200);

        if ($validator->fails()) {
            $msg = '';
            foreach ($validator->errors()->getMessages() as $key => $value) {
                $msg .= $value[0]."\n";
            }
            return response()->json(['status'=>'failed','message'=>$msg], 200);
        }
        
        $member = UserMember::where('no_anggota_platinum',$r->no_anggota)->first();

        $transaksi = Transaksi::where('no_transaksi',$r->transaction_id)->first();
        if(!$transaksi){
            $transaksi = new Transaksi();
            $transaksi->no_transaksi = $r->transaction_id;
            $transaksi->user_member_id = $member?$member->id:0;
            $transaksi->tanggal_transaksi = date('Y-m-d',strtotime($r->date));
            $transaksi->metode_pembayaran = $r->metode_pembayaran;
            // if($trmetode_pembayaran==4) $transaksi->payment_date = date('Y-m-d',strtotime($tanggal));
            $transaksi->status = $r->status;
            $transaksi->save();
        }
        
        $item = new TransaksiItem();
        $item->transaksi_id = $transaksi->id;
        $item->description = $r->product;
        $item->qty = $r->qty;
        $item->price = $r->price;
        $item->total = $r->total;
        $item->save();

        $transaksi->amount = TransaksiItem::where('transaksi_id',$transaksi->id)->sum('price');
        $transaksi->save();

        $is_transaction = false;

        if($r->price <0) return response()->json(['status'=>3,'message'=>"Transaksi tidak bisa dilakukan karna harga tidak sesuai"], 200);

        // 3 Bayar Nanti
        if($r->metode_pembayaran==3){
            $sisa = $member->plafond - $member->plafond_digunakan;
            //cek kuota
            if($sisa<$r->price)
                return response()->json(['status'=>3,'message'=>"Kuota tidak mencukupi untuk melakukan transaksi"], 200);
            else{
                $this->status = 1;
                $member->plafond_digunakan = $member->plafond_digunakan + $r->price;
                $member->save();

                // Sinkron Coopzone
                $response = sinkronCoopzone([
                    'url'=>'koperasi/user/edit',
                    'field'=>'plafond_digunakan',
                    'value'=>$member->plafond_digunakan,
                    'no_anggota'=>$member->no_anggota_platinum
                ]);
            }   
        }

        if($r->metode_pembayaran==5){
            if($member->simpanan_ku<$r->price)
                return response()->json(['status'=>3,'message'=>"Saldo DIDOMPET tidak mencukupi untuk melakukan transaksi"], 200);
            else{
                $this->status = 1;
                $member->simpanan_ku = $member->simpanan_ku - $r->price;
                $member->save();

                // Sinkron Coopzone
                $response = sinkronCoopzone([
                    'url'=>'koperasi/user/edit',
                    'field'=>'simpanan_ku',
                    'value'=>$member->simpanan_ku,
                    'no_anggota'=>$member->no_anggota_platinum
                ]);

                $transaksi->payment_date = date('Y-m-d');
            }
        }

        if($this->status==1){
            $response = digiflazz([
                'id'=>$transaksi->id,
                'product'=>$r->product_code,
                'no'=>$r->reference_no,
                'action'=>'topup',
                'ref_id'=>$r->transaction_id
            ]);

            $transaksi->api_response_before = $response;
            $transaksi->save();

            $response = json_decode($response);
            if(isset($response->data->rc) and $response->data->rc=='00'){ // sukses
                $transaksi->status = 1; $this->status = 1;
                $transaksi->save();
            }
        }

        return response()->json(['status'=>$this->status,'message'=>$this->message], 200);
    }

    public function update(Request $r)
    {
        $validator = \Validator::make($r->all(), [
            'transaction_id'=> 'required',
            'no_anggota'=> 'required',
            'token'=>'required'
        ]);
        
        if($r->token != env('COOPZONE_TOKEN')) return response()->json(['status'=>'failed','message'=>'Token Invalid'], 200);

        if ($validator->fails()) {
            $msg = '';
            foreach ($validator->errors()->getMessages() as $key => $value) {
                $msg .= $value[0]."\n";
            }
            return response()->json(['status'=>'failed','message'=>$msg], 200);
        }
        
        $member = UserMember::where('no_anggota_platinum',$r->no_anggota)->first();

        $transaksi = Transaksi::where('no_transaksi',$r->transaction_id)->first();
        if($transaksi){
            $transaksi->status = $r->status;
            $transaksi->api_response_after = $r->api_response_after;
            $transaksi->data_json = $r->data_json;
            $transaksi->save();
        }

        return response()->json(['status'=>$this->status,'message'=>''], 200);
    }
}