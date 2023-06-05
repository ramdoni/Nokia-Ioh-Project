@section('title', 'Print Iuran')
@section('parentPageTitle', 'Home')
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">          
                <div class="col-md-2 px-0">
                    <select class="form-control" wire:model="tahun">
                        <option value=""> --- Pilih Tahun --- </option>
                            @for($i=date('Y'); $i>=date('Y')-10; $i-=1)
                            <option>{{$i}}</option>
                            @endfor
                    </select>
                </div>
            </div>
            <div class="body pt-0">
                <div class="table-responsive">
                    <table class="table table-striped m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>No Anggota</th>                                    
                                <th>Nama</th> 
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data as $k => $item)
                            <tr>
                                <td style="width: 50px;">{{$k+1}}</td>
                                <td>{{$item->no_anggota_platinum?$item->no_anggota_platinum:'-'}}</td>
                                <td>{{$item->name}} - {{$item->name}}</td>

                                <td>
                                    <a href="{{route('user-member.print-iuran',['id'=>$item->id,'tahun'=>$tahun])}}" target="_blank"><i class="fa fa-print"></i> Print</a> 
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
