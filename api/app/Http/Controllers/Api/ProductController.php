<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function update(Request $r)
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

        $msg  ="Synchronize Product<br />";
        $msg .= "Kode Produksi : ". $r->data['kode_produksi'] ." ". $r->data['keterangan'] ."<br />";
        $msg .= "QTY : ". $r->data['qty']."<br />";
        $msg .= "Harga Jual : ". format_idr($r->data['harga_jual'])."<br />";
        event(new \App\Events\GeneralNotification($msg));
        
        if(isset($r->data['kode_produksi'])){
            $find = Product::where('kode_produksi',$r->data['kode_produksi'])->first();
            if(!$find){ $find = new Product(); }
            
            if(!isset($r->data['type'])) $find->type = 'Stock';

            $find->kode_produksi = $r->data['kode_produksi'];
            $find->keterangan = $r->data['keterangan'];
            $find->qty = $r->data['qty'];
            $find->harga = $r->data['harga'];
            $find->harga_jual = $r->data['harga_jual'];
            $find->save();
        }else{
            return response()->json(['status'=>'failed','message'=>'Kode Produksi Required'], 200);
        }
    
        return response()->json(['status'=>'success'], 200);
    }

    public function data(Request $r)
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

        $keyword = isset($_GET['search']) ? $_GET['search'] : '';

        $data = Product::orderBy('keterangan','ASC');

        if($keyword) $data->where(function($table) use($keyword){
                            $table->where('kode_produksi','LIKE',"%{$keyword}%")
                            ->orWhere('keterangan','LIKE',"%{$keyword}%");
                        });
        $items = [];
        
        if(isset($r->all_data) and $r->all_data==1)
            $data = $data->get();
        else
            $data = $data->paginate(10);

        foreach($data as $k => $item){
            $items[$k]['id'] = $item->id;
            $items[$k]['keterangan'] = $item->keterangan;
            $items[$k]['text'] = $item->kode_produksi .' / '. $item->keterangan;
            $items[$k]['harga'] = format_idr($item->harga_jual);
            $items[$k]['harga_number'] = $item->harga_jual;
            $items[$k]['barcode'] = $item->kode_produksi;
            $items[$k]['qty'] = $item->qty;
        }

        return response()->json(['message'=>'success','items'=>$items,'total_count'=>count($items)], 200);
    }
}