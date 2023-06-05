@section('title', \Auth::user()->name)
@section('parentPageTitle', 'Iuran')
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                <div class="col-md-2">
                    <input type="text" class="form-control" wire:model="keyword" placeholder="Searching..." />
                </div>
                <div class="col-md-2">
                    <a href="{{route('koordinator.iuran.insert')}}" class="btn btn-primary"><i class="fa fa-plus"></i> Iuran</a>
                </div>
            </div>
            <div class="body pt-0">
                <div class="table-responsive">
                    <table class="table table-striped m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Jenis</th>                                    
                                <th>Periode</th>                                    
                                <th>Nominal</th>                                    
                                <th>Payment Date</th>
                                <th>Bank Account</th>
                                <th>Status</th>
                                <th>Bukti Pembayaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data as $k => $item)
                            <tr>
                                <td style="width: 50px;">{{$k+1}}</td>
                                <td>{{isset($item->user_member->name)?$item->user_member->name:''}}</td>
                                <td>{{$item->type}}</td>
                                <td>{{$item->from_periode}} - {{$item->to_periode}}</td>
                                <td>{{format_idr($item->nominal)}}</td>
                                <td>{{$item->payment_date}}</td>
                                <td>{{isset($item->bank_account->bank)?$item->bank_account->bank .'  '.$item->bank_account->no_rekening .' a/n '.$item->bank_account->owner:''}}</td>
                                <td>{!!status_iuran($item)!!}</td>
                                <td><a href="{{ asset('storage/'. $item->file) }}" target="_blank"><i class="fa fa-image"></i></a></td>
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