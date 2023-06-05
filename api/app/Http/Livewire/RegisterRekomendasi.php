<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\UserMember;
use App\Models\BankAccount;
use Illuminate\Validation\Rule; 

class RegisterRekomendasi extends Component
{
    public $num;
    public $form_no,$Id_Ktp,$name,$name_kta,$email,$koordinator_id,$messageKtp,$city,$city_lainnya,$tempat_lahir,$tanggal_lahir,$address,$jenis_kelamin;
    public $blood_type,$phone_number,$foto_ktp,$foto_kk,$pas_foto,$iuran_tetap,$total_iuran_tetap,$total_sumbangan,$uang_pendaftaran,$total,$sumbangan;
    public $payment_date,$bank_account_id,$file_konfirmasi,$tanggal_diterima,$umur;
    public $Id_Ktpwaris1,$address_waris1,$messageKtpWaris1,$name_waris1,$tempat_lahirwaris1,$tanggal_lahirwaris1,$phone_numberwaris1,$blood_typewaris1,$hubungananggota1,$hubungananggota1_lainnya,$foto_ktpwaris1,$jenis_kelaminwaris1;
    public $Id_Ktpwaris2,$address_waris2,$messageKtpWaris2,$name_waris2,$tempat_lahirwaris2,$tanggal_lahirwaris2,$phone_numberwaris2,$blood_typewaris2,$hubungananggota2,$hubungananggota2_lainnya,$foto_ktpwaris2,$jenis_kelaminwaris2;
    public $form_error=false,$no_anggota_gold;
    protected $listeners = ['validate-rekomendasi'=>'validate_','save_rekomendasi'=>'save'];

    public function render()
    {
        return view('livewire.register-rekomendasi');
    }

    public function mount($num)
    {
        $this->num = $num;
    }

    public function checkKTP()
    {
        if(!$this->Id_Ktp) return false;

        $find = UserMember::where(['Id_Ktp'=>$this->Id_Ktp,'status'=>2])->first();
        if($find) 
            $this->messageKtp = 1;
        else
            $this->messageKtp = 2;
    }

    public function updated($propertyName)
    {
        if($propertyName == 'tanggal_lahir'){
            $this->umur = hitung_umur($this->$propertyName);
        }
    }

    public function calculate_()
	{
		$this->total_iuran_tetap = $this->iuran_tetap * get_setting('iuran_tetap');
		$this->total_sumbangan = $this->sumbangan * get_setting('sumbangan');
		
        $this->total = $this->uang_pendaftaran?$this->uang_pendaftaran : 0;
        $this->total += $this->total_iuran_tetap;
		$this->total += $this->total_sumbangan;
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
			$checkWaris1 = UserMember::where('Id_Ktpwaris1',$this->Id_Ktpwaris1)->first();
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
				$checkWaris2 = UserMember::where('Id_Ktpwaris2',$this->Id_Ktpwaris1)->first();
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
		$check = UserMember::where('Id_Ktp',$this->Id_Ktpwaris2)->first();
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
			$checkWaris1 = UserMember::where('Id_Ktpwaris1',$this->Id_Ktpwaris2)->first();
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
				$checkWaris2 = UserMember::where('Id_Ktpwaris2',$this->Id_Ktpwaris2)->first();
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

    public function validate_()
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
            // 'tanggal_diterima' => 'required',
            // 'koordinator_id' => 'required',
            'umur'=>'max:50'
        ];

        $message_rules = [
            "Id_Ktp.unique" => "Maaf No KTP sudah digunakan silahkan dicoba dengan No KTP yang lain.",
            "Id_Ktp.required" => "No KTP harus diisi.",
            "uang_pendaftaran.min" => "Minimal uang pendaftaran Rp. 50.000,-",
            "umur.max" => "Umur data rekomendasi maksimal 50 tahun"
        ];

        try {
            $this->validate($rules,$message_rules);
            $this->emit('save-all',$this->num);
        } catch (\Illuminate\Validation\ValidationException $e) {
           // $validator = $e->validator;
            $message = $this->num ."\n";
            foreach($e->errors() as $k => $errors){
                foreach($errors as $msg) $message .= isset($msg) ? $msg."\n" : '';
            }
            if(!empty($message)) $this->emit('go-to-div',$this->num);
            throw $e;
        }
    }

    public function save($param)
    {
        if($param['num']!=$this->num) return false;
		$this->koordinator_id  = $param['koordinator_id'];
        $data = new UserMember();
        $data->user_member_rekomendasi_id = $param['id'];
		$data->no_anggota_gold = $this->no_anggota_gold;
     	$data->no_form = date('ymd').(UserMember::count()+1);
     	// $data->no_anggota_platinum = $no_anggota;
        // $data->tanggal_diterima = $this->tanggal_diterima;
        // $data->masa_tenggang = date('Y-m-d',strtotime("+6 months",strtotime($this->tanggal_diterima)));
     	$data->name = $this->name;
     	$data->name_kta = $this->name_kta;
     	$data->email = $this->email;
     	$data->tempat_lahir = $this->tempat_lahir;
     	$data->tanggal_lahir = $this->tanggal_lahir;
     	// $data->region = $this->region;
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
     	// $data->is_approve = 1;
        // $data->admin_approval = 1;
        // $data->ketua_approval = 1;
        // $data->status = 2; // langsung approve ketika admin yang input

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
		
        
		// $data->bank_account_id = $this->bank_account_id;
		$data->iuran_tetap = $this->iuran_tetap;
		$data->total_iuran_tetap = $this->total_iuran_tetap;
		$data->sumbangan = $this->sumbangan;
		$data->total_sumbangan = $this->total_sumbangan;
		$data->uang_pendaftaran = $this->uang_pendaftaran;
		$data->total_pembayaran = $this->total;
        $data->status_pembayaran = 0; // pembayaran pendaftaran lunas
		$data->koordinator_id = $this->koordinator_id;		
		// $data->koordinator_id = \Auth::user()->employee->id;		

        // $data->user_id = $user->id;
		$data->save();

        if($this->Id_Ktp !=""){
        	$messageWa = "Pendaftaran anda akan segera kami proses, silahkan melakukan pembayaran pada salah satu Rekening Kami dibawah ini, dengan nominal : *Rp. ".format_idr($this->total)."*\n\n";
			foreach(BankAccount::all() as $bank){
				$messageWa .= $bank->bank .' '. $bank->no_rekening .' an '. $bank->owner ."\n";
			}
			$messageWa  .= "\nKonfirmasi Pembayaran : \n<a href=\"". route('konfirmasi-pembayaran')."?s=". $data->no_form ."\">".route('konfirmasi-pembayaran')."?s=". $data->no_form ."</a>";        
	        sendNotifWa($messageWa, $this->phone_number);
        }

		// Iuran
        // $bulan = date('m',strtotime($this->tanggal_diterima));
        // $tahun = date('Y',strtotime($this->tanggal_diterima));
        // for($count=1;$data->iuran_tetap>=$count;$count++){
        //     if($bulan>12){ // jika sudah melebihi 12 bulan maka balik ke bulan ke 1 tapi tahun bertambah
        //         $bulan = 1;
        //         $tahun++;
        //     }
		// 	// Iuran
		// 	$iuran = new Iuran();
		// 	$iuran->user_member_id = $data->id;
		// 	$iuran->type = 'Iuran';
		// 	$iuran->nominal = $data->total_iuran_tetap;
		// 	$iuran->from_periode = $data->tanggal_diterima;
		// 	$iuran->to_periode = date('Y-m-d',strtotime("+".($data->iuran_tetap-1)." months",strtotime($this->tanggal_diterima)));
		// 	$iuran->bank_account_id = $this->bank_account_id;
		// 	$iuran->file = $data->file_konfirmasi; 
		// 	$iuran->payment_date = $this->payment_date ? $this->payment_date : null;
		// 	$iuran->status = 2;
		// 	$iuran->bulan = $bulan;
		// 	$iuran->tahun = $tahun;
        //     $iuran->iuran_pertama = 1;
		// 	$iuran->save();

		// 	$bulan++;
		// }
		
		//$messageWa  = "Kepada Yth Ibu/Bpak ".$data->name.",\n\nTerima kasih telah mendaftar sebagai Anggota di Yayasan Kematian Santa Maria, \nNomor Anggota : *".$data->no_anggota_platinum."*\n. Silahkan login dengan menggunakan username :". $data->no_anggota_platinum ."\n dan password {$password} \n";
        //$messageWa .= 'Masa Tunggu Klaim : '. date('d F Y',strtotime($data->masa_tenggang));
        //sendNotifWa($messageWa, $this->phone_number);
    }
}
