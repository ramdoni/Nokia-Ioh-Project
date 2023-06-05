@section('title', 'All Project / Business Opportunity')
@section('parentPageTitle', 'Pinjaman')

<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                <div class="col-md-2">
                    <input type="text" class="form-control" wire:model="keyword" placeholder="Searching..." />
                </div>
                <div class="col-md-2">
                    <a href="{{route('pinjaman.insert')}}" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> Pinjaman</a>
                </div>
            </div>
            <div class="body">
                <div class="table-responsive">
                    <table class="table table-striped m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>No Pengajuan</th>                                    
                                <th>No Anggota</th>                                    
                                <th>Nama</th>                                    
                                <th>Devisi / Jabatan</th>                                    
                                <th class="text-right">Pinjaman</th>                                    
                                <th class="text-center">Tenor</th>
                                <th class="text-center">Angsuran</th>
                                <th class="text-center">Jasa</th>
                                <th class="text-right">Tagihan</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data as $k => $item)
                                <tr>
                                    <td style="width: 50px;">{{$k+1}}</td>
                                    <td><a href="{{route('pinjaman.edit',$item->id)}}">{{$item->no_pengajuan}}</a></td>
                                    <td>{{isset($item->anggota->no_anggota_platinum) ? $item->anggota->no_anggota_platinum : ''}}</td>
                                    <td>{{isset($item->anggota->name) ? $item->anggota->name : ''}}</td>
                                    <td>{{isset($item->anggota->seksi) ? $item->anggota->seksi : ''}}</td>
                                    <td class="text-right">{{format_idr($item->amount)}}</td>
                                    <td class="text-center">{{format_idr($item->angsuran)}}</td>
                                    <td class="text-center">{{format_idr($item->angsuran_perbulan)}}</td>
                                    <td class="text-center">{{$item->jasa_persen}}% - Rp. {{format_idr($item->jasa)}}</td>
                                    <td class="text-right">{{format_idr($item->angsuran_perbulan)}}</td>
                                    <td>
                                        @if($item->status==0)
                                            <span class="badge badge-warning">Menunggu Persetujuan</span>
                                        @endif
                                    </td>
                                    <td></td>
                                </tr>
                            @endforeach
                            @if($data->count()==0)
                                <tr>
                                    <td colspan="10" class="text-center">Tidak ada data</td>
                                </tr>
                            @endif
                        </tbody>
                    </table>
                </div>
                <br />
                {{$data->links()}}
            </div>
        </div>
    </div>
</div>