<?php
namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithFileUploads;
use App\Models\UserMember;
use App\Models\User;
use App\Models\BankAccount;
use Illuminate\Validation\Rule; 
use Illuminate\Support\Facades\Hash;

class Register extends Component 
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
	public $total_iuran_tetap=0,$total_sumbangan=0,$total_uang_pendaftaran=0,$total=0,$messageKtp=0,$no_anggota_gold;
	public $referal_code;
	public $status, $user_id_recomendation;
	public $extend1_name, $extend1_name_kta, $extend1_email, $extend1_tempat_lahir, $extend1_tanggal_lahir, $extend1_region, $extend1_address, $extend1_city, $extend1_Id_Ktp, $extend1_jenis_kelamin, $extend1_phone_number, $extend1_blood_type, $extend1_foto_ktp, $extend1_foto_kk, $extend1_pas_foto, $extend1_name_waris1, $extend1_tempat_lahirwaris1, $extend1_tanggal_lahirwaris1, $extend1_address_waris1, $extend1_Id_Ktpwaris1, $extend1_jenis_kelaminwaris1, $extend1_phone_numberwaris1, $extend1_blood_typewaris1, $extend1_hubungananggota1, $extend1_foto_ktpwaris1, $extend1_name_waris2, $extend1_tempat_lahirwaris2, $extend1_tanggal_lahirwaris2, $extend1_address_waris2, $extend1_Id_Ktpwaris2, $extend1_jenis_kelaminwaris2, $extend1_phone_numberwaris2, $extend1_blood_typewaris2, $extend1_hubungananggota2, $extend1_foto_ktpwaris2, $extend1_namektp, $extend1_namekk, $extend1_namepasfoto, $extend1_namefotoktpwaris1, $extend1_namefotoktpwaris2;
	public $extend1_total_iuran_tetap=0,$extend1_total_sumbangan=0,$extend1_total_uang_pendaftaran=0,$extend1_total=0,$extend1_iuran_tetap,$extend1_sumbangan,$extend1_uang_pendaftaran;
	
	public $extend2_name, $extend2_name_kta, $extend2_email, $extend2_tempat_lahir, $extend2_tanggal_lahir, $extend2_region, $extend2_address, $extend2_city, $extend2_Id_Ktp, $extend2_jenis_kelamin, $extend2_phone_number, $extend2_blood_type, $extend2_foto_ktp, $extend2_foto_kk, $extend2_pas_foto, $extend2_name_waris1, $extend2_tempat_lahirwaris1, $extend2_tanggal_lahirwaris1, $extend2_address_waris1, $extend2_Id_Ktpwaris1, $extend2_jenis_kelaminwaris1, $extend2_phone_numberwaris1, $extend2_blood_typewaris1, $extend2_hubungananggota1, $extend2_foto_ktpwaris1, $extend2_name_waris2, $extend2_tempat_lahirwaris2, $extend2_tanggal_lahirwaris2, $extend2_address_waris2, $extend2_Id_Ktpwaris2, $extend2_jenis_kelaminwaris2, $extend2_phone_numberwaris2, $extend2_blood_typewaris2, $extend2_hubungananggota2, $extend2_foto_ktpwaris2, $extend2_namektp, $extend2_namekk, $extend2_namepasfoto, $extend2_namefotoktpwaris1, $extend2_namefotoktpwaris2;
	public $extend2_total_iuran_tetap=0,$extend2_total_sumbangan=0,$extend2_total_uang_pendaftaran=0,$extend2_total=0,$extend2_iuran_tetap,$extend2_sumbangan,$extend2_uang_pendaftaran;
	
	public $city_lainnya, $hubungananggota1_lainnya, $hubungananggota2_lainnya,$extend1_city_lainnya, $extend1_hubungananggota1_lainnya, $extend1_hubungananggota2_lainnya, $extend2_city_lainnya, $extend2_hubungananggota1_lainnya, $extend2_hubungananggota2_lainnya;
	public $extend_register3,$extend_register4,$extend_register5;
	public $validate_form_1 = false,$validate_form_2=false,$validate_form_3=false,$validate_form_4=false,$validate_form_5=false;

	protected $rules = [
        'name' => 'required|string',
        'name_kta' => 'required|string',
        'email' => 'required|string',
		'phone_number' => 'required',
		'iuran_tetap'=>'required',
		// 'sumbangan'=>'required',
		'uang_pendaftaran'=>'required|numeric|min:50000',
    ];

	protected $listeners = ['save-all'=>'save_all'];

	public function render()
    {
        return view('livewire.register')->layout('layouts.auth');
    }

	public function mount()
	{
		$this->form_no = date('ymd').UserMember::count();
	}

	public function save_all($num)
	{
		if($num==1) $this->validate_form_1 = true;
		if($num==2) $this->validate_form_2 = true;
		if($num==3) $this->validate_form_3 = true;
		if($num==4) $this->validate_form_4 = true;
		if($num==5) $this->validate_form_5 = true;
		
		if($this->umur >=65 and $this->umur <=74){ // di atas 65 dan di bawah 74 tahun wajib mendaftarkan satu anggota
            if($this->validate_form_1){
				$this->register();
			}
        }elseif($this->umur >=75 and $this->umur <= 79){ // diatas 75 tahun wajib mendaftarkan 2 anggota
            if($this->validate_form_1 and $this->validate_form_2 ){
				$this->register();
			}
        }elseif($this->umur>=80){
            if($this->validate_form_1==true and $this->validate_form_2==true and $this->validate_form_3==true and $this->validate_form_4==true and $this->validate_form_5==true){
				$this->register();
			}
		}
	}

	public function checkKTP()
	{
		if(empty($this->Id_Ktp)) return false;
		$check = UserMember::where('Id_Ktp',$this->Id_Ktp)->first();
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
		$this->form_no = date('ymd').UserMember::count();
	}

	public function calculate_()
	{
		$this->total_iuran_tetap = $this->iuran_tetap * get_setting('iuran_tetap');
		$this->total_sumbangan = $this->sumbangan * get_setting('sumbangan');
		if($this->uang_pendaftaran!="") $this->total = $this->uang_pendaftaran;
		$this->total += $this->total_iuran_tetap;
		$this->total += $this->total_sumbangan;
	}
	
	public function form1()
	{
		$this->show_form1=true;
		$this->show_form2=false;
	}
	public function form2()
	{
		$rules = [
			'Id_Ktp'=>['required',
								Rule::unique('user_member')->where(function($query) {
									$query->where('Id_Ktp', $this->Id_Ktp)->where('status', 2);
								})
							],
			'name' => 'required|string',
			'name_kta' => 'required|string',
			'phone_number' => 'required',
			'iuran_tetap'=>'required',
			// 'sumbangan'=>'required',
			'uang_pendaftaran'=>'required|numeric|min:50000',
			'tanggal_lahir' => 'required',
			'email' => 'required',
		];
		$message_rules = [
			"Id_Ktp.unique" => "Maaf No KTP sudah digunakan silahkan dicoba dengan No KTP yang lain.",
			"uang_pendaftaran.min" => "Minimal uang pendaftaran Rp. 50.000,-"
		];

		$this->validate($rules,$message_rules);
		
		$this->show_form1=false;
		$this->show_form2=true;
		$this->show_form3=false;
	}
	public function form3()
	{
		$this->emit('counting_form');
		$this->emit('validate-rekomendasi');
	}
	public function hitungUmur()
	{
		$this->umur = hitung_umur($this->tanggal_lahir);
		$this->extend_register1=false;
        $this->extend_register2=false;

        if($this->umur >=65 and $this->umur <=74){ // di atas 65 dan di bawah 74 tahun wajib mendaftarkan satu anggota
            $this->extend_register1=true;
        }
        if($this->umur >=75 and $this->umur <=79){ // diatas 75 dan 79 tahun wajib mendaftarkan 2 anggota
            $this->extend_register1=true;
            $this->extend_register2=true;
        }
		if($this->umur >=80){ // diatas 80 >= wajib mendaftarkan 5 orang
            $this->extend_register1=true;
            $this->extend_register2=true;
            $this->extend_register3=true;
            $this->extend_register4=true;
            $this->extend_register5=true;
        }
    	
	}

	public function register()
    {
		$rules = [
			'Id_Ktp'=>['required',
								Rule::unique('user_member')->where(function($query) {
									$query->where('Id_Ktp', $this->Id_Ktp)->where('status', 2);
								})
							],
			'name' => 'required|string',
			'name_kta' => 'required|string',
			'phone_number' => 'required',
			'iuran_tetap'=>'required',
			// 'sumbangan'=>'required',
			'uang_pendaftaran'=>'required|numeric|min:50000',
			'tanggal_lahir' => 'required',
			'email' => 'required',
		];
		$message_rules = [
			"Id_Ktp.unique" => "Maaf No KTP sudah digunakan silahkan dicoba dengan No KTP yang lain.",
			"uang_pendaftaran.min" => "Minimal uang pendaftaran Rp. 50.000,-"
		];
    	
		$this->validate($rules,$message_rules);
		
		$password = generate_password($this->name,$this->tanggal_lahir);
        
		$user = new User();
        $user->user_access_id = 4; // Member
        $user->nik = $this->Id_Ktp;
        $user->name = $this->name;
        $user->email = $this->email;
        $user->telepon = $this->phone_number;
        $user->address = $this->address;
        $user->password = Hash::make($password);
		// $user->username = $no_anggota;
        $user->save();

		$data = new UserMember($rules,$message_rules);
		$data->no_anggota_gold = $this->no_anggota_gold;
     	$data->no_form = $this->form_no;
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
		$data->iuran_tetap = $this->iuran_tetap;
		$data->total_iuran_tetap = $this->total_iuran_tetap;
		$data->sumbangan = $this->sumbangan;
		$data->total_sumbangan = $this->total_sumbangan;
		$data->uang_pendaftaran = $this->uang_pendaftaran;
		$data->total_pembayaran = $this->total;
		
		if($this->referal_code !="") {
			$kord = User::where('referal_code',$this->referal_code)->first();
			if($kord){
				$dataMember = UserMember::where('user_id',$kord->id)->first();
				$data->koordinator_id = $dataMember->id;
			}
		}
		$data->save();

		if($this->extend1_Id_Ktp !=""){
			$dataExtends1 = new UserMember();
			$dataExtends1->no_form = date('ymd').\App\Models\UserMember::count();
			$dataExtends1->status = 0;
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
			
			$dataExtends1->iuran_tetap = $this->extend1_iuran_tetap;
			$dataExtends1->total_iuran_tetap = $this->extend1_total_iuran_tetap;
			$dataExtends1->sumbangan = $this->extend1_sumbangan;
			$dataExtends1->total_sumbangan = $this->extend1_total_sumbangan;
			$dataExtends1->uang_pendaftaran = $this->extend1_uang_pendaftaran;
			$dataExtends1->total_pembayaran = $this->extend1_total;
			$dataExtends1->save();
		}
		
		if($this->extend2_Id_Ktp !=""){
			$dataExtends2 = new UserMember();
			$dataExtends2->no_form = date('ymd').(\App\Models\UserMember::count()+1);
			$dataExtends2->status = 0;
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
			$dataExtends2->iuran_tetap = $this->extend2_iuran_tetap;
			$dataExtends2->total_iuran_tetap = $this->extend2_total_iuran_tetap;
			$dataExtends2->sumbangan = $this->extend2_sumbangan;
			$dataExtends2->total_sumbangan = $this->extend2_total_sumbangan;
			$dataExtends2->uang_pendaftaran = $this->extend2_uang_pendaftaran;
			$dataExtends2->total_pembayaran = $this->extend2_total;

			$dataExtends2->save();
		}
		

		$messageWa = "Pendaftaran anda akan segera kami proses, silahkan melakukan pembayaran pada salah satu Rekening Kami dibawah ini, dengan nominal : *Rp. ".format_idr($this->total)."*\n\n";
		//$messageWa .= "\nSilahkan lakukan pembayaran ke Nomor Rekening Perusahan dibawah ini\n\n";
		foreach(BankAccount::all() as $bank){
			$messageWa .= $bank->bank .' '. $bank->no_rekening .' an '. $bank->owner ."\n";
		}
		$messageWa  .= "\nKonfirmasi Pembayaran : \n<a href=\"". route('konfirmasi-pembayaran')."?s=". $this->form_no ."\">".route('konfirmasi-pembayaran')."?s=". $this->form_no ."</a>";        
        sendNotifWa($messageWa, $this->phone_number);
        
		\Mail::to($data->email)->send(new \App\Mail\GeneralEmail("[YS SANTA MARIA] - Pendaftaran Anggota",$messageWa));    

		if($this->validate_form_1){ $this->emit('save_rekomendasi',['num'=>1,'id'=>$data->id,'koordinator_id'=>$data->koordinator_id]);}
		if($this->validate_form_2){ $this->emit('save_rekomendasi',['num'=>2,'id'=>$data->id,'koordinator_id'=>$data->koordinator_id]);}
		if($this->validate_form_3){ $this->emit('save_rekomendasi',['num'=>3,'id'=>$data->id,'koordinator_id'=>$data->koordinator_id]);}
		if($this->validate_form_4){ $this->emit('save_rekomendasi',['num'=>4,'id'=>$data->id,'koordinator_id'=>$data->koordinator_id]);}
		if($this->validate_form_5){ $this->emit('save_rekomendasi',['num'=>5,'id'=>$data->id,'koordinator_id'=>$data->koordinator_id]);}

        // if($this->extend1_Id_Ktp !=""){
        // 	$messageWaextend1 = "Pendaftaran anda akan segera kami proses, silahkan melakukan pembayaran pada salah satu Rekening Kami dibawah ini, dengan nominal : *Rp. ".format_idr($this->extend1_total)."*\n\n";
		// 	foreach(\App\Models\BankAccount::all() as $bank){
		// 		$messageWaextend1 .= $bank->bank .' '. $bank->no_rekening .' an '. $bank->owner ."\n";
		// 	}
		// 	$messageWaextend1  .= "\nKonfirmasi Pembayaran : \n<a href=\"". route('konfirmasi-pembayaran')."?s=". $dataExtends1->no_form ."\">".route('konfirmasi-pembayaran')."?s=". $dataExtends1->no_form ."</a>";        
	    //     sendNotifWa($messageWaextend1, $this->extend1_phone_number);
        // }
        // if($this->extend2_Id_Ktp !=""){
        // 	$messageWaextend2 = "Pendaftaran anda akan segera kami proses, silahkan melakukan pembayaran pada salah satu Rekening Kami dibawah ini, dengan nominal : *Rp. ".format_idr($this->extend2_total)."*\n\n";
		// 	foreach(\App\Models\BankAccount::all() as $bank){
		// 		$messageWaextend2 .= $bank->bank .' '. $bank->no_rekening .' an '. $bank->owner ."\n";
		// 	}
		// 	$messageWaextend2  .= "\nKonfirmasi Pembayaran : \n<a href=\"". route('konfirmasi-pembayaran')."?s=". $dataExtends2->no_form ."\">".route('konfirmasi-pembayaran')."?s=". $dataExtends2->no_form ."</a>";        
	    //     sendNotifWa($messageWaextend2, $this->extend2_phone_number);
        // }

		$this->is_success =true;
        //session()->flash('message-success',__('Data saved successfully'));
        //return redirect()->to('login');
    }
}