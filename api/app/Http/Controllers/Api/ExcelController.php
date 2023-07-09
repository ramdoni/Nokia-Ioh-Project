<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ExcelRows;

class ExcelController extends Controller
{
    public function store(Request $r)
    {
        // $find = ExcelRows::where()->first();
        
        $r = json_decode($r->getContent());

        foreach($r as $items){
            foreach($items as $key => $value){
                $find = ExcelRows::where(['row'=>$key])->first();
                if(!$find) $find = new ExcelRows();

                $find->row = $key;
                $find->value = $value;
                $find->save();
            }
        }

        return response()->json(['status'=>200,'message'=>'success','request'=>$r], 200);
    }
}