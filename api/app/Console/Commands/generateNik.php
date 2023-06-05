<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\UserMember;
use App\Models\User;

class generateNik extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:nik';

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
        $user = User::get();
        foreach($user as $item){
            $member = UserMember::where('user_id',$item->id)->first();
            if($member){
                $member->no_anggota_platinum = $item->nik;
                $member->save();
                echo "NIK : {$item->nik}\n";
            }
        }
    }
}
