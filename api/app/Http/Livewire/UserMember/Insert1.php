<?php

namespace App\Http\Livewire\UserMember;

use App\Models\UserAccess;
use Illuminate\Support\Facades\Hash;
use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Models\UserMember;
use Illuminate\Support\Str;

class Insert1 extends Component
{
    use WithFileUploads;
    public $name,$name_kta,$email,$tempat_lahir,$tanggal_lahir,$region,$address,$city,$Id_Ktp,$jenis_kelamin,$phone_number,$blood_type,$foto_ktp,$foto_kk,$pas_foto,$bank_account_id,$iuran_tetap,$uang_pendaftaran,$file_konfirmasi,$koordinator_id,$payment_date;
    public $name_waris1,$tempat_lahirwaris1,$tanggal_lahirwaris1,$address_waris1,$Id_Ktpwaris1,$jenis_kelaminwaris1,$phone_numberwaris1,$blood_typewaris1,$hubungananggota1,$foto_ktpwaris1;
    public $name_waris2,$tempat_lahirwaris2,$tanggal_lahirwaris2,$address_waris2,$Id_Ktpwaris2,$jenis_kelaminwaris2,$phone_numberwaris2,$blood_typewaris2,$hubungananggota2,$foto_ktpwaris2;
    public $total_iuran_tetap,$total,$total_pembayaran; 
    public $namektp;
    public $namekk;
    public $namepasfoto;
    public $namefotoktpwaris1;
    public $namefotoktpwaris2;
    public $is_approve,$no_form;
    public $message,$provinsi_id,$kabupaten_id,$kabupaten_kota=[];
    public $messageWa,$umur,$extend_register1=false,$extend_register2=false;
    public $extend1_name,$extend1_name_kta,$extend1_no_ktp,$extend1_email,$extend1_no_telepon,$extend1_tempat_lahir,$extend1_tanggal_lahir,$extend1_alamat,$extend1_kota,$extend1_jenis_kelamin,$extend1_blood_type;
    public $extend2_name,$extend2_name_kta,$extend2_no_ktp,$extend2_email,$extend2_no_telepon,$extend2_tempat_lahir,$extend2_tanggal_lahir,$extend2_alamat,$extend2_kota,$extend2_jenis_kelamin,$extend2_blood_type;

     public $is_success=false;
     public $show_form1=true,$show_form2=false,$show_form3=false;

    public function render()
    {
        return view('livewire.user-member.insert')->with(
            ['access'=>UserAccess::all()]
        );
    }
    public function mount()
    {
        $this->no_form = date('ymd').\App\Models\UserMember::count();
    }
    public function updatedPas_foto()
    { 
        $this->validate([
            'pas_foto' => 'image|max:1024',
        ]);
    }
    public function updatedFoto_ktp()
    { 
        $this->validate([
            'foto_ktp' => 'image|max:1024',
        ]);
    }
    public function updatedFoto_kk()
    { 
        $this->validate([
            'foto_kk' => 'image|max:1024',
        ]);
    }
    public function updatedFile_konfirmasi()
    { 
        $this->validate([
            'file_konfirmasi' => 'image|max:1024',
        ]);
    }
    public function calculate_()
	{
		$this->total_iuran_tetap = $this->iuran_tetap * 10000;
		if($this->uang_pendaftaran!="") $this->total = $this->uang_pendaftaran;
		$this->total += $this->total_iuran_tetap;
	}
    public function hitungUmur()
	{
        $this->extend_register1=false;
        $this->extend_register2=false;
        $this->umur = hitung_umur($this->tanggal_lahir);
        if($this->umur >=65 and $this->umur <=74){ // di atas 65 dan di bawah 74 tahun wajib mendaftarkan satu anggota
            $this->extend_register1=true;
        }
        if($this->umur >=75){ // diatas 75 tahun wajib mendaftarkan 2 anggota
            $this->extend_register1=true;
            $this->extend_register2=true;
        }
    }
    public function changeProvinsi()
    {
        if($this->provinsi_id) 
            $this->kabupaten_kota = \App\Models\Kabupaten::select('kabupaten.id_kab','kabupaten.nama')->where('id_prov',$this->provinsi_id)->orderBy('nama','ASC')->get();
        else{
            $this->kabupaten_id = '';
            $this->kabupaten_kota = [];
        }
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
    public function save()
    { 
        $this->validate([
            'Id_Ktp'=>'required',
            'name' => 'required|string',
            'name_kta' => 'required|string',
            'phone_number'=> 'required|string',
            'tempat_lahir'=> 'required|string',
            'tanggal_lahir'=> 'required|date',
            'provinsi_id'=> 'required',
            'kabupaten_id'=> 'required',
            'address'=> 'required',
            'jenis_kelamin'=> 'required',
            'blood_type'=> 'required',
            'name_waris1'=>'required',
            'tempat_lahirwaris1'=>'required',
            'tanggal_lahirwaris1'=>'required',
            'address_waris1'=>'required',
            'Id_Ktpwaris1'=>'required',
            'jenis_kelaminwaris1'=>'required',
            'phone_numberwaris1'=>'required',
            'blood_typewaris1'=>'required',
            'hubungananggota1'=>'required',
            'foto_ktpwaris1'=>'required|image|max:1024',
            'bank_account_id'=> 'required',
            'iuran_tetap'=> 'required',
            'uang_pendaftaran'=> 'required',
            'pas_foto' => 'required|image|max:1024',
            'foto_ktp' => 'required|image|max:1024',
            'foto_kk' => 'required|image|max:1024',
            'file_konfirmasi' => 'required|image|max:1024',
            'koordinator_id'=>'required',
            'payment_date'=>'required',
            'no_form'=>'required'
        ]);

        $user = new \App\Models\User();
        $user->user_access_id = 4; // Member
        $user->name = $this->name;
        $user->email = $this->email;
        $user->telepon = $this->phone_number;
        $user->address = $this->address;
        $user->password = Hash::make('12345');
        $user->save();

        $data = new UserMember();
        //$data->status=2;
        $data->no_anggota_platinum = date('my').str_pad(\App\Models\UserMember::count(),5, '0', STR_PAD_LEFT);
        $data->tanggal_diterima = date('Y-m-d');
        $data->masa_tenggang = date('Y-m-d',strtotime("+6 months",strtotime($this->payment_date)));
        $data->name = $this->name;
        $data->name_kta = $this->name_kta;
        $data->email = $this->email;
        $data->tempat_lahir = $this->tempat_lahir;
        $data->tanggal_lahir = $this->tanggal_lahir;
        $data->region = $this->region;
        $data->address = $this->address;
        $data->city = $this->city;
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
        $data->name_waris2 = $this->name_waris2;
        $data->tempat_lahirwaris2 = $this->tempat_lahirwaris2;
        $data->tanggal_lahirwaris2 = $this->tanggal_lahirwaris2;
        $data->address_waris2 = $this->address_waris2;
        $data->Id_Ktpwaris2 = $this->Id_Ktpwaris2;
        $data->jenis_kelaminwaris2 = $this->jenis_kelaminwaris2;
        $data->phone_numberwaris2 = $this->phone_numberwaris2;
        $data->blood_typewaris2 = $this->blood_typewaris2;
        $data->hubungananggota2 = $this->hubungananggota2;
        $data->is_approve = 1;
        $data->admin_approval = 1;
        $data->ketua_approval = 1;
        $data->status = 2; // langsung approve ketika admin yang input
        $data->bank_account_id = $this->bank_account_id;
        $data->iuran_tetap = $this->iuran_tetap;
        $data->uang_pendaftaran = $this->uang_pendaftaran;
        $data->total_iuran_tetap = $this->total_iuran_tetap;
        $data->total_pembayaran = $this->total_pembayaran;
        $data->status_pembayaran = 1; // pembayaran pendaftaran lunas
        $data->provinsi_id = $this->provinsi_id;
        $data->kabupaten_id = $this->kabupaten_id;
        $data->koordinator_id = $this->koordinator_id;
        $data->no_form = $this->no_form;//date('ymd').\App\Models\UserMember::count(); //No Form
        if($this->foto_ktp!=""){
            $namektp = 'foto_ktp'.date('Ymdhis').'.'.$this->foto_ktp->extension();
            $this->foto_ktp->storePubliclyAs('public',$namektp);
            $data->foto_ktp = $namektp;
        }
        if($this->foto_kk!=""){
            $namekk = 'foto_kk'.date('Ymdhis').'.'.$this->foto_kk->extension();
            $this->foto_kk->storePubliclyAs('public',$namekk);
            $data->foto_kk = $namekk;
        }
        if($this->pas_foto!=""){
            $namepasfoto = 'pas_foto'.date('Ymdhis').'.'.$this->pas_foto->extension();
            $this->pas_foto->storePubliclyAs('public',$namepasfoto);
            $data->pas_foto = $namepasfoto;
        }
        if($this->foto_ktpwaris1!=""){
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
        if($this->file_konfirmasi !=""){
            $namefile_konfirmasi = 'file_konfirmasi'.date('Ymdhis').'.'.$this->file_konfirmasi->extension();
            $this->file_konfirmasi->storePubliclyAs('public',$namefile_konfirmasi);
            $data->file_konfirmasi = $namefile_konfirmasi;
            $data->tanggal_konfirmasi = date('Y-m-d');
        }
        $data->user_id = $user->id;
        $data->save();

        // Iuran
        $iuran = new \App\Models\Iuran();
        $iuran->user_member_id = $data->id;
        $iuran->type = 'Iuran';
        $iuran->nominal = $this->total_iuran_tetap;
        $iuran->from_periode = $this->payment_date;
        $iuran->to_periode = date('Y-m-d',strtotime("+6 months",strtotime($this->payment_date)));
        $iuran->bank_account_id = $this->bank_account_id;
        $iuran->file = $data->file_konfirmasi; 
        $iuran->payment_date = $this->payment_date;
        $iuran->status = 2;
        $iuran->save();

        // Uang Pendaftaran
        $iuran = new \App\Models\Iuran();
        $iuran->user_member_id = $data->id;
        $iuran->type = 'Uang Pendaftaran';
        $iuran->nominal = $this->uang_pendaftaran;
        $iuran->from_periode = $this->payment_date;
        $iuran->to_periode = date('Y-m-d',strtotime("+6 months",strtotime($this->payment_date)));
        $iuran->bank_account_id = $this->bank_account_id;
        $iuran->file = $data->file_konfirmasi; 
        $iuran->payment_date = $this->payment_date;
        $iuran->status = 2;
        $iuran->save();

        //anggota extends
        if($this->extend1_no_ktp != "")
        {
            $dataExtends1 = new UserMember();
            $dataExtends1->no_form = date('ymd').\App\Models\UserMember::count();
            $dataExtends1->name = $this->extend1_name;
            $dataExtends1->name_kta = $this->extend1_name_kta;
            $dataExtends1->email = $this->extend1_email;
            $dataExtends1->tempat_lahir = $this->extend1_tempat_lahir;
            $dataExtends1->tanggal_lahir = $this->extend1_tanggal_lahir;
            $dataExtends1->phone_number = $this->extend1_no_telepon;
            $dataExtends1->address = $this->extend1_alamat;
            $dataExtends1->city = $this->extend1_kota;
            $dataExtends1->Id_Ktp = $this->extend1_no_ktp;
            $dataExtends1->jenis_kelamin = $this->extend1_jenis_kelamin;
            $dataExtends1->blood_type = $this->extend1_blood_type;
            //$dataExtends1->is_approve = 0;
            $dataExtends1->status = 0;
            $dataExtends1->user_id_recomendation = $data->id;
            $dataExtends1->save();
        }
        if($this->extend2_no_ktp != "")
        {
            $dataExtends2 = new UserMember();
            $dataExtends2->no_form = date('ymd').\App\Models\UserMember::count();
            $dataExtends2->name = $this->extend2_name;
            $dataExtends2->name_kta = $this->extend2_name_kta;
            $dataExtends2->email = $this->extend2_email;
            $dataExtends2->tempat_lahir = $this->extend2_tempat_lahir;
            $dataExtends2->tanggal_lahir = $this->extend2_tanggal_lahir;
            $dataExtends2->phone_number = $this->extend2_no_telepon;
            $dataExtends2->address = $this->extend2_alamat;
            $dataExtends2->city = $this->extend2_kota;
            $dataExtends2->Id_Ktp = $this->extend2_no_ktp;
            $dataExtends2->jenis_kelamin = $this->extend2_jenis_kelamin;
            $dataExtends2->blood_type = $this->extend2_blood_type;
            //$dataExtends2->is_approve = 0;
            $dataExtends1->status = 0;
            $dataExtends1->user_id_recomendation = $data->id;
            $dataExtends2->save();
        }
        
       
        $messageWa  = "Kepada Yth Ibu/Bpak ".$data->name.",\n\nTerima kasih telah mendaftar sebagai Anggota di Yayasan Kematian Santa Maria, \nNomor Anggota : *".$data->no_anggota_platinum."*\n. Silahkan login dengan menggunakan username :".$user->email."\n dan password 12345 \n";
        $messageWa .= 'Masa Tunggu Klaim : '. date('d F Y',strtotime($data->masa_tenggang));
        sendNotifWa($messageWa, $this->phone_number);
        session()->flash('message-success',__('Data Anggota berhasil disimpan'));
        return redirect()->to('user-member');
    }
}
