<div class="body pt-0">
    <div class="table-responsive" style="min-height:100px;">
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
                    <th>Additional</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                @php($number= $data->total() - (($data->currentPage() -1) * $data->perPage()) )
                @foreach($data as $k => $item)
                <tr>
                    <td style="width: 50px;">{{$number}}</td>
                    <td>{{isset($item->user_member->no_anggota_platinum) ? $item->user_member->no_anggota_platinum : '-'}}</td>
                    <td>{{isset($item->user_member->name)?$item->user_member->name:''}}</td>
                    <td>{{isset($item->user_member->tanggal_diterima) ? $item->user_member->tanggal_diterima : '-'}}</td>
                    <td>{{$item->tgl_kematian}}</td>
                    <td>{{$item->tgl_pengajuan}}</td>
                    <td>{{format_idr($item->santunan_pelayanan)}}</td>
                    <td>{{format_idr($item->santunan_uang_duka)}}</td>
                    <td><a href="{{route('klaim.additionalindex',['klaim'=>$item])}}">{{format_idr($item->additional->sum('nominal'))}}</a></td>
                    <td>{{format_idr($item->total+$item->additional->sum('nominal'))}}</td>
                    <td>{!!status_approval_claim($item)!!}</td>
                </tr>
                @php($number--)
                @endforeach
            </tbody>
        </table>
    </div>
    <br />
    {{$data->links()}}
</div>