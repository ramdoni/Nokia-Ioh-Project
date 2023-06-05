@section('title', "Tambah Anggota")
@section('parentPageTitle', 'Anggota')
<div class="container">
    <div class="mt-2 card">
      <div class="card-header">
        <div class="row">
            <div class="text-left col-md-6">
                <h6><small>Form No : </small>{{$form_no}}</h6>
            </div>
        </div>
      </div>
      <div class="card-body">
        <div {!!(!$is_success?'style="display:none"':'')!!}>
            <h6 class="text-success"><span><i class="fa fa-check"></i></span> Pendaftaran anda berhasil dilakukan</h6>
            <p>Terima kasih telah mendaftarkan diri anda sebagai Anggota Yayasan Sosial Santa Maria. Data diri anda akan segera kami proses setelah pembayaran kami terima. Silahkan cek email / Whatsapp anda untuk mendapatkan informasi pembayaran.</p>
        </div>
        <form class="form-auth-small" method="POST" wire:submit.prevent="save" action="" {!!($is_success?'style="display:none"':'')!!}>

            @if($extend_register1 || $extend_register2)
                <div class="alert alert-warning alert-dismissible" role="alert">
                    @if($umur <=74)
                    <i class="fa fa-warning"></i> Calon anggota berusia 65 s/d 74 wajib mendaftarkan 1 (satu) anggota baru di bawah usia 50 th<br />
                    @endif
                    @if($umur >=75)
                    <i class="fa fa-warning"></i> Calon anggota berusia 75 th keatas, wajib mendaftarkan 2 (dua) anggota baru di bawah usia 50 th 
                            @endif
                </div>            
            @endif
            <div class="row" {!!(!$show_form1?'style="display:none"':'')!!}>
                <div class="col-md-12">
                    <h5>DATA CALON ANGGOTA</h5>
                    <hr />
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleInputAlamat">No KTP</label>
                        <input type="text" class="form-control" wire:change="checkKTP" id="Id_Ktp" placeholder="Enter ID" wire:model="Id_Ktp">
                        @error('Id_Ktp') <span class="text-danger">{{ $message }}</span> @enderror
                        <a href="javascript:void(0)" wire:click="checkKTP"><i class="fa fa-check"></i> Check Nomor KTP</a>
                        @if($messageKtp==1)
                        <div class="alert alert-warning alert-dismissible" role="alert">
                            <i class="fa fa-info"></i> Data KTP sudah digunakan
                        </div>
                        @endif
                        @if($messageKtp==2)
                        <div class="alert alert-success alert-dismissible" role="alert">
                            <i class="fa fa-check"></i> Data KTP tersedia
                        </div>
                        @endif
                    </div> 
                    <div class="form-group">
                        <label for="exampleInputName">Nama (sesuai KTP)</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter name" wire:model="name">
                        @error('name') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">Nama yang dicantumkan di KTA</label>
                        <input type="text" class="form-control" id="name_kta" placeholder="Enter here" wire:model="name_kta">
                        @error('name_kta') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">E-mail</label>
                        <input type="E-mail" class="form-control" id="email" placeholder="Enter name" wire:model="email">
                        @error('email') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputName">Tempat Lahir</label>
                            <input type="text" class="form-control" id="tempat_lahir" placeholder="Enter Place of Birth" wire:model="tempat_lahir">
                            @error('tempat_lahir') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputName">Tanggal Lahir {!!$umur?"<span class=\"text-danger\">( Umur {$umur} Thn)</span>" : ''!!}</label>
                            <input type="date" class="form-control datepicker" id="tanggal_lahir" placeholder="Enter Date of Birth" wire:change="hitungUmur" wire:model="tanggal_lahir">
                            @error('tanggal_lahir') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAlamat">Alamat</label>
                        <input type="text" class="form-control" id="address" placeholder="Enter address" wire:model="address">
                        @error('address') <span class="text-danger">{{ $message }}</span> @enderror
                    </div> 
                    <div class="form-group">
                            <label for="exampleInputAlamat">Kota/Kabupaten</label>
                            <select class="form-control" wire:model="city">
                                <option value=""> --- Kota/Kabupaten --- </option>
                                @foreach(\App\Models\City::orderBy('code','ASC')->get() as $item)
                                <option value="{{$item->code}}">{{$item->name}}</option>
                                @endforeach
                            </select>
                            @error('city')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                    </div>
                    @if($city=='OTHER')
                    <div class="form-group">
                            <input type="text" class="form-control" id="city_lainnya" placeholder="Enter Other City" wire:model="city_lainnya">
                            @error('city_lainnya') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    @endif

                        <!--
                        <div class="form-group col-md-6">
                            <label>{{ __('Koordinator')}}</label>
                            <select class="form-control" wire:model="koordinator_id">
                            <option value=""> --- Select Koordinator --- </option>@foreach(\App\Models\Koordinator::orderBy('name','ASC')->get() as $koordinator)
                            <option value="{{$koordinator->id}}">{{$koordinator->name}}</option>
                            @endforeach
                            </select>
                            @error('koordinator_id') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        -->
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Jenis Kelamin</label>
                            <select class="form-control" name="jenis_kelamin" wire:model="jenis_kelamin">
                            <option value="">- Jenis Kelamin -</option>
                                <option>Laki - Laki</option>
                                <option>Perempuan</option>
                            </select>
                            @error('jenis_kelamin') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">No Telp. / HP</label>
                            <input type="text" class="form-control" id="phone_number" placeholder="Enter Phone Number" wire:model="phone_number">
                            @error('phone_number') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Golongan Darah</label>
                            <select class="form-control" wire:model="blood_type">
                                <option value=""> --- Select --- </option>
                                @foreach(config('vars.golongan_darah') as $i)
                                <option>{{$i}}</option> 
                                @endforeach
                            </select>
                            @error('blood_type') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Foto KTP</label>
                            <input type="file" class="form-control" id="foto_ktp" wire:model="foto_ktp">
                            @error('foto_ktp') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Foto KK</label>
                            <input type="file" class="form-control" id="foto_kk" wire:model="foto_kk">
                            @error('foto_kk') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Pasphoto 4x6</label>
                            <input type="file" class="form-control" id="pas_foto" wire:model="pas_foto">
                            @error('pas_foto') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>  
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Iuran Tetap <strong class="text-danger">Rp. 8.000</strong> (Rp {{format_idr($total_iuran_tetap)}})</label>
                            <select class="form-control" wire:model="iuran_tetap" wire:change="calculate_">
                                <option value=""> --- Minimal 6 Bulan --- </option>
                                @for($i=6;$i<=40;$i++)
                                <option>{{$i}}</option>
                                @endfor
                            </select>
                            @error('iuran_tetap') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Sumbangan <strong class="text-danger">Rp. 2.000</strong>  (Rp {{format_idr($total_sumbangan)}})</label>
                            <select class="form-control" wire:model="sumbangan" wire:change="calculate_">
                                <option value=""> --- Minimal 6 Bulan --- </option>
                                @for($i=6;$i<=40;$i++)
                                <option>{{$i}}</option>
                                @endfor
                            </select>
                            @error('sumbangan') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Uang Pendaftaran - Sukarela Minimum <strong class="text-danger">Rp. 50.000</strong></label>
                            <input type="number" class="form-control" wire:model="uang_pendaftaran" wire:input="calculate_">
                            @error('uang_pendaftaran') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <h5 class="btn btn-outline-danger">Total Rp. {{format_idr($total)}}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>{{ __('Payment Date')}}</label>
                            <input type="date" class="form-control" wire:model="payment_date" />
                            @error('payment_date')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label>{{__('Bank Account')}}</label>
                            <select class="form-control" wire:model="bank_account_id">
                                <option value=""> --- Bank Account --- </option>
                                @foreach(\App\Models\BankAccount::all() as $bank)
                                <option value="{{$bank->id}}">{{$bank->bank}} {{$bank->no_rekening}} a/n {{$bank->owner}}</option>
                                @endforeach
                            </select>
                            @error('bank_account_id')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
<!--
                        <div class="form-group col-md-6">
                            <ul>
                                @foreach(\App\Models\BankAccount::all() as $bank)
                                <li>
                                    <label>
                                        <input type="radio" value="{{$bank->id}}" wire:model="bank_account_id" /> {{$bank->bank}} {{$bank->no_rekening}} a/n {{$bank->owner}}
                                    </label>
                                </li>
                                @endforeach
                            </ul>
                            @error('bank_account_id')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
-->
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">File Bukti Pembayaran</label>
                            <input type="file" class="form-control" id="foto_ktp" wire:model="file_konfirmasi">
                            @error('file_konfirmasi') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <hr />
                </div>
                <div class="col-md-6">
                    <h6>DATA AHLI WARIS 1</h6>
                    <hr />
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">No KTP</label>
                            <input type="text" class="form-control" id="Id_Ktpwaris1" placeholder="Enter ID" wire:model="Id_Ktpwaris1">
                            @error('Id_Ktpwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                            <a href="javascript:void(0)" wire:click="checkKTPWaris1"><i class="fa fa-check"></i> Check Nomor KTP</a>
                            @if($messageKtpWaris1==1)
                            <div class="alert alert-warning alert-dismissible" role="alert">
                                <i class="fa fa-info"></i> Data KTP tersedia
                            </div>
                            @endif
                            @if($messageKtpWaris1==2)
                            <div class="alert alert-success alert-dismissible" role="alert">
                                <i class="fa fa-check"></i> Data KTP tidak tersedia
                            </div>
                            @endif
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputName">Nama (sesuai KTP)</label>
                            <input type="text" class="form-control" id="name_waris1" placeholder="Enter name" wire:model="name_waris1">
                            @error('name_waris1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">Tempat Lahir</label>
                        <input type="text" class="form-control" id="tempat_lahirwaris1" placeholder="Enter Place of Birth" wire:model="tempat_lahirwaris1">
                        @error('tempat_lahirwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputName">Tanggal Lahir</label>
                            <input type="date" class="form-control datepicker" id="tanggal_lahirwaris1" placeholder="Enter Date of Birth" wire:model="tanggal_lahirwaris1">
                            @error('tanggal_lahirwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">No Telp. / HP</label>
                            <input type="number" class="form-control" id="phone_numberwaris1" placeholder="Enter Phone Number" wire:model="phone_numberwaris1">
                            @error('phone_numberwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAlamat">Alamat</label>
                        <input type="text" class="form-control" id="address_waris1" placeholder="Enter address" wire:model="address_waris1">
                        @error('address_waris1') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Jenis Kelamin</label>
                            <select class="form-control" name="jenis_kelaminwaris1" wire:model="jenis_kelaminwaris1">
                            <option value="">- Jenis Kelamin -</option>
                                <option value="men" >Laki - Laki</option>
                                <option value="female" >Perempuan</option>
                            </select>
                            @error('jenis_kelaminwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Golongan Darah</label>
                            <select class="form-control" wire:model="blood_typewaris1">
                                <option value=""> --- Select --- </option>
                                @foreach(config('vars.golongan_darah') as $i)
                                <option>{{$i}}</option> 
                                @endforeach
                            </select>
                            @error('blood_typewaris1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAlamat">Hubungan dengan Anggota</label>
                        <select class="form-control" wire:model="hubungananggota1">
                                <option value=""> --- Select --- </option>
                                @foreach(config('vars.hubungan_keluarga') as $i)
                                <option>{{$i}}</option> 
                                @endforeach
                        </select>
                        @error('hubungananggota1') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    @if($hubungananggota1=='Lainnya')
                    <div class="form-group">
                            <input type="text" class="form-control" id="hubungananggota1_lainnya" placeholder="Hubungan Anggota" wire:model="hubungananggota1_lainnya">
                            @error('hubungananggota1_lainnya') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    @endif
                    <div class="form-group">
                        <label for="exampleInputAlamat">Foto KTP</label>
                        <input type="file" class="form-control" id="foto_ktpwaris1" wire:model="foto_ktpwaris1">
                        @error('foto_ktpwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                </div>
                <div class="col-md-6">
                    <h6>DATA AHLI WARIS 2</h6>
                    <hr />
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">No KTP</label>
                            <input type="text" class="form-control" id="Id_Ktpwaris2" placeholder="Enter ID" wire:model="Id_Ktpwaris2">
                            @error('Id_Ktpwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                            <a href="javascript:void(0)" wire:click="checkKTPWaris2"><i class="fa fa-check"></i> Check Nomor KTP</a>
                            @if($messageKtpWaris2==1)
                            <div class="alert alert-warning alert-dismissible" role="alert">
                                <i class="fa fa-info"></i> Data KTP tersedia
                            </div>
                            @endif
                            @if($messageKtpWaris2==2)
                            <div class="alert alert-success alert-dismissible" role="alert">
                                <i class="fa fa-check"></i> Data KTP tidak tersedia
                            </div>
                            @endif
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputName">Nama (sesuai KTP)</label>
                            <input type="text" class="form-control" id="name_waris2" placeholder="Enter name" wire:model="name_waris2">
                            @error('name_waris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">Tempat Lahir</label>
                        <input type="text" class="form-control" id="tempat_lahirwaris2" placeholder="Enter Place of Birth" wire:model="tempat_lahirwaris2">
                        @error('tempat_lahirwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputName">Tanggal Lahir</label>
                            <input type="date" class="form-control datepicker" id="tanggal_lahirwaris2" placeholder="Enter Date of Birth" wire:model="tanggal_lahirwaris2">
                            @error('tanggal_lahirwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md--6">
                            <label for="exampleInputAlamat">No Telp. / HP</label>
                            <input type="text" class="form-control" id="phone_numberwaris2" placeholder="Enter Phone Number" wire:model="phone_numberwaris2">
                            @error('phone_numberwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAlamat">Alamat</label>
                        <input type="text" class="form-control" id="address_waris2" placeholder="Enter address" wire:model="address_waris2">
                        @error('address_waris2') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Jenis Kelamin</label>
                            <select class="form-control" name="jenis_kelaminwaris2" wire:model="jenis_kelaminwaris2">
                            <option value="">- Jenis Kelamin -</option>
                                <option value="men" >Laki - Laki</option>
                                <option value="female" >Perempuan</option>
                            </select>
                            @error('jenis_kelaminwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Golongan Darah</label>
                            <select class="form-control" wire:model="blood_typewaris2">
                                <option value=""> --- Select --- </option>
                                @foreach(config('vars.golongan_darah') as $i)
                                <option>{{$i}}</option> 
                                @endforeach
                            </select>
                            @error('blood_typewaris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAlamat">Hubungan dengan Anggota</label>
                        <select class="form-control" wire:model="hubungananggota2">
                            <option value=""> --- Select --- </option>
                            @foreach(config('vars.hubungan_keluarga') as $i)
                            <option>{{$i}}</option> 
                            @endforeach
                        </select>
                        @error('hubungananggota2') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    @if($hubungananggota2=='Lainnya')
                    <div class="form-group">
                        <input type="text" class="form-control" id="hubungananggota2_lainnya" placeholder="Hubungan Anggota" wire:model="hubungananggota2_lainnya">
                        @error('hubungananggota2_lainnya') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    @endif
                    <div class="form-group">
                        <label for="exampleInputAlamat">Foto KTP</label>
                        <input type="file" class="form-control" id="foto_ktpwaris2" wire:model="foto_ktpwaris2">
                        @error('foto_ktpwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <hr />
                </div>
                <div class="form-group col-md-12">
                    <hr />
                    <a href="/"><i class="fa fa-arrow-left"></i> {{__('Back')}}</a>
                    @if($extend_register1 || $extend_register2)
                        <button type="button" class="ml-3 btn btn-primary" wire:click="form2">{{ __('Berikutnya Data Rekomendasi') }} <i class="fa fa-arrow-right"></i></button>
                    @else
                        <button type="submit" class="ml-3 btn btn-primary" wire:click="form3">{{ __('Submit Pendaftaran') }} <i class="fa fa-check"></i></button>
                    @endif               
                </div>
            </div>
            <div {!!(!$show_form2?'style="display:none"':'')!!} class="row form2">
                @if($extend_register1 || $extend_register2)
                <div class="form-group col-md-12" style="background:#fff3cd">
                    <h5>DATA REKOMENDASI CALON ANGGOTA</h5>
                    <hr />
                </div>
                    @if($extend_register1)
                    <div class="form-group col-md-12">
                        <h6>DATA REKOMENDASI CALON ANGGOTA 1</h6>
                        <hr />
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputAlamat">No KTP</label>
                            <input type="text" class="form-control" id="extend1_Id_Ktp" placeholder="Enter name" wire:model="extend1_Id_Ktp">
                            @error('extend1_Id_Ktp') <span class="text-danger">{{ $message }}</span> @enderror
                        </div> 
                        <div class="form-group">
                            <label for="exampleInputName">Nama (sesuai KTP)</label>
                            <input type="text" class="form-control" id="extend1_name" placeholder="Enter name" wire:model="extend1_name">
                            @error('extend1_name') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName">Nama yang dicantumkan di KTA</label>
                            <input type="text" class="form-control" id="extend1_name_kta" placeholder="Enter here" wire:model="extend1_name_kta">
                            @error('extend1_name_kta') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName">E-mail</label>
                            <input type="E-mail" class="form-control" id="extend1_email" placeholder="Enter name" wire:model="extend1_email">
                            @error('extend1_email') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputName">Tempat Lahir</label>
                                <input type="text" class="form-control" id="extend1_tempat_lahir" placeholder="Enter Place of Birth" wire:model="extend1_tempat_lahir">
                                @error('extend1_tempat_lahir') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputName">Tanggal Lahir</label>
                                <input type="date" class="form-control datepicker" id="extend1_tanggal_lahir" placeholder="Enter Date of Birth"  wire:model="extend1_tanggal_lahir">
                                @error('extend1_tanggal_lahir') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputAlamat">Alamat</label>
                            <input type="text" class="form-control" id="extend1_address" placeholder="Enter address" wire:model="extend1_address">
                            @error('extend1_address') <span class="text-danger">{{ $message }}</span> @enderror
                        </div> 
                        <div class="form-group">
                            <label for="exampleInputAlamat">Kota/Kabupaten</label>
                            <select class="form-control" wire:model="extend1_city">
                                <option value=""> --- Kota/Kabupaten --- </option>
                                @foreach(\App\Models\City::orderBy('code','ASC')->get() as $item)
                                <option value="{{$item->code}}">{{$item->name}}</option>
                                @endforeach
                            </select>
                            @error('extend1_city')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        @if($extend1_city=='OTHER')
                        <div class="form-group">
                            <input type="text" class="form-control" id="extend1_city_lainnya" placeholder="Enter Kota/Kabupaten" wire:model="extend1_city_lainnya">
                            @error('extend1_city_lainnya') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        @endif 
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Jenis Kelamin</label>
                                <select class="form-control" name="extend1_jenis_kelamin" wire:model="extend1_jenis_kelamin">
                                <option value="">- Jenis Kelamin -</option>
                                    <option>Laki - Laki</option>
                                    <option>Perempuan</option>
                                </select>
                                @error('extend1_jenis_kelamin') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">No Telp. / HP</label>
                                <input type="text" class="form-control" id="extend1_phone_number" placeholder="Enter Phone Number" wire:model="extend1_phone_number">
                                @error('extend1_phone_number') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Golongan Darah</label>
                                <select class="form-control" wire:model="extend1_blood_type">
                                    <option value=""> --- Select --- </option>
                                    @foreach(config('vars.golongan_darah') as $i)
                                    <option>{{$i}}</option> 
                                    @endforeach
                                </select>
                                @error('extend1_blood_type') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Foto KTP</label>
                                <input type="file" class="form-control" id="extend1_foto_ktp" wire:model="extend1_foto_ktp">
                                @error('extend1_foto_ktp') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Foto KK</label>
                                <input type="file" class="form-control" id="extend1_foto_kk" wire:model="extend1_foto_kk">
                                @error('extend1_foto_kk') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Pasphoto 4x6</label>
                                <input type="file" class="form-control" id="extend1_pas_foto" wire:model="extend1_pas_foto">
                                @error('extend1_pas_foto') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>  
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Iuran Tetap <strong class="text-danger">Rp. 8.000</strong> (Rp {{format_idr($extend1_total_iuran_tetap )}})</label>
                                <select class="form-control" wire:model="extend1_iuran_tetap" wire:change="extend1_calculate_">
                                    <option value=""> --- Minimal 6 Bulan --- </option>
                                    @for($i=6;$i<=40;$i++)
                                    <option>{{$i}}</option>
                                    @endfor
                                </select>
                                @error('extend1_iuran_tetap') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Sumbangan <strong class="text-danger">Rp. 2.000</strong>  (Rp {{format_idr($extend1_total_sumbangan)}})</label>
                                <select class="form-control" wire:model="extend1_sumbangan" wire:change="extend1_calculate_">
                                    <option value=""> --- Minimal 6 Bulan --- </option>
                                    @for($i=6;$i<=40;$i++)
                                    <option>{{$i}}</option>
                                    @endfor
                                </select>
                                @error('extend1_sumbangan') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Uang Pendaftaran - Sukarela Minimum <strong class="text-danger">Rp. 50.000</strong></label>
                                <input type="number" class="form-control" wire:model="extend1_uang_pendaftaran" wire:input="extend1_calculate_">
                                @error('extend1_uang_pendaftaran') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <h5 class="btn btn-outline-danger">Total Rp. {{format_idr($extend1_total)}}</h5>
                            </div>
                        </div>
                        <div class="row">
                        <div class="form-group col-md-6">
                            <label>{{ __('Payment Date')}}</label>
                            <input type="date" class="form-control" wire:model="extend1_payment_date" />
                            @error('extend1_payment_date')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label>{{__('Bank Account')}}</label>
                            <select class="form-control" wire:model="extend1_bank_account_id">
                                <option value=""> --- Bank Account --- </option>
                                @foreach(\App\Models\BankAccount::all() as $bank)
                                <option value="{{$bank->id}}">{{$bank->bank}} {{$bank->no_rekening}} a/n {{$bank->owner}}</option>
                                @endforeach
                            </select>
                            @error('extend1_bank_account_id')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">File Bukti Pembayaran</label>
                            <input type="file" class="form-control" id="extend1_file_konfirmasi" wire:model="extend1_file_konfirmasi">
                            @error('extend1_file_konfirmasi') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    </div>
                    <div class="form-group col-md-12">
                        <hr />
                    </div>
                    <div class="col-md-6">
                        <h6>DATA AHLI WARIS 1</h6>
                        <hr />
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">No KTP</label>
                                <input type="text" class="form-control" id="extend1_Id_Ktpwaris1" placeholder="Enter ID" wire:model="extend1_Id_Ktpwaris1">
                                @error('extend1_Id_Ktpwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                                <a href="javascript:void(0)" wire:click="checkKTPExtend1Waris1"><i class="fa fa-check"></i> Check Nomor KTP</a>
                                @if($messageKtpExtend1Waris1==1)
                                <div class="alert alert-warning alert-dismissible" role="alert">
                                    <i class="fa fa-info"></i> Data KTP tersedia
                                </div>
                                @endif
                                @if($messageKtpExtend1Waris1==2)
                                <div class="alert alert-success alert-dismissible" role="alert">
                                    <i class="fa fa-check"></i> Data KTP tidak tersedia
                                </div>
                                @endif
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputName">Nama (sesuai KTP)</label>
                                <input type="text" class="form-control" id="extend1_name_waris1" placeholder="Enter name" wire:model="extend1_name_waris1">
                                @error('extend1_name_waris1') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName">Tempat Lahir</label>
                            <input type="text" class="form-control" id="extend1_tempat_lahirwaris1" placeholder="Enter Place of Birth" wire:model="extend1_tempat_lahirwaris1">
                            @error('extend1_tempat_lahirwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputName">Tanggal Lahir</label>
                                <input type="date" class="form-control datepicker" id="extend1_tanggal_lahirwaris1" placeholder="Enter Date of Birth" wire:model="extend1_tanggal_lahirwaris1">
                                @error('extend1_tanggal_lahirwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">No Telp. / HP</label>
                                <input type="number" class="form-control" id="extend1_phone_numberwaris1" placeholder="Enter Phone Number" wire:model="extend1_phone_numberwaris1">
                                @error('extend1_phone_numberwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputAlamat">Alamat</label>
                            <input type="text" class="form-control" id="extend1_address_waris1" placeholder="Enter address" wire:model="extend1_address_waris1">
                            @error('extend1_address_waris1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Jenis Kelamin</label>
                                <select class="form-control" name="extend1_jenis_kelaminwaris1" wire:model="extend1_jenis_kelaminwaris1">
                                <option value="">- Jenis Kelamin -</option>
                                    <option value="men" >Laki - Laki</option>
                                    <option value="female" >Perempuan</option>
                                </select>
                                @error('extend1_jenis_kelaminwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Golongan Darah</label>
                                <select class="form-control" wire:model="extend1_blood_typewaris1">
                                    <option value=""> --- Select --- </option>
                                    @foreach(config('vars.golongan_darah') as $i)
                                    <option>{{$i}}</option> 
                                    @endforeach
                                </select>
                                @error('extend1_blood_typewaris1') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                            <div class="form-group ">
                                <label for="exampleInputAlamat">Hubungan dengan Anggota</label>
                                <select class="form-control" wire:model="extend1_hubungananggota1">
                                    <option value=""> --- Select --- </option>
                                    @foreach(config('vars.hubungan_keluarga') as $i)
                                    <option>{{$i}}</option> 
                                    @endforeach
                                </select>
                                @error('extend1_hubungananggota1') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            @if($extend1_hubungananggota1=='Lainnya')
                            <div class="form-group">
                                <input type="text" class="form-control" id="extend1_hubungananggota1_lainnya" placeholder="Hubungan Anggota" wire:model="extend1_hubungananggota1_lainnya">
                                @error('extend1_hubungananggota1_lainnya') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            @endif
                            <div class="form-group">
                                <label for="exampleInputAlamat">Foto KTP</label>
                                <input type="file" class="form-control" id="extend1_foto_ktpwaris1" wire:model="extend1_foto_ktpwaris1">
                                @error('extend1_foto_ktpwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                    <div class="col-md-6">
                        <h6>DATA AHLI WARIS 2</h6>
                        <hr />
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">No KTP</label>
                                <input type="text" class="form-control" id="extend1_Id_Ktpwaris2" placeholder="Enter ID" wire:model="extend1_Id_Ktpwaris2">
                                @error('extend1_Id_Ktpwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                                <a href="javascript:void(0)" wire:click="checkKTPExtend1Waris2"><i class="fa fa-check"></i> Check Nomor KTP</a>
                                @if($messageKtpExtend1Waris2==1)
                                <div class="alert alert-warning alert-dismissible" role="alert">
                                    <i class="fa fa-info"></i> Data KTP tersedia
                                </div>
                                @endif
                                @if($messageKtpExtend1Waris2==2)
                                <div class="alert alert-success alert-dismissible" role="alert">
                                    <i class="fa fa-check"></i> Data KTP tidak tersedia
                                </div>
                                @endif
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputName">Nama (sesuai KTP)</label>
                                <input type="text" class="form-control" id="extend1_name_waris2" placeholder="Enter name" wire:model="extend1_name_waris2">
                                @error('extend1_name_waris2') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>

                        </div>
                        <div class="form-group">
                            <label for="exampleInputName">Tempat Lahir</label>
                            <input type="text" class="form-control" id="extend1_tempat_lahirwaris2" placeholder="Enter Place of Birth" wire:model="extend1_tempat_lahirwaris2">
                            @error('extend1_tempat_lahirwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputName">Tanggal Lahir</label>
                                <input type="date" class="form-control datepicker" id="extend1_tanggal_lahirwaris2" placeholder="Enter Date of Birth" wire:model="extend1_tanggal_lahirwaris2">
                                @error('extend1_tanggal_lahirwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md--6">
                                <label for="exampleInputAlamat">No Telp. / HP</label>
                                <input type="text" class="form-control" id="extend1_phone_numberwaris2" placeholder="Enter Phone Number" wire:model="extend1_phone_numberwaris2">
                                @error('extend1_phone_numberwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputAlamat">Alamat</label>
                            <input type="text" class="form-control" id="extend1_address_waris2" placeholder="Enter address" wire:model="extend1_address_waris2">
                            @error('extend1_address_waris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Jenis Kelamin</label>
                                <select class="form-control" name="extend1_jenis_kelaminwaris2" wire:model="extend1_jenis_kelaminwaris2">
                                <option value="">- Jenis Kelamin -</option>
                                    <option value="men" >Laki - Laki</option>
                                    <option value="female" >Perempuan</option>
                                </select>
                                @error('extend1_jenis_kelaminwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Golongan Darah</label>
                                <select class="form-control" wire:model="extend1_blood_typewaris2">
                                    <option value=""> --- Select --- </option>
                                    @foreach(config('vars.golongan_darah') as $i)
                                    <option>{{$i}}</option> 
                                    @endforeach
                                </select>
                                @error('extend1_blood_typewaris2') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-group">
                                <label for="exampleInputAlamat">Hubungan dengan Anggota</label>
                                <select class="form-control" wire:model="extend1_hubungananggota2">
                                    <option value=""> --- Select --- </option>
                                    @foreach(config('vars.hubungan_keluarga') as $i)
                                    <option>{{$i}}</option> 
                                    @endforeach
                                </select>
                                @error('extend1_hubungananggota2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        @if($extend1_hubungananggota2=='Lainnya')
                        <div class="form-group">
                            <input type="text" class="form-control" id="extend1_hubungananggota2_lainnya" placeholder="Hubungan Anggota" wire:model="extend1_hubungananggota2_lainnya">
                            @error('extend1_hubungananggota2_lainnya') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        @endif
                        <div class="form-group">
                                <label for="exampleInputAlamat">Foto KTP</label>
                                <input type="file" class="form-control" id="extend1_foto_ktpwaris2" wire:model="extend1_foto_ktpwaris2">
                                @error('extend1_foto_ktpwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <hr />
                    </div>
                    @endif

                    @if($extend_register2)
                    <div class="form-group col-md-12">
                        <h6>DATA REKOMENDASI CALON ANGGOTA 2</h6>
                        <hr />
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputAlamat">No KTP</label>
                            <input type="text" class="form-control" id="extend2_Id_Ktp" placeholder="Enter name" wire:model="extend2_Id_Ktp">
                            @error('extend2_Id_Ktp') <span class="text-danger">{{ $message }}</span> @enderror
                        </div> 
                        <div class="form-group">
                            <label for="exampleInputName">Nama (sesuai KTP)</label>
                            <input type="text" class="form-control" id="extend2_name" placeholder="Enter name" wire:model="extend2_name">
                            @error('extend2_name') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName">Nama yang dicantumkan di KTA</label>
                            <input type="text" class="form-control" id="extend2_name_kta" placeholder="Enter here" wire:model="extend2_name_kta">
                            @error('extend2_name_kta') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName">E-mail</label>
                            <input type="E-mail" class="form-control" id="extend2_email" placeholder="Enter name" wire:model="extend2_email">
                            @error('extend2_email') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputName">Tempat Lahir</label>
                                <input type="text" class="form-control" id="extend2_tempat_lahir" placeholder="Enter Place of Birth" wire:model="extend2_tempat_lahir">
                                @error('extend2_tempat_lahir') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputName">Tanggal Lahir</label>
                                <input type="date" class="form-control datepicker" id="extend2_tanggal_lahir" placeholder="Enter Date of Birth"  wire:model="extend2_tanggal_lahir">
                                @error('extend2_tanggal_lahir') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputAlamat">Alamat</label>
                            <input type="text" class="form-control" id="extend2_address" placeholder="Enter address" wire:model="extend2_address">
                            @error('extend2_address') <span class="text-danger">{{ $message }}</span> @enderror
                        </div> 
                        <div class="form-group">
                            <label for="exampleInputAlamat">Kota/Kabupaten</label>
                            <select class="form-control" wire:model="extend2_city">
                                <option value=""> --- Kota/Kabupaten --- </option>
                                @foreach(\App\Models\City::orderBy('code','ASC')->get() as $item)
                                <option value="{{$item->code}}">{{$item->name}}</option>
                                @endforeach
                            </select>
                            @error('extend2_city')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div> 
                         @if($extend2_city=='OTHER')
                        <div class="form-group">
                            <input type="text" class="form-control" id="extend2_city_lainnya" placeholder="Enter Other City" wire:model="extend2_city_lainnya">
                            @error('extend2_city_lainnya') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        @endif
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Jenis Kelamin</label>
                                <select class="form-control" name="extend2_jenis_kelamin" wire:model="extend2_jenis_kelamin">
                                <option value="">- Jenis Kelamin -</option>
                                    <option>Laki - Laki</option>
                                    <option>Perempuan</option>
                                </select>
                                @error('extend2_jenis_kelamin') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">No Telp. / HP</label>
                                <input type="text" class="form-control" id="extend2_phone_number" placeholder="Enter Phone Number" wire:model="extend2_phone_number">
                                @error('extend2_phone_number') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Golongan Darah</label>
                                <select class="form-control" wire:model="extend2_blood_type">
                                    <option value=""> --- Select --- </option>
                                    @foreach(config('vars.golongan_darah') as $i)
                                    <option>{{$i}}</option> 
                                    @endforeach
                                </select>
                                @error('extend2_blood_type') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Foto KTP</label>
                                <input type="file" class="form-control" id="extend2_foto_ktp" wire:model="extend2_foto_ktp">
                                @error('extend2_foto_ktp') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Foto KK</label>
                                <input type="file" class="form-control" id="extend2_foto_kk" wire:model="extend2_foto_kk">
                                @error('extend2_foto_kk') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Pasphoto 4x6</label>
                                <input type="file" class="form-control" id="extend2_pas_foto" wire:model="extend2_pas_foto">
                                @error('extend2_pas_foto') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>  
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Iuran Tetap <strong class="text-danger">Rp. 8.000</strong> (Rp {{format_idr($extend2_total_iuran_tetap )}})</label>
                                <select class="form-control" wire:model="extend2_iuran_tetap" wire:change="extend2_calculate_">
                                    <option value=""> --- Minimal 6 Bulan --- </option>
                                    @for($i=6;$i<=40;$i++)
                                    <option>{{$i}}</option>
                                    @endfor
                                </select>
                                @error('extend2_iuran_tetap') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Sumbangan <strong class="text-danger">Rp. 2.000</strong>  (Rp {{format_idr($extend2_total_sumbangan)}})</label>
                                <select class="form-control" wire:model="extend2_sumbangan" wire:change="extend2_calculate_">
                                    <option value=""> --- Minimal 6 Bulan --- </option>
                                    @for($i=6;$i<=40;$i++)
                                    <option>{{$i}}</option>
                                    @endfor
                                </select>
                                @error('extend2_sumbangan') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Uang Pendaftaran - Sukarela Minimum <strong class="text-danger">Rp. 50.000</strong></label>
                                <input type="number" class="form-control" wire:model="extend2_uang_pendaftaran" wire:input="extend2_calculate_">
                                @error('extend2_uang_pendaftaran') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <h5 class="btn btn-outline-danger">Total Rp. {{format_idr($extend2_total)}}</h5>
                            </div>
                        </div>
                        <div class="row">
                        <div class="form-group col-md-6">
                            <label>{{ __('Payment Date')}}</label>
                            <input type="date" class="form-control" wire:model="extend2_payment_date" />
                            @error('extend2_payment_date')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label>{{__('Bank Account')}}</label>
                            <select class="form-control" wire:model="extend2_bank_account_id">
                                <option value=""> --- Bank Account --- </option>
                                @foreach(\App\Models\BankAccount::all() as $bank)
                                <option value="{{$bank->id}}">{{$bank->bank}} {{$bank->no_rekening}} a/n {{$bank->owner}}</option>
                                @endforeach
                            </select>
                            @error('extend2_bank_account_id')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">File Bukti Pembayaran</label>
                            <input type="file" class="form-control" id="extend2_file_konfirmasi" wire:model="extend2_file_konfirmasi">
                            @error('extend2_file_konfirmasi') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    </div>
                    <div class="form-group col-md-12">
                        <hr />
                    </div>
                    <div class="col-md-6">
                        <h6>DATA AHLI WARIS 1</h6>
                        <hr />
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">No KTP</label>
                                <input type="text" class="form-control" id="extend2_Id_Ktpwaris1" placeholder="Enter ID" wire:model="extend2_Id_Ktpwaris1">
                                @error('extend2_Id_Ktpwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                                 <a href="javascript:void(0)" wire:click="checkKTPExtend2Waris1"><i class="fa fa-check"></i> Check Nomor KTP</a>
                                @if($messageKtpExtend2Waris1==1)
                                <div class="alert alert-warning alert-dismissible" role="alert">
                                    <i class="fa fa-info"></i> Data KTP tersedia
                                </div>
                                @endif
                                @if($messageKtpExtend2Waris1==2)
                                <div class="alert alert-success alert-dismissible" role="alert">
                                    <i class="fa fa-check"></i> Data KTP tidak tersedia
                                </div>
                                @endif
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputName">Nama (sesuai KTP)</label>
                                <input type="text" class="form-control" id="extend2_name_waris1" placeholder="Enter name" wire:model="extend2_name_waris1">
                                @error('extend2_name_waris1') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName">Tempat Lahir</label>
                            <input type="text" class="form-control" id="extend2_tempat_lahirwaris1" placeholder="Enter Place of Birth" wire:model="extend2_tempat_lahirwaris1">
                            @error('extend2_tempat_lahirwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputName">Tanggal Lahir</label>
                                <input type="date" class="form-control datepicker" id="extend2_tanggal_lahirwaris1" placeholder="Enter Date of Birth" wire:model="extend2_tanggal_lahirwaris1">
                                @error('extend2_tanggal_lahirwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">No Telp. / HP</label>
                                <input type="number" class="form-control" id="extend2_phone_numberwaris1" placeholder="Enter Phone Number" wire:model="extend2_phone_numberwaris1">
                                @error('extend2_phone_numberwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputAlamat">Alamat</label>
                            <input type="text" class="form-control" id="extend2_address_waris1" placeholder="Enter address" wire:model="extend2_address_waris1">
                            @error('extend2_address_waris1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Jenis Kelamin</label>
                                <select class="form-control" name="extend2_jenis_kelaminwaris1" wire:model="extend2_jenis_kelaminwaris1">
                                <option value="">- Jenis Kelamin -</option>
                                    <option value="men" >Laki - Laki</option>
                                    <option value="female" >Perempuan</option>
                                </select>
                                @error('extend2_jenis_kelaminwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Golongan Darah</label>
                                <select class="form-control" wire:model="extend2_blood_typewaris1">
                                    <option value=""> --- Select --- </option>
                                    @foreach(config('vars.golongan_darah') as $i)
                                    <option>{{$i}}</option> 
                                    @endforeach
                                </select>
                                @error('extend2_blood_typewaris1') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-group">
                                <label for="exampleInputAlamat">Hubungan dengan Anggota</label>
                                <select class="form-control" wire:model="extend2_hubungananggota1">
                                    <option value=""> --- Select --- </option>
                                    @foreach(config('vars.hubungan_keluarga') as $i)
                                    <option>{{$i}}</option> 
                                    @endforeach
                                </select>
                                @error('extend2_hubungananggota1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        @if($extend2_hubungananggota1=='Lainnya')
                        <div class="form-group">
                            <input type="text" class="form-control" id="extend2_hubungananggota1_lainnya" placeholder="Hubungan Anggota" wire:model="extend2_hubungananggota1_lainnya">
                            @error('extend2_hubungananggota1_lainnya') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        @endif
                        <div class="form-group">
                                <label for="exampleInputAlamat">Foto KTP</label>
                                <input type="file" class="form-control" id="extend2_foto_ktpwaris1" wire:model="extend2_foto_ktpwaris1">
                                @error('extend2_foto_ktpwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h6>DATA AHLI WARIS 2</h6>
                        <hr />
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">No KTP</label>
                                <input type="text" class="form-control" id="extend2_Id_Ktpwaris2" placeholder="Enter ID" wire:model="extend2_Id_Ktpwaris2">
                                @error('extend2_Id_Ktpwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                                <a href="javascript:void(0)" wire:click="checkKTPExtend2Waris2"><i class="fa fa-check"></i> Check Nomor KTP</a>
                                @if($messageKtpExtend2Waris2==1)
                                <div class="alert alert-warning alert-dismissible" role="alert">
                                    <i class="fa fa-info"></i> Data KTP tersedia
                                </div>
                                @endif
                                @if($messageKtpExtend2Waris2==2)
                                <div class="alert alert-success alert-dismissible" role="alert">
                                    <i class="fa fa-check"></i> Data KTP tidak tersedia
                                </div>
                                @endif
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputName">Nama (sesuai KTP)</label>
                                <input type="text" class="form-control" id="extend2_name_waris2" placeholder="Enter name" wire:model="extend2_name_waris2">
                                @error('extend2_name_waris2') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName">Tempat Lahir</label>
                            <input type="text" class="form-control" id="extend2_tempat_lahirwaris2" placeholder="Enter Place of Birth" wire:model="extend2_tempat_lahirwaris2">
                            @error('extend2_tempat_lahirwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputName">Tanggal Lahir</label>
                                <input type="date" class="form-control datepicker" id="extend2_tanggal_lahirwaris2" placeholder="Enter Date of Birth" wire:model="extend2_tanggal_lahirwaris2">
                                @error('extend2_tanggal_lahirwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md--6">
                                <label for="exampleInputAlamat">No Telp. / HP</label>
                                <input type="text" class="form-control" id="extend2_phone_numberwaris2" placeholder="Enter Phone Number" wire:model="extend2_phone_numberwaris2">
                                @error('extend2_phone_numberwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputAlamat">Alamat</label>
                            <input type="text" class="form-control" id="extend2_address_waris2" placeholder="Enter address" wire:model="extend2_address_waris2">
                            @error('extend2_address_waris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Jenis Kelamin</label>
                                <select class="form-control" name="extend2_jenis_kelaminwaris2" wire:model="extend2_jenis_kelaminwaris2">
                                <option value="">- Jenis Kelamin -</option>
                                    <option value="men" >Laki - Laki</option>
                                    <option value="female" >Perempuan</option>
                                </select>
                                @error('extend2_jenis_kelaminwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Golongan Darah</label>
                                <select class="form-control" wire:model="extend2_blood_typewaris2">
                                    <option value=""> --- Select --- </option>
                                    @foreach(config('vars.golongan_darah') as $i)
                                    <option>{{$i}}</option> 
                                    @endforeach
                                </select>
                                @error('extend2_blood_typewaris2') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-group ">
                                <label for="exampleInputAlamat">Hubungan dengan Anggota</label>
                                <select class="form-control" wire:model="extend2_hubungananggota2">
                                    <option value=""> --- Select --- </option>
                                    @foreach(config('vars.hubungan_keluarga') as $i)
                                    <option>{{$i}}</option> 
                                    @endforeach
                                </select>
                                @error('extend2_hubungananggota2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                         @if($extend2_hubungananggota2=='Lainnya')
                        <div class="form-group">
                            <input type="text" class="form-control" id="extend2_hubungananggota2_lainnya" placeholder="Hubungan Anggota" wire:model="extend2_hubungananggota2_lainnya">
                            @error('extend2_hubungananggota2_lainnya') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        @endif
                        <div class="form-group col-md-6">
                                <label for="exampleInputAlamat">Foto KTP</label>
                                <input type="file" class="form-control" id="extend2_foto_ktpwaris2" wire:model="extend1_foto_ktpwaris2">
                                @error('extend2_foto_ktpwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <hr />
                    </div>
                    @endif

                @endif
                <div class="col-md-12 form-group">
                    <a href="javascript:void(0)" wire:click="form1"><i class="fa fa-arrow-left"></i> Kembali</a>
                    <button type="submit" class="ml-3 btn btn-primary" wire:click="form3">{{ __('Submit Pendaftaran') }} <i class="fa fa-check"></i></button>
                </div>
            </div>
            
        </form>
      </div>
    </div>
</div>