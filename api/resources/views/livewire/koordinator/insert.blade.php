@section('title', __('Tambah'))
@section('parentPageTitle', 'Koordinator')

<div class="clearfix row">
    <div class="col-md-5">
        <div class="card">
            <div class="body">
                <form wire:submit.prevent="save">
                    <div class="form-group">
                        <label>{{ __('NIK / Nama') }}</label>
                        <div wire:ignore>
                            <select class="form-control select_name" id="user_id" wire:model="user_id">
                                <option value=""> --- Pilih NIK / Nama --- </option>
                                @foreach(\App\Models\UserMember::orderBy('user_member.name','ASC')->join('users','users.id','=','user_member.user_id')->select('user_member.id','Id_Ktp','user_member.name')->where('users.user_access_id',4)->where('user_member.status',2)->get() as $item)
                                <option value="{{$item->id}}">{{$item->Id_Ktp? $item->Id_Ktp .' / ':''}}{{$item->name}}</option>
                                @endforeach
                            </select>
                        </div>
                        @error('user_id')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label>{{ __('Referal Code') }} <small>Generate Otomatis</small></label>
                        <input type="text" class="form-control" wire:model="referal_code" readonly="true">
                        @error('referal_code')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <hr>
                    <a href="javascript:void(0)" onclick="history.back()"><i class="fa fa-arrow-left"></i> {{ __('Back') }}</a>
                    <button type="submit" class="ml-3 btn btn-primary"><i class="fa fa-save"></i> {{ __('Save') }}</button>
                    <div wire:loading>
                        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                        <span class="sr-only">Loading...</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-7">
        <div class="form-group">
            <div class="row">
                <div class="col-md-3">
                    @if($data)
                        @if($data->pas_foto)
                            <img src="{{asset("storage/{$data->pas_foto}")}}" style="max-width:100%;" />
                        @else
                            <img src="https://ui-avatars.com/api/?name={{$data->name}}&background=0D8ABC&color=fff&size=150" style="max-width:100%;" />
                        @endif
                    @else
                    <img src="https://ui-avatars.com/api/?name=Photo Profile&background=0D8ABC&color=fff&size=150" style="max-width:100%;" />
                    @endif
                </div>
                <div class="col-md-9">
                    <table class="table table-borderd">
                        <tbody>
                            <tr>
                                <th>Nama</th>
                                <td>{{isset($data->name) ? $data->name : ''}}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{{isset($data->email) ? $data->email : ''}}</td>
                            </tr>
                            <tr>
                                <th>Jenis Kelamin</th>
                                <td>{{isset($data->jenis_kelamin) ? $data->jenis_kelamin : ''}}</td>
                            </tr>
                            <tr>
                                <th>Kota / Kabupaten</th>
                                <td>{{isset($data->city) ? $data->city : ''}}</td>
                            </tr>
                            <tr>
                                <th>Alamat</th>
                                <td>{{isset($data->address) ? $data->address : ''}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@push('after-scripts')
<link rel="stylesheet" href="{{ asset('assets/vendor/select2/css/select2.min.css') }}"/>
<script src="{{ asset('assets/vendor/select2/js/select2.min.js') }}"></script>
<style>
    .select2-container .select2-selection--single {height:36px;padding-left:10px;}
    .select2-container .select2-selection--single .select2-selection__rendered{padding-top:3px;}
    .select2-container--default .select2-selection--single .select2-selection__arrow{top:4px;right:10px;}
    .select2-container {width: 100% !important;}
</style>
<script>
    
    select__2 = $('.select_name').select2();
    $('.select_name').on('change', function (e) {
        let elementName = $(this).attr('id');
        var data = $(this).select2("val");
        @this.set(elementName, data);
    });
    var selected__ = $('.select_name').find(':selected').val();
    if(selected__ !="") select__2.val(selected__);
    
</script>
@endpush