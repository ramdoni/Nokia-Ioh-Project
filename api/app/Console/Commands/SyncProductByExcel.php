<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Product;
use App\Models\Transaksi;
use App\Models\TransaksiItem;

class SyncProductByExcel extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:product-excel';

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
        foreach(Transaksi::whereNull('is_migrate')->get() as $item){
            echo "No Transaksi : {$item->no_transaksi}\n";
            TransaksiItem::where('transaksi_id',$item->id)->delete();
            $item->delete();
        }
        return;


        // $product = Product::where('keterangan','ALK POWER BANK ROBOT RT180')->first();
        // echo "{$product->keterangan}\n";
        // return;
        ini_set('memory_limit', '-1');

        $inputFileName = './public/sto.xlsx';
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($inputFileName);
        $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, false, true);

        $arr = [];
        $key=0;
        $num=0;
        foreach($sheetData as $k =>$item){
            $num++;
            if($num<=1) continue;
            
            // preg_match('/\\s+(.*)\s+/', $item['D'], $name);
            // if(!isset($name[1])) continue;

            $name = trim($item['D']);
            $price = replace_idr($item['E']);
            $item_code = $item['C'];
            $product = Product::where('keterangan','LIKE',$name)->first();
            if(!$product){
                $this->info("{$k}. SKIP :{$item_code} - ".$name);
                continue;
            }

            $product->harga = $price;
            $product->harga_jual = $price;
            $product->save();

            echo $k .'.'. $item_code."/".$name ."\n";
        }
    }
}
