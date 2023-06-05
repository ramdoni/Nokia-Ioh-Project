<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserMember;

class AjaxController extends Controller
{
    protected $respon;

    public function getMember(Request $request)
    {
        $params = [];
        if($request->ajax())
        {
            $user = \Auth::user();
            $data =  UserMember::where('name', 'LIKE', "%". $request->name . "%")->orWhere('Id_Ktp', 'LIKE', '%'. $request->name .'%')->get();

            foreach($data as $k => $item)
            {
                if($k >= 10) continue;

                $params[$k]['id'] = $item->id;
                $params[$k]['value'] = $item->Id_Ktp .' - '. $item->name;
            }
        }
        return response()->json($params);
    }
}
