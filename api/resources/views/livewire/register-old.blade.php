@section('title', 'Register')
<div class="container">
    <div class="mt-2 card">
      <div class="card-header">
        <div class="row">
            <div class="col-md-6">
                <h4><small>Yayasan Sosial</small><br />SANTA MARIA</h4>
                <p>Jl. Citarum Tengah Ruko E-1<br />
                Telp: 024-354 4085 Semarang 50126 </p>
            </div>
            <div class="text-right col-md-6">
                <h6><small>Form No : </small>{{$form_no}}</h6>
            </div>
        </div>
      </div>
      <div class="card-body">
        <div {!!(!$is_success?'style="display:none"':'')!!}>
            <h6 class="text-success"><span><i class="fa fa-check"></i></span> Pendaftaran anda berhasil dilakukan</h6>
            <p>Terima kasih telah mendaftarkan diri anda sebagai Anggota Yayasan Sosial Santa Maria. Data diri anda akan segera kami proses setelah pembayaran kami terima. Silahkan cek email / Whatsapp anda untuk mendapatkan informasi pembayaran.</p>
        </div>
        <form class="form-auth-small" method="POST" wire:submit.prevent="register" action="" {!!($is_success?'style="display:none"':'')!!}>

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
            <h5>DATA CALON ANGGOTA</h5>
            <hr />
            <div class="row" {!!(!$show_form1?'style="display:none"':'')!!}>
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
                        <label for="exampleInputAlamat">Kota</label>
                        <input type="text" class="form-control" id="city" placeholder="Enter city" wire:model="city">
                        @error('city') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputReferalCode">Referal Code</label>
                        <input type="text" class="form-control" id="referal_code" placeholder="Enter Referal Code" wire:model="referal_code">
                        @error('referal_code') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
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
                </div>
                @if($extend_register1 || $extend_register2)
                <h5>DATA REKOMENDASI CALON ANGGOTA</h5>
                <div class="col-lg-8 col-md-12">
                    <div class="row">
                         @if($extend_register1)
                            <div class="col-md-6 pt-2" style="background:#fff3cd">
                                <div class="form-group">
                                    <label>{{__('No KTP')}}</label>
                                    <input type="text" class="form-control" wire:model="extend1_Id_Ktp" />
                                    @error('extend1_Id_Ktp')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label>Nama (sesuai KTP)</label>
                                    <input type="text" class="form-control" id="extend1_name" placeholder="Enter name" wire:model="extend1_name">
                                    @error('extend1_name') <span class="text-danger">{{ $message }}</span> @enderror
                                </div>
                                <div class="form-group">
                                    <label>{{ __('Nama yang dicantumkan di KTA')}}</label>
                                    <input type="text" class="form-control" wire:model="extend1_name_kta" />
                                    @error('extend1_name_kta')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label>{{ __('Email')}}</label>
                                    <input type="text" class="form-control" wire:model="extend1_email" />
                                    @error('extend1_email')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label>{{ __('Tempat / Tanggal Lahir ')}}</label>
                                    <div class="row">
                                        <div class="col-md-6">
                                        <input type="text" class="form-control" wire:model="extend1_tempat_lahir" />
                                        @error('extend1_tempat_lahir')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                        </div>
                                        <div class="col-md-6">
                                        <input type="date" class="form-control" wire:model="extend1_tanggal_lahir"/>@error('extend1_tanggal_lahir')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>{{ __('No Telepon')}}</label>
                                    <input type="text" class="form-control" wire:model="extend1_no_telepon" />
                                    @error('extend1_no_telepon')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                        <label>{{ __('Alamat')}}</label>
                                        <input type="text" class="form-control" wire:model="extend1_alamat" />
                                        @error('extend1_alamat')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>{{ __('Kota')}}</label>
                                        <input type="text" class="form-control" wire:model="extend1_kota" />
                                        @error('extend1_kota')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label>{{ __('Jenis Kelamin')}}</label>
                                            <select class="form-control" wire:model="extend1_jenis_kelamin">
                                                <option value=""> --- Jenis Kelamin --- </option>
                                                @foreach(config('vars.jenis_kelamin') as $jenis_kelamin)
                                                <option>{{$jenis_kelamin}}</option>
                                                @endforeach
                                            </select>
                                            @error('extend1_jenis_kelamin')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>{{ __('Golongan Darah')}}</label>
                                            <select class="form-control" wire:model="extend1_blood_type">
                                                <option value=""> --- Golongan Darah --- </option>
                                                @foreach(config('vars.golongan_darah') as $i)
                                                <option>{{$i}}</option> 
                                                @endforeach
                                            </select>
                                            @error('extend1_blood_type')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                            </div>
                         @endif
                         @if($extend_register2)
                         <div class="col-md-6 pt-2" style="background:#fff3cd">
                                <div class="form-group">
                                    <label>{{__('No KTP')}}</label>
                                    <input type="text" class="form-control" wire:model="extend2_Id_Ktp" />
                                    @error('extend2_Id_Ktp')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label>Nama (sesuai KTP)</label>
                                    <input type="text" class="form-control" id="extend2_name" placeholder="Enter name" wire:model="extend2_name">
                                    @error('extend2_name') <span class="text-danger">{{ $message }}</span> @enderror
                                </div>
                                <div class="form-group">
                                    <label>{{ __('Nama yang dicantumkan di KTA')}}</label>
                                    <input type="text" class="form-control" wire:model="extend2_name_kta" />
                                    @error('extend2_name_kta')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label>{{ __('Email')}}</label>
                                    <input type="text" class="form-control" wire:model="extend2_email" />
                                    @error('extend2_email')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label>{{ __('Tempat / Tanggal Lahir ')}}</label>
                                    <div class="row">
                                        <div class="col-md-6">
                                        <input type="text" class="form-control" wire:model="extend2_tempat_lahir" />
                                        @error('extend2_tempat_lahir')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                        </div>
                                        <div class="col-md-6">
                                        <input type="date" class="form-control" wire:model="extend2_tanggal_lahir" /> @error('extend2_tanggal_lahir')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>{{ __('No Telepon')}}</label>
                                    <input type="text" class="form-control" wire:model="extend2_no_telepon" />
                                    @error('extend2_no_telepon')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                        <label>{{ __('Alamat')}}</label>
                                        <input type="text" class="form-control" wire:model="extend2_alamat" />
                                        @error('extend2_alamat')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>{{ __('Kota')}}</label>
                                        <input type="text" class="form-control" wire:model="extend2_kota" />
                                        @error('extend2_kota')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label>{{ __('Jenis Kelamin')}}</label>
                                            <select class="form-control" wire:model="extend2_jenis_kelamin">
                                                <option value=""> --- Jenis Kelamin --- </option>
                                                @foreach(config('vars.jenis_kelamin') as $jenis_kelamin)
                                                <option>{{$jenis_kelamin}}</option>
                                                @endforeach
                                            </select>
                                            @error('extend2_jenis_kelamin')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>{{ __('Golongan Darah')}}</label>
                                            <select class="form-control" wire:model="extend2_blood_type">
                                                <option value=""> --- Golongan Darah --- </option>
                                                @foreach(config('vars.golongan_darah') as $i)
                                                <option>{{$i}}</option> 
                                                @endforeach
                                            </select>
                                            @error('extend2_blood_type')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                            </div>
                         @endif
                    </div>
                </div>
                @endif
                <div class="form-group col-md-12">
                    <hr />
                    <a href="/"><i class="fa fa-arrow-left"></i> {{__('Back')}}</a>
                    <button type="button" class="ml-3 btn btn-primary" wire:click="form2">{{ __('Berikutnya Ahli Waris') }} <i class="fa fa-arrow-right"></i></button>
                </div>
            </div>
            <div {!!(!$show_form2?'style="display:none"':'')!!} class="row form2">
                <div class="col-md-6">
                    <h6>DATA AHLI WARIS 1</h6>
                    <hr />
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputName">Nama (sesuai KTP)</label>
                            <input type="text" class="form-control" id="name_waris1" placeholder="Enter name" wire:model="name_waris1">
                            @error('name_waris1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">No KTP</label>
                            <input type="text" class="form-control" id="Id_Ktpwaris1" placeholder="Enter ID" wire:model="Id_Ktpwaris1">
                            @error('Id_Ktpwaris1') <span class="text-danger">{{ $message }}</span> @enderror
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
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Hubungan dengan Anggota</label>
                            <select class="form-control" wire:model="hubungananggota1">
                                <option value=""> --- Select --- </option>
                                @foreach(config('vars.hubungan_keluarga') as $i)
                                <option>{{$i}}</option> 
                                @endforeach
                            </select>
                            @error('hubungananggota1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Foto KTP</label>
                            <input type="file" class="form-control" id="foto_ktpwaris1" wire:model="foto_ktpwaris1">
                            @error('foto_ktpwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h6>DATA AHLI WARIS 2</h6>
                    <hr />
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputName">Nama (sesuai KTP)</label>
                            <input type="text" class="form-control" id="name_waris2" placeholder="Enter name" wire:model="name_waris2">
                            @error('name_waris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">No KTP</label>
                            <input type="text" class="form-control" id="Id_Ktpwaris2" placeholder="Enter ID" wire:model="Id_Ktpwaris2">
                            @error('Id_Ktpwaris2') <span class="text-danger">{{ $message }}</span> @enderror
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
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Hubungan dengan Anggota</label>
                            <select class="form-control" wire:model="hubungananggota2">
                                <option value=""> --- Select --- </option>
                                @foreach(config('vars.hubungan_keluarga') as $i)
                                <option>{{$i}}</option> 
                                @endforeach
                            </select>
                            @error('hubungananggota2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Foto KTP</label>
                            <input type="file" class="form-control" id="foto_ktpwaris2" wire:model="foto_ktpwaris2">
                            @error('foto_ktpwaris2') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="col-md-12 form-group">
                    <a href="javascript:void(0)" wire:click="form1"><i class="fa fa-arrow-left"></i> Kembali</a>
                    <button type="submit" class="ml-3 btn btn-primary" wire:click="form3">{{ __('Submit Pendaftaran') }} <i class="fa fa-check"></i></button>
                </div>
            </div>
            {{-- <div  class="row form3" {!!(!$show_form3?'style="display:none"':'')!!}>
                <div class="col-md-6">
                    <ul class="no-style">
                    @foreach(\App\Models\BankAccount::all() as $k=>$item)
                        <li>
                            <input type="radio" value="{{$item->id}}" wire:model="bank_account_id"> <h5>{{$item->bank}}</h5>
                            <p>{{$item->no_rekening}} ({{$item->owner}})</p>
                            <hr />
                        </li>
                    @endforeach
                    </ul>
                </div>
                <div class="col-md-12">
                    <a href="javascript:void(0)" wire:click="$emit('show_form2')"><i class="fa fa-arrow-left"></i> Kembali</a>
                    <button type="submit" class="ml-3 btn btn-primary">{{ __('Submit Pendaftaran') }}</button>
                </div>
            </div> --}}
        </form>
      </div>
    </div>
</div>