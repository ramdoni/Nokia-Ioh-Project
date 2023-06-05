<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;
use Livewire\WithFileUploads;
use App\Models\UserMember;
use App\Models\Klaim as KlaimModel;

class Klaim extends Component
{
	use WithFileUploads;

    public $data;
    public $name,$tanggal_diterima,$masa_tenggang,$santunan_pelayanan,$santunan_uang_duka,$total,$city, $totalKlaim;
	public $tgl_kematian,$foto_ktp_kk_meninggal,$ktp_ahliwaris,$surat_kematian,$foto_kta;
	public $tgl_pengajuan,$is_approve_ketua,$tgl_approve_ketua,$is_finish,$sebab_meninggal,$tempat_meninggal,$sakit_apa_dan_sejak_kapan,$gambaran_singkat;
    public $persen;
    public $city_other, $city_lainnya,$lama_keanggotaan,$form_no;
    public function render()
    {
        return view('livewire.user-member.klaim');
    }
    public function mount($id)
    {
        $this->data = UserMember::find($id);
        $this->name = $this->data->name;
        $this->tanggal_diterima = $this->data->tanggal_diterima;
        $this->masa_tenggang = $this->data->masa_tenggang;
        $this->city =  isset($this->data->kota->name) ? $this->data->kota->name : '';
        $this->city_other = $this->data->city;
        $this->city_lainnya = $this->data->city_lainnya;
        $this->form_no = (KlaimModel::count()+1)."/CL/YSSM/".getRomawi(date('n')).'/'.date('y');

        $bulan = hitung_masa_klaim($this->data->tanggal_diterima,'m');
        $tahun = hitung_masa_klaim($this->data->tanggal_diterima);
        $tahunKlaim = ($tahun !=0 ? $tahun * 12 : 0) + $bulan;

        if($tahunKlaim>12)
            $this->lama_keanggotaan = $tahun  .'Tahun '. $bulan." Bulan";
        else 
            $this->lama_keanggotaan = $tahunKlaim ." Bulan";
        
        if($this->data->city =='KTS')
        {
            if($tahunKlaim >=6 and $tahunKlaim <=12){
                $this->santunan_pelayanan = (get_setting('santunan_pelayanan_in_semarang') + get_setting('santunan_uang_duka_in_semarang'))  * 0.25;
                $this->santunan_uang_duka = 0;
                $this->persen = 25;
            }elseif($tahunKlaim >12 and $tahunKlaim <=24){
                $this->santunan_pelayanan = (get_setting('santunan_pelayanan_in_semarang') + get_setting('santunan_uang_duka_in_semarang'))  * 0.5;
                $this->santunan_uang_duka = 0;
                $this->persen = 50;
            }elseif($tahunKlaim >24){
                $this->santunan_pelayanan = get_setting('santunan_pelayanan_in_semarang');
                $this->santunan_uang_duka = get_setting('santunan_uang_duka_in_semarang');
                $this->persen = 100;
            }

            $this->total = $this->santunan_pelayanan + $this->santunan_uang_duka;

        }elseif($this->data->city =='OTHER'){
            $this->santunan_pelayanan = 0;
            $this->santunan_uang_duka = 0;
            $this->total = 0;
            $this->persen = 0;
        }else{
           
            if($tahunKlaim >=6 and $tahunKlaim <=12){
                $this->santunan_pelayanan = (get_setting('santunan_pelayanan_out_semarang') + get_setting('santunan_uang_duka_out_semarang'))  * 0.25;
                $this->santunan_uang_duka = 0;
                $this->persen = 25;
            }elseif($tahunKlaim >12 and $tahunKlaim <=24){
                $this->santunan_pelayanan = (get_setting('santunan_pelayanan_out_semarang') + get_setting('santunan_uang_duka_out_semarang'))  * 0.5;
                $this->santunan_uang_duka = 0;
                $this->persen = 50;
            }elseif($tahunKlaim >24){
                $this->santunan_pelayanan = get_setting('santunan_pelayanan_out_semarang');
                $this->santunan_uang_duka = get_setting('santunan_uang_duka_out_semarang');
                $this->persen = 100;
            }

            $this->total = $this->santunan_pelayanan + $this->santunan_uang_duka;
        }
    }
    
    public function save()
    { 
        $this->validate([
            'tgl_kematian'=> 'required',
            'surat_kematian' => 'required|image|max:1024',
            'foto_kta' => 'required|image|max:1024',
            'tempat_meninggal' => 'required',
            'sebab_meninggal' => 'required'
        ]);

        $klaim = new KlaimModel();
        $klaim->form_no = $this->form_no;
        $klaim->user_member_id  = $this->data->id;
        $klaim->santunan_pelayanan  = replace_idr($this->santunan_pelayanan);
        $klaim->santunan_uang_duka  = replace_idr($this->santunan_uang_duka);
        $klaim->total  = replace_idr($this->total);
        $klaim->tgl_kematian  = $this->tgl_kematian;
        $klaim->total_klaim = $this->total;
        $klaim->tempat_meninggal = $this->tempat_meninggal;
        $klaim->sebab_meninggal = $this->sebab_meninggal;
        $klaim->sakit_apa_dan_sejak_kapan = $this->sakit_apa_dan_sejak_kapan;
        $klaim->gambaran_singkat = $this->gambaran_singkat;
        $klaim->persen = $this->persen;

        if($this->ktp_ahliwaris!=""){
            $namektpwaris = 'ktp_ahliwaris'.date('Ymdhis').'.'.$this->ktp_ahliwaris->extension();
            $this->ktp_ahliwaris->storePubliclyAs('public',$namektpwaris);
            $klaim->ktp_ahliwaris = $namektpwaris;
        }
        if($this->surat_kematian!=""){
            $namesurat = 'surat_kematian'.date('Ymdhis').'.'.$this->surat_kematian->extension();
            $this->surat_kematian->storePubliclyAs('public',$namesurat);
            $klaim->surat_kematian = $namesurat;
        }
        if($this->foto_kta!=""){
            $namekta = 'foto_kta'.date('Ymdhis').'.'.$this->foto_kta->extension();
            $this->foto_kta->storePubliclyAs('public',$namekta);
            $klaim->foto_kta = $namekta;
        }

        $klaim->tgl_pengajuan  = date('Y-m-d');
        $klaim->save();

        $dataMember = UserMember::find($this->data->id);
        $dataMember->tanggal_meninggal  = $this->tgl_kematian;
        $dataMember->save();
        
        session()->flash('message-success',__('Data Klaim berhasil disubmit'));

        return redirect()->route('klaim.edit',$klaim->id);
    }
}
