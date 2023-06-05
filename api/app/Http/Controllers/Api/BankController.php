<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BankAccount;

class BankController extends Controller
{
    public function data()
    {
        return response()->json(['status'=>200,'message'=>'success','data'=>BankAccount::get()], 200);
    }
}