@section('title', __('Tambah User'))
<div class="row clearfix">
    <div class="col-md-6">
        <div class="card">
            <div class="body">
                <form id="basic-form" method="post" wire:submit.prevent="save">
                    <div class="form-group">
                        <label>{{ __('Nama') }}</label>
                        <input type="text" class="form-control" wire:model="name" >
                        @error('name')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label>{{ __('Email') }}</label>
                        <input type="text" class="form-control"  wire:model="email" >
                        @error('email')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label>{{ __('Telepon') }}</label>
                        <input type="text" class="form-control"  wire:model="telepon" >
                        @error('telepon')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label>{{ __('Akses') }}</label>
                        <select class="form-control" wire:model="user_access_id" name="user_access_id" id="user_access_id">
                            <option value="">{{__('--- Akses --- ')}} </option>
                            @foreach($access as $item)
                            <option value="{{$item->id}}">{{$item->name}}</option>
                            @endforeach
                        </select>
                        @error('user_access_id')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <div class="form-group" >
                        <label>{{ __('Password') }}</label>
                        <input type="password" class="form-control"  wire:model="password" >
                        @error('password')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <hr>
                    <a href="{{route('users.index')}}"><i class="fa fa-arrow-left"></i> {{ __('Back') }}</a>
                    <button type="submit" class="btn btn-primary ml-3"><i class="fa fa-save"></i> {{ __('Simpan') }}</button>
                </form>
            </div>
        </div>
    </div>
</div>