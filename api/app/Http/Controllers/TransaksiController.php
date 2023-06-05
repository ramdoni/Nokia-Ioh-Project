<?php

namespace App\Http\Controllers;

use App\Models\Transaksi;
use App\Models\Product;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class TransaksiController extends Controller
{
    public function cetakStruk(Transaksi $data)
    {   
        $pdf = \App::make('dompdf.wrapper');
        
        QrCode::format('png')->size(400)->generate('https://play.google.com/store/apps/details?id=com.stalavista.coopzone_application', '../public/'.$data->id.'.png');

        $pdf->loadView('livewire.transaksi.cetak-struk',['data'=>$data]);

        return $pdf->stream();
    }

    public function cetakBarcode($no)
    {   
        $pdf = \App::make('dompdf.wrapper');
        $product = Product::where('kode_produksi',$no)->first();

        $pdf->loadView('livewire.transaksi.cetak-barcode',['no'=>$no,'product'=>$product]);

        return $pdf->stream();
    }
}
