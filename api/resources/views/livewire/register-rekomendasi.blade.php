<div class="row" id="rekomendasi_anggota_{{$num}}">
    <div class="form-group col-md-8">
        <h5 class="text-info mb-0">DATA REKOMENDASI CALON ANGGOTA {{$num}}</h5>
    </div>
    <div class="col-md-4 text-right">
        <span wire:loading>
            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
            <span class="sr-only">{{ __('Loading...') }}</span>
        </span>
    </div>
    <div class="col-md-12">
        <hr class="mt-0" style="border:1px solid #18a2b8" />
    </div>
    
    <div class="col-md-6">
        <div class="row">
            <div class="form-group col-md-6">
                <label>No KTP</label>
                <input type="text" class="form-control" wire:model="Id_Ktp">
                <a href="javascript:void(0)" class="mt-1 ml-0" wire:click="checkKTP"><i class="fa fa-check"></i> Check Nomor KTP</a>
                @error('Id_Ktp') <br /> 
                    <span class="text-danger">{{ $message }}</span> 
                @enderror
                @if($messageKtp==1)
                    <div class="text-danger">
                        <i class="fa fa-warning"></i> Data KTP sudah digunakan
                    </div>
                @endif
                @if($messageKtp==2)
                    <div class="text-success">
                        <i class="fa fa-check"></i> Data KTP tersedia
                    </div>
                @endif 
            </div>
            <div class="form-group col-md-6">
                <label>No Anggota ex Gold</label>
                <input type="text" class="form-control" wire:model="no_anggota_gold">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-6">
                <label>Nama (sesuai KTP)</label>
                <input type="text" class="form-control" placeholder="Enter name" wire:model="name">
                @error('name') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-6">
                <label>Nama yang dicantumkan di KTA</label>
                <input type="text" class="form-control" placeholder="Enter here" wire:model="name_kta">
                @error('name_kta') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-6">
                <label>Tempat Lahir</label>
                <input type="text" class="form-control" placeholder="Enter Place of Birth" wire:model="tempat_lahir">
                @error('tempat_lahir') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-6">
                <label>Tanggal Lahir <span class="text-danger">{{$umur? "( {$umur} tahun )" : ''}}</span></label>
                <input type="date" class="form-control datepicker" placeholder="Enter Date of Birth"  wire:model="tanggal_lahir">
                @error('tanggal_lahir') <span class="text-danger">{{ $message }}</span> @enderror
                @if($umur >50)
                    <span class="text-danger">Umur data rekomendasi maksimal 50 tahun</span>
                @endif
            </div>
        </div>
        
        <div class="row">
            <div class="form-group col-md-3">
                <label>Jenis Kelamin</label>
                <select class="form-control" wire:model="jenis_kelamin">
                    <option value=""> --- Jenis Kelamin --- </option>
                    @foreach(config('vars.jenis_kelamin') as $i)
                    <option>{{$i}}</option> 
                    @endforeach
                </select>
                @error('jenis_kelamin') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-3">
                <label>Golongan Darah</label>
                <select class="form-control" wire:model="blood_type">
                    <option value=""> --- Select --- </option>
                    @foreach(config('vars.golongan_darah') as $i)
                    <option>{{$i}}</option> 
                    @endforeach
                </select>
                @error('blood_type') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-6">
                <label>No Telp. / HP</label>
                <input type="text" class="form-control" placeholder="Enter Phone Number" wire:model="phone_number">
                @error('phone_number') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="row">
            <div class="form-group col-md-6">
                <label>E-mail</label>
                <input type="email" class="form-control" placeholder="Enter name" wire:model="email">
                @error('email') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-6">
                <label>Kota/Kabupaten</label>
                <select class="form-control" wire:model="city">
                    <option value=""> --- Kota/Kabupaten --- </option>
                    @foreach(\App\Models\City::orderBy('code','ASC')->get() as $item)
                    <option value="{{$item->code}}">{{$item->name}}</option>
                    @endforeach
                </select>
                @error('city')
                <span class="text-danger">{{ $message }}</span>
                @enderror
                @if($city=='OTHER')
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Enter Kota/Kabupaten" wire:model="city_lainnya">
                        @error('city_lainnya') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                @endif
            </div> 
        </div>
        <div class="row">
            <div class="form-group col-md-6">
                <label>Alamat</label>
                <input type="text" class="form-control" placeholder="Enter address" wire:model="address">
                @error('address') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-6">
                <label>Foto KTP</label>
                <input type="file" wire:model="foto_ktp">
                @error('foto_ktp') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-6">
                <label>Foto KK</label>
                <input type="file" wire:model="foto_kk">
                @error('foto_kk') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-6">
                <label>Pasphoto 4x6</label>
                <input type="file" wire:model="pas_foto">
                @error('pas_foto') <span class="text-danger">{{ $message }}</span> @enderror
            </div>  
        </div>
        <div class="row">
            <div class="form-group col-md-6">
                <label>Iuran <strong class="text-danger">Rp. {{format_idr(get_setting('iuran_tetap'))}}</strong> (Rp {{format_idr($total_iuran_tetap )}})</label>
                <select class="form-control" wire:model="iuran_tetap" wire:change="calculate_">
                    <option value=""> --- Minimal 6 Bulan --- </option>
                    @for($i=3;$i<=40;$i++)
                    <option>{{$i}}</option>
                    @endfor
                </select>
                @error('iuran_tetap') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <!-- <div class="form-group col-md-6">
                <label>Sumbangan <strong class="text-danger">Rp. {{format_idr(get_setting('sumbangan'))}}</strong>  (Rp {{format_idr($total_sumbangan)}})</label>
                <select class="form-control" wire:model="sumbangan" wire:change="calculate_">
                    <option value=""> --- Minimal 6 Bulan --- </option>
                    @for($i=6;$i<=40;$i++)
                    <option>{{$i}}</option>
                    @endfor
                </select>
                @error('sumbangan') <span class="text-danger">{{ $message }}</span> @enderror
            </div> -->
        </div>
        <div class="row">
            <div class="col-md-12">
                <label>Uang Pendaftaran - Sukarela Minimum <strong class="text-danger">Rp. {{format_idr(get_setting('uang_pendaftaran'))}}</strong></label>
            </div>
            <div class="form-group col-md-6">
                <input type="number" class="form-control" wire:model="uang_pendaftaran" wire:input="calculate_">
                @error('uang_pendaftaran') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-6">
                <h5 class="btn btn-outline-danger">Total Rp. {{format_idr($total)}}</h5>
            </div>
        </div>
    </div>
    <div class="form-group col-md-12">
        <br />
    </div>
    <div class="col-md-6">
        <h6 class="text-info">DATA AHLI WARIS 1</h6>
        <hr style="border-top:1px solid #18a2b8" />
        <div class="row">
            <div class="form-group col-md-6">
                <label for="exampleInputAlamat">No KTP</label>
                <input type="text" class="form-control" placeholder="Enter ID" wire:model="Id_Ktpwaris1">
                @error('Id_Ktpwaris1') <span class="text-danger">{{ $message }}</span> @enderror
                <a href="javascript:void(0)" wire:click="checkKTPWaris1"><i class="fa fa-check"></i> Check Nomor KTP</a>
                @if($messageKtpWaris1==1)
                <div class="text-success">
                    <i class="fa fa-warning"></i> Data KTP tersedia
                </div>
                @endif
                @if($messageKtpWaris1==2)
                <div class="text-warning" role="alert">
                    <i class="fa fa-check"></i> Data KTP tidak tersedia
                </div>
                @endif
            </div>
            <div class="form-group col-md-6">
                <label>Nama (sesuai KTP)</label>
                <input type="text" class="form-control" placeholder="Enter name" wire:model="name_waris1">
                @error('name_waris1') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-4">
                <label>Tempat Lahir</label>
                <input type="text" class="form-control" placeholder="Enter Place of Birth" wire:model="tempat_lahirwaris1">
                @error('tempat_lahirwaris1') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-4">
                <label>Tanggal Lahir</label>
                <input type="date" class="form-control datepicker" placeholder="Enter Date of Birth" wire:model="tanggal_lahirwaris1">
                @error('tanggal_lahirwaris1') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-4">
                <label for="exampleInputAlamat">No Telp. / HP</label>
                <input type="number" class="form-control" placeholder="Enter Phone Number" wire:model="phone_numberwaris1">
                @error('phone_numberwaris1') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-3">
                <label>Golongan Darah</label>
                <select class="form-control" wire:model="blood_typewaris1">
                    <option value=""> --- Select --- </option>
                    @foreach(config('vars.golongan_darah') as $i)
                    <option>{{$i}}</option> 
                    @endforeach
                </select>
                @error('blood_typewaris1') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-4">
                <label>Hubungan dengan Anggota</label>
                <select class="form-control" wire:model="hubungananggota1">
                <option value=""> --- Select --- </option>
                    @foreach(config('vars.hubungan_keluarga') as $i)
                    <option>{{$i}}</option> 
                    @endforeach
                    </select>
                @error('hubungananggota1') <span class="text-danger">{{ $message }}</span> @enderror
                @if($hubungananggota1=='Lainnya')
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Hubungan Anggota" wire:model="hubungananggota1_lainnya">
                        @error('hubungananggota1_lainnya') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                @endif
            </div>
            
            <div class="form-group col-md-5">
                <label>Foto KTP</label>
                <input type="file" class="form-control" wire:model="foto_ktpwaris1">
                @error('foto_ktpwaris1') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-3">
                <label>Jenis Kelamin</label>
                <select class="form-control" wire:model="jenis_kelaminwaris1">
                    <option value=""> - Pilih - </option>
                    @foreach(config('vars.jenis_kelamin') as $i)
                    <option>{{$i}}</option> 
                    @endforeach
                </select>
                @error('jenis_kelaminwaris1') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-9">
                <label>Alamat</label>
                <input type="text" class="form-control"  placeholder="Enter address" wire:model="address_waris1">
                @error('address_waris1') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <h6 class="text-info">DATA AHLI WARIS 2</h6>
        <hr style="border-top:1px solid #18a2b8" />
        <div class="row">
            <div class="form-group col-md-6">
                <label>No KTP</label>
                <input type="text" class="form-control" placeholder="Enter ID" wire:model="Id_Ktpwaris2">
                @error('Id_Ktpwaris2') <span class="text-danger">{{ $message }}</span> @enderror
            
                <a href="javascript:void(0)" wire:click="checkKTPWaris2"><i class="fa fa-check"></i> Check Nomor KTP</a>
                @if($messageKtpWaris2==1)
                <div class="text-success" role="alert">
                    <i class="fa fa-warning"></i> Data KTP tersedia
                </div>
                @endif
                @if($messageKtpWaris2==2)
                <div class="alert alert-success alert-dismissible" role="alert">
                    <i class="fa fa-check"></i> Data KTP tidak tersedia
                </div>
                @endif
            </div>
            <div class="form-group col-md-6">
                <label>Nama (sesuai KTP)</label>
                <input type="text" class="form-control" placeholder="Enter name" wire:model="name_waris2">
                @error('name_waris2') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-4">
                <label>Tempat Lahir</label>
                <input type="text" class="form-control" placeholder="Enter Place of Birth" wire:model="tempat_lahirwaris2">
                @error('tempat_lahirwaris2') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-4">
                <label>Tanggal Lahir</label>
                <input type="date" class="form-control datepicker" placeholder="Enter Date of Birth" wire:model="tanggal_lahirwaris2">
                @error('tanggal_lahirwaris2') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-4">
                <label>No Telp. / HP</label>
                <input type="text" class="form-control" placeholder="Enter Phone Number" wire:model="phone_numberwaris2">
                @error('phone_numberwaris2') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-3">
                <label>Golongan Darah</label>
                <select class="form-control" wire:model="blood_typewaris2">
                    <option value=""> --- Select --- </option>
                    @foreach(config('vars.golongan_darah') as $i)
                    <option>{{$i}}</option> 
                    @endforeach
                </select>
                @error('blood_typewaris2') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-4">
                <label>Hubungan dengan Anggota</label>
                <select class="form-control" wire:model="hubungananggota2">
                    <option value=""> --- Select --- </option>
                    @foreach(config('vars.hubungan_keluarga') as $i)
                    <option>{{$i}}</option> 
                    @endforeach
                    </select>
                @error('hubungananggota2') <span class="text-danger">{{ $message }}</span> @enderror
                @if($hubungananggota2=='Lainnya')
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Hubungan Anggota" wire:model="hubungananggota2_lainnya">
                        @error('hubungananggota2_lainnya') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                @endif
            </div>
            <div class="form-group col-md-5">
                <label">Foto KTP</label>
                <input type="file" class="form-control" wire:model="foto_ktpwaris2">
                @error('foto_ktpwaris2') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-3">
                <label>Jenis Kelamin</label>
                <select class="form-control" wire:model="jenis_kelaminwaris2">
                    <option value=""> Pilih </option>
                    @foreach(config('vars.jenis_kelamin') as $i)
                    <option>{{$i}}</option> 
                    @endforeach
                </select>
                @error('jenis_kelaminwaris2') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <div class="form-group col-md-9">
                <label>Alamat</label>
                <input type="text" class="form-control" placeholder="Enter address" wire:model="address_waris2">
                @error('address_waris2') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>
    </div>  
    <div class="col-md-12">
        <br />
    </div>
</div>
