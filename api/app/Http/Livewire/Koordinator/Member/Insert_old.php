<?php

namespace App\Http\Livewire\Koordinator\Member;

use App\Models\UserAccess;
use Livewire\Component;
use Livewire\WithFileUploads;
use App\Models\UserMember;

class Insert_old extends Component 
{
    use WithFileUploads;
    public $name;
    public $name_kta;
    public $email;
    public $tempat_lahir;
    public $tanggal_lahir;
    public $region;
    public $address;
    public $city;
    public $Id_Ktp;
    public $jenis_kelamin;
    public $phone_number;
    public $blood_type;
    public $foto_ktp;
    public $foto_kk;
    public $pas_foto;
    public $name_waris1;
    public $tempat_lahirwaris1;
    public $tanggal_lahirwaris1;
    public $address_waris1;
    public $Id_Ktpwaris1;
    public $jenis_kelaminwaris1;
    public $phone_numberwaris1;
    public $blood_typewaris1;
    public $hubungananggota1;
    public $foto_ktpwaris1;
    public $name_waris2;
    public $tempat_lahirwaris2;
    public $tanggal_lahirwaris2;
    public $address_waris2;
    public $Id_Ktpwaris2;
    public $jenis_kelaminwaris2;
    public $phone_numberwaris2;
    public $blood_typewaris2;
    public $hubungananggota2;
    public $foto_ktpwaris2;
    public $namektp;
    public $namekk;
    public $namepasfoto;
    public $namefotoktpwaris1;
    public $namefotoktpwaris2;
    public $is_approve,$is_success=false;
    public $extend_register1=false,$extend_register2=false;
    public $messageWa,$agama,$umur,$form_no,$bank_account_id,$show_form1=true,$show_form2=false,$show_form3=false,$iuran_tetap,$sumbangan,$uang_pendaftaran;
    public $total_iuran_tetap=0,$total_sumbangan=0,$total_uang_pendaftaran=0,$total=0,$messageKtp=0;
    public $koordinator_id, $payment_date, $file_konfirmasi;
    public $referal_code;
    public $status, $user_id_recomendation;

    
    public $extend1_name, $extend1_name_kta, $extend1_email, $extend1_tempat_lahir, $extend1_tanggal_lahir, $extend1_region, $extend1_address, $extend1_city, $extend1_Id_Ktp, $extend1_jenis_kelamin, $extend1_phone_number, $extend1_blood_type, $extend1_foto_ktp, $extend1_foto_kk, $extend1_pas_foto, $extend1_name_waris1, $extend1_tempat_lahirwaris1, $extend1_tanggal_lahirwaris1, $extend1_address_waris1, $extend1_Id_Ktpwaris1, $extend1_jenis_kelaminwaris1, $extend1_phone_numberwaris1, $extend1_blood_typewaris1, $extend1_hubungananggota1, $extend1_foto_ktpwaris1, $extend1_name_waris2, $extend1_tempat_lahirwaris2, $extend1_tanggal_lahirwaris2, $extend1_address_waris2, $extend1_Id_Ktpwaris2, $extend1_jenis_kelaminwaris2, $extend1_phone_numberwaris2, $extend1_blood_typewaris2, $extend1_hubungananggota2, $extend1_foto_ktpwaris2, $extend1_namektp, $extend1_namekk, $extend1_namepasfoto, $extend1_namefotoktpwaris1, $extend1_namefotoktpwaris2;
    public $extend1_total_iuran_tetap=0,$extend1_total_sumbangan=0,$extend1_total_uang_pendaftaran=0,$extend1_total=0,$extend1_iuran_tetap,$extend1_sumbangan,$extend1_uang_pendaftaran;
    public $extend1_payment_date, $extend1_file_konfirmasi,$extend1_bank_account_id;

    public $extend2_name, $extend2_name_kta, $extend2_email, $extend2_tempat_lahir, $extend2_tanggal_lahir, $extend2_region, $extend2_address, $extend2_city, $extend2_Id_Ktp, $extend2_jenis_kelamin, $extend2_phone_number, $extend2_blood_type, $extend2_foto_ktp, $extend2_foto_kk, $extend2_pas_foto, $extend2_name_waris1, $extend2_tempat_lahirwaris1, $extend2_tanggal_lahirwaris1, $extend2_address_waris1, $extend2_Id_Ktpwaris1, $extend2_jenis_kelaminwaris1, $extend2_phone_numberwaris1, $extend2_blood_typewaris1, $extend2_hubungananggota1, $extend2_foto_ktpwaris1, $extend2_name_waris2, $extend2_tempat_lahirwaris2, $extend2_tanggal_lahirwaris2, $extend2_address_waris2, $extend2_Id_Ktpwaris2, $extend2_jenis_kelaminwaris2, $extend2_phone_numberwaris2, $extend2_blood_typewaris2, $extend2_hubungananggota2, $extend2_foto_ktpwaris2, $extend2_namektp, $extend2_namekk, $extend2_namepasfoto, $extend2_namefotoktpwaris1, $extend2_namefotoktpwaris2;
    public $extend2_total_iuran_tetap=0,$extend2_total_sumbangan=0,$extend2_total_uang_pendaftaran=0,$extend2_total=0,$extend2_iuran_tetap,$extend2_sumbangan,$extend2_uang_pendaftaran;
    public $extend2_payment_date, $extend2_file_konfirmasi,$extend2_bank_account_id;

    public $messageKtpWaris1=0, $messageKtpWaris2=0, $messageKtpExtend1Waris1=0, $messageKtpExtend1Waris2=0, $messageKtpExtend2Waris1=0, $messageKtpExtend2Waris2=0;

    public $city_lainnya, $hubungananggota1_lainnya, $hubungananggota2_lainnya,$extend1_city_lainnya, $extend1_hubungananggota1_lainnya, $extend1_hubungananggota2_lainnya, $extend2_city_lainnya, $extend2_hubungananggota1_lainnya, $extend2_hubungananggota2_lainnya;

    protected $rules = [
        'name' => 'required|string',
        'name_kta' => 'required|string',
        // 'email' => 'required|string',
        'phone_number' => 'required',
        'iuran_tetap'=>'required',
        'sumbangan'=>'required',
        'uang_pendaftaran'=>'required|numeric|min:50000',
         'file_konfirmasi' => 'required|image|max:1024',
    ];

    public function render()
    {
        return view('livewire.koordinator.member.insert')->with(
            ['access'=>UserAccess::all()]
        );
    }
    public function mount()
    {
        $this->form_no = date('ymd').\App\Models\UserMember::count();
    }
    public function checkKTP()
    {
        if(empty($this->Id_Ktp)) return false;
        $check = \App\Models\UserMember::where('Id_Ktp',$this->Id_Ktp)->first();
        if($check){
            $this->messageKtp = 1;
            $this->name = $check->name;
            $this->name_kta = $check->name_kta;
            $this->email = $check->email;
            $this->tempat_lahir = $check->tempat_lahir;
            $this->tanggal_lahir = $check->tanggal_lahir;
            $this->region = $check->region;
            $this->address = $check->address;
            $this->city = $check->city;
            $this->city_lainnya = $check->city_lainnya;
            $this->Id_Ktp = $check->Id_Ktp;
            $this->jenis_kelamin = $check->jenis_kelamin;
            $this->phone_number = $check->phone_number;
            $this->blood_type = $check->blood_type;
            $this->name_waris1 = $check->name_waris1;
            $this->tempat_lahirwaris1 = $check->tempat_lahirwaris1;
            $this->tanggal_lahirwaris1 = $check->tanggal_lahirwaris1;
            $this->address_waris1 = $check->address_waris1;
            $this->Id_Ktpwaris1 = $check->Id_Ktpwaris1;
            $this->jenis_kelaminwaris1 = $check->jenis_kelaminwaris1;
            $this->phone_numberwaris1 = $check->phone_numberwaris1;
            $this->blood_typewaris1 = $check->blood_typewaris1;
            $this->hubungananggota1 = $check->hubungananggota1;
            $this->hubungananggota1_lainnya = $check->hubungananggota1_lainnya;
            $this->name_waris2 = $check->name_waris2;
            $this->tempat_lahirwaris2 = $check->tempat_lahirwaris2;
            $this->tanggal_lahirwaris2 = $check->tanggal_lahirwaris2;
            $this->address_waris2 = $check->address_waris2;
            $this->Id_Ktpwaris2 = $check->Id_Ktpwaris2;
            $this->jenis_kelaminwaris2 = $check->jenis_kelaminwaris2;
            $this->phone_numberwaris2 = $check->phone_numberwaris2;
            $this->blood_typewaris2 = $check->blood_typewaris2;
            $this->hubungananggota2 = $check->hubungananggota2;
            $this->hubungananggota2_lainnya = $check->hubungananggota2_lainnya;
        }else{
            $id_ktp = $this->Id_Ktp;
            $this->reset();
            $this->Id_Ktp = $id_ktp;
            $this->messageKtp=2;
        } 
        $this->form_no = date('ymd').\App\Models\UserMember::count();
    }
    public function checkKTPWaris1()
    {
        if(empty($this->Id_Ktpwaris1)) return false;
        $check = \App\Models\UserMember::where('Id_Ktp',$this->Id_Ktpwaris1)->first();
        if($check){
            $this->messageKtpWaris1 = 1;
            $this->name_waris1 = $check->name;
            $this->tempat_lahirwaris1 = $check->tempat_lahir;
            $this->tanggal_lahirwaris1 = $check->tanggal_lahir;
            $this->phone_numberwaris1 = $check->phone_number;
            $this->address_waris1 = $check->address;
            $this->jenis_kelaminwaris1 = $check->jenis_kelamin;
            $this->blood_typewaris1 = $check->blood_type;
        }else{
            $checkWaris1 = \App\Models\UserMember::where('Id_Ktpwaris1',$this->Id_Ktpwaris1)->first();
            if($checkWaris1)
            {
                $this->messageKtpWaris1 = 1;
                $this->name_waris1 = $checkWaris1->name_waris1;
                $this->tempat_lahirwaris1 = $checkWaris1->tempat_lahirwaris1;
                $this->tanggal_lahirwaris1 = $checkWaris1->tanggal_lahirwaris1;
                $this->phone_numberwaris1 = $checkWaris1->phone_numberwaris1;
                $this->address_waris1 = $checkWaris1->address_waris1;
                $this->jenis_kelaminwaris1 = $checkWaris1->jenis_kelaminwaris1;
                $this->blood_typewaris1 = $checkWaris1->blood_typewaris1;
            }else{
                $checkWaris2 = \App\Models\UserMember::where('Id_Ktpwaris2',$this->Id_Ktpwaris1)->first();
                if($checkWaris2)
                {
                    $this->messageKtpWaris1 = 1;
                    $this->name_waris1 = $checkWaris2->name_waris2;
                    $this->tempat_lahirwaris1 = $checkWaris2->tempat_lahirwars2;
                    $this->tanggal_lahirwaris1 = $checkWaris2->tanggal_lahirwaris2;
                    $this->phone_numberwaris1 = $checkWaris2->phone_numberwaris2;
                    $this->address_waris1 = $checkWaris2->address_waris2;
                    $this->jenis_kelaminwaris1 = $checkWaris2->jenis_kelaminwaris2;
                    $this->blood_typewaris1 = $checkWaris2->blood_typewaris2;
                }else
                {
                    $this->messageKtpWaris1=2;
                }
            }
        } 
    }
    public function checkKTPWaris2()
    {
        if(empty($this->Id_Ktpwaris2)) return false;
        $check = \App\Models\UserMember::where('Id_Ktp',$this->Id_Ktpwaris2)->first();
        if($check){
            $this->messageKtpWaris2 = 1;
            $this->name_waris2 = $check->name;
            $this->tempat_lahirwaris2 = $check->tempat_lahir;
            $this->tanggal_lahirwaris2 = $check->tanggal_lahir;
            $this->phone_numberwaris2 = $check->phone_number;
            $this->address_waris2 = $check->address;
            $this->jenis_kelaminwaris2 = $check->jenis_kelamin;
            $this->blood_typewaris2 = $check->blood_type;
        }else{
            $checkWaris1 = \App\Models\UserMember::where('Id_Ktpwaris1',$this->Id_Ktpwaris2)->first();
            if($checkWaris1)
            {
                $this->messageKtpWaris2 = 1;
                $this->name_waris2 = $checkWaris1->name_waris1;
                $this->tempat_lahirwaris2 = $checkWaris1->tempat_lahirwaris1;
                $this->tanggal_lahirwaris2 = $checkWaris1->tanggal_lahirwaris1;
                $this->phone_numberwaris2 = $checkWaris1->phone_numberwaris1;
                $this->address_waris2 = $checkWaris1->address_waris1;
                $this->jenis_kelaminwaris2 = $checkWaris1->jenis_kelaminwaris1;
                $this->blood_typewaris2 = $checkWaris1->blood_typewaris1;
            }else{
                $checkWaris2 = \App\Models\UserMember::where('Id_Ktpwaris2',$this->Id_Ktpwaris2)->first();
                if($checkWaris2)
                {
                    $this->messageKtpWaris2 = 1;
                    $this->name_waris2 = $checkWaris2->name_waris2;
                    $this->tempat_lahirwaris2 = $checkWaris2->tempat_lahirwars2;
                    $this->tanggal_lahirwaris2 = $checkWaris2->tanggal_lahirwaris2;
                    $this->phone_numberwaris2 = $checkWaris2->phone_numberwaris2;
                    $this->address_waris2 = $checkWaris2->address_waris2;
                    $this->jenis_kelaminwaris2 = $checkWaris2->jenis_kelaminwaris2;
                    $this->blood_typewaris2 = $checkWaris2->blood_typewaris2;
                }else
                {
                    $this->messageKtpWaris2=2;
                }
            }
        } 
    }
    public function checkKTPExtend1Waris1()
    {
        if(empty($this->extend1_Id_Ktpwaris1)) return false;
        $check = \App\Models\UserMember::where('Id_Ktp',$this->extend1_Id_Ktpwaris1)->first();
        if($check){
            $this->messageKtpExtend1Waris1 = 1;
            $this->extend1_name_waris1 = $check->name;
            $this->extend1_tempat_lahirwaris1 = $check->tempat_lahir;
            $this->extend1_tanggal_lahirwaris1 = $check->tanggal_lahir;
            $this->extend1_phone_numberwaris1 = $check->phone_number;
            $this->extend1_address_waris1 = $check->address;
            $this->extend1_jenis_kelaminwaris1 = $check->jenis_kelamin;
            $this->extend1_blood_typewaris1 = $check->blood_type;
        }else{
            $checkWaris1 = \App\Models\UserMember::where('Id_Ktpwaris1',$this->extend1_Id_Ktpwaris1)->first();
            if($checkWaris1)
            {
                $this->messageKtpExtend1Waris1 = 1;
                $this->extend1_name_waris1 = $checkWaris1->name_waris1;
                $this->extend1_tempat_lahirwaris1 = $checkWaris1->tempat_lahirwaris1;
                $this->extend1_tanggal_lahirwaris1 = $checkWaris1->tanggal_lahirwaris1;
                $this->extend1_phone_numberwaris1 = $checkWaris1->phone_numberwaris1;
                $this->extend1_address_waris1 = $checkWaris1->address_waris1;
                $this->extend1_jenis_kelaminwaris1 = $checkWaris1->jenis_kelaminwaris1;
                $this->extend1_blood_typewaris1 = $checkWaris1->blood_typewaris1;
            }else{
                $checkWaris2 = \App\Models\UserMember::where('Id_Ktpwaris2',$this->extend1_Id_Ktpwaris1)->first();
                if($checkWaris2)
                {
                    $this->messageKtpExtend1Waris1 = 1;
                    $this->extend1_name_waris1 = $checkWaris2->name_waris2;
                    $this->extend1_tempat_lahirwaris1 = $checkWaris2->tempat_lahirwars2;
                    $this->extend1_tanggal_lahirwaris1 = $checkWaris2->tanggal_lahirwaris2;
                    $this->extend1_phone_numberwaris1 = $checkWaris2->phone_numberwaris2;
                    $this->extend1_address_waris1 = $checkWaris2->address_waris2;
                    $this->extend1_jenis_kelaminwaris1 = $checkWaris2->jenis_kelaminwaris2;
                    $this->extend1_blood_typewaris1 = $checkWaris2->blood_typewaris2;
                }else
                {
                    $this->messageKtpExtend1Waris1=2;
                }
            }
        } 
    }
    public function checkKTPExtend1Waris2()
    {
        if(empty($this->extend1_Id_Ktpwaris2)) return false;
        $check = \App\Models\UserMember::where('Id_Ktp',$this->extend1_Id_Ktpwaris2)->first();
        if($check){
            $this->messageKtpExtend1Waris2 = 1;
            $this->extend1_name_waris2 = $check->name;
            $this->extend1_tempat_lahirwaris2 = $check->tempat_lahir;
            $this->extend1_tanggal_lahirwaris2 = $check->tanggal_lahir;
            $this->extend1_phone_numberwaris2 = $check->phone_number;
            $this->extend1_address_waris2 = $check->address;
            $this->extend1_jenis_kelaminwaris2 = $check->jenis_kelamin;
            $this->extend1_blood_typewaris2 = $check->blood_type;
        }else{
            $checkWaris1 = \App\Models\UserMember::where('Id_Ktpwaris1',$this->extend1_Id_Ktpwaris2)->first();
            if($checkWaris1)
            {
                $this->messageKtpExtend1Waris2 = 1;
                $this->extend1_name_waris2 = $checkWaris1->name_waris1;
                $this->extend1_tempat_lahirwaris2 = $checkWaris1->tempat_lahirwaris1;
                $this->extend1_tanggal_lahirwaris2 = $checkWaris1->tanggal_lahirwaris1;
                $this->extend1_phone_numberwaris2 = $checkWaris1->phone_numberwaris1;
                $this->extend1_address_waris2 = $checkWaris1->address_waris1;
                $this->extend1_jenis_kelaminwaris2 = $checkWaris1->jenis_kelaminwaris1;
                $this->extend1_blood_typewaris2 = $checkWaris1->blood_typewaris1;
            }else{
                $checkWaris2 = \App\Models\UserMember::where('Id_Ktpwaris2',$this->extend1_Id_Ktpwaris2)->first();
                if($checkWaris2)
                {
                    $this->messageKtpExtend1Waris2 = 1;
                    $this->extend1_name_waris2 = $checkWaris2->name_waris2;
                    $this->extend1_tempat_lahirwaris2 = $checkWaris2->tempat_lahirwars2;
                    $this->extend1_tanggal_lahirwaris2 = $checkWaris2->tanggal_lahirwaris2;
                    $this->extend1_phone_numberwaris2 = $checkWaris2->phone_numberwaris2;
                    $this->extend1_address_waris2 = $checkWaris2->address_waris2;
                    $this->extend1_jenis_kelaminwaris2 = $checkWaris2->jenis_kelaminwaris2;
                    $this->extend1_blood_typewaris2 = $checkWaris2->blood_typewaris2;
                }else
                {
                    $this->messageKtpExtend1Waris2=2;
                }
            }
        } 
    }
    public function checkKTPExtend2Waris1()
    {
        if(empty($this->extend2_Id_Ktpwaris1)) return false;
        $check = \App\Models\UserMember::where('Id_Ktp',$this->extend2_Id_Ktpwaris1)->first();
        if($check){
            $this->messageKtpExtend2Waris1 = 1;
            $this->extend2_name_waris1 = $check->name;
            $this->extend2_tempat_lahirwaris1 = $check->tempat_lahir;
            $this->extend2_tanggal_lahirwaris1 = $check->tanggal_lahir;
            $this->extend2_phone_numberwaris1 = $check->phone_number;
            $this->extend2_address_waris1 = $check->address;
            $this->extend2_jenis_kelaminwaris1 = $check->jenis_kelamin;
            $this->extend2_blood_typewaris1 = $check->blood_type;
        }else{
            $checkWaris1 = \App\Models\UserMember::where('Id_Ktpwaris1',$this->extend2_Id_Ktpwaris1)->first();
            if($checkWaris1)
            {
                $this->messageKtpExtend2Waris1 = 1;
                $this->extend2_name_waris1 = $checkWaris1->name_waris1;
                $this->extend2_tempat_lahirwaris1 = $checkWaris1->tempat_lahirwaris1;
                $this->extend2_tanggal_lahirwaris1 = $checkWaris1->tanggal_lahirwaris1;
                $this->extend2_phone_numberwaris1 = $checkWaris1->phone_numberwaris1;
                $this->extend2_address_waris1 = $checkWaris1->address_waris1;
                $this->extend2_jenis_kelaminwaris1 = $checkWaris1->jenis_kelaminwaris1;
                $this->extend2_blood_typewaris1 = $checkWaris1->blood_typewaris1;
            }else{
                $checkWaris2 = \App\Models\UserMember::where('Id_Ktpwaris2',$this->extend2_Id_Ktpwaris1)->first();
                if($checkWaris2)
                {
                    $this->messageKtpExtend2Waris1 = 1;
                    $this->extend2_name_waris1 = $checkWaris2->name_waris2;
                    $this->extend2_tempat_lahirwaris1 = $checkWaris2->tempat_lahirwars2;
                    $this->extend2_tanggal_lahirwaris1 = $checkWaris2->tanggal_lahirwaris2;
                    $this->extend2_phone_numberwaris1 = $checkWaris2->phone_numberwaris2;
                    $this->extend2_address_waris1 = $checkWaris2->address_waris2;
                    $this->extend2_jenis_kelaminwaris1 = $checkWaris2->jenis_kelaminwaris2;
                    $this->extend2_blood_typewaris1 = $checkWaris2->blood_typewaris2;
                }else
                {
                    $this->messageKtpExtend2Waris1=2;
                }
            }
        } 
    }
    public function checkKTPExtend2Waris2()
    {
        if(empty($this->extend2_Id_Ktpwaris2)) return false;
        $check = \App\Models\UserMember::where('Id_Ktp',$this->extend2_Id_Ktpwaris2)->first();
        if($check){
            $this->messageKtpExtend2Waris2 = 1;
            $this->extend2_name_waris2 = $check->name;
            $this->extend2_tempat_lahirwaris2 = $check->tempat_lahir;
            $this->extend2_tanggal_lahirwaris2 = $check->tanggal_lahir;
            $this->extend2_phone_numberwaris2 = $check->phone_number;
            $this->extend2_address_waris2 = $check->address;
            $this->extend2_jenis_kelaminwaris2 = $check->jenis_kelamin;
            $this->extend2_blood_typewaris2 = $check->blood_type;
        }else{
            $checkWaris1 = \App\Models\UserMember::where('Id_Ktpwaris1',$this->extend2_Id_Ktpwaris2)->first();
            if($checkWaris1)
            {
                $this->messageKtpExtend2Waris2 = 1;
                $this->extend2_name_waris2 = $checkWaris1->name_waris1;
                $this->extend2_tempat_lahirwaris2 = $checkWaris1->tempat_lahirwaris1;
                $this->extend2_tanggal_lahirwaris2 = $checkWaris1->tanggal_lahirwaris1;
                $this->extend2_phone_numberwaris2 = $checkWaris1->phone_numberwaris1;
                $this->extend2_address_waris2 = $checkWaris1->address_waris1;
                $this->extend2_jenis_kelaminwaris2 = $checkWaris1->jenis_kelaminwaris1;
                $this->extend2_blood_typewaris2 = $checkWaris1->blood_typewaris1;
            }else{
                $checkWaris2 = \App\Models\UserMember::where('Id_Ktpwaris2',$this->extend2_Id_Ktpwaris2)->first();
                if($checkWaris2)
                {
                    $this->messageKtpExtend2Waris2 = 1;
                    $this->extend2_name_waris2 = $checkWaris2->name_waris2;
                    $this->extend2_tempat_lahirwaris2 = $checkWaris2->tempat_lahirwars2;
                    $this->extend2_tanggal_lahirwaris2 = $checkWaris2->tanggal_lahirwaris2;
                    $this->extend2_phone_numberwaris2 = $checkWaris2->phone_numberwaris2;
                    $this->extend2_address_waris2 = $checkWaris2->address_waris2;
                    $this->extend2_jenis_kelaminwaris2 = $checkWaris2->jenis_kelaminwaris2;
                    $this->extend2_blood_typewaris2 = $checkWaris2->blood_typewaris2;
                }else
                {
                    $this->messageKtpExtend2Waris2=2;
                }
            }
        } 
    }
    public function calculate_()
    {
        $this->total_iuran_tetap = $this->iuran_tetap * 8000;
        $this->total_sumbangan = $this->sumbangan * 2000;
        if($this->uang_pendaftaran!="") $this->total = $this->uang_pendaftaran;
        $this->total += $this->total_iuran_tetap;
        $this->total += $this->total_sumbangan;
    }
    public function extend1_calculate_()
    {
        $this->extend1_total_iuran_tetap = $this->extend1_iuran_tetap * 8000;
        $this->extend1_total_sumbangan = $this->extend1_sumbangan * 2000;
        if($this->extend1_uang_pendaftaran!="") $this->extend1_total = $this->extend1_uang_pendaftaran;
        $this->extend1_total += $this->extend1_total_iuran_tetap;
        $this->extend1_total += $this->extend1_total_sumbangan;
    }
    public function extend2_calculate_()
    {
        $this->extend2_total_iuran_tetap = $this->extend2_iuran_tetap * 8000;
        $this->extend2_total_sumbangan = $this->extend2_sumbangan * 2000;
        if($this->extend2_uang_pendaftaran!="") $this->extend2_total = $this->extend2_uang_pendaftaran;
        $this->extend2_total += $this->extend2_total_iuran_tetap;
        $this->extend2_total += $this->extend2_total_sumbangan;
    }
    public function form1()
    {
        $this->show_form1=true;
        $this->show_form2=false;
    }
    public function form2()
    {
        $this->validate();
        $this->show_form1=false;
        $this->show_form2=true;
        $this->show_form3=false;
    }
    public function form3()
    {
        $this->show_form2=false;
        $this->show_form3=true;
    }
    public function hitungUmur()
    {
        $this->umur = hitung_umur($this->tanggal_lahir);
        $this->extend_register1=false;
        $this->extend_register2=false;
        if($this->umur >=65 and $this->umur <=74){ // di atas 65 dan di bawah 74 tahun wajib mendaftarkan satu anggota
            $this->extend_register1=true;
        }
        if($this->umur >=75){ // diatas 75 tahun wajib mendaftarkan 2 anggota
            $this->extend_register1=true;
            $this->extend_register2=true;
        }
        
    }
    public function save()
    {
        $this->validate();
        $data = new UserMember();
        $data->no_form = $this->form_no;
        //$data->no_anggota_platinum = date('my').str_pad(\App\Models\UserMember::count(),5, '0', STR_PAD_LEFT);
        //$data->tanggal_diterima = date('Y-m-d');
        //$data->masa_tenggang = date('Y-m-d',strtotime("+6 months",strtotime($this->payment_date)));
        $data->name = $this->name;
        $data->name_kta = $this->name_kta;
        $data->email = $this->email;
        $data->tempat_lahir = $this->tempat_lahir;
        $data->tanggal_lahir = $this->tanggal_lahir;
        $data->region = $this->region;
        $data->address = $this->address;
        $data->city = $this->city;
        $data->city_lainnya = $this->city_lainnya;
        $data->Id_Ktp = $this->Id_Ktp;
        $data->jenis_kelamin = $this->jenis_kelamin;
        $data->phone_number = $this->phone_number;
        $data->blood_type = $this->blood_type;
        $data->name_waris1 = $this->name_waris1;
        $data->tempat_lahirwaris1 = $this->tempat_lahirwaris1;
        $data->tanggal_lahirwaris1 = $this->tanggal_lahirwaris1;
        $data->address_waris1 = $this->address_waris1;
        $data->Id_Ktpwaris1 = $this->Id_Ktpwaris1;
        $data->jenis_kelaminwaris1 = $this->jenis_kelaminwaris1;
        $data->phone_numberwaris1 = $this->phone_numberwaris1;
        $data->blood_typewaris1 = $this->blood_typewaris1;
        $data->hubungananggota1 = $this->hubungananggota1;
        $data->hubungananggota1_lainnya = $this->hubungananggota1_lainnya;
        $data->name_waris2 = $this->name_waris2;
        $data->tempat_lahirwaris2 = $this->tempat_lahirwaris2;
        $data->tanggal_lahirwaris2 = $this->tanggal_lahirwaris2;
        $data->address_waris2 = $this->address_waris2;
        $data->Id_Ktpwaris2 = $this->Id_Ktpwaris2;
        $data->jenis_kelaminwaris2 = $this->jenis_kelaminwaris2;
        $data->phone_numberwaris2 = $this->phone_numberwaris2;
        $data->blood_typewaris2 = $this->blood_typewaris2;
        $data->hubungananggota2 = $this->hubungananggota2;
        $data->hubungananggota2_lainnya = $this->hubungananggota2_lainnya;

        if($this->foto_ktp!=""){
            $this->validate([
                'foto_ktp' => 'image:max:1024', // 1Mb Max
            ]);
            $namektp = 'foto_ktp'.date('Ymdhis').'.'.$this->foto_ktp->extension();
            $this->foto_ktp->storePubliclyAs('public',$namektp);
            $data->foto_ktp = $namektp;
        }

        if($this->foto_kk!=""){
            $this->validate([
                'foto_kk' => 'image:max:1024', // 1Mb Max
            ]);
            $namekk = 'foto_kk'.date('Ymdhis').'.'.$this->foto_kk->extension();
            $this->foto_kk->storePubliclyAs('public',$namekk);
            $data->foto_kk = $namekk;
        }
        if($this->pas_foto!=""){
            $this->validate([
                'pas_foto' => 'image:max:1024', // 1Mb Max
            ]);
            $namepasfoto = 'pas_foto'.date('Ymdhis').'.'.$this->pas_foto->extension();
            $this->pas_foto->storePubliclyAs('public',$namepasfoto);
            $data->pas_foto = $namepasfoto;
        }
        if($this->foto_ktpwaris1!=""){
            $this->validate([
                'foto_ktpwaris1' => 'image:max:1024', // 1Mb Max
            ]);
            $namefotoktpwaris1 = 'foto_ktpwaris1'.date('Ymdhis').'.'.$this->foto_ktpwaris1->extension();
            $this->foto_ktpwaris1->storePubliclyAs('public',$namefotoktpwaris1);
            $data->foto_ktpwaris1 = $namefotoktpwaris1;
        }
        if($this->foto_ktpwaris2!=""){
            $this->validate([
                'foto_ktpwaris2' => 'image:max:1024', // 1Mb Max
            ]);
            $namefotoktpwaris2 = 'foto_ktpwaris2'.date('Ymdhis').'.'.$this->foto_ktpwaris2->extension();
            $this->foto_ktpwaris2->storePubliclyAs('public',$namefotoktpwaris2);
            $data->foto_ktpwaris2 = $namefotoktpwaris2;
        }
        if($this->file_konfirmasi!=""){
            $this->validate([
                'file_konfirmasi' => 'image:max:1024', // 1Mb Max
            ]);
            $namekonfirmasi = 'file_konfirmasi'.date('Ymdhis').'.'.$this->file_konfirmasi->extension();
            $this->file_konfirmasi->storePubliclyAs('public',$namekonfirmasi);
            $data->file_konfirmasi = $namekonfirmasi;
        }
        
        $data->bank_account_id = $this->bank_account_id;
        $data->iuran_tetap = $this->iuran_tetap;
        $data->total_iuran_tetap = $this->total_iuran_tetap;
        $data->sumbangan = $this->sumbangan;
        $data->total_sumbangan = $this->total_sumbangan;
        $data->uang_pendaftaran = $this->uang_pendaftaran;
        $data->total_pembayaran = $this->total;
        $data->status_pembayaran = 0; // pembayaran pendaftaran lunas
        $dataMember = \App\Models\UserMember::where('user_id',\Auth::user()->id)->first();
        $data->koordinator_id = $dataMember->id;

        //$data->koordinator_id = \Auth::user()->id;

        $data->save();

        if($this->extend1_Id_Ktp !=""){
            $dataExtends1 = new UserMember();
            $dataExtends1->no_form = date('ymd').\App\Models\UserMember::count();
            //$dataExtends1->status = 0;
            $dataExtends1->user_id_recomendation = $data->id;
            $dataExtends1->koordinator_id = $data->koordinator_id;
            $dataExtends1->name = $this->extend1_name;
            $dataExtends1->name_kta = $this->extend1_name_kta;
            $dataExtends1->email = $this->extend1_email;
            $dataExtends1->tempat_lahir = $this->extend1_tempat_lahir;
            $dataExtends1->tanggal_lahir = $this->extend1_tanggal_lahir;
            $dataExtends1->region = $this->extend1_region;
            $dataExtends1->address = $this->extend1_address;
            $dataExtends1->city = $this->extend1_city;
            $dataExtends1->city_lainnya = $this->extend1_city_lainnya;
            $dataExtends1->Id_Ktp = $this->extend1_Id_Ktp;
            $dataExtends1->jenis_kelamin = $this->extend1_jenis_kelamin;
            $dataExtends1->phone_number = $this->extend1_phone_number;
            $dataExtends1->blood_type = $this->extend1_blood_type;
            $dataExtends1->name_waris1 = $this->extend1_name_waris1;
            $dataExtends1->tempat_lahirwaris1 = $this->extend1_tempat_lahirwaris1;
            $dataExtends1->tanggal_lahirwaris1 = $this->extend1_tanggal_lahirwaris1;
            $dataExtends1->address_waris1 = $this->extend1_address_waris1;
            $dataExtends1->Id_Ktpwaris1 = $this->extend1_Id_Ktpwaris1;
            $dataExtends1->jenis_kelaminwaris1 = $this->extend1_jenis_kelaminwaris1;
            $dataExtends1->phone_numberwaris1 = $this->extend1_phone_numberwaris1;
            $dataExtends1->blood_typewaris1 = $this->extend1_blood_typewaris1;
            $dataExtends1->hubungananggota1 = $this->extend1_hubungananggota1;
            $dataExtends1->hubungananggota1_lainnya = $this->extend1_hubungananggota1_lainnya;
            $dataExtends1->name_waris2 = $this->extend1_name_waris2;
            $dataExtends1->tempat_lahirwaris2 = $this->extend1_tempat_lahirwaris2;
            $dataExtends1->tanggal_lahirwaris2 = $this->extend1_tanggal_lahirwaris2;
            $dataExtends1->address_waris2 = $this->extend1_address_waris2;
            $dataExtends1->Id_Ktpwaris2 = $this->extend1_Id_Ktpwaris2;
            $dataExtends1->jenis_kelaminwaris2 = $this->extend1_jenis_kelaminwaris2;
            $dataExtends1->phone_numberwaris2 = $this->extend1_phone_numberwaris2;
            $dataExtends1->blood_typewaris2 = $this->extend1_blood_typewaris2;
            $dataExtends1->hubungananggota2 = $this->extend1_hubungananggota2;
            $dataExtends1->hubungananggota2_lainnya = $this->extend1_hubungananggota2_lainnya;

            if($this->extend1_foto_ktp!=""){
                $this->validate([
                    'extend1_foto_ktp' => 'image:max:1024', // 1Mb Max
                ]);
                $extend1_namektp = 'foto_ktp'.date('Ymdhis').'.'.$this->extend1_foto_ktp->extension();
                $this->extend1_foto_ktp->storePubliclyAs('public',$extend1_namektp);
                $dataExtends1->foto_ktp = $extend1_namektp;
            }

            if($this->extend1_foto_kk!=""){
                $this->validate([
                    'extend1_foto_kk' => 'image:max:1024', // 1Mb Max
                ]);
                $extend1_namekk = 'foto_kk'.date('Ymdhis').'.'.$this->extend1_foto_kk->extension();
                $this->extend1_foto_kk->storePubliclyAs('public',$extend1_namekk);
                $dataExtends1->foto_kk = $extend1_namekk;
            }
            if($this->extend1_pas_foto!=""){
                $this->validate([
                    'extend1_pas_foto' => 'image:max:1024', // 1Mb Max
                ]);
                $extend1_namepasfoto = 'pas_foto'.date('Ymdhis').'.'.$this->extend1_pas_foto->extension();
                $this->extend1_pas_foto->storePubliclyAs('public',$extend1_namepasfoto);
                $dataExtends1->pas_foto = $extend1_namepasfoto;
            }
            if($this->extend1_foto_ktpwaris1!=""){
                $this->validate([
                    'extend1_foto_ktpwaris1' => 'image:max:1024', // 1Mb Max
                ]);
                $extend1_namefotoktpwaris1 = 'foto_ktpwaris1'.date('Ymdhis').'.'.$this->extend1_foto_ktpwaris1->extension();
                $this->extend1_foto_ktpwaris1->storePubliclyAs('public',$extend1_namefotoktpwaris1);
                $dataExtends1->foto_ktpwaris1 = $extend1_namefotoktpwaris1;
            }
            if($this->extend1_foto_ktpwaris2!=""){
                $this->validate([
                    'extend1_foto_ktpwaris2' => 'image:max:1024', // 1Mb Max
                ]);
                $extend1_namefotoktpwaris2 = 'foto_ktpwaris2'.date('Ymdhis').'.'.$this->extend1_foto_ktpwaris2->extension();
                $this->extend1_foto_ktpwaris2->storePubliclyAs('public',$extend1_namefotoktpwaris2);
                $dataExtends1->foto_ktpwaris2 = $extend1_namefotoktpwaris2;
            }
            if($this->extend1_file_konfirmasi!=""){
                $this->validate([
                    'extend1_file_konfirmasi' => 'image:max:1024', // 1Mb Max
                ]);
                $extend1_namekonfirmasi = 'file_konfirmasi'.date('Ymdhis').'.'.$this->extend1_file_konfirmasi->extension();
                $this->extend1_file_konfirmasi->storePubliclyAs('public',$extend1_namekonfirmasi);
                $dataExtends1->file_konfirmasi = $extend1_namekonfirmasi;
            }
            $dataExtends1->bank_account_id = $this->extend1_bank_account_id;
            $dataExtends1->iuran_tetap = $this->extend1_iuran_tetap;
            $dataExtends1->total_iuran_tetap = $this->extend1_total_iuran_tetap;
            $dataExtends1->sumbangan = $this->extend1_sumbangan;
            $dataExtends1->total_sumbangan = $this->extend1_total_sumbangan;
            $dataExtends1->uang_pendaftaran = $this->extend1_uang_pendaftaran;
            $dataExtends1->total_pembayaran = $this->extend1_total;
            $data->status_pembayaran = 0;
            $dataExtends1->save();

/*
             // Iuran
            $iuranExtends1 = new \App\Models\Iuran();
            $iuranExtends1->user_member_id = $dataExtends1->id;
            $iuranExtends1->type = 'Iuran';
            $iuranExtends1->nominal = $this->extend1_total_iuran_tetap;
            $iuranExtends1->from_periode = $this->extend1_payment_date;
            $iuranExtends1->to_periode = date('Y-m-d',strtotime("+6 months",strtotime($this->extend1_payment_date)));
            $iuranExtends1->bank_account_id = $this->extend1_bank_account_id;
            $iuranExtends1->file = $dataExtends1->file_konfirmasi; 
            $iuranExtends1->payment_date = $this->extend1_payment_date;
            $iuranExtends1->status = 2;
            $iuranExtends1->save();

            // Uang Pendaftaran
            $iuranExtends1 = new \App\Models\Iuran();
            $iuranExtends1->user_member_id = $dataExtends1->id;
            $iuranExtends1->type = 'Uang Pendaftaran';
            $iuranExtends1->nominal = $this->extend1_uang_pendaftaran;
            $iuranExtends1->from_periode = $this->extend1_payment_date;
            $iuranExtends1->to_periode = date('Y-m-d',strtotime("+6 months",strtotime($this->extend1_payment_date)));
            $iuranExtends1->bank_account_id = $this->extend1_bank_account_id;
            $iuranExtends1->file = $dataExtends1->file_konfirmasi; 
            $iuranExtends1->payment_date = $this->extend1_payment_date;
            $iuranExtends1->status = 2;
            $iuranExtends1->save();
*/
        }
        if($this->extend2_Id_Ktp !=""){
            $dataExtends2 = new UserMember();
            $dataExtends2->no_form = date('ymd').\App\Models\UserMember::count();
            //$dataExtends2->status = 0;
            $dataExtends2->user_id_recomendation = $data->id;
            $dataExtends2->koordinator_id = $data->koordinator_id;
            $dataExtends2->name = $this->extend2_name;
            $dataExtends2->name_kta = $this->extend2_name_kta;
            $dataExtends2->email = $this->extend2_email;
            $dataExtends2->tempat_lahir = $this->extend2_tempat_lahir;
            $dataExtends2->tanggal_lahir = $this->extend2_tanggal_lahir;
            $dataExtends2->region = $this->extend2_region;
            $dataExtends2->address = $this->extend2_address;
            $dataExtends2->city = $this->extend2_city;
            $dataExtends2->city_lainnya = $this->extend2_city_lainnya;
            $dataExtends2->Id_Ktp = $this->extend2_Id_Ktp;
            $dataExtends2->jenis_kelamin = $this->extend2_jenis_kelamin;
            $dataExtends2->phone_number = $this->extend2_phone_number;
            $dataExtends2->blood_type = $this->extend2_blood_type;
            $dataExtends2->name_waris1 = $this->extend2_name_waris1;
            $dataExtends2->tempat_lahirwaris1 = $this->extend2_tempat_lahirwaris1;
            $dataExtends2->tanggal_lahirwaris1 = $this->extend2_tanggal_lahirwaris1;
            $dataExtends2->address_waris1 = $this->extend2_address_waris1;
            $dataExtends2->Id_Ktpwaris1 = $this->extend2_Id_Ktpwaris1;
            $dataExtends2->jenis_kelaminwaris1 = $this->extend2_jenis_kelaminwaris1;
            $dataExtends2->phone_numberwaris1 = $this->extend2_phone_numberwaris1;
            $dataExtends2->blood_typewaris1 = $this->extend2_blood_typewaris1;
            $dataExtends2->hubungananggota1 = $this->extend2_hubungananggota1;
             $dataExtends2->hubungananggota1_lainnya = $this->extend2_hubungananggota1_lainnya;
            $dataExtends2->name_waris2 = $this->extend2_name_waris2;
            $dataExtends2->tempat_lahirwaris2 = $this->extend2_tempat_lahirwaris2;
            $dataExtends2->tanggal_lahirwaris2 = $this->extend2_tanggal_lahirwaris2;
            $dataExtends2->address_waris2 = $this->extend2_address_waris2;
            $dataExtends2->Id_Ktpwaris2 = $this->extend2_Id_Ktpwaris2;
            $dataExtends2->jenis_kelaminwaris2 = $this->extend2_jenis_kelaminwaris2;
            $dataExtends2->phone_numberwaris2 = $this->extend2_phone_numberwaris2;
            $dataExtends2->blood_typewaris2 = $this->extend2_blood_typewaris2;
            $dataExtends2->hubungananggota2 = $this->extend2_hubungananggota2;
            $dataExtends2->hubungananggota2_lainnya = $this->extend2_hubungananggota2_lainnya;

            if($this->extend2_foto_ktp!=""){
                $this->validate([
                    'extend2_foto_ktp' => 'image:max:1024', // 1Mb Max
                ]);
                $extend2_namektp = 'foto_ktp'.date('Ymdhis').'.'.$this->extend2_foto_ktp->extension();
                $this->extend2_foto_ktp->storePubliclyAs('public',$extend2_namektp);
                $dataExtends2->foto_ktp = $extend2_namektp;
            }

            if($this->extend2_foto_kk!=""){
                $this->validate([
                    'extend2_foto_kk' => 'image:max:1024', // 1Mb Max
                ]);
                $extend2_namekk = 'foto_kk'.date('Ymdhis').'.'.$this->extend2_foto_kk->extension();
                $this->extend2_foto_kk->storePubliclyAs('public',$extend2_namekk);
                $dataExtends2->foto_kk = $extend1_namekk;
            }
            if($this->extend2_pas_foto!=""){
                $this->validate([
                    'extend2_pas_foto' => 'image:max:1024', // 1Mb Max
                ]);
                $extend2_namepasfoto = 'pas_foto'.date('Ymdhis').'.'.$this->extend2_pas_foto->extension();
                $this->extend2_pas_foto->storePubliclyAs('public',$extend2_namepasfoto);
                $dataExtends2->pas_foto = $extend2_namepasfoto;
            }
            if($this->extend2_foto_ktpwaris1!=""){
                $this->validate([
                    'extend2_foto_ktpwaris1' => 'image:max:1024', // 1Mb Max
                ]);
                $extend2_namefotoktpwaris1 = 'foto_ktpwaris1'.date('Ymdhis').'.'.$this->extend2_foto_ktpwaris1->extension();
                $this->extend2_foto_ktpwaris1->storePubliclyAs('public',$extend2_namefotoktpwaris1);
                $dataExtends2->foto_ktpwaris1 = $extend2_namefotoktpwaris1;
            }
            if($this->extend2_foto_ktpwaris2!=""){
                $this->validate([
                    'extend2_foto_ktpwaris2' => 'image:max:1024', // 1Mb Max
                ]);
                $extend2_namefotoktpwaris2 = 'foto_ktpwaris2'.date('Ymdhis').'.'.$this->extend2_foto_ktpwaris2->extension();
                $this->extend2_foto_ktpwaris2->storePubliclyAs('public',$extend2_namefotoktpwaris2);
                $dataExtends2->foto_ktpwaris2 = $extend2_namefotoktpwaris2;
            }
            if($this->extend2_file_konfirmasi!=""){
                $this->validate([
                    'extend2_file_konfirmasi' => 'image:max:1024', // 1Mb Max
                ]);
                $extend2_namekonfirmasi = 'file_konfirmasi'.date('Ymdhis').'.'.$this->extend2_file_konfirmasi->extension();
                $this->extend2_file_konfirmasi->storePubliclyAs('public',$extend2_namekonfirmasi);
                $dataExtends2->file_konfirmasi = $extend2_namekonfirmasi;
            }
            $dataExtends2->bank_account_id = $this->extend2_bank_account_id;
            $dataExtends2->iuran_tetap = $this->extend2_iuran_tetap;
            $dataExtends2->total_iuran_tetap = $this->extend2_total_iuran_tetap;
            $dataExtends2->sumbangan = $this->extend2_sumbangan;
            $dataExtends2->total_sumbangan = $this->extend2_total_sumbangan;
            $dataExtends2->uang_pendaftaran = $this->extend2_uang_pendaftaran;
            $dataExtends2->total_pembayaran = $this->extend2_total;
            $dataExtends2->status_pembayaran = 0;

            $dataExtends2->save();
/*
            // Iuran
            $iuranExtends1 = new \App\Models\Iuran();
            $iuranExtends1->user_member_id = $dataExtends1->id;
            $iuranExtends1->type = 'Iuran';
            $iuranExtends1->nominal = $this->extend1_total_iuran_tetap;
            $iuranExtends1->from_periode = $this->extend1_payment_date;
            $iuranExtends1->to_periode = date('Y-m-d',strtotime("+6 months",strtotime($this->extend1_payment_date)));
            $iuranExtends1->bank_account_id = $this->extend1_bank_account_id;
            $iuranExtends1->file = $dataExtends1->file_konfirmasi; 
            $iuranExtends1->payment_date = $this->extend1_payment_date;
            $iuranExtends1->status = 2;
            $iuranExtends1->save();

            // Uang Pendaftaran
            $iuranExtends2 = new \App\Models\Iuran();
            $iuranExtends2->user_member_id = $dataExtends2->id;
            $iuranExtends2->type = 'Uang Pendaftaran';
            $iuranExtends2->nominal = $this->extend2_uang_pendaftaran;
            $iuranExtends2->from_periode = $this->extend2_payment_date;
            $iuranExtends2->to_periode = date('Y-m-d',strtotime("+6 months",strtotime($this->extend2_payment_date)));
            $iuranExtends2->bank_account_id = $this->extend2_bank_account_id;
            $iuranExtends2->file = $dataExtends2->file_konfirmasi; 
            $iuranExtends2->payment_date = $this->extend2_payment_date;
            $iuranExtends2->status = 2;
            $iuranExtends2->save();
*/
        }
        $this->is_success =true;
        
        session()->flash('message-success',__('Data Anggota berhasil disimpan'));
        return redirect()->route('koordinator.member');
    }
}
