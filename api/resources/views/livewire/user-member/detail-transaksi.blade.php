<div>
    <div class="row">
        <div class="col-md-2">
            <select class="form-control">
                <option value=""> -- Tahun -- </option>
            </select>
        </div>
    </div>
    <div class="table-responsive mt-3">
        <table class="table table-hover m-b-0 c_list">
            <thead>
                <tr style="background:#eee;">
                    <th style="width:50">No</th>
                    <th>No Transaksi</th>
                    <!-- <th>Transaksi</th> -->
                    <th>Tanggal</th>
                    <th>Tanggal Pembayaran</th>
                    <th>Metode Pembayaran</th>
                    <th class="text-right">Nominal</th>
                </tr>
            </thead>
            <tbody>
                @php($number= $data->total() - (($data->currentPage() -1) * $data->perPage()) )
                @foreach($data as $k => $item)
                    <tr>
                        <td style="width: 50px;">{{$number}}</td>
                        <td><a href="{{route('transaksi.items',$item->id)}}">{{$item->no_transaksi}}</a></td>
                        <!-- <td>{{$item->name}}</td> -->
                        <td>{{date('d-M-Y',strtotime($item->created_at))}}</td>
                        <td>{{$item->payment_date ? date('d-M-Y',strtotime($item->payment_date)) : '-'}}</td>
                        <td>{{$item->metode_pembayaran ? metode_pembayaran($item->metode_pembayaran) : '-'}}</td>
                        <td class="text-right">{{format_idr($item->amount)}}</td>
                    </tr>
                    @php($number--)
                @endforeach
            </tbody>
        </table>
    </div>
</div>
