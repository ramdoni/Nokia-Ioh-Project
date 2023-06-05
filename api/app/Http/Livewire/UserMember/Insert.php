<?php
namespace App\Http\Livewire\UserMember;

use App\Models\UserAccess;
use Illuminate\Support\Facades\Hash;
use Livewire\Component;
use Livewire\WithFileUploads;
use App\Models\UserMember;
use App\Models\Iuran;
use App\Models\User;
use Illuminate\Validation\Rule; 

class Insert extends Component 
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
	public $referal_code,$no_anggota_gold;
	public $status, $user_id_recomendation,$tanggal_diterima,$tanggal_diterima1,$tanggal_diterima2;
	public $extend1_form_no,$extend1_name, $extend1_name_kta, $extend1_email, $extend1_tempat_lahir, $extend1_tanggal_lahir, $extend1_region, $extend1_address, $extend1_city, $extend1_Id_Ktp, $extend1_jenis_kelamin, $extend1_phone_number, $extend1_blood_type, $extend1_foto_ktp, $extend1_foto_kk, $extend1_pas_foto, $extend1_name_waris1, $extend1_tempat_lahirwaris1, $extend1_tanggal_lahirwaris1, $extend1_address_waris1, $extend1_Id_Ktpwaris1, $extend1_jenis_kelaminwaris1, $extend1_phone_numberwaris1, $extend1_blood_typewaris1, $extend1_hubungananggota1, $extend1_foto_ktpwaris1, $extend1_name_waris2, $extend1_tempat_lahirwaris2, $extend1_tanggal_lahirwaris2, $extend1_address_waris2, $extend1_Id_Ktpwaris2, $extend1_jenis_kelaminwaris2, $extend1_phone_numberwaris2, $extend1_blood_typewaris2, $extend1_hubungananggota2, $extend1_foto_ktpwaris2, $extend1_namektp, $extend1_namekk, $extend1_namepasfoto, $extend1_namefotoktpwaris1, $extend1_namefotoktpwaris2;
	public $extend1_total_iuran_tetap=0,$extend1_total_sumbangan=0,$extend1_total_uang_pendaftaran=0,$extend1_total=0,$extend1_iuran_tetap,$extend1_sumbangan,$extend1_uang_pendaftaran;
	public $extend1_payment_date, $extend1_file_konfirmasi,$extend1_bank_account_id;
	public $extend2_form_no, $extend2_name, $extend2_name_kta, $extend2_email, $extend2_tempat_lahir, $extend2_tanggal_lahir, $extend2_region, $extend2_address, $extend2_city, $extend2_Id_Ktp, $extend2_jenis_kelamin, $extend2_phone_number, $extend2_blood_type, $extend2_foto_ktp, $extend2_foto_kk, $extend2_pas_foto, $extend2_name_waris1, $extend2_tempat_lahirwaris1, $extend2_tanggal_lahirwaris1, $extend2_address_waris1, $extend2_Id_Ktpwaris1, $extend2_jenis_kelaminwaris1, $extend2_phone_numberwaris1, $extend2_blood_typewaris1, $extend2_hubungananggota1, $extend2_foto_ktpwaris1, $extend2_name_waris2, $extend2_tempat_lahirwaris2, $extend2_tanggal_lahirwaris2, $extend2_address_waris2, $extend2_Id_Ktpwaris2, $extend2_jenis_kelaminwaris2, $extend2_phone_numberwaris2, $extend2_blood_typewaris2, $extend2_hubungananggota2, $extend2_foto_ktpwaris2, $extend2_namektp, $extend2_namekk, $extend2_namepasfoto, $extend2_namefotoktpwaris1, $extend2_namefotoktpwaris2;
	public $extend2_total_iuran_tetap=0,$extend2_total_sumbangan=0,$extend2_total_uang_pendaftaran=0,$extend2_total=0,$extend2_iuran_tetap,$extend2_sumbangan,$extend2_uang_pendaftaran;
	public $extend2_payment_date, $extend2_file_konfirmasi,$extend2_bank_account_id;
	public $messageKtpWaris1=0, $messageKtpWaris2=0, $messageKtpExtend1Waris1=0, $messageKtpExtend1Waris2=0, $messageKtpExtend2Waris1=0, $messageKtpExtend2Waris2=0;
	public $city_lainnya, $hubungananggota1_lainnya, $hubungananggota2_lainnya,$extend1_city_lainnya, $extend1_hubungananggota1_lainnya, $extend1_hubungananggota2_lainnya, $extend2_city_lainnya, $extend2_hubungananggota1_lainnya, $extend2_hubungananggota2_lainnya;
	public $koordinator_id1,$koordinator_id2,$messageKtp1,$messageKtp2;
	public $extend_register3,$extend_register4,$extend_register5;
	public $validate_form_1 = false,$validate_form_2=false,$validate_form_3=false,$validate_form_4=false,$validate_form_5=false;
	public $koordinator_nama,$koordinator_nik,$koordinator_hp,$koordinator_alamat;
	protected $listeners = ['save-all'=>'save_all'];

	public function render()
    {
        return view('livewire.user-member.insert')->with(
            ['access'=>UserAccess::all()]
        );
    }
    
	public function mount()
	{
		$this->tanggal_diterima = date('Y-m-d');
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
		//$this->form_no = date('ymd').\App\Models\UserMember::count();
	}
	
	public function calculate_()
	{
		if($this->uang_pendaftaran!="") $this->total = $this->uang_pendaftaran;
		$this->total_iuran_tetap = $this->iuran_tetap * get_setting('iuran_tetap');
		$this->total += $this->total_iuran_tetap;
	}

	public function hitungUmur()
	{
		$this->umur = hitung_umur($this->tanggal_lahir);
	}

	public function save()
    {
		$rules = [
			'Id_Ktp'=>['required',
								Rule::unique('user_member')->where(function($query) {
									$query->where('Id_Ktp', $this->Id_Ktp)->where('status', 2);
								})
							],
			'name' => 'required|string',
			'phone_number' => 'required',
			'tanggal_lahir' => 'required',
		];
		$message_rules = [
			"Id_Ktp.unique" => "Maaf No KTP sudah digunakan silahkan dicoba dengan No KTP yang lain.",
		];
		
		// validate payment_date if empty
		if(empty($this->payment_date)) $this->payment_date = date('Y-m-d');

    	$this->validate($rules,$message_rules);
		
		$password = generate_password($this->name,$this->tanggal_lahir);
		
		$counting =  get_setting('counting_no_anggota_new')+1;
		update_setting('counting_no_anggota_new',$counting);

		$no_anggota = date('ym',strtotime($this->tanggal_diterima)).str_pad($counting,6, '0', STR_PAD_LEFT);
		
    	$user = new User();
        $user->user_access_id = 4; // Member
        $user->nik = $this->Id_Ktp;
        $user->name = $this->name;
        $user->email = $this->email;
        $user->telepon = $this->phone_number;
        $user->address = $this->address;
        $user->password = Hash::make($password);
		$user->username = $no_anggota;
        $user->save();

        $data = new UserMember();
		$data->no_anggota_gold = $this->no_anggota_gold;
     	$data->no_form = $this->form_no;
     	$data->no_anggota_platinum = $no_anggota;
        $data->tanggal_diterima = $this->tanggal_diterima;
        $data->masa_tenggang = date('Y-m-d',strtotime("+6 months",strtotime($this->tanggal_diterima)));
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
     	$data->agama = $this->agama;
		
		$user_recomendation = UserMember::where('no_anggota_platinum',$this->user_id_recomendation)->first();
		if($user_recomendation) $data->user_id_recomendation = $user_recomendation->id;

		if($this->tanggal_lahirwaris1) $data->tanggal_lahirwaris1 = $this->tanggal_lahirwaris1;

     	$data->address_waris1 = $this->address_waris1;
     	$data->Id_Ktpwaris1 = $this->Id_Ktpwaris1;
     	$data->jenis_kelaminwaris1 = $this->jenis_kelaminwaris1;
     	$data->phone_numberwaris1 = $this->phone_numberwaris1;
     	$data->blood_typewaris1 = $this->blood_typewaris1;
     	$data->hubungananggota1 = $this->hubungananggota1;
     	$data->hubungananggota1_lainnya = $this->hubungananggota1_lainnya;
     	$data->name_waris2 = $this->name_waris2;
     	$data->tempat_lahirwaris2 = $this->tempat_lahirwaris2;
		
		 if($this->tanggal_lahirwaris2) $data->tanggal_lahirwaris2 = $this->tanggal_lahirwaris2;

     	$data->address_waris2 = $this->address_waris2;
     	$data->Id_Ktpwaris2 = $this->Id_Ktpwaris2;
     	$data->jenis_kelaminwaris2 = $this->jenis_kelaminwaris2;
     	$data->phone_numberwaris2 = $this->phone_numberwaris2;
     	$data->blood_typewaris2 = $this->blood_typewaris2;
     	$data->hubungananggota2 = $this->hubungananggota2;
     	$data->hubungananggota2_lainnya = $this->hubungananggota2_lainnya;
     	$data->is_approve = 1;
        $data->admin_approval = 1;
        $data->ketua_approval = 1;
        $data->status = 2; // langsung approve ketika admin yang input

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
        $data->status_pembayaran = 1; // pembayaran pendaftaran lunas
        $data->user_id = $user->id;
		$data->save();
		
		$this->is_success =true;
		
		$messageWa  = "Kepada Yth Ibu/Bpak ".$data->name.",\n\nTerima kasih telah mendaftar sebagai Anggota di Koperasi Karyawan Incoe, \nNomor Anggota : *".$data->no_anggota_platinum."*\n. Silahkan login dengan menggunakan username :". $data->no_anggota_platinum ."\n dan password {$password} \n";
        sendNotifWa($messageWa, $this->phone_number);
        
		session()->flash('message-success',__('Data Anggota berhasil disimpan'));
    }
}