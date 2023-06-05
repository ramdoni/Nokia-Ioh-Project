<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;
use Livewire\WithFileUploads;
use App\Models\UserMember;
use App\Models\Klaim as KlaimModel;

class KonfirmasiMeninggal extends Component
{
	use WithFileUploads;

    public $data;
    public $name,$tanggal_diterima,$masa_tenggang,$santunan_pelayanan,$santunan_uang_duka,$total,$city, $totalKlaim;
	public $tgl_kematian,$foto_ktp_kk_meninggal,$ktp_ahliwaris,$surat_kematian,$foto_kta;
	public $tgl_pengajuan,$is_approve_ketua,$tgl_approve_ketua,$is_finish,$sebab_meninggal,$tempat_meninggal,$sakit_apa_dan_sejak_kapan,$gambaran_singkat;
    public $persen;
    public $city_other, $city_lainnya,$lama_keanggotaan,$form_no,$lama_keanggotaan_string,$level_claim,$type_form,$alasan_keluar,$tanggal_keluar;

    protected $listeners = ['modal-konfirmasi-meninggal'=>'initData'];

    public function render()
    {
        return view('livewire.user-member.konfirmasi-meninggal');
    }
    
    public function initData(UserMember $data)
    {
        $this->data = $data;
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
        
        $this->lama_keanggotaan = $tahunKlaim;
        // dd($tahunKlaim);
        $this->level_claim = 0;

        if($tahunKlaim>12)
            $this->lama_keanggotaan_string = $tahun  .' Tahun '. $bulan." Bulan";
        else 
            $this->lama_keanggotaan_string = $tahunKlaim ." Bulan";
        
        // if($this->data->city =='KTS'){
        //     if($tahunKlaim >=6 and $tahunKlaim <=12){
        //         $this->santunan_pelayanan = (get_setting('santunan_pelayanan_in_semarang') + get_setting('santunan_uang_duka_in_semarang'))  * 0.25;
        //         $this->santunan_uang_duka = 0;
        //         $this->persen = 25;
        //         $this->level_claim = 1;
        //     }elseif($tahunKlaim >12 and $tahunKlaim <=24){
        //         $this->santunan_pelayanan = (get_setting('santunan_pelayanan_in_semarang') + get_setting('santunan_uang_duka_in_semarang'))  * 0.5;
        //         $this->santunan_uang_duka = 0;
        //         $this->persen = 50;
        //         $this->level_claim = 2;
        //     }elseif($tahunKlaim >24){
        //         $this->santunan_pelayanan = get_setting('santunan_pelayanan_in_semarang');
        //         $this->santunan_uang_duka = get_setting('santunan_uang_duka_in_semarang');
        //         $this->persen = 100;
        //         $this->level_claim = 3;
        //     }

        //     $this->total = $this->santunan_pelayanan + $this->santunan_uang_duka;

        // }elseif($this->data->city =='OTHER'){
        //     $this->santunan_pelayanan = 0;
        //     $this->santunan_uang_duka = 0;
        //     $this->total = 0;
        //     $this->persen = 0;
        // }else{
        
        //     if($tahunKlaim >=6 and $tahunKlaim <=12){
        //         $this->santunan_pelayanan = (get_setting('santunan_pelayanan_out_semarang') + get_setting('santunan_uang_duka_out_semarang'))  * 0.25;
        //         $this->santunan_uang_duka = 0;
        //         $this->persen = 25;
        //         $this->level_claim = 1;
        //     }elseif($tahunKlaim >12 and $tahunKlaim <=24){
        //         $this->santunan_pelayanan = (get_setting('santunan_pelayanan_out_semarang') + get_setting('santunan_uang_duka_out_semarang'))  * 0.5;
        //         $this->santunan_uang_duka = 0;
        //         $this->persen = 50;
        //         $this->level_claim = 2;
        //     }elseif($tahunKlaim >24){
        //         $this->santunan_pelayanan = get_setting('santunan_pelayanan_out_semarang');
        //         $this->santunan_uang_duka = get_setting('santunan_uang_duka_out_semarang');
        //         $this->persen = 100;
        //         $this->level_claim = 3;
        //     }

        //     $this->total = $this->santunan_pelayanan + $this->santunan_uang_duka;
        // }


        if($tahun < 1){
            if($bulan >= 6 and $bulan <= 12){
                $this->santunan_pelayanan = (get_setting('nominal_santunan'))  * 0.25;
                $this->santunan_uang_duka = 0;
                $this->persen = 25;
                $this->level_claim = 1;
            }
        }else{
            if($tahun >=1 and $tahun <= 2){
                $this->santunan_pelayanan = (get_setting('nominal_santunan'))  * 0.5;
                $this->santunan_uang_duka = 0;
                $this->persen = 50;
                $this->level_claim = 2;
            }elseif($tahun >= 3){
                $this->santunan_pelayanan = get_setting('nominal_santunan');
                $this->santunan_uang_duka = 0;
                $this->persen = 100;
                $this->level_claim = 3;
            }
        }

        // if($bulan >= 6 and $tahun < 1){
        //     $this->santunan_pelayanan = (get_setting('nominal_santunan'))  * 0.25;
        //     $this->santunan_uang_duka = 0;
        //     $this->persen = 25;
        //     $this->level_claim = 1;
        // }elseif($tahun >=1 and $tahun <= 2){
        //     $this->santunan_pelayanan = (get_setting('nominal_santunan'))  * 0.5;
        //     $this->santunan_uang_duka = 0;
        //     $this->persen = 50;
        //     $this->level_claim = 2;
        // }elseif($tahun >= 3){
        //     $this->santunan_pelayanan = get_setting('nominal_santunan');
        //     $this->santunan_uang_duka = 0;
        //     $this->persen = 100;
        //     $this->level_claim = 3;
        // }
        
    }
    
    public function save()
    { 
        if($this->type_form==1){ // jika meninggal
            $this->validate([
                'tgl_kematian'=> 'required',
                'surat_kematian' => 'required|image|max:1024',
                'foto_kta' => 'required|image|max:1024',
                'tempat_meninggal' => 'required',
                'sebab_meninggal' => 'required'
            ]);

            $klaim = new KlaimModel();
            $klaim->lama_keanggotaan = $this->lama_keanggotaan;
            $klaim->lama_keanggotaan_string = $this->lama_keanggotaan_string;
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
            $klaim->level_claim = $this->level_claim;

            if($this->ktp_ahliwaris!=""){
                $namektpwaris = 'ktp_ahliwaris'.date('Ymdhis').'.'.$this->ktp_ahliwaris->extension();
                $this->ktp_ahliwaris->storeAs("public/klaim/{$klaim->id}",$namektpwaris);
                $klaim->ktp_ahliwaris = "storage/klaim/{$klaim->id}/$namektpwaris";
            }
            if($this->surat_kematian!=""){
                $namesurat = 'surat_kematian'.date('Ymdhis').'.'.$this->surat_kematian->extension();
                $this->surat_kematian->storeAs("public/klaim/{$klaim->id}",$namesurat);
                $klaim->surat_kematian = "storage/klaim/{$klaim->id}/{$namesurat}";
            }
            if($this->foto_kta!=""){
                $namekta = 'foto_kta'.date('Ymdhis').'.'.$this->foto_kta->extension();
                $this->foto_kta->storeAs("public/klaim/{$klaim->id}",$namekta);
                $klaim->foto_kta = "storage/klaim/{$klaim->id}/{$namekta}";
            }

            $klaim->save();

            $this->data->tanggal_meninggal = $this->tgl_kematian;
            $this->data->status = 4; // meninggal
        }

        if($this->type_form==2){ // jika meninggal
            $this->validate([
                'tanggal_keluar'=> 'required',
                'alasan_keluar' => 'required'
            ]);
            
            $this->data->tanggal_keluar = $this->tanggal_keluar;
            $this->data->alasan_keluar = $this->alasan_keluar;
            $this->data->status = 5; // keluar    
        }

        $this->data->save();
        
        session()->flash('message-success',__('Konfirmasi data anggota meninggal berhasil disubmit'));

        return redirect()->route('user-member.index');
    }
}