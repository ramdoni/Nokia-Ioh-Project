<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SyncCoopzone implements ShouldQueue
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

        $response = sinkronCoopzone($this->data);
        echo "=======================================\n";
        echo "Response : ";
        
        if($response->status()==200){
            $response = json_decode($response->body());
            echo "Status : {$response->status}\n";
        }

        foreach($this->data as $k => $v){
            if(is_array($v)){
                foreach($v as $ksub => $vsub){
                    echo "{$k}.{$ksub} : {$vsub}\n";    
                }
            }else
                echo "{$k} : {$v}\n";
        }
        
        echo "=======================================\n";
    }
}
