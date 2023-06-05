<div>
    <div class="row">
        <div class="col-md-2">
            <input type="text" class="form-control" wire:model="keyword" placeholder="Searching..." />
        </div>
        <div class="col-md-2 px-0">
            <select class="form-control" wire:model="is_approve">
                <option value=""> --- Status --- </option>
                <option value="1">Waiting</option>
                <option value="3">Reject</option>
                <option value="2">Approved</option>
            </select>
        </div>
    </div>
    <div class="body px-0">
        <div class="table-responsive">
            <table class="table table-hover m-b-0 c_list">
                <thead style="background:#eee;">
                    <tr>
                        <th rowspan="2">No</th>
                        <th rowspan="2">Form No</th>
                        <th rowspan="2">No Anggota</th>
                        <th rowspan="2">Nama (sesuai KTP)</th>                                    
                        <th rowspan="2">Nama yang dicantumkan di KTA</th>
                        <th rowspan="2">E-mail</th>                                    
                        <th rowspan="2">No KTP</th>
                        <th rowspan="2">Jenis Kelamin</th>
                        <th colspan="3" class="text-center">Status</th>
                        <th rowspan="2">Created</th>
                        <th rowspan="2"></th>
                    </tr>
                    <tr>
                        <th>Keanggotaan</th>
                        <th>Asuransi</th>
                        <th>Pembayaran Pendaftaran</th>
                    </tr>
                </thead>
                <tbody>
                    @php($num=$data->firstItem())
                    @foreach($data as $k => $item)
                    <tr>
                        <td style="width: 50px;">{{$num}}</td>
                        <td>{{$item->no_form}}</td>
                        <td>{{$item->no_anggota_platinum}}</td>
                        <td><a href="{{route('ketua-yayasan.member.edit',['id'=>$item->id])}}">{{$item->name}}</a></td>
                        <td>{{$item->name_kta}}</td>                                   
                        <td>{{$item->email}}</td>
                        <td>{{$item->Id_Ktp}}</td>
                        <td>{{$item->jenis_kelamin}}</td>
                        <td>
                            {!!status_keanggotaan($item)!!}
                            @if(isset($item->tanggal_diterima))
                                - {{date('d M Y',strtotime($item->tanggal_diterima))}}
                            @endif
                        </td>
                        <td>{!!getAsuransi($item->id)!!}</td>
                        <td>{!!status_registration_payment_ketua_yayasan($item)!!}</td>
                        <td>{{date('d/m/Y', strtotime($item->created_at))}}</td>
                        <td>
                            @if($item->status <= 1)
                                @if($item->admin_approval == 1 && $item->ketua_approval === NULL || $item->ketua_approval === 0)
                                <a href="{{route('ketua-yayasan.member.approval',['id'=>$item->id])}}" class="btn btn-info btn-sm"><i class="fa fa-arrow-right"></i> Process</a>
                                @endif
                            @endif
                        </td>
                    </tr>
                    @php($num++)
                    @endforeach
                </tbody>
            </table>
        </div>
        <br />
        {{$data->links()}}
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