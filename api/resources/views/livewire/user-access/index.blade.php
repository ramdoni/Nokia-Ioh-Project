@section('title', 'User Access')
@section('parentPageTitle', 'Management User')

<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                <div class="col-md-2">
                    <input type="text" class="form-control" wire:model="keyword" placeholder="Searching..." />
                </div>
                {{-- <div class="col-md-10">
                    <h2>Users Access</h2>
                </div> --}}
                {{-- <div class="col-md-2 text-right">
                    <a href="{{route('user-access.insert')}}" class="btn btn-outline-primary btn-sm"><i class="fa fa-plus"></i> Add Access</a>
                </div> --}}
            </div>
            <div class="body">
                <div class="table-responsive">
                    <table class="table table-striped table-hover m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Access</th>                                    
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data as $k => $item)
                            <tr>
                                <td style="width: 50px;">{{$k+1}}</td>
                                <td><a href="">{{$item->name}}</a></td>
                                <td>{{$item->description}}</td> 
                                <td>                                            
                                    <a href="javascript:void(0)" class="text-danger" wire:click="delete({{$item->id}})"><i class="fa fa-trash-o"></i></a>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
