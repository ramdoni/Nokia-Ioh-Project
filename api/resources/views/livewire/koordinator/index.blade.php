@section('title', 'Koordinator')
@section('parentPageTitle', 'Home')
<div class="clearfix row">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                <div class="col-md-2">
                    <input type="text" class="form-control" wire:model="keyword" placeholder="Searching..." />
                </div>
                <div class="col-md-3 px-0">
                    <a href="{{route('koordinator.insert')}}" class="btn btn-primary"><i class="fa fa-plus"></i> Koordinator</a>
                    <span wire:loading>
                        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                        <span class="sr-only">{{ __('Loading...') }}</span>
                    </span>
                </div>
            </div>
            <div class="body pt-0">
                <div class="table-responsive">
                    <table class="table table-striped table-hover m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>No Anggota</th>                                    
                                <th>Nama</th>                                    
                                <th>Phone</th>                                    
                                <th>Email</th>                                    
                                <th>Address</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data as $k => $item)
                            <tr>
                                <td style="width: 50px;">{{$k+1}}</td>
                                <td>{{$item->no_anggota_platinum}}</td>
                                <td>{{$item->name}}</td>
                                <td>{{$item->phone_number}}</td> 
                                <td>{{$item->email}}</td>                                   
                                <td>{{$item->address}}</td>
                                <td>{!!status_keanggotaan($item)!!}</td>
                                <td>  
                                    <a href="#" class="pr-2 text-success" onclick="autologin('{{ route('users.autologin',['id'=>$item->user_id]) }}','{{$item->name}}')" title="Autologin"><i class="fa fa-sign-in"></i></a>
                                    <!-- <a href="#" class="text-danger" wire:click="$emit('setDelete',{{$item->id}})" data-toggle="modal" data-target="#confirm_delete" title="Delete"><i class="fa fa-trash-o"></i></a> -->
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
<div class="modal fade" id="modal_autologin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form method="POST" action="">
                {{ csrf_field() }}
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-sign-in"></i> Autologin</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true close-btn">×</span>
                    </button>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary close-btn" data-dismiss="modal">No</button>
                    <button type="submit" class="btn btn-danger">Yes</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- Modal -->
<div wire:ignore.self class="modal fade" id="confirm_delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <livewire:koordinator.delete />
    </div>
</div>
@section('page-script')
function autologin(action,name){
    $("#modal_autologin form").attr("action",action);
    $("#modal_autologin .modal-body").html('<p>Autologin as '+name+' ?</p>');
    $("#modal_autologin").modal("show");
}
@endsection