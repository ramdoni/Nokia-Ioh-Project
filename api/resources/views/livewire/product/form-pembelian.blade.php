<form wire:submit.prevent="save">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-plus"></i> Pembelian</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true close-btn">×</span>
        </button>
    </div>
    <div class="modal-body">
        <div class="row">
            <div class="form-group col-6">
                <label>Requester</label>
                <input type="text" class="form-control" wire:model="requester" />
                @error('requester')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group col-6">
                <label>Expired Date</label>
                <input type="date" class="form-control" wire:model="expired_date" />
                @error('expired_date')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
        </div>
        <div class="row">
            <div class="form-group col-6">
                <label>PR Number</label>
                <input type="text" class="form-control" wire:model="pr_number" />
                @error('pr_number')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group col-6">
                <label>PR Date</label>
                <input type="date" class="form-control" wire:model="pr_date" />
                @error('pr_date')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
        </div>
        <div class="row">
            <div class="form-group col-6">
                <label>PO Number</label>
                <input type="text" class="form-control" wire:model="po_number" />
                @error('po_number')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group col-6">
                <label>PO Date</label>
                <input type="date" class="form-control" wire:model="po_date" />
                @error('po_date')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
        </div>
        <div class="row">
            <div class="form-group col-6">
                <label>DO Number</label>
                <input type="text" class="form-control" wire:model="do_number" />
                @error('do_number')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group col-6">
                <label>Receipt Date</label>
                <input type="date" class="form-control" wire:model="receipt_date" />
                @error('receipt_date')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
        </div>
        <div class="row">
            <div class="form-group col-6">
                <label>Price</label>
                <input type="number" class="form-control" wire:model="price" />
                @error('price')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group col-6">
                <label>Unit</label>
                <input type="text" class="form-control" wire:model="unit" />
                @error('unit')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
        </div>
        <div class="form-group">
            <hr />
            <label>Total : Rp. {{@format_idr($price * $unit)}}</label><br />
            <hr class="py-0 my-0" />
            <label>Total Margin: Rp. {{@format_idr($total_margin)}}</label>
        </div>
    </div>
    <div class="modal-footer">
        <button type="submit" class="btn btn-info"><i class="fa fa-save"></i> Simpan</button>
        <span wire:loading>
            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
            <span class="sr-only">{{ __('Loading...') }}</span>
        </span>
    </div>
</form>
