<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pinjaman;

class TagihanController extends Controller
{
    public function tagihanTunai()
    {
        $temp = Pinjaman::where('user_member_id',\Auth::user()->member->id)->orderBy('id','DESC')->first();
        
        $num=0;
        $data[$num]['id'] = "";
        $num++;
        foreach($temp->items->where('status',0) as $k => $item){
            $data[$num]['id'] = $item->id;
            $data[$num]['bulan'] = date('d M Y',strtotime($item->bulan));
            $data[$num]['tagihan'] = format_idr($item->tagihan);
            $data[$num]['bulan_name'] = date('M',strtotime($item->bulan));
            $num++;
        } 
        
        $num=0;
        $data_belum_lunas[$num]['tahun'] = date('Y');
        $num++;
        foreach($temp->items->where('status',1) as $k => $item){
            $data_belum_lunas[$num]['id'] = $item->id;
            $data_belum_lunas[$num]['bulan'] = date('d M Y',strtotime($item->bulan));
            $data_belum_lunas[$num]['tagihan'] = format_idr($item->tagihan);
            $data_belum_lunas[$num]['bulan_name'] = date('M',strtotime($item->bulan));
            $num++;
        } 

        return response()->json(['status'=>200,'message'=>'success','data_lunas'=>$data,'data_belum_lunas'=>$data_belum_lunas], 200);
    }

    public function tagihanFirst()
    {
        $temp = Pinjaman::where('user_member_id',\Auth::user()->member->id)->orderBy('id','DESC')->first();
        
        $data = [];
        foreach($temp->items->where('status',0) as $k => $item){
            $data['id'] = $item->id;
            $data['bulan'] = date('d M Y',strtotime($item->bulan));
            $data['tagihan'] = format_idr($item->tagihan);
            $data['bulan_name'] = date('M',strtotime($item->bulan));
        } 
        
        return response()->json(['status'=>200,'message'=>'success','data'=>$data], 200);
    }
}