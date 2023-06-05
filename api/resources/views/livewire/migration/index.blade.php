@section('title', 'Migration')
@section('parentPageTitle', 'Home')
<div class="clearfix row">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                
            </div>
            <div class="body pt-0">
                <form wire:submit.prevent="save">
                    <div class="form-group">
                        <input type="file" wire:model="file" />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-info"><i class="fa fa-arrow-right"></i> Submit</button>
                    </div>
                    <span wire:loading>
                        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                        <span class="sr-only">Loading...</span>
                    </span>
                </form>
            </div>
        </div>
    </div>
</div>