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

class Insert extends Component
{
    use WithFileUploads;

    public $user_member_id, $bank_account_id,$iuran_tetap,$uang_pendaftaran,$file_konfirmasi,$payment_date,$check_id,$checked_users=[];
    public $total_iuran_tetap,$total,$total_pembayaran, $total_sumbangan_tetap;

    protected $listeners = ['show-insert-iuran'=>'showInsertIuran'];

    public function render()
    {
        return view('livewire.iuran.insert');
    }

    public function mount()
    {
        // $this->payment_date = date('Y-m-d');
    }

    public function showInsertIuran($check_id)
    {
        $this->check_id = $check_id;
        $this->checked_users = UserMember::whereIn('id',$this->check_id)->get();
    }

    public function updatedFile_konfirmasi()
    { 
        $this->validate([
            'file_konfirmasi' => 'image|max:1024',
        ]);
    }
    public function calculate_()
    {
        // $this->total_iuran_tetap = $this->iuran_tetap * 8000;
        // $this->total_sumbangan_tetap = $this->iuran_tetap * 2000;
        // $this->total = $this->total_iuran_tetap + $this->total_sumbangan_tetap;

        $this->total_iuran_tetap = $this->iuran_tetap * 30000;
        $this->total = $this->total_iuran_tetap;
    }
     public function save()
    { 
        $this->validate([
            'bank_account_id'=> 'required',
            'iuran_tetap'=> 'required'
        ]);
        foreach($this->check_id as $k => $user_member_id){
            $periode = \App\Models\Iuran::where('user_member_id',$user_member_id)->where('type','Iuran')->get()->last();
            $tahun = $periode->tahun?$periode->tahun: date('Y');

            $bulan = isset($periode->bulan) ? $periode->bulan : 0;
            for($count=1;$this->iuran_tetap>=$count;$count++){
                $bulan++;
                if(isset($periode->tahun)){
                    if($bulan>12){ // jika sudah melebihi 12 bulan maka balik ke bulan ke 1 tapi tahun bertambah
                        $bulan = 1;
                        $tahun++;
                    }
                }

                $iuran = new \App\Models\Iuran();
                $iuran->user_member_id = $user_member_id;
                $iuran->nominal = 10000;
                $duration = '+'.($this->iuran_tetap - 1).'months';

                $iuran->from_periode = isset($periode->to_periode) ?  date('Y-m-d',strtotime("+1 months",strtotime($periode->to_periode))) : date('Y-m-d',strtotime("+1 months"));
                $iuran->to_periode = isset($periode->to_periode) ? date('Y-m-d',strtotime($duration,strtotime($iuran->from_periode))) : date('Y-m-d',strtotime($duration));

                if($this->file_konfirmasi !=""){
                    $namefile_konfirmasi = 'file_konfirmasi'.date('Ymdhis').'.'.$this->file_konfirmasi->extension();
                    $this->file_konfirmasi->storePubliclyAs('public',$namefile_konfirmasi);
                    $iuran->file = $namefile_konfirmasi;
                }
                $iuran->bank_account_id = $this->bank_account_id;
                $iuran->payment_date = $this->payment_date;
                $iuran->type = 'Iuran';
                $iuran->status=2;
                $iuran->tahun = $tahun;
                $iuran->bulan = $bulan;
                $iuran->save();
            }
        }
        
        session()->flash('message-success',__('Data Iuran berhasil disimpan'));
        return redirect()->to('iuran');
    }
}
