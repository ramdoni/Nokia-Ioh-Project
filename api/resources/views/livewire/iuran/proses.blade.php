@section('title', 'Iuran')
@section('parentPageTitle', 'Home')

<div class="clearfix row">
    <div class="col-lg-12">
        <div class="card">
            <div class="body">
                <div class="row">
                    <div class="col-md-6">
                        <h5>Data Iuran Anggota</h5>
                        <hr />
                        <div class="table-responsive">
                            <table class="table table-striped table-hover m-b-0 c_list">
                                <tr>
                                    <th>Nama Anggota</th>
                                    <td>{{isset($data->user_member->name)?$data->user_member->name:''}}</td>
                                </tr>
                                <tr>
                                    <th>Periode</th>
                                    <td>{{$data->from_periode}} - {{$data->to_periode}}</td>
                                </tr>
                                <tr>
                                    <th>Nominal</th>
                                    <td>{{format_idr($data->nominal)}}</td>
                                </tr>
                                <tr>
                                    <th>Payment Date</th>
                                    <td>
                                        <input type="date" class="form-control" wire:model="payment_date" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Bukti Pembayaran</th>
                                    <td>
                                        @if(!empty($data->file))
                                        <div class="media photo">
                                                <a href="{{ asset('storage/'. $data->file) }}" target="_blank"><img src="{{ asset('storage/'. $data->file) }}" class="user-photo media-object" style="height:50px;" alt="Bukti Transfer"></a>
                                            </div>    
                                        @endif
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <hr />
                        <a href="javascript:void(0)" onclick="history.back()"><i class="fa fa-arrow-left"></i> Back</a>
                        <a href="javascript:void(0)" onclick="confirm_approve()" class="ml-3 btn btn-success"><i class="fa fa-check"></i> Approve</a>
                        <a href="javascript:void(0)" onclick="confirm_reject()" class="ml-3 btn btn-danger"><i class="fa fa-times"></i> Reject</a>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</div>
@push('after-scripts')
<script>
    function confirm_approve()
    {
        if(confirm('Approve data iuran?')){
            Livewire.emit('event-approve');
        }
    }

    function confirm_reject()
    {
        if(confirm('Reject data iuran?')){
            Livewire.emit('event-reject');
        }
    }
</script>
@endpush