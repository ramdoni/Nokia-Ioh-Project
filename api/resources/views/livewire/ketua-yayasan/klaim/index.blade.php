<div>
    <div class="row">
        <div class="col-md-2">
            <input type="text" class="form-control" wire:model="keyword" placeholder="Searching..." />
        </div>
    </div>
    <div class="body px-0">
        <div class="table-responsive" style="min-height: 100px;">
            <table class="table table-striped m-b-0 c_list">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>No Anggota</th>
                        <th>Nama</th>
                        <th>Tanggal Aktif</th>
                        <th>Tanggal Meninggal</th>
                        <th>Tanggal Pengajuan</th>              
                        <th>Santunan Pelayanan</th>                                    
                        <th>Santunan Uang Duka</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($data as $k => $item)
                    <tr>
                        <td style="width: 50px;">{{$k+1}}</td>
                        <td>{{$item->user_member->no_anggota_platinum}}</td>
                        <td>{{isset($item->user_member->name)?$item->user_member->name:''}}</td>
                        <td>{{$item->user_member->tanggal_diterima}}</td>
                        <td>{{$item->tgl_kematian}}</td>
                        <td>{{$item->tgl_pengajuan}}</td>
                        <td>{{format_idr($item->santunan_pelayanan)}}</td>
                        <td>{{format_idr($item->santunan_uang_duka)}}</td>
                        <td>{{format_idr($item->total)}}</td>
                        <td>
                            @switch($item->is_approve_ketua)
                                @case(0)
                                    <a href="{{route('ketua-yayasan.klaim.approval',['id'=>$item->id])}}" class="badge badge-warning">Menunggu Persejutuan</a>
                                @break
                                @case(2)
                                    <a href="{{route('ketua-yayasan.klaim.approval',['id'=>$item->id])}}" class="badge badge-success">Disetujui</a>
                                @break
                                @case(3)
                                    <a href="{{route('ketua-yayasan.klaim.approval',['id'=>$item->id])}}" class="badge badge-danger">Ditolak</a>
                                @break
                            @endswitch
                        </td>
                        <td>
                            <div class="btn-group" role="group">
                                <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-navicon"></i></a>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    @if($item->is_approve_ketua === NULL || $item->is_approve_ketua === 0)
                                        <a class="dropdown-item" href="{{route('ketua-yayasan.klaim.approval',['id'=>$item->id])}}"><i class="fa fa-arrow-right"></i>Proces</a>
                                    @else
                                        <a class="dropdown-item" href="{{route('ketua-yayasan.klaim.edit',['id'=>$item->id])}}"><i class="fa fa-search-plus"></i>Detail</a>
                                    @endif
                                        <a class="dropdown-item" href="{{route('ketua-yayasan.klaim.additional',['id'=>$item->id])}}"><i class="fa fa-search-plus"></i>Claim Additional</a>
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