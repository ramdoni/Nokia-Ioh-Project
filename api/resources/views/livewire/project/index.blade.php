@section('title', 'All Project / Business Opportunity')
@section('parentPageTitle', 'Project / Business Opportunity')

<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                <div class="col-md-2">
                    <input type="text" class="form-control" wire:model="keyword" placeholder="Searching..." />
                </div>
                <div class="col-md-2">
                    <a href="{{route('project.insert')}}" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> Project / Business Opportunity</a>
                </div>
            </div>
            <div class="body">
                <div class="table-responsive">
                    <table class="table table-striped m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Customer</th>                                    
                                <th>Background of Opportunity</th>                                    
                                <th>Contract Value</th>                                    
                                <th>Date Info</th>
                                <th>Status</th>
                                <th>RFI Docs,Bidding Info Docs, etc</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data as $k => $item)
                            <tr>
                                <td style="width: 50px;">{{$k+1}}</td>
                                <td><a href="">{{isset($item->customer->name) ? $item->customer->name : ''}}</a></td>
                                <td><a href="">{{$item->background_of_opportunity}}</a></td> 
                                <td>{{format_idr($item->contract_value)}}</td>                                   
                                <td>{{$item->date_receiving_info}}</td>
                                <td>{{status_project($item->status)}}</td>
                                <td></td>
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