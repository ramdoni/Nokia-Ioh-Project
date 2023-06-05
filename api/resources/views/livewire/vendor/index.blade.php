@section('title', __('Vendor'))
@section('parentPageTitle', 'Home')

<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                <div class="col-md-2">
                    <input type="text" class="form-control" wire:model="keyword" placeholder="Searching..." />
                </div>
                <div class="col-md-1">
                    <a href="javascript:void(0)" class="btn btn-primary" wire:click="$set('insert',true)"><i class="fa fa-plus"></i> {{__('Vendor')}}</a>
                </div>
            </div>
            <div class="body">
                <div class="table-responsive">
                    <table class="table table-striped table-hover m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>PIC</th>                                    
                                <th>Vendor</th>                                    
                                <th>Phone</th>                                    
                                <th>Keterangan</th>                                    
                                <th>Email</th>                                    
                                <th>Address</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            @if($insert)
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" class="form-control" wire:model="pic" placeholder="PIC" />
                                        @error('pic')
                                            <li class="parsley-required">{{ $message }}</li>
                                        @enderror
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" wire:model="name" placeholder="Vendor" />
                                        @error('name')
                                            <li class="parsley-required">{{ $message }}</li>
                                        @enderror
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" wire:model="phone" placeholder="Phone" />
                                        @error('phone')
                                            <li class="parsley-required">{{ $message }}</li>
                                        @enderror
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" wire:model="keterangan" placeholder="keterangan" />
                                        @error('keterangan')
                                            <li class="parsley-required">{{ $message }}</li>
                                        @enderror
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" wire:model="email" placeholder="Email" />
                                        @error('email')
                                            <li class="parsley-required">{{ $message }}</li>
                                        @enderror
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" wire:model="address" placeholder="Address" />
                                        @error('address')
                                            <li class="parsley-required">{{ $message }}</li>
                                        @enderror
                                    </td>
                                    <td>
                                        <a href="javascript:void(0)" wire:click="save" class="mx-2"><i class="fa fa-save"></i></a>
                                        <a href="javascript:void(0)" wire:click="cancel"><i class="fa fa-close text-danger"></i></a>
                                    </td>
                                </tr>
                            @endif
                            @foreach($data as $k => $item)
                                @if(isset($selected_item->id) and $selected_item->id==$item->id) @continue @endif
                                <tr>
                                    <td style="width: 50px;">{{$k+1}}</td>
                                    <td>{{$item->pic_name}}</td>
                                    <td>{{$item->name}}</td>
                                    <td>{{$item->no_telepon}}</td> 
                                    <td>{{$item->keterangan}}</td>                                   
                                    <td>{{$item->email}}</td>                                   
                                    <td>{{$item->alamat}}</td>
                                    <td>
                                        <a href="javascript:void(0)" wire:click="delete({{$item->id}})" class="mx-2"><i class="fa fa-trash text-danger"></i></a>
                                        <a href="javascript:void(0)" wire:click="edit({{$item->id}})"><i class="fa fa-edit text-info"></i></a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                <br />
                {{$data->links()}}
            </div>
        </div>
    </div>
</div>