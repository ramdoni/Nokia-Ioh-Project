@section('title', 'Anggota')
@section('parentPageTitle', 'Home')
<div class="clearfix row">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                <div class="col-md-2">
                    <input type="text" class="form-control" wire:model="keyword" placeholder="Searching..." />
                </div>
                <div class="col-md-2 px-0">
                    <select class="form-control" wire:model="status ">
                        <option value=""> --- Status --- </option>
                        <option value="1">Waiting</option>
                        <option value="3">Reject</option>
                        <option value="2">Approved</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <a href="{{route('koordinator.member.insert')}}" class="btn btn-primary"><i class="fa fa-plus"></i> Anggota</a>
                    <a href="" class="ml-2" title="Download Excel"><i class="fa fa-download"></i> Download</a>
                </div>
            </div>
            <div class="body pt-0">
                <div class="table-responsive">
                    <table class="table table-striped table-hover m-b-0 c_list">
                        <thead>
                            <tr>
                                <th rowspan="2">No</th>
                                <th rowspan="2">No Anggota</th>
                                <th rowspan="2">Nama</th>                                 
                                <th rowspan="2">No Telepon</th>
                                <th rowspan="2">No KTP</th>
                                <th rowspan="2">Jenis Kelamin</th>
                                <th rowspan="2">Tempat / Tanggal Lahir</th>
                                <th colspan="2" class="text-center">Status</th>
                                <th rowspan="2"></th>
                            </tr>
                            <tr>
                                <th>Keanggotaan</th>
                                <th>Asuransi</th>
                                <th>Klaim</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data as $k => $item)
                            <tr>
                                <td style="width: 50px;">{{$k+1}}</td>
                                <td>{{$item->no_anggota_platinum?$item->no_anggota_platinum:'-'}}</td>
                                <td><a href="{{route('koordinator.member.edit',['id'=>$item->id])}}">{{$item->name}}</a></td>
                                <td>{{$item->phone_number}}</td>
                                <td>{{$item->Id_Ktp}}</td>
                                <td>{{$item->jenis_kelamin}}</td>
                                <td>
                                    {{$item->tempat_lahir}} / {{date('d-m-Y',strtotime($item->tanggal_lahir))}} <span class="text-success"> ({{hitung_umur($item->tanggal_lahir)}} thn)</span>
                                </td>
                                <td>{!!status_keanggotaan($item)!!}
                                @if(isset($item->tanggal_diterima))
                                        - {{date('d M Y',strtotime($item->tanggal_diterima))}}
                                    @endif
                                </td>
                                <td>{!!getAsuransi($item->id)!!}</td>
                                @if($item->klaim)
                                <td>{!!status_approval_claim($item->klaim)!!}</td>
                                @else
                                <td>{!!status_claim($item)!!}</td>
                                @endif
                                <td>
                                    <div class="btn-group" role="group">
                                        <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-navicon"></i></a>
                                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                            <a class="dropdown-item" href="{{route('koordinator.member.edit',['id'=>$item->id])}}"><i class="fa fa-search-plus"></i> detail</a>
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


<!-- Modal -->
<div class="modal fade" id="confirm_delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-warning"></i> Confirm Delete</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true close-btn">×</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <p>Are you want delete this data ?</p>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary close-btn" data-dismiss="modal">No</button>
                <button type="button" wire:click="delete()" class="btn btn-danger close-modal">Yes</button>
            </div>
        </div>
    </div>
</div>