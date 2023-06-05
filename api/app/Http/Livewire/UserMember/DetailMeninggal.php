<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;
use App\Models\UserMember;
use App\Models\Klaim;

class DetailMeninggal extends Component
{
    public $data,$city,$city_other,$city_lainnya,$klaim,$sebab_meninggal,$tgl_kematian,$tempat_meninggal,$sakit_apa_dan_sejak_kapan,$gambaran_singkat;

    protected $listeners = ['modal-detail-meninggal'=>'initData'];
    
    public function render()
    {
        return view('livewire.user-member.detail-meninggal');
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
}
