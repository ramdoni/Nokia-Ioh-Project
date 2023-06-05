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

class Insert extends Component
{
    use WithFileUploads;

    public $user_member_id, $bank_account_id,$iuran_tetap,$uang_pendaftaran,$file_konfirmasi,$payment_date;
    public $total_iuran_tetap,$total,$total_pembayaran, $total_sumbangan_tetap;
    public $dataUser,$check_id,$checked_users=[];

    protected $listeners = ['show-insert-iuran'=>'modalInsertIuran'];

    public function render()
    {
        $dataMember = \App\Models\UserMember::where('user_id',\Auth::user()->id)->first();
        $this->dataUser = \App\Models\UserMember::orderBy('id','desc')->where('koordinator_id',$dataMember->id)->get();
        return view('livewire.koordinator.iuranmember.insert');
    }

    public function mount(){}
    public function modalInsertIuran($check_id)
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
        $this->total_iuran_tetap = $this->iuran_tetap * 8000;
        $this->total_sumbangan_tetap = $this->iuran_tetap * 2000;
        $this->total = $this->total_iuran_tetap + $this->total_sumbangan_tetap;
    }
     public function save()
    { 
        $this->validate([
            'bank_account_id'=> 'required',
            'iuran_tetap'=> 'required',
        ]);

        foreach($this->check_id as $k => $user_member_id){

            $periode = \App\Models\Iuran::where('user_member_id',$user_member_id)->where('type','Iuran')->get()->last();
            
            $tahun = date('Y');
            $bulan = $periode->bulan?$periode->bulan : 0;
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
                $iuran->nominal = $this->total;
                $duration = '+'.($this->iuran_tetap - 1).'months';

                $iuran->from_periode = isset($periode->to_periode) ?  date('Y-m-d',strtotime("+1 months",strtotime($periode->to_periode))) : date('Y-m-d',strtotime("+1 months"));
                $iuran->to_periode = isset($periode->to_periode) ? date('Y-m-d',strtotime($duration,strtotime($iuran->from_periode))) : date('Y-m-d',strtotime($duration));
                if($this->file_konfirmasi !=""){
                    $namefile_konfirmasi = 'file_konfirmasi'.date('Ymdhis').'.'.$this->file_konfirmasi->extension();
                    $this->file_konfirmasi->storePubliclyAs('public',$namefile_konfirmasi);
                    $iuran->file = $namefile_konfirmasi;
                }
                $iuran->bank_account_id = $this->bank_account_id;
                $iuran->type = 'Iuran';
                $iuran->status = 1;
                $iuran->tahun = $tahun;
                $iuran->bulan = $bulan;
                $iuran->save();
            }
        }

        session()->flash('message-success',__('Data Iuran berhasil disimpan'));
        return redirect()->route('koordinator.iuranmember');
    }
}
