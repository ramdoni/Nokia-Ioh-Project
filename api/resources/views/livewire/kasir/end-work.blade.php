<form wire:submit.prevent="save">
    <div class="modal-header">
        <h4 class="modal-title text-center" style="margin:auto;" id="exampleModalLabel"><i class="fa fa-clock-o"></i> Stop Work Date</h4>
    </div>
    <div class="modal-body">
        <div class="form-group text-center">
            <h5>{{date('l, d M Y H:i')}}</h5>
        </div>
        <div class="form-group">
            <label>End Cash</label>
            <input type="text" class="form-control format_price" wire:model="end_cash"  />
            @error('end_cash')
                <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
            @enderror
        </div>
        <div class="form-group">
            <p>Untuk mengakhiri transaksi silahkan isi End Cash dan klik tombol STOP</p>
        </div>
    </div>
    <div class="modal-footer">
        <button type="submit" class="btn btn-info col-12 btn-lg"><i class="fa fa-check-circle"></i> STOP</button>
    </div>
    <div wire:loading wire:target="save">
        <div class="page-loader-wrapper" style="display:block">
            <div class="loader" style="display:block">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                <p>Please wait...</p>
            </div>
        </div>
    </div>
</form>
