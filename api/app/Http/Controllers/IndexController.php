<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function backtoadmin()
    {
        if(\Session::get('is_login_administrator'))
        {
            \Auth::loginUsingId(\Session::get('is_id'));

            return redirect('/')->with('message-success', 'Welcome Back Administrator');
        }
    }

    public function cetaktagihan($id,$tahun)
    {
        $pdf = \App::make('dompdf.wrapper');
        $data = \App\Models\Iuran::find($id);
        $pdf->loadView('livewire.iuran.cetak-tagihan',['data'=>$data]);
        return $pdf->stream();
    }
}
