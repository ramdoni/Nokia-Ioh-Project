<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Models\UserMember;

class KonfirmasiPendaftaran extends Component
{
	use WithFileUploads;
    public $form_no,$is_success=false,$data,$bank_account_id,$file, $no_form;
    public $messageForm=0, $iuran_tetap, $sumbangan, $uang_pendaftaran, $total,$total_iuran_tetap,$total_sumbangan,$total_pembayaran;
    
    public function render()
    {
        return view('livewire.konfirmasi-pendaftaran')->layout('layouts.auth');
    }
    public function checkForm()
    {
        if(empty($this->no_form)) return false;
        $check = \App\Models\UserMember::where('no_form',$this->no_form)->first();
        if($check){
            if($check->file_konfirmasi == NULL)
            {
                 $this->messageForm = 1;
                 $this->iuran_tetap = $check->iuran_tetap;
                 $this->sumbangan = $check->sumbangan;
                 $this->total_iuran_tetap = $check->total_iuran_tetap;
                 $this->total_sumbangan = $check->total_sumbangan;
                 $this->uang_pendaftaran = $check->uang_pendaftaran;
                 $this->total_pembayaran = $check->total_pembayaran;
            }
            elseif($check->file_konfirmasi != NULL){
                if($check->status_pembayaran == NULL || $check->status_pembayaran == 0)
                {
                    $this->messageForm = 2;
                }elseif ($check->status_pembayaran == 1) {
                    $this->messageForm = 3;
                }
            }
        }else{
            $this->messageForm=4;
        } 
    }
    
    public function save()
    {
        $data = \App\Models\UserMember::where('no_form',$this->no_form)->first();
        //dd($data);

        $this->validate([
            'bank_account_id'=>'required',
            'file'=>'required|image:max:1024',
        ]);
        
        if($this->file !=""){
            $namefile = 'file_konfirmasi'.date('Ymdhis').'.'.$this->file->extension();
            $this->file->storePubliclyAs('public',$namefile);
            $data->file_konfirmasi = $namefile;
        }
        $data->tanggal_konfirmasi = date("Y-m-d");
        $data->bank_account_id = $this->bank_account_id;
        $data->save();

        $this->is_success=true;
    }
}
