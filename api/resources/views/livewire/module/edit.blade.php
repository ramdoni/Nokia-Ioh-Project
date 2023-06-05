@section('title', $data->name)
@section('parentPageTitle', 'Module')

<div class="row clearfix">
    <div class="col-md-4">
        <div class="card">
            <div class="body">
                <form id="basic-form" method="post" wire:submit.prevent="save">
                    <div class="form-group">
                        <label>{{ __('Name') }}</label>
                        <input type="text" class="form-control" wire:model="name" >
                        @error('name')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <hr>
                    <a href="{{route('module.index')}}"><i class="fa fa-arrow-left"></i> {{ __('Back') }}</a>
                    <button type="submit" class="btn btn-primary ml-3"><i class="fa fa-save"></i> {{ __('Save') }}</button>
                </form>
            </div>
        </div>
    </div>

    <div class="col-md-8">
        <div class="card">
            <div class="header">
                <h2>Menu</h2>
            </div>
            <div class="body">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Link</th>
                                <th>Icon</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($items as $k => $item)
                            <tr>
                                <td>{{$k+1}}</td>
                                <td>{{$item->name}}</td>
                                <td>{{$item->link}}</td>
                                <td>{{$item->icon}}</td>
                                <td>
                                    <a href="javascript:void(0)" wire:click="addFunction({{$item->id}})" class="mr-3"><i class="fa fa-plus"></i></a>
                                    <a href="javascript:void(0)" wire:click="deleteItem({{$item->id}})" class="text-danger"><i class="fa fa-trash"></i> </a>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#modal_add_items"><i class="fa fa-plus"></i> Add</a>
            </div>
        </div>
    </div>
</div>

<div wire:ignore.self class="modal fade" id="modal_add_items" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <livewire:module.form :data="$data">
        </div>
    </div>
</div>

<div wire:ignore.self class="modal fade" id="modal_add_function" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            @livewire('module.form-function', ['data' => $data,'parent_id'=>$parent_id])
        </div>
    </div>
</div>
@section('page-script')
Livewire.on('modalAddFunction', () =>
    $('#modal_add_function').modal('show')
);
Livewire.on('hideModal', () =>
    $('#modal_add_items').modal('hide')
);
@endsection