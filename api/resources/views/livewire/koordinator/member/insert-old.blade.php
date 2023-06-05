@section('title', "Tambah Anggota")
@section('parentPageTitle', 'Anggota')
<form method="post" wire:submit.prevent="save">
    <div class="clearfix row">
        <div class="col-lg-12">
            <div class="card">
                <div class="body">
                    <div class="row pb-0">
                        <div class="col-md-4">
                            <h6>Pasphoto 4x6</h6>
                            <div class="media photo">
                                <div class="media-left m-r-15">
                                    @if(!empty($pas_foto))
                                    <img src="{{ $pas_foto->temporaryUrl() }}" class="user-photo media-object" alt="Pasphoto" style="width:100%;">
                                    @endif
                                </div>
                                <div class="media-body">
                                    <p>Upload your Pasphoto.<em>Image should be at least 4x6</em></p>
                                    <button type="button" class="btn btn-default-dark" id="btn-upload-photo"><i class="fa fa-upload"></i> Upload Photo</button>
                                    <input type="file" id="filePhoto" class="sr-only" wire:model="pas_foto">
                                    @error('pas_foto')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h6>Foto KK</h6>
                            <div class="media-left m-r-15">
                                @if(!empty($foto_kk))
                                <img src="{{ $foto_kk->temporaryUrl() }}" class="user-photo media-object" alt="Foto KK" style="width:100%;">
                                @endif
                            </div>
                            <div class="media photo">
                                <div class="media-body">
                                    <p>Upload your KK.</p>
                                    <button type="button" class="btn btn-default-dark" id="btn-upload-foto_kk"><i class="fa fa-upload"></i>  Upload Photo</button>
                                    <input type="file" id="foto_kk" class="sr-only" wire:model="foto_kk">
                                    @error('foto_kk')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h6>Foto KTP</h6>
                            <div class="media photo">
                                <div class="media-left m-r-15">
                                    @if(!empty($foto_ktp))
                                    <img src="{{ $foto_ktp->temporaryUrl() }}" class="user-photo media-object" alt="Foto KTP" style="width:100%;">
                                    @endif
                                </div>
                                <div class="media-body">
                                    <p>Upload your Foto KTP.</p>
                                    <button type="button" class="btn btn-default-dark" id="btn-upload-foto_ktp"><i class="fa fa-upload"></i> Upload Photo</button>
                                    <input type="file" id="foto_ktp" class="sr-only" wire:model="foto_ktp">
                                    @error('foto_ktp')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="py-0" />
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
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-12 pt-2">
                            <h6>Data Anggota</h6>
                            <hr />
                            <div class="form-group">
                                <input type="text" class="form-control" wire:model="Id_Ktp" placeholder="{{__('No KTP')}}" />
                                @error('Id_Ktp')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" wire:model="name" placeholder="{{__('Nama (sesuai KTP)')}}" />
                                @error('name')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" wire:model="name_kta" placeholder="{{ __('Nama yang dicantumkan di KTA')}}" />
                                @error('name_kta')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" wire:model="email" placeholder="{{ __('Email')}}" />
                                    @error('email')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" wire:model="phone_number" placeholder="{{ __('No Telepon')}}" />
                                    @error('phone_number')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" wire:model="tempat_lahir" placeholder="{{__('Tempat Lahir')}}" />
                                        @error('tempat_lahir')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <input placeholder="{{ __('Tanggal Lahir') }}" class="form-control" wire:model="tanggal_lahir" type="text" onfocus="(this.type='date')" wire:change="hitungUmur">
                                        @error('tanggal_lahir')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <select class="form-control" wire:model="provinsi_id" wire:change="changeProvinsi">
                                    <option value=""> --- Provinsi --- </option>
                                    @foreach(\App\Models\Provinsi::orderBy('nama','ASC')->get() as $item)
                                    <option value="{{$item->id_prov}}">{{$item->nama}}</option>
                                    @endforeach
                                </select>
                                @error('provinsi_id')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <select class="form-control" wire:model="kabupaten_id">
                                    <option value=""> --- Kabupaten / Kota --- </option>
                                    @foreach($kabupaten_kota as $kab)
                                    <option value="{{$kab->id_kab}}">{{$kab->nama}}</option>
                                    @endforeach
                                </select>
                                @error('kabupaten_id')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="{{ __('Alamat')}}" class="form-control" wire:model="address" />
                                @error('address')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <select class="form-control" wire:model="jenis_kelamin">
                                        <option value=""> --- Jenis Kelamin --- </option>
                                        @foreach(config('vars.jenis_kelamin') as $jenis_kelamin)
                                        <option>{{$jenis_kelamin}}</option>
                                        @endforeach
                                    </select>
                                    @error('jenis_kelamin')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group col-md-6">
                                    <select class="form-control" wire:model="blood_type">
                                        <option value=""> --- Golongan Darah --- </option>
                                        @foreach(config('vars.golongan_darah') as $i)
                                        <option>{{$i}}</option> 
                                        @endforeach
                                    </select>
                                    @error('blood_type')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 pt-2">
                            <h6>Data Ahli Waris 1</h6>
                            <hr />  
                            <div class="form-group">
                                <input type="text" class="form-control" wire:model="Id_Ktpwaris1" placeholder="{{__('No KTP')}}" />
                                @error('Id_Ktpwaris1')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" wire:model="name_waris1" placeholder="{{ __('Nama')}}" />
                                    @error('name_waris1')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" wire:model="phone_numberwaris1" placeholder="{{ __('No Telepon')}}" />
                                    @error('phone_numberwaris1')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" wire:model="tempat_lahirwaris1" placeholder="{{__('Tempat Lahir')}}" />
                                        @error('tempat_lahirwaris1')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <input placeholder="{{ __('Tanggal Lahir') }}" class="form-control" wire:model="tanggal_lahirwaris1" type="text" onfocus="(this.type='date')" wire:change="hitungUmur">
                                        @error('tanggal_lahirwaris1')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="{{ __('Alamat')}}" class="form-control" wire:model="address_waris1" />
                                @error('address_waris1')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <select class="form-control" wire:model="jenis_kelaminwaris1">
                                        <option value=""> --- Jenis Kelamin --- </option>
                                        @foreach(config('vars.jenis_kelamin') as $jenis_kelamin)
                                        <option>{{$jenis_kelamin}}</option>
                                        @endforeach
                                    </select>
                                    @error('jenis_kelaminwaris1')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group col-md-6">
                                    <select class="form-control" wire:model="blood_typewaris1">
                                        <option value=""> --- Golongan Darah --- </option>
                                        @foreach(config('vars.golongan_darah') as $i)
                                        <option>{{$i}}</option> 
                                        @endforeach
                                    </select>
                                    @error('blood_typewaris1')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <select class="form-control" wire:model="hubungananggota1">
                                    <option value=""> --- Hubungan --- </option>
                                    @foreach(config('vars.hubungan_keluarga') as $hubungan)
                                    <option>{{$hubungan}}</option>
                                    @endforeach
                                </select>
                                @error('hubungananggota1')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <div class="media photo">
                                    <div class="media-left">
                                        @if(!empty($foto_ktpwaris1))
                                        <img src="{{ $foto_ktpwaris1->temporaryUrl() }}" class="user-photo media-object" alt="Foto KTP" style="width:100%;">
                                        @endif
                                    </div>
                                    <div class="media-body">
                                        <button type="button" class="btn btn-default-dark" id="btn-upload-foto_ktp_waris1"><i class="fa fa-upload"></i> Upload Foto KTP</button>
                                        <input type="file" id="foto_ktpwaris1" class="sr-only" wire:model="foto_ktpwaris1">
                                        @error('foto_ktpwaris1')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 pt-2">
                            <h6>Data Ahli Waris 2</h6>
                            <hr />  
                            <div class="form-group">
                                <input type="text" class="form-control" wire:model="Id_Ktpwaris2" placeholder="{{__('No KTP')}}" />
                                @error('Id_Ktpwaris2')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" wire:model="name_waris2" placeholder="{{ __('Nama')}}" />
                                    @error('name_waris2')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" wire:model="phone_numberwaris2" placeholder="{{ __('No Telepon')}}" />
                                    @error('phone_numberwaris2')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" wire:model="tempat_lahirwaris2" placeholder="{{__('Tempat Lahir')}}" />
                                        @error('tempat_lahirwaris2')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <input placeholder="{{ __('Tanggal Lahir') }}" class="form-control" wire:model="tanggal_lahirwaris2" type="text" onfocus="(this.type='date')" wire:change="hitungUmur">
                                        @error('tanggal_lahirwaris2')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="{{ __('Alamat')}}" class="form-control" wire:model="address_waris2" />
                                @error('address_waris2')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <select class="form-control" wire:model="jenis_kelaminwaris2">
                                        <option value=""> --- Jenis Kelamin --- </option>
                                        @foreach(config('vars.jenis_kelamin') as $jenis_kelamin)
                                        <option>{{$jenis_kelamin}}</option>
                                        @endforeach
                                    </select>
                                    @error('jenis_kelaminwaris2')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group col-md-6">
                                    <select class="form-control" wire:model="blood_typewaris2">
                                        <option value=""> --- Golongan Darah --- </option>
                                        @foreach(config('vars.golongan_darah') as $i)
                                        <option>{{$i}}</option> 
                                        @endforeach
                                    </select>
                                    @error('blood_typewaris2')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <select class="form-control" wire:model="hubungananggota2">
                                    <option value=""> --- Hubungan --- </option>
                                    @foreach(config('vars.hubungan_keluarga') as $hubungan)
                                    <option>{{$hubungan}}</option>
                                    @endforeach
                                </select>
                                @error('hubungananggota2')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <div class="media photo">
                                    <div class="media-left">
                                        @if(!empty($foto_ktpwaris2))
                                        <img src="{{ $foto_ktpwaris2->temporaryUrl() }}" class="user-photo media-object" alt="Foto KTP" style="width:100%;">
                                        @endif
                                    </div>
                                    <div class="media-body">
                                        <button type="button" class="btn btn-default-dark" id="btn-upload-foto_ktp_waris2"><i class="fa fa-upload"></i> Upload Foto KTP</button>
                                        <input type="file" id="foto_ktpwaris2" class="sr-only" wire:model="foto_ktpwaris2">
                                        @error('foto_ktpwaris2')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                        </div>
                        @if($extend_register1 || $extend_register2)
                        <div class="col-lg-8 col-md-12">
                            <div class="row">
                                @if($extend_register1)
                                <div class="col-md-6 pt-2" style="background:#fff3cd">
                                    <div class="form-group">
                                        <label>{{__('No KTP')}}</label>
                                        <input type="text" class="form-control" wire:model="extend1_no_ktp" />
                                        @error('extend1_no_ktp')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>{{__('Nama (sesuai KTP)')}}</label>
                                        <input type="text" class="form-control" wire:model="extend1_name" />
                                        @error('extend1_name')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>{{ __('Nama yang dicantumkan di KTA')}}</label>
                                        <input type="text" class="form-control" wire:model="extend1_name_kta" />
                                        @error('extend1_name_kta')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label>{{ __('Email')}}</label>
                                            <input type="text" class="form-control" wire:model="extend1_email" />
                                            @error('extend1_email')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>{{ __('No Telepon')}}</label>
                                            <input type="text" class="form-control" wire:model="extend1_no_telepon" />
                                            @error('extend1_no_telepon')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ __('Tempat / Tanggal Lahir ')}}{!!$umur?"<span class=\"text-danger\">( {$umur} Thn)</span>" : ''!!}</label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" wire:model="extend1_tempat_lahir" />
                                                @error('extend1_tempat_lahir')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                            <div class="col-md-6">
                                                <input type="date" class="form-control" wire:model="extend1_tanggal_lahir" wire:change="hitungUmur" />
                                                @error('extend1_tanggal_lahir')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
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
                                <div class="col-md-6 pt-2" style="background:#f4f7f6">
                                    <div class="form-group">
                                        <label>{{__('No KTP')}}</label>
                                        <input type="text" class="form-control" wire:model="extend2_no_ktp" />
                                        @error('extend2_no_ktp')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>{{__('Nama (sesuai KTP)')}}</label>
                                        <input type="text" class="form-control" wire:model="extend2_name" />
                                        @error('extend2_name')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>{{ __('Nama yang dicantumkan di KTA')}}</label>
                                        <input type="text" class="form-control" wire:model="extend2_name_kta" />
                                        @error('extend2_name_kta')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label>{{ __('Email')}}</label>
                                            <input type="text" class="form-control" wire:model="extend2_email" />
                                            @error('extend2_email')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>{{ __('No Telepon')}}</label>
                                            <input type="text" class="form-control" wire:model="extend2_no_telepon" />
                                            @error('extend2_no_telepon')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ __('Tempat / Tanggal Lahir ')}}{!!$umur?"<span class=\"text-danger\">( {$umur} Thn)</span>" : ''!!}</label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" wire:model="extend2_tempat_lahir" />
                                                @error('extend2_tempat_lahir')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                            <div class="col-md-6">
                                                <input type="date" class="form-control" wire:model="extend2_tanggal_lahir" wire:change="hitungUmur" />
                                                @error('extend2_tanggal_lahir')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
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
                        <div class="col-md-6">
                            <hr />
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="exampleInputAlamat">Iuran Tetap <strong class="text-danger">Rp. 8.000</strong> + Sumbangan <strong class="text-danger">Rp. 2.000</strong>  (Rp {{format_idr($total_iuran_tetap)}})</label>
                                    <select class="form-control" wire:model="iuran_tetap" wire:change="calculate_">
                                        <option value=""> --- Minimal 6 Bulan --- </option>
                                        @for($i=6;$i<=40;$i++)
                                        <option>{{$i}}</option>
                                        @endfor
                                    </select>
                                    @error('iuran_tetap') <span class="text-danger">{{ $message }}</span> @enderror
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="exampleInputAlamat">Uang Pendaftaran - Sukarela Minimum<br /> <strong class="text-danger">Rp. 50.000</strong></label>
                                    <input type="number" class="form-control" wire:model="uang_pendaftaran" wire:input="calculate_">
                                    @error('uang_pendaftaran') <span class="text-danger">{{ $message }}</span> @enderror
                                </div>
                                {{-- <div class="form-group col-md-6">
                                    <label for="exampleInputAlamat">Sumbangan <strong class="text-danger">Rp. 2.000</strong>  (Rp {{format_idr($total_sumbangan)}})</label>
                                    <select class="form-control" wire:model="sumbangan" wire:change="calculate_">
                                        <option value=""> --- Minimal 6 Bulan --- </option>
                                        @for($i=6;$i<=40;$i++)
                                        <option>{{$i}}</option>
                                        @endfor
                                    </select>
                                    @error('sumbangan') <span class="text-danger">{{ $message }}</span> @enderror
                                </div> --}}
                            </div>

                            <div class="row">
                                
                                <div class="form-group col-md-6">
                                    <h5 class="btn btn-outline-danger">Total Rp. {{format_idr($total)}}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <hr />
                            <div class="row">
                                <!--
                                <div class="form-group col-md-6">
                                    <label>{{ __('Koordinator')}}</label>
                                    <select class="form-control" wire:model="koordinator_id">
                                        <option value=""> --- Select Koordinator --- </option>
                                        @foreach(\App\Models\Koordinator::orderBy('name','ASC')->get() as $koordinator)
                                        <option value="{{$koordinator->id}}">{{$koordinator->name}}</option>
                                        @endforeach
                                    </select>
                                    @error('koordinator_id') <span class="text-danger">{{ $message }}</span> @enderror
                                </div>
                                -->
                                <div class="form-group col-md-6">
                                    <label>{{ __('Payment Date')}}</label>
                                    <input type="date" class="form-control" wire:model="payment_date" />
                                    @error('payment_date')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
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
                            @if(!empty($file_konfirmasi))
                            <img src="{{ $file_konfirmasi->temporaryUrl() }}" class="user-photo media-object" alt="Pasphoto" style="height:200px;"><br />
                            @endif
                            <button type="button" class="btn btn-default-dark" id="btn-upload-file_konfirmasi"><i class="fa fa-upload"></i> Upload Bukti Pembayaran</button>
                            <input type="file" id="file_konfirmasi" class="sr-only" wire:model="file_konfirmasi">
                            @error('file_konfirmasi')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>
                    <hr />
                    <a href="javascript:void(0)" onclick="history.back()" class="mr-3"><i class="fa fa-arrow-left"></i> Back</a>
                    <button type="submit" class="btn btn-info"><i class="fa fa-save"></i> Simpan</button>
                </div>
            </div>
        </div>
    </div>
</form>
@section('page-script')
$('#btn-upload-photo').on('click', function() {
    $(this).siblings('#filePhoto').trigger('click');
});
$('#btn-upload-foto_kk').on('click', function() {
    $(this).siblings('#foto_kk').trigger('click');
});
$('#btn-upload-foto_ktp').on('click', function() {
    $(this).siblings('#foto_ktp').trigger('click');
});
$('#btn-upload-foto_ktp_waris1').on('click', function() {
    $(this).siblings('#foto_ktpwaris1').trigger('click');
});
$('#btn-upload-foto_ktp_waris2').on('click', function() {
    $(this).siblings('#foto_ktpwaris2').trigger('click');
});
$('#btn-upload-file_konfirmasi').on('click', function() {
    $(this).siblings('#file_konfirmasi').trigger('click');
});
@endsection