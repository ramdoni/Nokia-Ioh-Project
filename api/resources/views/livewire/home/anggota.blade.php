<div class="body pt-0">
    <div class="table-responsive">
        <table class="table table-hover m-b-0 c_list">
            <thead>
                <tr style="background: #eee;">
                    <th>No</th>
                    <th>No Anggota</th>
                    <th>Nama</th>                                 
                    <th>No Telepon</th>
                    <th>No KTP</th>
                    <th>Jenis Kelamin</th>
                    <th>Tempat / Tanggal Lahir</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @php($number= $data->total() - (($data->currentPage() -1) * $data->perPage()) )
                @foreach($data as $k => $item)
                <tr>
                    <td style="width: 50px;">{{$number}}</td>
                    <td>{{$item->no_anggota_platinum?$item->no_anggota_platinum:'-'}}</td>
                    <td><a href="{{route('user-member.edit',['id'=>$item->id])}}">{{$item->name}}</a></td>
                    <td>{{$item->phone_number}}</td>
                    <td>{{$item->Id_Ktp}}</td>
                    <td>{{$item->jenis_kelamin}}</td>
                    <td>{{$item->tempat_lahir}} - {{$item->tanggal_lahir ? date('d M Y',strtotime($item->tanggal_lahir)) : ""}}</td>
                    <td class="px-0"><span class="text-success"> {{hitung_umur($item->tanggal_lahir)}} thn</span></td>
                </tr>
                @php($number--)
                @endforeach
            </tbody>
        </table>
    </div>
    <br />
    {{$data->links()}}
</div>