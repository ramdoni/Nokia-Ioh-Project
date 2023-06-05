<?php

namespace App\Http\Livewire\Migration;

use App\Models\City;
use App\Models\User;
use Livewire\Component;
use Livewire\WithFileUploads;
use App\Models\UserMember;
use App\Models\Iuran;
use App\Models\UserMemberAhliWaris;
use Illuminate\Support\Facades\Hash;

class Index extends Component
{
    use WithFileUploads;

    public $file;

    public function render()
    {
        return view('livewire.migration.index');
    }

    public function save()
    {
        set_time_limit(100000); // 
        $path = $this->file->getRealPath();
        $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
        $reader->setReadDataOnly(true);
        $data = $reader->load($path);
        $sheetData = $data->getActiveSheet()->toArray();
        $bulan = ['januari' => 'January','februari' => 'February','maret'=>'March','april'=>'April','mei'=>'May','juni'=>'June','juli'=>'July','agustus'=>'August','september'=>'September','oktober'=>'October','november'=>'November','desember'=>'December'];
        if(count($sheetData) > 0){
            foreach($sheetData as $key => $i){
                if($key<2) continue; // skip header

                $no_form = $i[0];
                $no_anggota_koordinator = $i[1];
                $nama_koordinator = $i[2];
                $alias_koordinator = $i[3];
                $tanggal_diterima = ($i[4]) ? @\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($i[4])->format('Y-m-d') : '';
                $keanggotaan_baru = ($i[5]) ? @\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($i[5])->format('Y-m-d') : '';
                $status = $i[6];
                $nama = $i[7];
                $no_anggota = $i[8];

                // $ex_no_gold = $i[6];
                // $tempat_tanggal_lahir = explode(",",$i[11]);
                // $alamat = $i[12];
                // $golongan_darah = $i[13];
                // $kota = $i[14];
                // $jenis_kelamin = $i[15];
                // $no_ktp = $i[16];
                // $no_telepon = $i[17];
                // $agama = $i[18];
                $tgl_meninggal = ($i[19]) ? @\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($i[19])->format('Y-m-d') : '';
                // $ahli1_nama = $i[20];
                // $ahli1_alamat = $i[21];
                // $ahli1_tempat_tanggal_lahir = explode(",",$i[22]);
                // $ahli1_golongan_darah = $i[23];
                // $ahli1_jenis_kelamin = $i[24];
                // $ahli1_no_ktp = $i[25];
                // $ahli1_no_telp = $i[26];
                // $ahli1_hubungan = $i[27];
                // $ahli2_nama = $i[28];
                // $ahli2_alamat = $i[29];
                // $ahli2_tempat_tanggal_lahir = explode(',',$i[30]);
                // $ahli2_golongan_darah = $i[31];
                // $ahli2_jenis_kelamin = $i[32];
                // $ahli2_no_ktp = $i[33];
                // $ahli2_no_telp = $i[34];
                // $ahli2_hubungan = $i[35];
                // $iuran = $i[36];
                // $sumbangan = $i[37];
                // $pendaftaran = $i[38];
                // $jumlah_bulan = $i[39];
                // $total = $i[40];
                // $ins2019 = $i[41];
                // $ins2020 = $i[42];
                // $ins2021 = $i[43];
                // $keterangan = $i[44];
                // $tanggal_keluar  = ($i[45]) ? @\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($i[45])->format('Y-m-d') : '';
                // $alasan_keluar  = $i[46];

                // find anggota
                $anggota = UserMember::where('no_anggota_platinum',$no_anggota)->first();
                if($anggota){
                    switch($status){
                        case "Aktif":
                            $anggota->status = 2;
                        break;
                        case "Meninggal":
                            if($tgl_meninggal) $data->tanggal_meninggal = $tgl_meninggal;
                            $anggota->status = 4;
                        break;
                    }

                    $anggota->save();
                }
                continue;

                // if($anggota){
                //     // Iuran
                //     $bulan = date('m',strtotime($anggota->tanggal_diterima));
                //     $tahun = date('Y',strtotime($anggota->tanggal_diterima));

                //     $iuran_tetap = substr($jumlah_bulan,0,1);
                //     if($iuran_tetap){
                //         for($count=0;$iuran_tetap>$count;$count++){
                //             // if($bulan>12){ // jika sudah melebihi 12 bulan maka balik ke bulan ke 1 tapi tahun bertambah
                //             //     $bulan = 1;
                //             //     $tahun++;
                //             // }
                //             $bulan = date('m',strtotime("+".$count." months",strtotime($anggota->tanggal_diterima)));
                //             $tahun = date('Y',strtotime("+".$count." months",strtotime($anggota->tanggal_diterima)));
                //             // Iuran
                //             $iuran_ = new Iuran();
                //             $iuran_->user_member_id = $anggota->id;
                //             $iuran_->type = 'Iuran';
                //             $iuran_->nominal = $iuran;
                //             $iuran_->from_periode = $anggota->tanggal_diterima;
                //             $iuran_->to_periode = date('Y-m-d',strtotime("+6 months",strtotime($anggota->tanggal_diterima)));
                //             // $iuran->bank_account_id = $this->bank_account_id;
                //             // $iuran->file = $data->file_konfirmasi; 
                //             $iuran_->payment_date = $anggota->tanggal_diterima ? $anggota->tanggal_diterima : null;
                //             $iuran_->status = 2;
                //             $iuran_->bulan = $bulan;
                //             $iuran_->tahun = $tahun;
                //             $iuran_->iuran_pertama = 1;
                //             $iuran_->save();
                //         }
                //     }
                // }
                
                // continue;

                // // find koordinator
                // $koordinator_id = UserMember::select('user_member.*')->where('user_member.no_anggota_platinum',$no_anggota_koordinator)->join('users','users.id','=','user_member.user_id')->first();

                // if(!$koordinator_id and $no_anggota_koordinator){
                    
                //     $password = generate_password($nama_koordinator,date('Y-m-d'));

                //     $user_koordinator = new User();
                //     $user_koordinator->name = $nama_koordinator;
                //     $user_koordinator->user_access_id = 3;
                //     $user_koordinator->password = Hash::make($password);
                //     $user_koordinator->save();

                //     $koordinator_id = new UserMember();
                //     $koordinator_id->no_anggota_platinum = $no_anggota_koordinator;
                //     $koordinator_id->name = $nama_koordinator;
                //     $koordinator_id->user_id = $user_koordinator->id;
                //     $koordinator_id->status = 2;
                //     $koordinator_id->is_approve = 1;
                //     $koordinator_id->save();
                // }
                // // find anggota
                // $data = UserMember::where('no_anggota_platinum',$no_anggota)->first();
                // if($data){
                //     if(isset($koordinator_id->id)) {
                //         $data->koordinator_id = $koordinator_id->id;
                //         $data->save();
                //     }
                // }

                // continue;


                
                
                // if($no_form=="" or $nama =="") continue;

                // $data = UserMember::where('no_anggota_platinum',$no_anggota)->first();
                // $is_new = false;
                // // find Koordinator
                // $koordinator_id = UserMember::select('user_member.*')->where('user_member.no_anggota_platinum',$no_anggota_koordinator)->join('users','users.id','=','user_member.user_id')->first();
                    
                // if(!$koordinator_id and $no_anggota_koordinator!=0){
                //     $password = generate_password($nama_koordinator,date('Y-m-d'));

                //     $user_koordinator = new User();
                //     $user_koordinator->name = $nama_koordinator;
                //     $user_koordinator->user_access_id = 3;
                //     $user_koordinator->password = Hash::make($password);
                //     $user_koordinator->save();

                //     $koordinator_id = new UserMember();
                //     $koordinator_id->no_anggota_platinum = $no_anggota_koordinator;
                //     $koordinator_id->name = $nama_koordinator;
                //     $koordinator_id->user_id = $user_koordinator->id;
                //     $koordinator_id->status = 2;
                //     $koordinator_id->is_approve = 1;
                //     $koordinator_id->save();
                // }

                // $tempat_lahir = @$tempat_tanggal_lahir[0];
                // $tanggal_lahir = strtolower(@$tempat_tanggal_lahir[1]);
                
                // foreach($bulan as $k => $b){
                //     $tanggal_lahir = str_replace($k,$b,$tanggal_lahir);
                // }
                // $tanggal_lahir = date('Y-m-d',strtotime($tanggal_lahir));
                
                // // find city
                // $city = City::where('name',"LIKE","%{$kota}%")->first();
                // if(!$city)
                //     $city  = 'OTHER';
                // else 
                //     $city = $city->code;;

                // if(!$data){
                //     $password = generate_password($nama,$tanggal_lahir);

                //     $user = new User();
                //     $user->user_access_id = 4; // Member
                //     $user->nik = $no_ktp;
                //     $user->name = $nama;
                //     $user->telepon = $no_telepon;
                //     $user->address = $alamat;
                //     $user->password = Hash::make($password);
                //     $user->username = $no_anggota;
                //     $user->save();
                //     $is_new = true;
                //     $data = new UserMember();
                //     $data->user_id = $user->id;
                // }

                // $data->no_anggota_platinum = $no_anggota;
                // $data->no_anggota_gold = $ex_no_gold;
                // $data->no_form  = $no_form;
                // if(isset($koordinator_id->id)) $data->koordinator_id = $koordinator_id->id;
                // $data->tanggal_diterima = $tanggal_diterima;
                // if($keanggotaan_baru) $data->tanggal_keanggotaan_baru = $keanggotaan_baru;
                // $data->name = $nama;
                // $data->name_kta = $nama;
                // $data->tempat_lahir = $tempat_lahir;
                // $data->tanggal_lahir = $tanggal_lahir;
                // $data->address = $alamat;
                // $data->blood_type = $golongan_darah;
                // $data->city = $city;
                // $data->jenis_kelamin = $jenis_kelamin == 'L' ? 'Laki-laki' : 'Perempuan';
                // $data->Id_Ktp = $no_ktp;
                // $data->phone_number = $no_telepon;
                // $data->agama = $agama;

                // if($tgl_meninggal) $data->tanggal_meninggal = date('Y-m-d',strtotime($tgl_meninggal));

                // $data->name_waris1 = $ahli1_nama;
                // $data->address_waris1 = $ahli1_alamat;
                // $data->tempat_lahirwaris1 = @$ahli1_tempat_tanggal_lahir[0];
                // $data->tanggal_lahirwaris1 = @date('Y-m-d',strtotime($ahli1_tempat_tanggal_lahir[1]));
                // $data->blood_typewaris1 = $ahli1_golongan_darah;
                // $data->jenis_kelaminwaris1 = $ahli1_jenis_kelamin=="L" ? "Laki-laki" : 'Perempuan';
                // $data->Id_Ktpwaris1 = $ahli1_no_ktp;
                // $data->phone_numberwaris1 = $ahli1_no_telp;
                // $data->hubungananggota1 = $ahli1_hubungan;
                // $data->name_waris2 = $ahli2_nama;
                // $data->address_waris2 = $ahli2_alamat;
                // $data->tempat_lahirwaris2 = @$ahli2_tempat_tanggal_lahir[0];
                // $data->tanggal_lahirwaris2 = date('Y-m-d',strtotime(@$ahli2_tempat_tanggal_lahir[1]));
                // $data->blood_typewaris2 = $ahli2_golongan_darah;
                // $data->jenis_kelaminwaris2 = $ahli2_jenis_kelamin=="L" ? "Laki-laki" : "Perempuan";
                // $data->Id_Ktpwaris2 = $ahli2_no_ktp;
                // $data->phone_numberwaris2 = $ahli2_no_telp;
                // $data->hubungananggota2 = $ahli2_hubungan;
                // $data->total_iuran_tetap = (int)$iuran;
                // $data->sumbangan = (int)$sumbangan;
                // $data->uang_pendaftaran = (int)$pendaftaran;
                // $data->total_pembayaran = (int)$total;
                // $data->jumlah_bulan = $jumlah_bulan;
                // if($tanggal_keluar) $data->tanggal_keluar = date('Y-m-d',strtotime($tanggal_keluar));
                // $data->alasan_keluar = $alasan_keluar;

                // if($tanggal_keluar){
                //     $data->status = 5;
                //     $data->is_approve = 1;
                // }else if($tanggal_diterima){
                //     $data->status = 2;
                //     $data->is_approve = 1;
                // }

                // if($ins2019) $data->ins2019 = $ins2019;
                // if($ins2020) $data->ins2020 = $ins2020;
                // if($ins2021) $data->ins2021 = $ins2021;
                
                // $data->save();

                // if($is_new){
                //     $ahliwaris = new UserMemberAhliWaris();
                //     $ahliwaris->user_member_id = $data->id;
                //     $ahliwaris->name = $ahli1_nama;
                //     $ahliwaris->no_ktp = $ahli1_no_telp;
                //     $ahliwaris->tempat_lahir = @$ahli1_tempat_tanggal_lahir[0];;
                //     $ahliwaris->tanggal_lahir = @date('Y-m-d',strtotime($ahli1_tempat_tanggal_lahir[1]));
                //     $ahliwaris->no_telepon = $ahli1_no_telp;
                //     $ahliwaris->alamat = $ahli1_alamat;
                //     $ahliwaris->jenis_kelamin = $ahli1_jenis_kelamin=="L" ? "Laki-laki" : 'Perempuan';
                //     $ahliwaris->golongan_darah = $ahli1_golongan_darah;
                //     $ahliwaris->hubungan = $ahli1_hubungan;
                //     $ahliwaris->save();

                //     $ahliwaris = new UserMemberAhliWaris();
                //     $ahliwaris->user_member_id = $data->id;
                //     $ahliwaris->name = $ahli2_nama;
                //     $ahliwaris->no_ktp = $ahli2_no_telp;
                //     $ahliwaris->tempat_lahir = @$ahli2_tempat_tanggal_lahir[0];;
                //     $ahliwaris->tanggal_lahir = @date('Y-m-d',strtotime($ahli2_tempat_tanggal_lahir[1]));
                //     $ahliwaris->no_telepon = $ahli2_no_telp;
                //     $ahliwaris->alamat = $ahli2_alamat;
                //     $ahliwaris->jenis_kelamin = $ahli2_jenis_kelamin=="L" ? "Laki-laki" : 'Perempuan';
                //     $ahliwaris->golongan_darah = $ahli2_golongan_darah;
                //     $ahliwaris->hubungan = $ahli2_hubungan;
                //     $ahliwaris->save();
                // }
            }
        }
        
        session()->flash('message-success',__('Data berhasil di upload'));

        return redirect()->route('migration.index');
    }
}
