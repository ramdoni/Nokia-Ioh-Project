<?php

namespace App\Http\Livewire\KetuaYayasan\Member;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\UserAccess;
use Illuminate\Support\Facades\Hash;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Models\UserMember;
use Illuminate\Support\Str;

class Approval extends Component
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
    public $approve, $reject;
    public $notes;

    protected $rules = [
        'name' => 'required|string',
        'name_kta' => 'required|string',
        'email' => 'required|string',
    ];
    protected $listeners = ['approve','reject'];

    public function render()
    {
        return view('livewire.ketua-yayasan.member.approval')
                        ->with([
                            'access' => UserAccess::all(),
                            'data' => $this->data
                        ]);
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
        $this->is_approve = $this->data->is_approve;    
    }

    public function save(){
        $this->validate();
        if($this->approve == 1){
            $this->data->ketua_approval = 1;
            $this->data->is_approve = 1;

            $user = new \App\Models\User();
	        $user->user_access_id = 4; // Member
            $user->nik = $this->Id_Ktp;
	        $user->name = $this->name;
	        $user->email = $this->email;
	        $user->telepon = $this->phone_number;
	        $user->address = $this->address;
	        $user->password = Hash::make('12345');
	        $user->save();

	    	$counting =  get_setting('counting_no_anggota_new')+1;
		    update_setting('counting_no_anggota_new',$counting);

            $no_anggota = date('ym').str_pad($counting,6, '0', STR_PAD_LEFT);

	        $this->data->no_anggota_platinum = $no_anggota;
        	$this->data->tanggal_diterima = date('Y-m-d');

        	$this->data->user_id = $user->id;

        }elseif($this->reject == -1)
        {
            $this->data->ketua_approval = -1;
            $this->data->is_approve = -1;
        }
        
        $this->data->save();
        /*
        if($this->is_approve == 1){
            $messageWa  = "Kepada Yth Ibu/Bpak ".$data->name.",\n\nTerima kasih telah mendaftar sebagai Anggota di Yayasan Kematian Santa Maria, \nNomor Anggota : *".$data->no_anggota_platinum."*\n. Silahkan login dengan menggunakan username :".$user->email.",\n dan password 12345 \n";
        }elseif ($this->is_approve == -1) {
            $messageWa = 'Mohon maaf, data anda belum berhasil di approve di Yayasan Kematian Santa Maria';
        }
        
        sendNotifWa($messageWa, $this->phone_number);
        */
        session()->flash('message-success',__('Data saved successfully'));
        
        return redirect()->to('ketua-yayasan');
    }
    
    public function approve()
    {
		$counting =  get_setting('counting_no_anggota_new')+1;

        $this->data->ketua_approval = 1;
        $this->data->status=2;
        $this->data->no_anggota_platinum = date('ym').str_pad($counting,6, '0', STR_PAD_LEFT);
        
		update_setting('counting_no_anggota_new',$counting);

        $this->data->tanggal_diterima = date('Y-m-d');
        $this->data->masa_tenggang = date('Y-m-d',strtotime("+5 months"));

        $password = generate_password($this->name, $this->tanggal_lahir);

        $user = new \App\Models\User();
        $user->user_access_id = 4; // Member
        $user->name = $this->name;
        $user->email = $this->email;
        $user->telepon = $this->phone_number;
        $user->address = $this->address;
        $user->password = Hash::make($password);
        $user->username =  $this->data->no_anggota_platinum;
        $user->save();

        $this->data->user_id = $user->id;
        $this->data->ketua_notes = $this->notes;
        $this->data->save();

        $message  = "Kepada Yth Ibu/Bpak {$this->data->name},\n\nTerima kasih telah mendaftar sebagai Anggota di Yayasan Kematian Santa Maria, \nNomor Anggota : *{$this->data->no_anggota_platinum}*\n. Silahkan login dengan menggunakan username :{$this->data->no_anggota_platinum},\n dan password {$password} \n";
        \Mail::to($this->data->email)->send(new \App\Mail\GeneralEmail("[YS SANTA MARIA] - Pendaftaran ". $this->data->no_form,$message));    

        session()->flash('message-success',__('Data dengan No Form : '. $this->data->no_form .' berhasil di Approve'));

        return redirect()->to('ketua-yayasan');
    }

    public function reject()
    {
        $this->data->ketua_approval = 1;
        $this->data->status=3;
        $this->data->ketua_notes = $this->notes;
        $this->data->save();

        $message = 'Mohon maaf, pengajuan keanggotaan Yayasan Kematian Santa Maria anda ditolak.';
        \Mail::to($this->data->email)->send(new \App\Mail\GeneralEmail("[YS SANTA MARIA] - Pendaftaran ". $this->data->no_form,$message));    

        session()->flash('message-success',__('Data dengan No Form : '. $this->data->no_form .' berhasil di Reject'));

        return redirect()->to('ketua-yayasan');
    }
}