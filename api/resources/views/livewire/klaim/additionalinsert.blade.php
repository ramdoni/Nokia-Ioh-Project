<form method="post" wire:submit.prevent="save">
    <div class="form-group">
        <label>{{ __('Nominal')}}</label>
        <input type="text" class="form-control format_number" wire:model="nominal" />
    </div>     
    <div class="form-group">
        <label>{{ __('Deskripsi')}}</label>
        <input type="text" class="form-control" wire:model="deskripsi"/>
    </div>
    <hr />
    <button type="submit" class="btn btn-info"><i class="fa fa-save"></i> Simpan</button>
</form>
