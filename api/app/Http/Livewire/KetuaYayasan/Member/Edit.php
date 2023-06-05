<?php

namespace App\Http\Livewire\KetuaYayasan\Member;

use App\Models\UserAccess;
use Illuminate\Support\Facades\Hash;
use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Models\UserMember;
use Illuminate\Support\Str;

class Edit extends Component
{
	use WithFileUploads;
    public $data;
    public $name;
    public $name_kta;
    public $tempat_lahir;
    public $tanggal_lahir;
    public $email;
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
    public $is_approve;
    public $message;
    public $messageWa;
    public $dataRekomendasi;

    public function render()
    {
        return view('livewire.ketua-yayasan.member.edit');
    }
    public function mount($id)
    {
        $this->data = UserMember::find($id);
        $this->name = $this->data->name;
        $this->name_kta = $this->data->name_kta;
        $this->email = $this->data->email;
        $this->tempat_lahir = $this->data->tempat_lahir;
        $this->tanggal_lahir = $this->data->tanggal_lahir;
        $this->region = $this->data->region;
        $this->address = $this->data->address;
        $this->city = $this->data->city;
        $this->Id_Ktp = $this->data->Id_Ktp;
        $this->jenis_kelamin = $this->data->jenis_kelamin;
        $this->phone_number = $this->data->phone_number;
        $this->blood_type = $this->data->blood_type;
        $this->foto_ktp = $this->data->foto_ktp;
        $this->foto_kk = $this->data->foto_kk;
        $this->pas_foto = $this->data->pas_foto;
        $this->name_waris1 = $this->data->name_waris1;
        $this->tempat_lahirwaris1 = $this->data->tempat_lahirwaris1;
        $this->tanggal_lahirwaris1 = $this->data->tanggal_lahirwaris1;
        $this->address_waris1 = $this->data->address_waris1;
        $this->Id_Ktpwaris1 = $this->data->Id_Ktpwaris1;
        $this->jenis_kelaminwaris1 = $this->data->jenis_kelaminwaris1;
        $this->phone_numberwaris1 = $this->data->phone_numberwaris1;
        $this->blood_typewaris1 = $this->data->blood_typewaris1;
        $this->hubungananggota1 = $this->data->hubungananggota1;
        $this->foto_ktpwaris1 = $this->data->foto_ktpwaris1;
        $this->name_waris2 = $this->data->name_waris2;
        $this->tempat_lahirwaris2 = $this->data->tempat_lahirwaris2;
        $this->tanggal_lahirwaris2 = $this->data->tanggal_lahirwaris2;
        $this->address_waris2 = $this->data->address_waris2;
        $this->Id_Ktpwaris2 = $this->data->Id_Ktpwaris2;
        $this->jenis_kelaminwaris2 = $this->data->jenis_kelaminwaris2;
        $this->phone_numberwaris2 = $this->data->phone_numberwaris2;
        $this->blood_typewaris2 = $this->data->blood_typewaris2;
        $this->hubungananggota2 = $this->data->hubungananggota2;
        $this->foto_ktpwaris2 = $this->data->foto_ktpwaris2;

    }
}
