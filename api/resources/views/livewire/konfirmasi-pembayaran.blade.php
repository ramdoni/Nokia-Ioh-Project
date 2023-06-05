@section('title', 'Register')
<div class="container">
    <div class="mt-2 card">
      <div class="card-header">
        <div class="row">
            <div class="col-md-6">
                <h4><small>Yayasan Sosial</small><br />SANTA MARIA</h4>
                <p>Jl. Citarum Tengah Ruko E-1<br />
                Telp: 024-354 4085 Semarang 50126 </p>
            </div>
            <div class="text-right col-md-6">
                <h6><small>Form No : </small>{{$form_no}}</h6>
            </div>
        </div>
      </div>
      <div class="card-body">
        <div {!!(!$is_success?'style="display:none"':'')!!}>
            <h6 class="text-success"><span><i class="fa fa-check"></i></span> Konfirmasi Pembayaran anda berhasil dilakukan</h6>
            <p>Terima kasih telah melakukan konfirmasi pembayaran. Data diri anda akan segera kami proses.</p>
        </div>
        <form class="form-auth-small" wire:submit.prevent="save" {!!($is_success?'style="display:none"':'')!!}>
            <h5>Konfirmasi Pembayaran <span class="text-danger">#{{$form_no}}</span></h5>
            <hr />
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Rekening Bank</label>
                        <select class="form-control" wire:model="bank_account_id">
                            <option value=""> --- Select --- </option>
                            @foreach(\App\Models\BankAccount::all() as $bank)
                            <option value="{{$bank->id}}">{{$bank->bank}} {{$bank->no_rekening}} an {{$bank->owner}}</option>
                            @endforeach
                        </select>
                        @error('bank_account_id') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label>Upload Bukti Transfer</label>
                        <input type="file" class="form-control" wire:model="file" />
                        @error('file') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="">
                        Iuran Tetap <label>Rp. 8.000 x {{$data->iuran_tetap}} = {{format_idr($data->total_iuran_tetap)}}</label>
                    </div>
                    <hr class="mt-0" />
                    <div class="">
                        Sumbangan <label>Rp. 8.000 x {{$data->sumbangan}} = {{format_idr($data->total_sumbangan)}}</label>
                    </div>
                    <hr class="mt-0" />
                    <div>
                        Uang Pendaftaran  <label>Rp. {{format_idr($data->uang_pendaftaran)}}</label>
                    </div>
                    <hr class="mt-0" />
                    <div>
                        Total Pembayaran <label> Rp. {{format_idr($data->total_pembayaran)}}</label>
                    </div>
                </div>
                <div class="col-md-12">
                    <hr />
                    <button type="submit" class="btn btn-info">Konfirmasi Pembayaran</button>
                </div>
            </div>
        </form>
      </div>
    </div>
</div>