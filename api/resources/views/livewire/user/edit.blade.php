@section('title', $data->name)
@section('parentPageTitle', 'Users')

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
                        <select class="form-control" name="user_access_id">
                            <option value="">{{__('--- Akses --- ')}} </option>
                            @foreach($access as $item)
                            <option value="{{$item->id}}" {{$item->id==$data->user_access_id?'selected':''}}>{{$item->name}}</option>
                            @endforeach
                        </select>
                        @error('password')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label>{{ __('Password') }}</label>
                        <input type="password" class="form-control"  wire:model="password" >
                        @error('password')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <br>
                    <a href="{{route('users.index')}}"><i class="fa fa-arrow-left"></i> {{ __('Back') }}</a>
                    <button type="submit" class="btn btn-primary ml-3"><i class="fa fa-save"></i> {{ __('Simpan') }}</button>
                </form>
            </div>
        </div>
    </div>
</div>