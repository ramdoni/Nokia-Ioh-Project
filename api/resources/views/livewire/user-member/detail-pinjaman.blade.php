<div>
    <div class="row">
        <div class="col-md-2">
            <select class="form-control">
                <option value=""> -- Tahun -- </option>
            </select>
        </div>
        <div class="col-md-2">
            <select class="form-control">
                <option value=""> -- Jenis Pinjaman -- </option>
                @foreach($jenis_pinjaman as $item)
                    <option value="{{$item->id}}">{{$item->name}}</option>
                @endforeach
            </select>
        </div>
        <div class="col-md-8">
            <a href="{{route('pinjaman.insert',['user_member_id'=>$member->id])}}" class="btn btn-info"><i class="fa fa-plus"></i> Tambah</a>
        </div>
    </div>
    <div class="table-responsive mt-3">
        <table class="table table-hover m-b-0 c_list">
            <thead>
                <tr style="background:#eee;">
                    <th style="width:50">No</th>
                    <th>No Transaksi</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Jenis Pinjaman</th>
                    <th>Keterangan</th>
                    <th>Tanggal</th>
                    <th>Nominal</th>
                    <th class="text-center">Tenor</th>
                    <th class="text-center">Angsuran</th>
                    <th class="text-center">Jasa</th>
                    <th class="text-right">Tagihan</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @php($number= $data->total() - (($data->currentPage() -1) * $data->perPage()) )
                @foreach($data as $k => $item)
                    <tr>
                        <td style="width: 50px;">{{$number}}</td>
                        <td><a href="{{route('pinjaman.edit',$item->id)}}">{{$item->no_pengajuan}}</a></td>
                        <td class="text-center">
                            @if($item->status==0)
                                <span class="badge badge-warning">Approval</span>
                            @endif
                            @if($item->status==1)
                                <span class="badge badge-success">On Going</span>
                            @endif
                            @if($item->status==2)
                                <span class="badge badge-info">Completed</span>
                            @endif
                            @if($item->status==3)
                                <span class="badge badge-danger">Rejected</span>
                            @endif
                        </td>
                        <td class="text-center">{{isset($item->jenis_pinjaman->name) ? $item->jenis_pinjaman->name : '-'}}</td>
                        <td>{{$item->description}}</td>
                        <td>{{date('d-M-Y',strtotime($item->created_at))}}</td>
                        <td>{{format_idr($item->amount)}}</td>
                        <td class="text-center">{{format_idr($item->angsuran)}}</td>
                        <td class="text-center">{{format_idr($item->angsuran_perbulan)}}</td>
                        <td class="text-center">{{$item->jasa_persen}}% - Rp. {{format_idr($item->jasa)}}</td>
                        <td class="text-right">{{format_idr($item->total)}}</td>
                        <td>
                            @if($item->status==0)
                                <a href="javascript:void(0)" wire:click="$set('selected_id',{{$item->id}})" data-toggle="modal" data-target="#modal_proses" class="badge badge-info badge-active">Proses</a>
                            @endif
                        </td>
                    </tr>
                    @php($number--)
                @endforeach
            </tbody>
        </table>
    </div>
    <br />
    {{$data->links()}}
    <div wire:ignore.self class="modal fade" id="modal_proses" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-plus"></i> Proses Pinjaman</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true close-btn">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Catatan</label>
                            <input type="text" class="form-control" wire:model="note"/>
                            @error('note') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" wire:click="approve" class="btn btn-success btn-sm">Setujui</button>
                        <button type="button" wire:click="reject" class="btn btn-danger btn-sm">Tolak</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
