@section('title', $data->name)
@section('parentPageTitle', 'Member')

    <div class="clearfix row">
        <div class="col-lg-12">
            <div class="card">
                <div class="body">
                    <ul class="nav nav-tabs">                                
                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#profile"><i class="fa fa-user"></i> Anggota</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#ahli_waris"><i class="fa fa-users"></i>  Ahli Waris</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#iuran"><i class="fa fa-history"></i> Iuran</a></li>
                    </ul>
                    <div class="tab-content px-0">
                        <div class="tab-pane active" id="profile">
                            <div class="row body">
                                <div class="col-md-4">
                                    <h6>Pasphoto 4x6</h6>
                                    <div class="media photo">
                                        <div class="media-left m-r-15">
                                            @if(!empty($data->pas_foto))
                                            <img src="{{ asset('storage/'. $data->pas_foto) }}" class="user-photo media-object" alt="Foto KTP">
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <h6>Foto KK</h6>
                                    <div class="media photo">
                                        <div class="media-left m-r-15">
                                            @if(!empty($data->foto_kk))
                                                <img src="{{ asset('storage/'. $data->foto_kk) }}" class="user-photo media-object" style="width:100%" alt="Foto KK">
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <h6>Foto KTP</h6>
                                    <div class="media photo">
                                        <div class="media-left m-r-15">
                                            @if(!empty($data->foto_ktp))
                                                <img src="{{ asset('storage/'. $data->foto_ktp) }}" class="user-photo media-object" alt="Foto KTP">
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-lg-6 col-md-12">
                                    <table class="table table-hover table-striped m-b-0 c_list">
                                        <tr>
                                            <th>No Anggota</th>
                                            <td>{{$data->no_anggota_platinum}}</td>
                                        </tr>
                                        <tr>
                                            <th>No KTP</th>
                                            <td>{{$data->Id_Ktp}}</td>
                                        </tr>
                                        <tr>
                                            <th>Nama (sesuai KTP)</th>
                                            <td>{{$data->name}}</td>
                                        </tr>
                                        <tr>
                                            <th>Nama yang dicantumkan di KTA</th>
                                            <td>{{$data->name_kta}}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{{$data->email}}</td>
                                        </tr>
                                        <tr>
                                            <th>Tempat / Tanggal Lahir</th>
                                            <td>{{$data->tempat_lahir}} / {{$data->tanggal_lahir}}</td>
                                        </tr>
                                        <tr>
                                            <th>Alamat</th>
                                            <td>{{$data->address}}</td>
                                        </tr>
                                        <tr>
                                            <th>Kota / Kabupaten</th>
                                            <td>{{isset($data->city->name) ? $data->city->name : ''}}</td>
                                        </tr>
                                        <tr>
                                            <th>Jenis Kelamin</th>
                                            <td>{{$data->jenis_kelamin}}</td>
                                        </tr>
                                        <tr>
                                            <th>No Telepon</th>
                                            <td>{{$data->phone_number}}</td>
                                        </tr>
                                        <tr>
                                            <th>Golongan Darah</th>
                                            <td>{{$data->blood_type}}</td>
                                        </tr>
                                        <tr>
                                            <th>Status Keanggotaan</th>
                                            <td>{!! status_keanggotaan($data)!!}</td>
                                        </tr>
                                        <tr>
                                            <th>Status Klaim</th>
                                            <td>{!!status_claim($data)!!}</td>
                                        </tr>
                                        <tr>
                                            <th>Uang Pendaftaran</th>
                                            <td>{{format_idr($data->uang_pendaftaran)}}</td>
                                        </tr>
                                        
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="ahli_waris">
                            <div class="row">
                                <div class="col-md-6">
                                    <h6>Ahli Waris 1</h6>
                                    <hr />
                                    <table class="table table-striped table-hover m-b-0 c_list">
                                        <tr>
                                            <th>Nama (sesuai KTP)</th>
                                            <td>{{$data->name_waris1}}</td>
                                        </tr>
                                        <tr>
                                            <th>No KTP</th>
                                            <td>{{$data->Id_Ktpwaris1}}</td>
                                        </tr>
                                        <tr>
                                            <th>Tempat Lahir</th>
                                            <td>{{$data->tempat_lahirwaris1}}</td>
                                        </tr>
                                        <tr>
                                            <th>Tanggal Lahir</th>
                                            <td>{{$data->tanggal_lahirwaris1}}</td>
                                        </tr>
                                        <tr>
                                            <th>No Telepon</th>
                                            <td>{{$data->phone_numberwaris1}}</td>
                                        </tr>
                                        <tr>
                                            <th>Alamat</th>
                                            <td>{{$data->address_waris1}}</td>
                                        </tr>
                                        <tr>
                                            <th>Jenis Kelamin</th>
                                            <td>{{$data->jenis_kelaminwaris1}}</td>
                                        </tr>
                                        <tr>
                                            <th>Golongan Darah</th>
                                            <td>{{$data->blood_typewaris1}}</td>
                                        </tr>
                                        <tr>
                                            <th>Hubungan Dengan Anggota</th>
                                            <td>{{$data->hubungananggota1}}</td>
                                        </tr>
                                        <tr>
                                            <th>Foto KTP</th>
                                            <td>
                                            @if(!empty($data->foto_ktpwaris1))
                                                <div class="media photo">
                                                    <img src="{{ asset('storage/'. $data->foto_ktpwaris1) }}" class="user-photo media-object" style="height:50px;" alt="Foto KTP">
                                                </div>    
                                            @endif
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="col-md-6">
                                    <h6>Ahli Waris 2</h6>
                                    <hr />
                                    <table class="table table-striped table-hover m-b-0 c_list">
                                        <tr>
                                            <th>Nama (sesuai KTP)</th>
                                            <td>{{$data->name_waris2}}</td>
                                        </tr>
                                        <tr>
                                            <th>No KTP</th>
                                            <td>{{$data->Id_Ktpwaris2}}</td>
                                        </tr>
                                        <tr>
                                            <th>Tempat / Tanggal Lahir</th>
                                            <td>{{$data->tempat_lahirwaris2}} / {{$data->tanggal_lahirwaris2}}</td>
                                        </tr>
                                        <tr>
                                            <th>No Telepon</th>
                                            <td>{{$data->phone_numberwaris2}}</td>
                                        </tr>
                                        <tr>
                                            <th>Alamat</th>
                                            <td>{{$data->address_waris2}}</td>
                                        </tr>
                                        <tr>
                                            <th>Jenis Kelamin</th>
                                            <td>{{$data->jenis_kelaminwaris2}}</td>
                                        </tr>
                                        <tr>
                                            <th>Golongan Darah</th>
                                            <td>{{$data->blood_typewaris2}}</td>
                                        </tr>
                                        <tr>
                                            <th>Hubungan Dengan Anggota</th>
                                            <td>{{$data->hubungananggota2}}</td>
                                        </tr>
                                        <tr>
                                            <th>Foto KTP</th>
                                            <td>
                                            @if(!empty($data->foto_ktpwaris2))
                                                <div class="media photo">
                                                    <img src="{{ asset('storage/'. $data->foto_ktpwaris2) }}" class="user-photo media-object" style="height:50px;" alt="Foto KTP">
                                                </div>    
                                            @endif
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="iuran">
                            <table class="table table-striped table-hover m-b-0 c_list">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Tanggal</th>
                                        <th>Periode</th>
                                        <th>Nominal</th>
                                        <th>Bukti Pembayaran</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($data->iuran as $key => $iuran)
                                    <tr>
                                        <td>{{$key+1}}</td>
                                        <td>{{$iuran->created_at}}</td>
                                        <td>{{$iuran->from_periode}} - {{$iuran->to_periode}}</td>
                                        <td>{{format_idr($iuran->nominal)}}</td>
                                        <td><a href="{{ asset('storage/'. $iuran->file) }}" target="_blank"><i class="fa fa-image"></i></a></td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <hr />   
                        <div class="col-md-12">
                        <hr />
                            <a href="javascript:void(0)" onclick="history.back()"><i class="fa fa-arrow-left"></i> Back</a>
                            <a href="javascript:void(0)" onclick="return confirm('Approve this data?')" wire:click="approve" class="ml-3 btn btn-info"><i class="fa fa-check"></i> Approve</a>
                            <a href="javascript:void(0)" onclick="return confirm('Reject this data?')" wire:click="reject" class="ml-3 btn btn-danger"><i class="fa fa-times"></i> Reject</a>
                        </div>   
                        <!--
                        <div class="col-md-12">
                            <a href="javascript:void(0)" onclick="history.back()" class="mr-3"><i class="fa fa-arrow-left"></i> Back</a>
                            <button type="submit" class="btn btn-info"><i class="fa fa-save"></i> Save</button>
                        </div>
                        -->
                    </div>
                </div>
            </div>
        </div>
    </div>
