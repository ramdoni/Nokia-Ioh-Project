<?php

namespace App\Http\Livewire\Iuran;

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
    use WithFileUploads;
    public $tahun, $keyword;
    public $user_member_id, $bank_account_id,$iuran_tetap,$uang_pendaftaran,$file_konfirmasi,$payment_date;
    public $total_iuran_tetap,$total,$total_pembayaran, $total_sumbangan_tetap;


    public function render()
    {
        $data = \App\Models\UserMember::where('user_member.status',2)->orderby('id','DESC');
        if($this->tahun) {
            $data =  $data->join('iuran','user_member.id','=','iuran.user_member_id')->where('type','Uang Pendaftaran')->whereYear('iuran.to_periode','<=',$this->tahun)->select('user_member.*');
        }
        if($this->keyword) {
            $data =  $data->Where('user_member.name','LIKE', '%'.$this->keyword.'%')->select('user_member.*');

            /*->join('iuran','user_member.id','=','iuran.user_member_id')->where('type','Uang Pendaftaran')->whereYear('iuran.to_periode','<=',$this->tahun)->select('user_member.*')->Where('user_member.name','LIKE', '%'.$this->keyword.'%');
            */
        }
        return view('livewire.iuran.cetak')->with(['data'=>$data->paginate(50)]);
    }

    public function mount()
    {
        $this->tahun = date('Y');
    }
   
}
