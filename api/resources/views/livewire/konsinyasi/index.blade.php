@section('title', 'Konsinyasi')
<div class="clearfix row">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                <div class="col-md-2">
                    <input type="text" class="form-control" wire:model="keyword" placeholder="Pencarian" />
                </div>
                <div class="col-md-6">
                    <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <a class="dropdown-item" href="javascript:void(0);" wire:click="downloadExcel"><i class="fa fa-download"></i> Download</a>
                            <a href="{{route('product.insert')}}" class="dropdown-item"><i class="fa fa-plus"></i> Tambah</a>
                            <a href="javascript:void(0)" class="dropdown-item" data-toggle="modal" data-target="#modal_upload"><i class="fa fa-upload"></i> Upload</a>
                        </div>
                    </div>
                    <span wire:loading>
                        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                        <span class="sr-only">{{ __('Loading...') }}</span>
                    </span>
                </div>
            </div>
            <div class="body pt-0">
                <div class="table-responsive" style="min-height:400px;">
                    <table class="table table-hover m-b-0 c_list">
                        <thead style="background: #eee;">
                           <tr>
                                <th>No</th>
                                <th class="text-center">Status</th>
                                <th>Vendor / Supplier</th>
                                <th>Kode Produksi / Barcode</th>
                                <th>Produk</th>
                                <th>UOM</th>
                                <th class="text-center">Stok</th>
                                <th>Expired</th>
                                <th class="text-right">Harga Jual</th>
                                <th></th>
                           </tr>
                        </thead>
                        <tbody>
                            @php($number= $data->total() - (($data->currentPage() -1) * $data->perPage()) )
                            @foreach($data as $k => $item)
                                <tr>
                                    <td style="width: 50px;">{{$number}}</td>
                                    <td class="text-center">
                                        @if($item->status==1)
                                            <span class="badge badge-success">Aktif</span>
                                        @endif
                                        @if($item->status==0 || $item->status=="")
                                            <span class="badge badge-default">Tidak Aktif</span>
                                        @endif
                                    </td>
                                    <td></td>
                                    <td>@livewire('product.editable',['field'=>'kode_produksi','data'=>$item->kode_produksi,'id'=>$item->id],key('kode_produksi'.$item->id))</td>
                                    <td><a href="{{route('konsinyasi.detail',$item->id)}}">{{$item->keterangan}}</a></td>
                                    <td>@livewire('product.editable',['field'=>'product_uom_id','data'=>(isset($item->uom->name) ? $item->uom->name : ''),'id'=>$item->id],key('uom'.$item->id))</td>
                                    <td class="text-center">@livewire('product.editable',['field'=>'qty','data'=>$item->qty,'id'=>$item->id],key('qty'.$item->id))</td>
                                    <td>{{$item->expired_date ? date('d//M/Y',strtotime($item->expired_date)) : '-'}}</td>
                                    <td class="text-right">{{format_idr($item->harga_jual)}}</td>
                                    <td></td>
                                </tr>
                            @php($number--)
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