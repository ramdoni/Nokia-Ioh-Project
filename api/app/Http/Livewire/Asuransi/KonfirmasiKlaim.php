<?php

namespace App\Http\Livewire\Asuransi;

use Livewire\Component;
use App\Models\Asuransi;

class KonfirmasiKlaim extends Component
{
    protected $listeners = ['modal-pengajuan-klaim'=>'modal_pengajuan_klaim']; 
    public $data;

    public function render()
    {
        return view('livewire.asuransi.konfirmasi-klaim');
    }

    public function modal_pengajuan_klaim(Asuransi $data)
    {
        $this->data = $data;
    }

    public function save()
    {
        $this->data->status = 3; // status rubah jadi klaim
        $this->data->tanggal_klaim = date('Y-m-d');
        $this->data->save();

        session()->flash('message-success',__('Pengajuan klaim berhasil dilakukan.'));

        return redirect()->route('asuransi.index');
    }
}
