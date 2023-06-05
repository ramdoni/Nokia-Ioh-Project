<div class="clearfix row">
    <div class="col-lg-4">
        <div class="card">
            <div class="body">
                <table class="table">
                    <tr>
                        <th style="border:0">Anggota</th>
                        <td style="width:20px;border:0"> : </td>
                        <td style="border:0">{{isset($data->anggota->no_anggota_platinum) ? $data->anggota->no_anggota_platinum .' / '. $data->anggota->name : ''}}</td>
                    </tr>
                    <tr>
                        <th>No Transaksi</th>
                        <td style="width:20px"> : </td>
                        <td>{{$data->no_transaksi}}</td>
                    </tr>
                    <tr>
                        <th>Jenis Transaksi</th>
                        <td style="width:20px"> : </td>
                        <td>
                            @if($data->jenis_transaksi==1)
                                <span class="badge badge-info">Anggota</span>
                            @endif
                            @if($data->jenis_transaksi==2)
                                <span class="badge badge-warning">Non Anggota</span>
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <th>Tanggal Transaksi</th>
                        <td style="width:20px"> : </td>
                        <td>{{date('d-M-Y',strtotime($data->created_at))}}</td>
                    </tr>
                    <tr>
                        <th>Tanggal Pembayaran</th>
                        <td style="width:20px"> : </td>
                        <td>{{$data->payment_date ? date('d-M-Y',strtotime($data->payment_date)) : '-'}}</td>
                    </tr>
                    <tr>
                        <th>Metode Pembayaran</th>
                        <td style="width:20px"> : </td>
                        <td>{{$data->metode_pembayaran ? metode_pembayaran($data->metode_pembayaran) : '-'}}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td style="width:20px"> : </td>
                        <td>{!!status_transaksi($data->status)!!}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="col-lg-8">
        <div class="card">
            <div class="body">
                <div class="table-responsive" style="min-height:400px;">
                    <table class="table table-hover table-bordered m-b-0 c_list">
                        <thead style="background: #eee;">
                           <tr>
                                <th style="width:50px">No</th>
                                <th>Barcode</th>
                                <th>Produk</th>
                                <th class="text-center">Qty</th>
                                <th class="text-right">Nominal</th>
                                <th class="text-right">Total</th>
                           </tr>
                        </thead>
                        <tbody>
                            @php($total=0)
                            @foreach($data->items as $k => $item)
                                <tr>
                                    <td>{{$k+1}}</td>
                                    <td>{{$item->product->kode_produksi}}</td>
                                    <td>{{$item->description}}</td>
                                    <td class="text-center">{{$item->qty}}</td>
                                    <td class="text-right">{{format_idr($item->price)}}</td>
                                    <td class="text-right">{{format_idr($item->total)}}</td>
                                </tr>
                                @php($total+=$item->total)
                           @endforeach
                        </tbody>
                        <tfoot style="background: #eee;">
                            <tr>
                                <th colspan="5" class="text-right">Total</th>
                                <th class="text-right">{{format_idr($total)}}</th>
                            </tr>
                        </tfoot>
                    </table>
                    <a href="javascript:void(0)" onclick='document.getElementById("printf").contentWindow.print();' class="btn btn-info btn-sm mt-2"><i class="fa fa-print"></i> Cetak Struk</a>
                </div>
                <br />
            </div>
        </div>
    </div>
    <iframe src="{{route('transaksi.cetak-struk-admin',$data->id)}}#toolbar=0&navpanes=0&scrollbar=0" id="printf" name="printf" style="height:500px;display:none;"></iframe>
</div>

