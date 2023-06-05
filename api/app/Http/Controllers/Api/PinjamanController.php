<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserMember;
use App\Models\Transaksi;
use App\Models\Pinjaman;
use App\Models\PinjamanItem;

use Illuminate\Http\Request;

class PinjamanController extends Controller
{
    public function kuota()
    {
        $member = \Auth::user()->member;
        $data['kuota'] = format_idr($member->plafond);
        $data['kuota_digunakan'] = format_idr($member->plafond_digunakan);
        $data['kuota_sisa'] =  format_idr($member->plafond - $member->plafond_digunakan);
        
        return response()->json(['status'=>200,'message'=>'success','data'=>$data], 200);
    }

    public function store(Request $r)
    {
        $validator = \Validator::make($r->all(), [
            'transaction_id'=> 'required',
            'no_anggota'=> 'required',
            'token'=>'required',
            'pinjaman'=>'required',
            'angsuran'=>'required',
            'jenis_pinjaman_id'=>'required',
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

        $data = new Pinjaman();
        $data->no_pengajuan = $r->no_pengajuan;
        $data->user_member_id = $member->id;
        $data->amount = $r->pinjaman;
        $data->angsuran = $r->angsuran;
        $data->angsuran_perbulan = $r->angsuran_perbulan;
        $data->jasa_persen = $r->jasa;
        $data->jasa = $r->jasa_nominal;
        $data->jenis_pinjaman_id = $r->jenis_pinjaman_id;
        $data->platform_fee = $r->platform_fee;
        $data->proteksi_pinjaman = $r->proteksi_pinjaman;
        $data->save();

        $transaksi = new Transaksi();
        $transaksi->no_transaksi = "P".date('my').$member->id.str_pad((Transaksi::count()+1),4, '0', STR_PAD_LEFT);
        $transaksi->user_member_id = $member->id;
        $transaksi->amount = $r->pinjaman;
        $transaksi->name = $r->description;
        $transaksi->save();

        $pembiayaan = $r->pinjaman;

        $jasa = round(($r->jasa*2)/24,2);
        
        for($num=0;$num<$r->angsuran;$num++){
            $pembiayaan -= $r->pinjaman / $r->angsuran;
            $item = new PinjamanItem();
            $item->pinjaman_id = $data->id;
            $item->bulan = date('Y-m-d',strtotime("+".($num+1)."month"));
            $item->angsuran_ke = $num+1;
            $item->angsuran_nominal = $r->pinjaman / $r->angsuran;
            $item->jasa = round($jasa,2);
            $item->jasa_nominal = $r->pinjaman * $jasa / 100;
            $item->tagihan = $item->jasa_nominal + $item->angsuran_nominal;
            $item->save();

            $data->total = $item->tagihan; 
        }
        
        $data->save();

        return response()->json(['status'=>1,'message'=>'success'], 200);
    }
}
