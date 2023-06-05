<div class="body pt-0">
    <div class="table-responsive">
        <table class="table table-striped m-b-0 c_list">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Member</th>                                    
                    <th>Periode</th>                                    
                    <th>Nominal</th>                                    
                    <th>Payment Date</th>
                    <th>Bank Account</th>
                    <th>Status</th>
                    <th>Bukti Pembayaran</th>
                </tr>
            </thead>
            <tbody>
                @php($number= $data->total() - (($data->currentPage() -1) * $data->perPage()) )
                @foreach($data as $k => $item)
                <tr>
                    <td style="width: 50px;">{{$number}}</td>
                    <td>{{isset($item->user_member->name)?$item->user_member->name:''}}</td>
                    <td>{{$item->from_periode}} - {{$item->to_periode}}</td>
                    <td>{{format_idr($item->nominal)}}</td>
                    <td>{{$item->payment_date}}</td>
                    <td>{{isset($item->bank_account->bank)?$item->bank_account->bank .'  '.$item->bank_account->no_rekening .' a/n '.$item->bank_account->owner:''}}</td>
                    <td>{!!status_iuran($item)!!}</td>
                    <td><a href="{{ asset('storage/'. $item->file) }}" target="_blank"><i class="fa fa-image"></i></a></td>
                </tr>
                @php($number--)
                @endforeach
            </tbody>
        </table>
    </div>
    <br />
    {{$data->links()}}
</div>