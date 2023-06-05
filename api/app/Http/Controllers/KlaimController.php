<?php

namespace App\Http\Controllers;

use App\Models\Klaim;
use App\Models\UserMember;
use App\Models\Asuransi;

class KlaimController extends Controller
{
    public function fppma(UserMember $member)
    {
        $klaim = Klaim::where('user_member_id',$member->id)->first();
        $asuransi = Asuransi::where('user_member_id',$member->id)->first();
        $pdf = \App::make('dompdf.wrapper');
        
        $pdf->loadView('livewire.klaim.fppma',['member'=>$member,'klaim'=>$klaim,'asuransi'=>$asuransi]);

        return $pdf->stream();
    }
}
