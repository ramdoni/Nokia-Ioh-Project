<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CekDouble extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cekdouble';

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
        $user_member = \App\Models\UserMember::whereNull('tanggal_diterima')->get();
        $num = 0;
        foreach($user_member as $item){
            // find double
            $find = \App\Models\UserMember::where('no_anggota_platinum',$item->no_anggota_platinum)->whereNotNull('tanggal_diterima')->first();
            echo "Find No Anggota : ".$item->no_anggota_platinum;
            if($find) {
                $this->error("Deleted");
                $num++;
                $user = \App\Models\User::find($item->user_id);
                if($user) $user->delete();
                $item->delete();
            }else $this->comment("Skip");
            echo "\n";
        }

        echo "Total deleted : ". $this->error($num) ."\n";
        
        return Command::SUCCESS;
    }
}
