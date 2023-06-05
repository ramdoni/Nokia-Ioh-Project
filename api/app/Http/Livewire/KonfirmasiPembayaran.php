<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;

class KonfirmasiPembayaran extends Component
{
	use WithFileUploads;
    public $form_no,$is_success=false,$data,$bank_account_id,$file;
    public function render()
    {
        return view('livewire.konfirmasi-pembayaran')
        ->layout('layouts.auth');
    }
    public function mount()
    {
        $this->form_no = $_GET['s'];
        $this->data = \App\Models\UserMember::where('no_form',$this->form_no)->first();
    }
    public function save()
    {
        $this->validate([
            'bank_account_id'=>'required',
            'file'=>'required|image:max:1024',
        ]);
        
        $file = 'file_konfirmasi'.date('Ymdhis').'.'.$this->file->extension();
        $this->file->storePubliclyAs('public',$file);
        $this->data->file_konfirmasi = $file;
        $this->data->tanggal_konfirmasi = date("Y-m-d");
        $this->data->bank_account_id = $this->bank_account_id;
        $this->data->save();

        $this->is_success=true;
    }
}
