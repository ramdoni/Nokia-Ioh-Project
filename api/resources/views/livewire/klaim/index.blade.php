@section('title', 'Klaim')
@section('parentPageTitle', 'Home')
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                <div class="col-md-2">
                    <input type="text" class="form-control" wire:model="keyword" placeholder="Searching..." />
                </div>
            </div>
            <div class="body pt-0">
                <div class="table-responsive" style="min-height:100px;">
                    <table class="table table-striped m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>No Form</th>
                                <th>No Anggota</th>
                                <th>Nama</th>
                                <th>Tanggal Aktif</th>
                                <th>Tanggal Meninggal</th>
                                <th>Tanggal Pengajuan</th>              
                                <th>Santunan Pelayanan</th>                                    
                                <th>Santunan Uang Duka</th>
                                <th>Additional</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data as $k => $item)
                            <tr>
                                <td style="width: 50px;">{{$k+1}}</td>
                                <td><a href="{{route('klaim.edit',['id'=>$item->id])}}">{{$item->form_no}}</a></td>
                                <td>{{isset($item->user_member->no_anggota_platinum)?$item->user_member->no_anggota_platinum:'-'}}</td>
                                <td>{{isset($item->user_member->name)?$item->user_member->name:''}}</td>
                                <td>{{$item->user_member->tanggal_diterima}}</td>
                                <td>{{$item->tgl_kematian}}</td>
                                <td>{{$item->tgl_pengajuan}}</td>
                                <td>{{format_idr($item->santunan_pelayanan)}}</td>
                                <td>{{format_idr($item->santunan_uang_duka)}}</td>
                                <td><a href="{{route('klaim.additionalindex',['klaim'=>$item])}}">{{format_idr($item->additional->sum('nominal'))}}</a></td>
                                <td>{{format_idr($item->total+$item->additional->sum('nominal'))}}</td>
                                <td>{!!status_approval_claim($item)!!}</td>
                                <td>
                                     <div class="btn-group" role="group">
                                        <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-navicon"></i></a>
                                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                            <a class="dropdown-item" href="{{route('klaim.edit',['id'=>$item->id])}}"><i class="fa fa-search-plus"></i> Detail</a>
                                            <a class="dropdown-item" href="{{route('klaim.additionalindex',['klaim'=>$item])}}"><i class="fa fa-plus"></i> Additional</a>
                                            {{-- <a class="dropdown-item" href="{{route('klaim.fppma',$item->user_member_id)}}" target="_blank"><i class="fa fa-print"></i> FPPMA</a> --}}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                <br />
                {{$data->links()}}
            </div>
        </div>
    </div>
</div>