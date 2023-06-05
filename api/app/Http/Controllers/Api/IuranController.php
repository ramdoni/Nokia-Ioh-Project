<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Iuran;
use App\Models\UserMember;
use App\Models\BankAccount;

class IuranController extends Controller
{
    public function getLast()
    {
        $temp = Iuran::where('user_member_id',\Auth::user()->member->id)->orderBy('id','DESC')->paginate(30);
        $data = [];
        foreach($temp as $k => $item){
            $data[$k]['id'] = $item->id;
            $data[$k]['tahun'] = $item->tahun;
            $data[$k]['nominal'] = format_idr($item->nominal);
            $data[$k]['periode'] = date("F", mktime(0, 0, 0, $item->bulan, 10)) ." ". $item->tahun; 
            $data[$k]['payment_date'] = date('d-M-Y',strtotime($item->payment_date));
            $data[$k]['payment_type'] = $item->file ? "Transfer" : "Tunai"; 
            $data[$k]['payment_status'] = $item->status; 
        } 
        return response()->json(['status'=>200,'message'=>'success','data'=>$data], 200);
    }

    public function iuran()
    {
        $temp = Iuran::where('user_member_id',\Auth::user()->member->id)->paginate(50);
        $data = [];
        foreach($temp as $k => $item){
            $data[$k]['id'] = $item->id;
            $data[$k]['periode'] = date("F", mktime(0, 0, 0, $item->bulan, 10)) ." ". $item->tahun; 
            $data[$k]['payment_date'] = date('d-F-Y',strtotime($item->payment_date));
            $data[$k]['payment_type'] = $item->file ? "Transfer" : "Tunai"; 
            $data[$k]['payment_status'] = $item->status; 
        }

        return response(['status'=>200,'message'=>'success','data'=>$data], 200);
    }

    public function store(Request $r)
    {
        $validator = \Validator::make($r->all(), [
            'bank_account_id'=> 'required',
            'iuran_tetap'=> 'required',
            'file_konfirmasi' => 'required|image|max:1024'
        ]);
      
        if ($validator->fails()) {
            $msg = '';
            foreach ($validator->errors()->getMessages() as $key => $value) {
                $msg .= $value[0]."\n";
            }
            return response()->json(['status'=>'failed','message'=>$msg], 200);
        }

        $idMember = $data = UserMember::where('user_id',\Auth::user()->id)->first();
         // Iuran
        $periode = Iuran::where('user_member_id',$idMember->id)->where('type','Iuran')->get()->last();
        
        $tahun = $periode->tahun?$periode->tahun: date('Y');
        $bulan = isset($periode->bulan) ? $periode->bulan : 0;
        for($count=1;$r->iuran_tetap>=$count;$count++){
            $bulan++;
            if(isset($periode->tahun)){
                if($bulan>12){ // jika sudah melebihi 12 bulan maka balik ke bulan ke 1 tapi tahun bertambah
                    $bulan = 1;
                    $tahun++;
                }
            }

            $iuran = new Iuran();
            $iuran->user_member_id = $idMember->id;
            $iuran->nominal = 10000;
            $duration = '+'.($r->iuran_tetap - 1).'months';

            $iuran->from_periode = isset($periode->to_periode) ?  date('Y-m-d',strtotime("+1 months",strtotime($periode->to_periode))) : date('Y-m-d',strtotime("+1 months"));
            $iuran->to_periode = isset($periode->to_periode) ? date('Y-m-d',strtotime($duration,strtotime($iuran->from_periode))) : date('Y-m-d',strtotime($duration));

            if($r->file_konfirmasi !=""){
                $namefile_konfirmasi = 'file_konfirmasi'.date('Ymdhis').'.'.$r->file_konfirmasi->extension();
                $r->file_konfirmasi->storePubliclyAs('public',$namefile_konfirmasi);
                $iuran->file = $namefile_konfirmasi;
            }
            $iuran->bank_account_id = $r->bank_account_id;
            $iuran->payment_date = $r->payment_date;
            $iuran->type = 'Iuran';
            $iuran->status=1;
            $iuran->tahun = $tahun;
            $iuran->bulan = $bulan;
            if($r->device) $iuran->device = json_encode($r->device);
            $iuran->save();
        }

        // $total = $r->iuran_tetap * 10000;
        // $iuran = new Iuran();
        // $iuran->user_member_id = $idMember->id;
        // $iuran->nominal = $total;
        // $duration = '+'.($r->iuran_tetap - 1).'months';
        // $iuran->from_periode = date('Y-m-d',strtotime("+1 months",strtotime($periode->to_periode)));
        // $iuran->to_periode = date('Y-m-d',strtotime($duration,strtotime($iuran->from_periode)));
        // if($r->file_konfirmasi !=""){
        //     $namefile_konfirmasi = 'file_konfirmasi'.date('Ymdhis').'.'.$r->file_konfirmasi->extension();
        //     $r->file_konfirmasi->storePubliclyAs('public',$namefile_konfirmasi);
        //     $iuran->file = $namefile_konfirmasi;
        // }
        // $iuran->bank_account_id = $r->bank_account_id;
        // $iuran->type = 'Iuran';
        // $iuran->status=1;
        // $iuran->save();

        return response(['status'=>'success'], 200);
    }

    public function get_bank()
    {
        return response(['status'=>200,'message'=>'success','data'=>BankAccount::get()], 200);
    }
}