<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;
use App\Models\Simpanan;
use App\Models\Transaksi;

class SimpananBayar extends Component
{
    public $data,$payment_date;
    protected $listeners = ['set_id'=>'set_id'];
    public function render()
    {
        return view('livewire.user-member.simpanan-bayar');
    }

    public function set_id(Simpanan $id)
    {
        $this->data = $id;
    }

    public function save()
    {
        $this->validate([
            'payment_date' => 'required'
        ]);
        $this->data->payment_date = $this->payment_date;
        $this->data->status = 1; // paid
        $this->data->save();

        // change status transaksi
        $transaksi = Transaksi::where(['transaction_table'=>'simpanan','transaction_id'=>$this->data->id])->first();
        if($transaksi){
            $transaksi->payment_date = $this->payment_date;
            $transaksi->status = 1;
            $transaksi->save();
        }

        $amount = 0;
        // Simpanan Pokok
        if($this->data->jenis_simpanan_id==1){
            $this->data->anggota->simpanan_pokok = $this->data->anggota->simpanan_pokok + $this->data->amount; 
            $this->data->anggota->save();
            $amount = $this->data->anggota->simpanan_pokok;
        }
        // Simpanan wajib
        if($this->data->jenis_simpanan_id==2){
            $this->data->anggota->simpanan_wajib = $this->data->anggota->simpanan_wajib + $this->data->amount; 
            $this->data->anggota->save();
            $amount = $this->data->anggota->simpanan_wajib;
        }
        // Simpanan sukarela
        if($this->data->jenis_simpanan_id==3){
            $this->data->anggota->simpanan_sukarela = $this->data->anggota->simpanan_sukarela + $this->data->amount; 
            $this->data->anggota->save();
            $amount = $this->data->anggota->simpanan_sukarela;
        }
        // Simpanan lain-lain
        if($this->data->jenis_simpanan_id==4){
            $this->data->anggota->simpanan_lain_lain = $this->data->anggota->simpanan_lain_lain + $this->data->amount; 
            $this->data->anggota->save();
            $amount = $this->data->anggota->simpanan_lain_lain;
        }

        $message = 'Pembayaran '.$this->data->jenis_simpanan->name.' berhasil kami terima. saldo '.$this->data->jenis_simpanan->name .' saat ini Rp. '.format_idr($amount);

        if(isset($this->data->anggota->device_token)){
            push_notification_android($this->data->anggota->device_token,$this->data->jenis_simpanan->name,$message,1);
        }

        $this->emit('reload');
        $this->reset(['payment_date']);
    }
}
