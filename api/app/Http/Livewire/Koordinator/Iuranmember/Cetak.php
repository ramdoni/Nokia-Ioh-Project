<?php

namespace App\Http\Livewire\Koordinator\Iuranmember;

use App\Models\UserAccess;
use Illuminate\Support\Facades\Hash;
use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Models\UserMember;
use Illuminate\Support\Str;

class Cetak extends Component
{
    public $tahun;
    use WithFileUploads;

    public $user_member_id, $bank_account_id,$iuran_tetap,$uang_pendaftaran,$file_konfirmasi,$payment_date;
    public $total_iuran_tetap,$total,$total_pembayaran, $total_sumbangan_tetap;


    public function render()
    {
        $dataMember = \App\Models\UserMember::where('user_id',\Auth::user()->id)->first();
        
        $data = \App\Models\UserMember::where('user_member.status',2)->where('koordinator_id',$dataMember->id)->orderby('id','DESC');
        
        if($this->tahun) {
            $data =  $data->join('iuran','user_member.id','=','iuran.user_member_id')->where('type','Uang Pendaftaran')->whereYear('iuran.to_periode','<=',$this->tahun)->select('user_member.*');   
        }
        return view('livewire.koordinator.iuranmember.cetak')->with(['data'=>$data->paginate(50)]);

    }

    public function mount()
    {
        $this->tahun = date('Y');
    }
   
}
