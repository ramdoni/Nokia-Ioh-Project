<form method="post" wire:submit.prevent="save">
    <div class="clearfix row">
        <div class="card">
            <div class="body pt-0">
                <div class="col-md-12">
                    @foreach($checked_users as $user)
                        <span class="badge badge-secondary">{{$user->name}}</span>
                    @endforeach
                    <hr />
                    <div class="row">
                        <div class="form-group col-md-7">
                            <!-- <label for="exampleInputAlamat">Iuran Tetap <strong class="text-danger">Rp. 8.000</strong>+ Sumbangan <strong class="text-danger">Rp. 2.000</strong></label> -->
                            <label for="exampleInputAlamat">Iuran <strong class="text-danger">Rp. 30.000</strong></label>
                            <select class="form-control" wire:model="iuran_tetap" wire:change="calculate_">
                                <option value=""> --- Minimal 1 Bulan --- </option>
                                @for($i=1;$i<=12;$i++)
                                    <option>{{$i}}</option>
                                @endfor
                            </select>
                            @error('iuran_tetap') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-5">
                            <label>{{ __('Payment Date')}}<small>*Default Today</small></label>
                            <input type="date" class="form-control" wire:model="payment_date" />
                            @error('payment_date')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>
                    <div class="row">
                        <ul>
                            <li>
                                <label>
                                    <input type="radio" value="1" wire:model="bank_account_id" /> TUNAI
                                </label>
                            </li>
                            @foreach(\App\Models\BankAccount::all() as $bank)
                                <li>
                                    <label>
                                        <input type="radio" value="{{$bank->id}}" wire:model="bank_account_id" /> {{$bank->bank}} {{$bank->no_rekening}} a/n {{$bank->owner}}
                                    </label>
                                </li>
                            @endforeach
                        </ul>
                        @error('bank_account_id')
                        <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="row">
                            <div class="form-group col-md-6">
                                <h5 class="btn btn-outline-danger">Total Rp. {{format_idr($total)}}</h5>
                            </div>
                    </div>
                    <div class="row">
                        @if(!empty($file_konfirmasi))
                        <img src="{{ $file_konfirmasi->temporaryUrl() }}" class="user-photo media-object" alt="Pasphoto" style="height:200px;"><br />
                        @endif
                        <button type="button" class="btn btn-default-dark" id="btn-upload-file_konfirmasi"><i class="fa fa-upload"></i> Upload Bukti Pembayaran</button>
                        <input type="file" id="file_konfirmasi" class="sr-only" wire:model="file_konfirmasi">
                        @error('file_konfirmasi')
                        <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                </div>
                <hr />
                <a href="javascript:void(0)" class="mr-3" data-dismiss="modal><i class="fa fa-arrow-left"></i> Cancel</a>
                <button type="submit" wire:loading.remove class="btn btn-info"><i class="fa fa-save"></i> Submit</button>
                <span wire:loading>
                    <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                    <span class="sr-only">{{ __('Loading...') }}</span>
                </span>
            </div>
        </div>
    </div>
</form>
@section('page-script')
$('#btn-upload-file_konfirmasi').on('click', function() {
    $(this).siblings('#file_konfirmasi').trigger('click');
});
@endsection

@push('after-scripts')
<link rel="stylesheet" href="{{ asset('assets/vendor/select2/css/select2.min.css') }}"/>
<script src="{{ asset('assets/vendor/select2/js/select2.min.js') }}"></script>
<script>
    select__2 = $('.select_member').select2();
    $('.select_member').on('change', function (e) {
        var data = $(this).select2("val");
        @this.set("user_member_id", data);
    });
</script>
@endpush