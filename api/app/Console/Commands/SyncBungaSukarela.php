<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\UserMember;
use App\Models\Simpanan;
use App\Models\JenisSimpanan;

class SyncBungaSukarela extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:bunga-sukarela';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sinkron bunga sukarela perbulan yang didapat oleh anggota';

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
        $member = UserMember::get();

        /**
         * Perhitungan persentase 
         */
        $jenis_simpanan = JenisSimpanan::get();
        foreach($member as $item){
            echo "========================================\n";
            $this->info("Anggota : {$item->no_anggota_platinum} / {$item->name}");
            foreach($jenis_simpanan as $simpanan){
                $amount = Simpanan::where(['user_member_id'=>$item->id,'jenis_simpanan_id'=> $simpanan->id])->sum('amount');
                $this->info("{$simpanan->name} : {$amount}");
                if($simpanan->id==3){
                    if($amount>0){
                        $amount = ((get_setting('bunga_pertahun_simpanan_sukarela') / 100) * $amount ) / 12;
                        Simpanan::create([
                            'no_transaksi' => $simpanan->id.date('my').str_pad((Simpanan::count()+1),4, '0', STR_PAD_LEFT),
                            'user_member_id' => $item->id,
                            'jenis_simpanan_id' => $simpanan->id,
                            'amount' => $amount,
                            'status' => 1,
                            'payment_date' => date('Y-m-d'), 
                            'description' => 'Bunga simpanan sukarela '. get_setting('bunga_pertahun_simpanan_sukarela') ."% pertahun"
                        ]);
                    }
                }
            }
            echo "\n\n";
        }
    }
}
