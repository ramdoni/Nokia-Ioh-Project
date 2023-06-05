@section('title', "FORM NO : {$data->form_no}")
<div class="clearfix row">
    <div class="col-lg-6">
        <div class="card">
            <div class="body">
                <div class="table-responsive">
                    <table class="table table-striped table-hover m-b-0 c_list">
                        <tr>
                            <th>Nama Anggota</th>
                            <td>{{isset($data->user_member->name)?$data->user_member->name:''}}</td>
                        </tr>
                        <tr>
                            <th>Kota</th>
                            <td>{{isset($data->user_member->kota->name)?$data->user_member->kota->name:''}}</td>
                        </tr>
                        <tr>
                            <th>Tanggal Aktif</th>
                            <td>{{$data->user_member->tanggal_diterima}}</td>
                        </tr>
                        <tr>
                            <th>Tanggal Meninggal</th>
                            <td>{{$data->tgl_kematian}}</td>
                        </tr>
                        <tr>
                            <th>Tanggal Pengajuan</th>
                            <td>{{$data->tgl_pengajuan}}</td>
                        </tr>
                        <tr>
                            <th>Tanggal Approve</th>
                            <td>{{$data->tgl_approve_ketua}}</td>
                        </tr>
                        <tr>
                            <th>Santunan Pelayanan</th>
                            <td>{{format_idr($data->santunan_pelayanan)}}</td>
                        </tr>
                        <tr>
                            <th>Santunan Uang Duka</th>
                            <td>{{format_idr($data->santunan_uang_duka)}}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>{{format_idr($data->total)}} <strong>
                                    ( {{($data->persen)}}% )
                                </strong></td>
                        </tr>
                        <tr>
                            <th>Total Klaim</th>
                            <td>{{format_idr($data->total_klaim)}}</td>
                        </tr>
                        <tr>
                            <th>Fotocopy KTP/KK yang meninggal</th>
                            <td>
                                @if(!empty($data->user_member->foto_ktp))
                                <div class="media photo">
                                        <a href="{{ asset('storage/'. $data->user_member->foto_ktp) }}" target="_blank"><img src="{{ asset('storage/'. $data->user_member->foto_ktp) }}" class="user-photo media-object" style="height:50px;"></a>
                                    </div>    
                                @endif
                                @if(!empty($data->user_member->foto_kk))
                                <div class="media photo">
                                        <a href="{{ asset('storage/'. $data->user_member->foto_kk) }}" target="_blank"><img src="{{ asset('storage/'. $data->user_member->foto_kk) }}" class="user-photo media-object" style="height:50px;"></a>
                                    </div>    
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <th>Fotocopy KTP/SIM Ahli waris yang berhak</th>
                            <td>
                                @if(!empty($data->ktp_ahliwaris))
                                <div class="media photo">
                                        <a href="{{ asset('storage/'. $data->ktp_ahliwaris) }}" target="_blank"><img src="{{ asset('storage/'. $data->ktp_ahliwaris) }}" class="user-photo media-object" style="height:50px;"></a>
                                    </div>    
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <th>Surat Kematian</th>
                            <td>
                                @if(!empty($data->surat_kematian))
                                <div class="media photo">
                                        <a href="{{ asset('storage/'. $data->surat_kematian) }}" target="_blank"><img src="{{ asset('storage/'. $data->surat_kematian) }}" class="user-photo media-object" style="height:50px;"></a>
                                    </div>    
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <th>KTA Santa Maria</th>
                            <td>
                                @if(!empty($data->foto_kta))
                                <div class="media photo">
                                        <a href="{{ asset('storage/'. $data->foto_kta) }}" target="_blank"><img src="{{ asset('storage/'. $data->foto_kta) }}" class="user-photo media-object" style="height:50px;"></a>
                                    </div>    
                                @endif
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="col-md-12">
                    <hr />
                    <a href="{{route('klaim.index')}}"><i class="fa fa-arrow-left"></i> Kembali</a>
                    <a href="{{route('klaim.fppma', $data->user_member_id)}}" target="_blank" class="btn btn-success ml-2"><i class="fa fa-print"></i> Cetak FFPMA</a>
                </div>
            </div>
        </div>
    </div>
</div>