<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Product;

class SyncProduct extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:product';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sinkron produk koperasi ke coopzone';

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
        foreach(Product::whereNotNull('kode_produksi')->get() as $item){
            echo "Barcode : {$item->kode_produksi}\n";
            echo "Product : {$item->keterangan}\n";
            $response = sinkronCoopzone([
                'url'=>'koperasi/product/sync',
                'data'=>[
                    'kode_produksi'=>$item->kode_produksi,
                    'keterangan'=>$item->keterangan,
                    'qty'=>$item->qty,
                    'harga_jual'=>$item->harga_jual,
                    'harga'=>$item->harga
                ]
            ]);
            
            echo "Status : ". $response->status()."\n-----------------------------------\n\n";
        }
    }
}
