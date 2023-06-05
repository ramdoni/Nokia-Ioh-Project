@section('title', 'Insert')
@section('parentPageTitle', 'User Access')

<div class="row clearfix">
    <div class="col-md-6">
        <div class="card">
            <div class="header">
                <h2>{{ __('Insert User Access') }}</h2>
            </div>
            <div class="body">
                <form id="basic-form" method="post" wire:submit.prevent="save">
                    <div class="form-group">
                        <label>{{ __('Name') }}</label>
                        <input type="text" class="form-control" wire:model="name" >
                        @error('name')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label>{{ __('Description') }}</label>
                        <input type="text" class="form-control"  wire:model="description" >
                        @error('description')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <br>
                    <a href="{{route('user-access.index')}}"><i class="fa fa-arrow-left"></i> {{ __('Back') }}</a>
                    <button type="submit" class="btn btn-primary ml-3">{{ __('Save') }}</button>
                </form>
            </div>
        </div>
    </div>
</div>