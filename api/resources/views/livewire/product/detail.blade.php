@section('title', $data->kode_produksi .' / '.$data->keterangan)
@section('parentPageTitle', 'Produk')
<div class="row clearfix">
    <div class="col-md-12 px-0 mx-0">
        <div class="card mb-2">
            <div class="body">
                <div class="row">
                    <div class="col-3">
                        <table class="table">
                            <tr>
                                <th>Kode Produksi</th>
                                <td> : </td>
                                <td>{{$data->kode_produksi}}</td>
                            </tr>
                            <tr>
                                <th>Produk</th>
                                <td> : </td>
                                <td>@livewire('product.editable',['field'=>'keterangan','data'=>$data->keterangan,'id'=>$data->id],key('keterangan'.$data->id))</td>
                            </tr>
                            <tr>
                                <th>UOM</th>
                                <td> : </td>
                                <td>{{isset($data->uom->name) ? $data->uom->name : '-'}}</td>
                            </tr>
                            <tr>
                                <th>Harga Jual</th>
                                <td> : </td>
                                <td>Rp. {{format_idr($data->harga_jual)}}</td>
                            </tr>
                            <tr>
                                <th>PPN(11%)</th>
                                <td> : </td>
                                <td>Rp. {{format_idr($data->ppn)}}</td>
                            </tr>
                            <tr>
                                <th>Harga Jual</th>
                                <td> : </td>
                                <td>Rp. {{format_idr($data->harga_jual+$data->ppn)}}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-3">
                        <table class="table">
                            <tr>
                                <th>Stok</th>
                                <td style="width:10px;"> : </td>
                                <td>{{$data->qty}}</td>
                            </tr>
                            <tr>
                                <th>Moving Stok</th>
                                <td style="width:10px;"> : </td>
                                <td>{{$data->qty_moving}}</td>
                            </tr>
                            <tr>
                                <th>Last Update</th>
                                <td style="width:10px;"> : </td>
                                <td>{{date('d-M-Y',strtotime($data->updated_at))}}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-3">
                        @if(strlen($data->kode_produksi)>10 and is_numeric($data->kode_produksi))
                            <div>
                                <label>Barcode</label>
                                <a href="{{route('transaksi.cetak-barcode',$data->kode_produksi)}}" class="ml-3" target="_blank"><i class="fa fa-print"></i> Cetak</a>
                                {!! DNS1D::getBarcodeHTML($data->kode_produksi, 'EAN13')!!}
                                <label>
                                    070222456789
                                </label>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 px-0 mx-0">
        <div class="card mb-2">
            <div class="body">
                <ul class="nav nav-tabs">
                    <li class="nav-item"><a class="nav-link active show" data-toggle="tab" href="#tab_pembelian">{{ __('Pembelian') }} </a></li>
                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab_penjualan">{{ __('Penjualan') }} </a></li>
                </ul>
                <div class="tab-content px-0">
                    <div class="tab-pane active show" id="tab_pembelian">
                        <div class="table-responsive">
                            <div class="row mb-3">
                                <div class="col-2">
                                    <input type="text" class="form-control" placeholder="Pencarian" />
                                </div>
                                <div class="col-2">
                                    <a href="javascript:void(0)" data-toggle="modal" data-target="#modal_form_pembelian" class="btn btn-info"><i class="fa fa-plus"></i> Tambah</a>
                                </div>
                            </div>
                            <table class="table m-b-0 c_list table-hover table-bordered">
                                <thead>
                                    <tr style="background: #eee;">
                                        <th>No</th>
                                        <th>Requester</th>
                                        <th>PR Number</th>
                                        <th>PR Date</th>
                                        <th>PO Number</th>
                                        <th>PO Date</th>
                                        <th>DO Number</th>
                                        <th>Receipt Date</th>
                                        <th>Price</th>
                                        <th>Unit</th>
                                        <th>Total</th>
                                        <th>Total Margin</th>
                                        <th>Expired Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($pembelian as $k => $item)
                                        <tr>
                                            <td>{{$k+1}}</td>
                                            <td>{{$item->requester}}</td>
                                            <td>{{$item->pr_number}}</td>
                                            <td>{{$item->pr_date}}</td>
                                            <td>{{$item->po_number}}</td>
                                            <td>{{$item->po_date}}</td>
                                            <td>{{$item->do_number}}</td>
                                            <td>{{$item->receipt_date}}</td>
                                            <td>{{format_idr($item->price)}}</td>
                                            <td class="text-center">{{$item->qty}}</td>
                                            <td>{{format_idr($item->total)}}</td>
                                            <td>{{format_idr($item->total_margin)}}</td>
                                            <td>{{$item->expired_date}}</td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane" id="tab_penjualan">
                        <div class="table-responsive">
                            <table class="table table-striped m-b-0 c_list table-bordered">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>No Transaksi</th>
                                        <th>Harga Jual</th>
                                        <th>QTY</th>
                                        <th>Total</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                @foreach($penjualan as $k => $item)
                                    <tr>
                                        <td>{{$k+1}}</td>
                                        <td>
                                            @if(isset($item->transaksi->no_transaksi))
                                                <a href="{{route('transaksi.items',$item->transaksi_id)}}" target="_blank">{{$item->transaksi->no_transaksi}}</a>
                                            @endif
                                        </td>
                                        <td>{{format_idr($item->price)}}</td>
                                        <td>{{format_idr($item->qty)}}</td>
                                        <td>{{format_idr($item->total)}}</td>
                                        <td>{{date('d-M-Y',strtotime($item->created_at))}}</td>
                                    </tr>
                                @endforeach
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="modal_form_pembelian" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            @livewire('product.form-pembelian',['data'=>$data->id])
        </div>
    </div>
</div>



@push('after-scripts')
    <link rel="stylesheet" href="{{ asset('assets/vendor/select2/css/select2.min.css') }}"/>
    <script src="{{ asset('assets/vendor/select2/js/select2.min.js') }}"></script>
    <script>
        setTimeout(() => {
            select__2 = $('.select_anggota').select2();
            $('.select_anggota').on('change', function (e) {
                var data = $(this).select2("val");
                @this.set("user_member_id", data);
            });
        }, 1000);
    </script>
@endpush