<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class JobKoperasi implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $data;
    
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->data['token'] = env('COOPZONE_TOKEN');
        $sinkron = get_setting('apps_sinkron');
        echo "Synchronize {$sinkron}\n";
        
        if($this->data['type']=='transaksi'){
            $msg  = "Transaksi kasir #{$this->data['transaksi']['no_transaksi']}";
            $msg .= "<br /> Pembayaran : ".($this->data['transaksi']['metode_pembayaran'] ? metode_pembayaran($this->data['transaksi']['metode_pembayaran']) : 'Tunai');
            $msg .= "<br /> Total : Rp. ".format_idr($this->data['transaksi']['amount']);
            event(new \App\Events\GeneralNotification($msg));
        }
        
        if($sinkron=='Off') return false;

        $response = sinkronKoperasi($this->data);
        echo "=======================================\n";
        echo "Status : ". $response->status() ."\n"; 
        if($response->status()!=200){
            echo $response->body();
        }

        foreach($this->data as $k => $v){
            if(is_array($v)){
                foreach($v as $ksub => $vsub){
                    if(is_array($vsub)){
                        foreach($vsub as $ksub2=>$vsub2){
                            echo " -- {$k}.{$ksub}.{$ksub2} : {$vsub2}\n";    
                        }
                    }else
                        echo " - {$k}.{$ksub} : {$vsub}\n";    
                }
            }else
                echo "{$k} : {$v}\n";
        }
        
        echo "=======================================\n";
    }
}
