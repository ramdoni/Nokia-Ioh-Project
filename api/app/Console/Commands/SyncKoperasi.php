<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Product;
use App\Models\UserMember;

class SyncKoperasi extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:koperasi';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sinkron produk koperasi online';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        echo "Product Sinkron\n\n";
        foreach(Product::whereDate('updated_at',date('Y-m-d'))->get() as $item){
            echo "Barcode : {$item->kode_produksi}\n";
            echo "Product : {$item->keterangan}\n";
            $response = sinkronKoperasi([
                'type'=>'product',
                'products'=>[
                    'kode_produksi'=>$item->kode_produksi,
                    'keterangan'=>$item->keterangan,
                    'qty'=>$item->qty,
                    'harga_jual'=>$item->harga_jual,
                    'harga'=>$item->harga
                ]
            ]);
            
            echo "Status : ". $response->status()."\n-----------------------------------\n";
        }

        echo "Anggota Sinkron";
        foreach(UserMember::whereDate('updated_at',date('Y-m-d'))->get() as $item){
            echo "No Anggota : {$item->no_anggota_platinum}\n";
            echo "Name : {$item->name}\n";
            $response = sinkronKoperasi([
                'type'=>'anggota',
                'anggotas'=>[
                    'no_anggota_platinum'=>$item->no_anggota_platinum,
                    'name'=>$item->name,
                    'plafond'=>$item->plafond,
                    'plafond_digunakan'=>$item->plafond_digunakan,
                ]
            ]);
            
            echo "Status : ". $response->status()."\n-----------------------------------\n";
        }
    }
}
