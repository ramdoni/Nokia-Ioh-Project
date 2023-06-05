<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Asuransi;

class SantamariAsuransiCheckExpired extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'asuransi:check-expired';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'untuk pengecekan expired data asuransi';

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
        $asuransi = Asuransi::where('status',1)->get();
        foreach($asuransi as $key => $item){
            if(!empty($item->enddate)){
                $today = strtotime("today midnight");
                $expire = strtotime($item->startdate);
                if($today >= $expire){
                    $item->status = 2; // exoured
                    $item->save();

                    echo "Expired : {$item->id}\n";
                }
            }
        }

        echo "Check Expired";
    }
}
