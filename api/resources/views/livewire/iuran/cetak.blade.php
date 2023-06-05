@section('title', 'Print Iuran')
@section('parentPageTitle', 'Home')
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">          
                <div class="col-md-2">
                    <select class="form-control" wire:model="tahun">
                        <option value=""> --- Pilih Tahun --- </option>
                            @for($i=date('Y'); $i<=date('Y')+5; $i++)
                            <option>{{$i}}</option>
                            @endfor
                    </select>
                </div>
                <div class="col-md-2">
                    <input type="text" class="form-control" wire:model="keyword" placeholder=" Searching Name ... " />
                </div>
                <div class="col-md-2">
                    <div wire:loading>
                        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            <div class="body pt-0">
                <div class="table-responsive">
                    <table class="table table-striped m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>No Anggota</th> 
                                <th>ID KTP</th>                                    
                                <th>Nama</th> 
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data as $k => $item)
                            <tr>
                                <td style="width: 50px;">{{$k+1}}</td>
                                <td>{{$item->no_anggota_platinum?$item->no_anggota_platinum:'-'}}</td>
                                <td>{{$item->Id_Ktp}}</td>
                                <td>{{$item->name}} - {{$item->name_kta}}</td>
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
