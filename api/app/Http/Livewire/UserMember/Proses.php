<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;
use App\Models\UangPendaftaran;

class Proses extends Component
{
    public $data;

    protected $listeners = ['event-approve'=>'approve','event-reject'=>'reject'];

    public function render()
    {
        return view('livewire.user-member.proses');
    }
    public function mount($id)
    {
        $this->data = \App\Models\UserMember::find($id);
    }
    public function approve()
    {
        $this->data->status_pembayaran=1;
        $this->data->admin_approval = 1;
        $this->data->save();

        // Iuran
        $bulan = date('m',strtotime($this->data->tanggal_konfirmasi));
        $tahun = date('Y',strtotime($this->data->tanggal_konfirmasi));
        for($count=1;$this->data->iuran_tetap>=$count;$count++){
            if($bulan>12){ // jika sudah melebihi 12 bulan maka balik ke bulan ke 1 tapi tahun bertambah
                $bulan = 1;
                $tahun++;
            }
            
            $iuran = new \App\Models\Iuran();
            $iuran->user_member_id = $this->data->id;
            $iuran->type = 'Iuran';
            $iuran->nominal = $this->data->total_iuran_tetap;
            $iuran->from_periode = date('Y-m-d',strtotime("+".($this->data->iuran_tetap-1)." months",strtotime($this->data->tanggal_konfirmasi))); 
            $iuran->to_periode = date('Y-m-d',strtotime("-0 months",strtotime($this->data->tanggal_konfirmasi)));
            $iuran->bank_account_id = $this->data->bank_account_id;
            $iuran->file = $this->data->file_konfirmasi; 
            $iuran->payment_date = date('Y-m-d',strtotime($this->data->tanggal_konfirmasi));
            $iuran->status = 2;
            $iuran->bulan = $bulan;
            $iuran->tahun = $tahun;
            $iuran->iuran_pertama = 1;
            $iuran->save();
            $bulan++;
        }

        if($this->data->phone_number){
            $messageWa = 'Selamat, data anda berhasil di ditambahkan di Yayasan Kematian Santa Maria';
            sendNotifWa($messageWa, $this->data->phone_number);
        }

        session()->flash('message-success',__('Data dengan No Form : '. $this->data->no_form .' berhasil di Konfirmasi'));
        return redirect()->to('user-member');
    }
    
    public function reject()
    {
        $this->data->status_pembayaran=2;
        $this->data->save();
        
        if($this->data->phone_number){
            $messageWa = 'Mohon maaf, pengajuan keanggotaan Yayasan Kematian Santa Maria anda ditolak.';
            sendNotifWa($messageWa, $this->data->phone_number);
        }

        session()->flash('message-success',__('Data dengan No Form : '. $this->data->no_form .' berhasil di Reject'));
        return redirect()->to('user-member');
    }
}
