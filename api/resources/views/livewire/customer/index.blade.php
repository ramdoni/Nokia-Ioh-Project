@section('title', 'Customer')
@section('parentPageTitle', 'Home')

<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                <div class="col-md-2">
                    <input type="text" class="form-control" wire:model="keyword" placeholder="Searching..." />
                </div>
                <div class="col-md-1">
                    <a href="{{route('customer.insert')}}" class="btn btn-primary"><i class="fa fa-plus"></i> Customer</a>
                </div>
            </div>
            <div class="body">
                <div class="table-responsive">
                    <table class="table table-striped m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>                                    
                                <th>Phone</th>                                    
                                <th>Email</th>                                    
                                <th>Address</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data as $k => $item)
                            <tr>
                                <td style="width: 50px;">{{$k+1}}</td>
                                <td>{{$item->name}}</td>
                                <td><span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>{{$item->phone}}</span></td> 
                                <td><span class="phone">{{$item->email}}</span></td>                                   
                                <td>{{$item->address}}</td>
                                <td></td>
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