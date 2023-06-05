@section('title', \Auth::user()->name)
@section('parentPageTitle', 'Iuran')
<form method="post" wire:submit.prevent="save">
    <div class="clearfix row">
        <div class="col-lg-12">
            <div class="card">
                <div class="body">
                    <div class="col-md-12">
                        <h4>Tambah Pembayaran Iuran</h4>
                        <hr />
                        <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="exampleInputAlamat">Iuran Tetap <strong class="text-danger">Rp. 8.000</strong> (Rp {{format_idr($total_iuran_tetap)}}) + Sumbangan <strong class="text-danger">Rp. 2.000</strong>  (Rp {{format_idr($total_sumbangan_tetap)}})</label>
                                    <select class="form-control" wire:model="iuran_tetap" wire:change="calculate_">
                                        <option value=""> --- Minimal 3 Bulan --- </option>
                                        @for($i=3;$i<=40;$i++)
                                        <option>{{$i}}</option>
                                        @endfor
                                    </select>
                                    @error('iuran_tetap') <span class="text-danger">{{ $message }}</span> @enderror
                                </div>
                        </div>
                        <!--
                        <div class="row">
                            <div class="form-group col-md-6">
                                    <label>{{ __('Payment Date')}}</label>
                                    <input type="date" class="form-control" wire:model="payment_date" />
                                    @error('payment_date')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                        </div>
                    -->
                        <div class="row">
                            <ul>
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
                    <a href="javascript:void(0)" onclick="history.back()" class="mr-3"><i class="fa fa-arrow-left"></i> Back</a>
                    <button type="submit" class="btn btn-info"><i class="fa fa-save"></i> Simpan</button>
                </div>
            </div>
        </div>
    </div>
</form>
@section('page-script')
$('#btn-upload-file_konfirmasi').on('click', function() {
    $(this).siblings('#file_konfirmasi').trigger('click');
});
@endsection