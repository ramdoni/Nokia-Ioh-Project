<?php

namespace App\Http\Livewire\Koordinator\Iuran;


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

    public $bank_account_id,$iuran_tetap,$uang_pendaftaran,$file_konfirmasi,$payment_date;
    public $total_iuran_tetap,$total,$total_pembayaran, $total_sumbangan_tetap;

    public function render()
    {
        
        return view('livewire.Koordinator.iuran.insert');
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
            'file_konfirmasi' => 'required|image|max:1024'
        ]);
        $idMember = $data = \App\Models\UserMember::where('user_id',\Auth::user()->id)->first();
         // Iuran
        $periode = \App\Models\Iuran::where('user_member_id',$idMember->id)->where('type','Iuran')->get()->last();

        $iuran = new \App\Models\Iuran();
        $iuran->user_member_id = $idMember->id;
        $iuran->nominal = $this->total;
        $duration = '+'.($this->iuran_tetap - 1).'months';
        $iuran->from_periode = date('Y-m-d',strtotime("+1 months",strtotime($periode->to_periode)));
        $iuran->to_periode = date('Y-m-d',strtotime($duration,strtotime($iuran->from_periode)));
        //$iuran->from_periode = $this->payment_date;
        //$duration = '+'.$this->iuran_tetap.'months';
        //$iuran->to_periode = date('Y-m-d',strtotime($duration,strtotime($this->payment_date)));
        if($this->file_konfirmasi !=""){
            $namefile_konfirmasi = 'file_konfirmasi'.date('Ymdhis').'.'.$this->file_konfirmasi->extension();
            $this->file_konfirmasi->storePubliclyAs('public',$namefile_konfirmasi);
            $iuran->file = $namefile_konfirmasi;
        }
        $iuran->bank_account_id = $this->bank_account_id;
        //$iuran->payment_date = $this->payment_date;
        $iuran->type = 'Iuran';
        $iuran->status=1;
        $iuran->save();
    
        
        session()->flash('message-success',__('Data Iuran berhasil disimpan'));
        return redirect()->route('koordinator.iuran');
    }
}
