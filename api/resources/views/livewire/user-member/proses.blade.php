@section('title', 'Form No :'.$data->no_form)
@section('parentPageTitle', 'Management Member')

<div class="clearfix row">
    <div class="col-lg-12">
        <div class="card">
            <div class="body">
                <div class="row">
                    <div class="col-md-4">
                        <h5>Data Anggota</h5>
                        <hr />
                        <div class="table-responsive">
                            <table class="table table-striped table-hover m-b-0 c_list">
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
                                    <th>Tempat Lahir</th>
                                    <td>{{$data->tempat_lahir}}</td>
                                </tr>
                                <tr>
                                    <th>Tanggal Lahir</th>
                                    <td>{{$data->tanggal_lahir}}</td>
                                </tr>
                                <tr>
                                    <th>Alamat</th>
                                    <td>{{$data->address}}</td>
                                </tr>
                                <tr>
                                    <th>Kota / Kabupaten</th>
                                    <td>{{isset($data->kota->name) ? $data->kota->name : ''}} 
                                        @if($data->city == 'OTHER')
                                            ({{$data->city_lainnya}})
                                        @endif</td>
                                </tr>
                                <tr>
                                    <th>No KTP</th>
                                    <td>{{$data->Id_Ktp}}</td>
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
                                    <th>Foto KTP</th>
                                    <td>
                                        @if(!empty($data->foto_ktp))
                                            <a href="{{ asset('storage/'. $data->foto_ktp) }}" target="_blank"><i class="fa fa-image"></i></a>
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <th>Foto KK</th>
                                    <td>
                                        @if(!empty($data->foto_kk))
                                            <a href="{{ asset('storage/'. $data->foto_kk) }}" target="_blank"><i class="fa fa-image"></i></a>
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <th>Pas Photo 3 x 6</th>
                                    <td>
                                        @if(!empty($data->pas_foto))
                                            <a href="{{ asset('storage/'. $data->pas_foto) }}" target="_blank"><i class="fa fa-image"></i></a>
                                        @endif
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h5>Data Ahli Waris 1</h5>
                        <hr />
                        <div class="table-responsive">
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
                                    <td>{{$data->hubungananggota1}}
                                     @if($data->hubungananggota1 == 'Lainnya')
                                        ({{$data->hubungananggota1_lainnya}})
                                     @endif
                                    </td>
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
                    </div>

                    <div class="col-md-4">
                        <h5>Data Ahli Waris 2</h5>
                        <hr />
                        <div class="table-responsive">
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
                                    <th>Tempat Lahir</th>
                                    <td>{{$data->tempat_lahirwaris2}}</td>
                                </tr>
                                <tr>
                                    <th>Tanggal Lahir</th>
                                    <td>{{$data->tanggal_lahirwaris2}}</td>
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
                                    <td>{{$data->hubungananggota2}}
                                    @if($data->hubungananggota2 == 'Lainnya')
                                        ({{$data->hubungananggota2_lainnya}})
                                     @endif
                                    </td>
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
                    <div class="col-md-4">
                        <br />
                        <h5>Kelengkapan Data</h5>
                        <hr />
                        <ul>
                            <li>
                                @if($data->pas_foto=="" || $data->foto_kk=="" || $data->foto_ktp=="")
                                    <p class="text-danger"><i class="fa fa-times"></i> Foto / Lampiran</p> 
                                @else
                                    <p class="text-success"><i class="fa fa-check"></i> Foto / Lampiran</p> 
                                @endif
                            </li>
                            <li>
                                @if($data->file_konfirmasi == "")
                                    <p class="text-danger"><i class="fa fa-times"></i> Pembayaran</p> 
                                @else
                                    <p class="text-success"><i class="fa fa-check"></i> Pembayaran</p> 
                                @endif
                            </li>
                            <!--
                            <li>
                                @if($data->status_pembayaran == 1)
                                    <p class="text-success"><i class="fa fa-check"></i> Pembayaran</p> 
                                @else
                                    <p class="text-danger"><i class="fa fa-times"></i> Pembayaran</p> 
                                @endif
                            </li>
                            -->
                            <li>
                                @if($data->name_waris1=="" || $data->Id_Ktpwaris1=="" || $data->phone_numberwaris1=="")
                                    <p class="text-danger"><i class="fa fa-times"></i> Ahli Waris</p> 
                                @else
                                    <p class="text-success"><i class="fa fa-check"></i> Ahli Waris</p> 
                                @endif
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-8">
                        <br />
                        <h5>Bukti Pembayaran</h5>
                        <hr />
                        <div>
                            @if(!empty($data->file_konfirmasi))
                                <div class="media photo">
                                    <a href="{{ asset('storage/'. $data->file_konfirmasi) }}" target="_blank"><img src="{{ asset('storage/'. $data->file_konfirmasi) }}" class="user-photo media-object" style="height:50px;" alt="Bukti Transfer"></a>
                                </div>    
                            @endif
                        </div>
                    </div>
                    <div class="col-md-12">
                        <hr />
                        <a href="javascript:void(0)" onclick="history.back()"><i class="fa fa-arrow-left"></i> Back</a>
                        <a href="javascript:void(0)" onclick="confirm_approve()" class="ml-3 btn btn-info"><i class="fa fa-check"></i> Approve</a>
                        <a href="javascript:void(0)" onclick="confirm_reject()" class="ml-3 btn btn-danger"><i class="fa fa-times"></i> Reject</a>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</div>
@push('after-scripts')
<script>
    function confirm_approve()
    {
        if(confirm('Approve data Anggota?')) Livewire.emit('event-approve');
    }

    function confirm_reject()
    {
        if(confirm('Reject data Anggota?')) Livewire.emit('event-reject');
    }
</script>
@endpush