<div>
    <div class="row">
        <div class="col-md-2">
            <select class="form-control">
                <option value=""> -- Tahun -- </option>
            </select>
        </div>
        <div class="col-md-2">
            <select class="form-control">
                <option value=""> -- Jenis Simpanan -- </option>
                @foreach($jenis_simpanan as $item)
                    <option value="{{$item->id}}">{{$item->name}}</option>
                @endforeach
            </select>
        </div>
        <div class="col-md-8">
            <a href="javascript:void(0)" data-target="#modal_add_simpanan" data-toggle="modal" class="btn btn-info"><i class="fa fa-plus"></i> Tambah</a>
        </div>
    </div>
    <div class="table-responsive mt-3">
        <table class="table table-hover m-b-0 c_list">
            <thead>
                <tr style="background:#eee;">
                    <th style="width:50">No</th>
                    <th>No Transaksi</th>
                    <th class="text-center">Status</th>
                    <th>Jenis Simpanan</th>
                    <th>Keterangan</th>
                    <th>Created</th>
                    <th>Payment Date</th>
                    <th>Nominal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @php($number= $data->total() - (($data->currentPage() -1) * $data->perPage()) )
                @foreach($data as $k => $item)
                    <tr>
                        <td style="width: 50px;">{{$number}}</td>
                        <td>{{$item->no_transaksi}}</td>
                        <td class="text-center">
                            @if($item->status==0)
                                <span class="badge badge-warning">Belum Lunas</span>
                            @endif
                            @if($item->status==1)
                                <span class="badge badge-success">Lunas</span>
                            @endif
                        </td>
                        <td>{{isset($item->jenis_simpanan->name) ? $item->jenis_simpanan->name : '-'}}</td>
                        <td>{{$item->description}}</td>
                        <td>{{date('d-M-Y',strtotime($item->created_at))}}</td>
                        <td>{{$item->payment_date ? date('d-M-Y',strtotime($item->payment_date)) : '-'}}</td>
                        <td>{{format_idr($item->amount)}}</td>
                        <td>
                            @if($item->status==0)
                                <a href="javascript:void(0)" class="badge badge-info badge-active" wire:click="$emit('set_id',{{$item->id}})" data-toggle="modal" data-target="#modal_simpanan_bayar"><i class="fa fa-check"></i> Bayar</a>
                            @endif
                        </td>
                    </tr>
                    @php($number--)
                @endforeach
            </tbody>
        </table>
    </div>
</div>

@livewire('user-member.add-simpanan',['data'=>$member->id])
@livewire('user-member.simpanan-bayar',['data'=>$member->id])
