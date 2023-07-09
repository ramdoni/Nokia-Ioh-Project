<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Transaksi;
use App\Models\Product;
use App\Models\UserMember;
use App\Models\TransaksiItem;
use App\Events\KasirEvent;
use App\Jobs\SyncCoopzone;

class SyncController extends Controller
{
    public $status = 0,$message;

    public function sync(Request $r)
    {
        $validator = \Validator::make($r->all(), [
            'token'=>'required',
        ]);
        
        if($r->token != env('COOPZONE_TOKEN')) return response()->json(['status'=>'failed','message'=>'Token Invalid'], 200);

        if ($validator->fails()) {
            $msg = '';
            foreach ($validator->errors()->getMessages() as $key => $value) {
                $msg .= $value[0]."\n";
            }
            return response()->json(['status'=>'failed','message'=>$msg], 200);
        }

        /**
         * @param $products
         */
        if($r->type=='product'){
            if(isset($r->products)){
                $product = Product::find($r->products['id'])->first();

                if($product){
                    Product::find($r->products['id'])->update([
                        'kode_produksi'=>$r->products['kode_produksi'],
                        'keterangan'=>$r->products['keterangan'],
                        'is_ppn'=>$r->products['is_ppn'],
                        'harga_jual'=>$r->products['harga_jual'],
                        'harga'=>$r->products['harga'],
                        'diskon'=>$r->products['diskon'],
                        'qty'=>$r->products['qty'],
                    ]);
                }else{
                    $data = new Product();
                    $data->id = $r->products['id'];
                    $data->kode_produksi = $r->products['kode_produksi'];
                    $data->keterangan =  $r->products['keterangan'];
                    $data->type = $r->products['type'];
                    if(isset($r->products['is_ppn'])) $data->is_ppn  = $r->products['is_ppn'];
                    if(isset($r->products['ppn'])) $data->ppn = $r->products['ppn'];
                    if(isset($r->products['harga_jual'])) $data->harga_jual = $r->products['harga_jual'];
                    if(isset($r->products['harga'])) $data->harga = $r->products['harga'];
                    if(isset($r->products['margin'])) $data->margin = $r->products['margin'];
                    if(isset($r->products['diskon'])) $data->diskon = $r->products['diskon'];
                    
                    $data->save();
                }
                $msg  = "Syncron Product #{$r->products['keterangan']}";
                event(new \App\Events\GeneralNotification($msg));
            }
        }
        
        /**
         * @param $anggota
         */
        if($r->type=='anggota'){
            if(isset($r->anggotas)){
                $anggota = UserMember::where('no_anggota_platinum',$r->anggota['no_anggota_platinum'])->first();
                if($anggota){
                    UserMember::where('no_anggota_platinum',$r->anggota['no_anggota_platinum'])->update($r->anggotas);
                }
                $msg  = "Syncron Anggota #{$r->anggotas['name']}";
                event(new \App\Events\GeneralNotification($msg));
            }
        }   

        /**
         * @param $anggota
         */
        if($r->type=='transaksi'){
            $transaksi = Transaksi::where('id',$r->transaksi['no_transaksi'])->first();
            $log = new \App\Models\LogActivity();
            $log->subject = "Transaksi Kasir";
            $log->url = "-";
            $log->method = "POST";
            $log->ip = "-";
            $log->var = json_encode($r->transaksi);
            $log->save();
            if(!$transaksi) {
                $transaksi = new Transaksi();
                // $transaksi->id = $r->transaksi['id'];
                $transaksi->no_transaksi = $r->transaksi['no_transaksi'];
                $transaksi->metode_pembayaran = $r->transaksi['metode_pembayaran'];
                if(isset($r->transaksi['payment_date'])) $transaksi->payment_date = $r->transaksi['payment_date'];
                $transaksi->jenis_transaksi = $r->transaksi['jenis_transaksi'];
                $transaksi->amount = $r->transaksi['amount'];
                
                if(isset($r->transaksi['user_member_id'])) $transaksi->user_member_id = $r->transaksi['user_member_id'];
                
                $transaksi->status = $r->transaksi['status'];
                $transaksi->api_response_after = json_encode($r->transaksi);
                $transaksi->api_response_before = json_encode($r->transaksi_items);
                if(isset($r->transaksi['uang_tunai'])) $transaksi->uang_tunai = $r->transaksi['uang_tunai'];
                if(isset($r->transaksi['uang_tunai_change'])) $transaksi->uang_tunai_change = $r->transaksi['uang_tunai_change'];
                $transaksi->transaction_source = 1;// Kasir
                $transaksi->save();
                
                if(isset($r->transaksi['items'])){
                    foreach($r->transaksi['items'] as $k => $item){
                        $transaksi_item = new TransaksiItem();
                        $transaksi_item->transaksi_id = $transaksi->id;
                        $transaksi_item->qty = $item['qty'];
                        $transaksi_item->product_id = $item['product_id'];
                        $transaksi_item->description = $item['description'];
                        $transaksi_item->price = $item['price'];
                        $transaksi_item->total = $transaksi_item->price * $transaksi_item->qty;
                        $transaksi_item->save();
                    }
                }
            }
        }

        return response()->json(['status'=>$this->status,'message'=>$this->message], 200);
    }
}