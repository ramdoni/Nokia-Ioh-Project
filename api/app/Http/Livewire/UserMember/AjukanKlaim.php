<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;

use App\Models\UserMember;
use App\Models\Klaim;

class AjukanKlaim extends Component
{
    protected $listeners = ['modal-ajuan-klaim'=>'initData'];

    public $data,$city,$city_other,$city_lainnya,$klaim,$sebab_meninggal,$tgl_kematian,$tempat_meninggal,$sakit_apa_dan_sejak_kapan,$gambaran_singkat;

    public function render()
    {
        return view('livewire.user-member.ajukan-klaim');
    }

    public function initData(UserMember $data)
    {
        $this->data = $data;
        $this->city =  isset($this->data->kota->name) ? $this->data->kota->name : '';
        $this->city_other = $this->data->city;
        $this->city_lainnya = $this->data->city_lainnya;
        $this->klaim = Klaim::where('user_member_id',$this->data->id)->first();
        $this->tempat_meninggal = $this->klaim->tempat_meninggal;
        $this->tgl_kematian = $this->klaim->tgl_kematian;
        $this->sebab_meninggal = $this->klaim->sebab_meninggal;
        $this->sakit_apa_dan_sejak_kapan = $this->klaim->sakit_apa_dan_sejak_kapan;
        $this->gambaran_singkat = $this->klaim->gambaran_singkat;
    }

    public function save()
    {
        $this->klaim->status = 1;
        $this->klaim->tgl_pengajuan  = date('Y-m-d');
        $this->klaim->save();

        session()->flash('message-success',__('Pengajuan klaim berhasil dilakukan, silahkan menunggu persetujuan Ketua Yayasan.'));

        return redirect()->route('user-member.index');
    }
}
