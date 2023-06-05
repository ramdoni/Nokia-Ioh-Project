@section('title', 'Konfirmasi')
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
                
            </div>
        </div>
      </div>
      <div class="card-body">
        <div {!!(!$is_success?'style="display:none"':'')!!}>
            <h6 class="text-success"><span><i class="fa fa-check"></i></span> Konfirmasi Pembayaran anda berhasil dilakukan</h6>
            <p>Terima kasih telah melakukan konfirmasi pembayaran. Data diri anda akan segera kami proses.</p>
        </div>
        <form class="form-auth-small" wire:submit.prevent="save" {!!($is_success?'style="display:none"':'')!!}>
            <h5>Konfirmasi Pembayaran Pendaftaran</h5>
            <hr />
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleInputAlamat">No Form</label>
                        <input type="text" class="form-control" wire:change="checkForm" id="no_form" placeholder="Enter Form No" wire:model="no_form">
                        @error('no_form') <span class="text-danger">{{ $message }}</span> @enderror
                        <a href="javascript:void(0)" wire:click="checkForm"><i class="fa fa-check"></i> Check Tagihan Pendaftaran</a>
                        @if($messageForm==1)
                        <div class="alert alert-warning alert-dismissible" role="alert">
                            <i class="fa fa-info"></i> Silahkan konfirmasi pembayaran pendaftaran anda
                        </div>
                        @endif
                        @if($messageForm==2)
                        <div class="alert alert-warning alert-dismissible" role="alert">
                            <i class="fa fa-info"></i> Konfirmasi pembayaran pendaftaran anda sedang di proses
                        </div>
                        @endif
                        @if($messageForm==3)
                        <div class="alert alert-success alert-dismissible" role="alert">
                            <i class="fa fa-info"></i> Konfirmasi pembayaran pendaftaran anda sudah berhasil
                        </div>
                        @endif
                        @if($messageForm==4)
                        <div class="alert alert-success alert-dismissible" role="alert">
                            <i class="fa fa-check"></i> Data Form tidak tersedia
                        </div>
                        @endif
                    </div>
                    @if($messageForm==1)
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
                    <div class="form-group">
                        <div class="">
                            Iuran Tetap <label>Rp. 8.000 x {{$iuran_tetap}} = {{format_idr($total_iuran_tetap)}}</label>
                        </div>
                        <hr class="mt-0" />
                        <div class="">
                            Sumbangan <label>Rp. 8.000 x {{$sumbangan}} = {{format_idr($total_sumbangan)}}</label>
                        </div>
                        <hr class="mt-0" />
                        <div>
                            Uang Pendaftaran  <label>Rp. {{format_idr($uang_pendaftaran)}}</label>
                        </div>
                        <hr class="mt-0" />
                        <div>
                            Total Pembayaran <label> Rp. {{format_idr($total_pembayaran)}}</label>
                        </div>
                    </div>
                    <hr />
                    <div class="form-group">
                        <button type="submit" class="btn btn-info">Konfirmasi Pembayaran</button>
                    </div>
                    @endif
                </div>
            </div>
        </form>
      </div>
    </div>
</div>