<form wire:submit.prevent="saveItems">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-plus"></i> Menu</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true close-btn">×</span>
        </button>
        <input type="hidden" wire:model="parent_id" />
    </div>
    <div class="modal-body">
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" wire:model="item_name" />
            @error('item_name')
            <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
            @enderror
        </div>
        <div class="form-group">
            <label>Link</label>
            <input type="text" class="form-control" wire:model="item_link" />
            @error('item_link')
            <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
            @enderror
        </div>
        <div class="form-group">
            <label>Icon <span>icon-start, icon-settings, etc<span></label>
            <input type="text" class="form-control" wire:model="icon" />
            @error('icon')
            <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
            @enderror
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary close-btn" data-dismiss="modal">No</button>
        <button type="submit" class="btn btn-info close-modal"><i class="fa fa-save"></i> Save</button>
    </div>
</form>