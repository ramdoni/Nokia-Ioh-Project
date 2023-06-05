@section('title', "Tambah Anggota")
@section('parentPageTitle', 'Anggota')
<div class="mt-2 card">
    <div class="card-body">
        <div class="row" {!!(!$show_form1?'style="display:none"':'')!!}>
            <div class="form-group col-md-8">
                <h5 class="text-info">DATA CALON ANGGOTA</h5>
            </div>
            <div class="col-md-4 text-right">
                <span wire:loading>
                    <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                    <span class="sr-only">{{ __('Loading...') }}</span>
                </span>
            </div>
            <div class="col-md-12"><hr class="mt-0" style="border:1px solid #18a2b8" /></div>
        </div>
        <div {!!(!$is_success?'style="display:none"':'')!!}>
            <h6 class="text-success"><span><i class="fa fa-check"></i></span> Pendaftaran anda berhasil dilakukan</h6>
        </div>
        <form class="form-auth-small" method="POST" wire:submit.prevent="save">
            <div class="row" {!!(!$show_form1?'style="display:none"':'')!!}>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="exampleInputAlamat">No KTP</label>
                        <input type="text" class="form-control" wire:change="checkKTP" id="Id_Ktp" placeholder="Enter ID" wire:model="Id_Ktp">
                        @error('Id_Ktp') <span class="text-danger">{{ $message }}</span> <br />@enderror
                            <a href="javascript:void(0)" class="mt-1 ml-0" wire:click="checkKTP"><i class="fa fa-check"></i> Check Nomor KTP</a>
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
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputName">Nama (sesuai KTP)</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter name" wire:model="name">
                            @error('name') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputName">Nama yang dicantumkan di KTA</label>
                            <input type="text" class="form-control" id="name_kta" placeholder="Enter here" wire:model="name_kta">
                            @error('name_kta') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Jenis Kelamin</label>
                            <select class="form-control" name="jenis_kelamin" wire:model="jenis_kelamin">
                                <option value=""> --- Jenis Kelamin --- </option>
                                @foreach(config('vars.jenis_kelamin') as $i)
                                <option>{{$i}}</option> 
                                @endforeach
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
                            <label for="exampleInputName">E-mail</label>
                            <input type="E-mail" class="form-control" id="email" placeholder="Enter name" wire:model="email">
                            @error('email') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
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
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="exampleInputName">Tempat Lahir</label>
                            <input type="text" class="form-control" id="tempat_lahir" placeholder="Enter Place of Birth" wire:model="tempat_lahir">
                            @error('tempat_lahir') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputName">Tanggal Lahir 
                                <span wire:loading wire:target="hitungUmur">
                                    <i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>
                                    <span class="sr-only">{{ __('Loading...') }}</span>
                                </span>
                                {!!$umur?"<span class=\"text-danger\" wire:loading.remove wire:target=\"hitungUmur\">( Umur {$umur} Thn)</span>" : ''!!}
                            </label>
                            <input type="date" class="form-control datepicker" id="tanggal_lahir" placeholder="Enter Date of Birth" wire:change="hitungUmur" wire:model="tanggal_lahir">
                            @error('tanggal_lahir') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Agama</label>
                            <select class="form-control" name="agama" wire:model="agama">
                                <option value=""> --- Agama --- </option>
                                <option>Islam</option> 
                                <option>Kristen</option> 
                                <option>Katolik</option> 
                                <option>Hindu</option> 
                                <option>Buddha</option> 
                                <option>Konghucu</option> 
                            </select>
                            @error('agama') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="col-md-6">
                            <label>User Rekomendator</label>
                            <input list="rekomendator" type="text" class="form-control" id="user_id_recomendation" name="user_id_recomendation" wire:model="user_id_recomendation">
                            <datalist id="rekomendator">
                                @foreach(App\Models\UserMember::orderBy('id','desc')->get() as $item)
                                    @if(hitung_umur($item->tanggal_lahir) < 60)
                                        continue;
                                    @else
                                        <option value="{{ $item->no_anggota_platinum }}">{{ $item->name }}</option> 
                                    @endif
                                
                                @endforeach
                            </datalist>
                            @error('user_rekomendator') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="exampleInputAlamat">Alamat</label>
                        <input type="text" class="form-control" id="address" placeholder="Enter address" wire:model="address">
                        @error('address') <span class="text-danger">{{ $message }}</span> @enderror
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
                                <option value="1">TUNAI</option>
                                @foreach(\App\Models\BankAccount::all() as $bank)
                                <option value="{{$bank->id}}">{{$bank->bank}} {{$bank->no_rekening}} a/n {{$bank->owner}}</option>
                                @endforeach
                            </select>
                            @error('bank_account_id')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>{{ __('Tanggal Aktif')}} <small>*default hari ini</small></label>
                            <input type="date" class="form-control" wire:model="tanggal_diterima" />
                            @error('tanggal_diterima')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">File Bukti Pembayaran</label>
                            <input type="file" class="form-control" id="file_konfirmasi" wire:model="file_konfirmasi">
                            @error('file_konfirmasi') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleInputAlamat">Foto KTP</label>
                            <input type="file" class="form-control" id="foto_ktp" wire:model="foto_ktp">
                            @error('foto_ktp') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
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
                </div>
                <div class="col-12"><br /></div>
                <div class="form-group col-md-12">
                    <hr />
                    <a href="/"><i class="fa fa-arrow-left"></i> {{__('Back')}}</a>
                    <button type="submit" class="ml-3 btn btn-primary">{{ __('Submit Pendaftaran') }} <i class="fa fa-check"></i></button>
                    <span wire:loading>
                        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                        <span class="sr-only">{{ __('Loading...') }}</span>
                    </span>     
                </div>
            </div>
        </form>
    </div>
</div>