<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Product;

class SyncLocal extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:local';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $param['token'] = env('COOPZONE_TOKEN');
        $param['url'] = '/api/get-product';
        $param['all_data'] = 1;
    
        $response = \Http::post(env('APP_URL').$param['url'], $param);

        if($response->status()==200){
            $data = json_decode($response->body());

            foreach($data->items as $k=>$item){
                $type = "Old";
                $product = Product::where('kode_produksi',$item->barcode)->first();
                if(!$product){
                    $type = "New";
                    $product = new Product();
                    $product->kode_produksi = $item->barcode;
                    $product->keterangan = $item->keterangan;
                    $product->harga_jual = $item->harga_number;
                    $product->qty = $item->qty;
                    $product->save();

                    echo "Product : {$product->keterangan}\n";
                }

                if($type=='New'){
                    $msg  ="Synchronize Product {$type}<br />";
                    $msg .= "Kode Produksi : ". $product->kode_produksi ." ". $product->keterangan ."<br />";
                    $msg .= "QTY : ". $product->qty."<br />";
                    $msg .= "Harga Jual : ". format_idr($product->harga_jual)."<br />";
                    event(new \App\Events\GeneralNotification($msg));
                }
            }
        }
    }
}
