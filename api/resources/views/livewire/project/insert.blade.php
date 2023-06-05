@section('title', 'Add Project / Business Opportunity')
@section('parentPageTitle', 'Project / Business Opportunity')

<div class="row clearfix">
    <div class="col-md-6">
        <div class="card">
            <div class="body">
                <form id="basic-form" method="post" wire:submit.prevent="save">
                    <div class="form-group">
                        <label>{{ __('Customer') }} <span class="text-danger">*</span></label>
                        <select class="form-control" wire:model="customer_id">
                            <option value=""> --- Select Customer --- </option>
                            @foreach($customer as $i)
                            <option value="{{$i->id}}">{{$i->name}}</option>
                            @endforeach
                        </select>
                        @error('customer_id')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label>{{ __('Background of Opportunity') }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control"  wire:model="background_of_opportunity" >
                        @error('background_of_opportunity')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                        @enderror
                    </div>
                    <div class="row">
                        <div class="form-group col-md-5">
                            <label>{{ __('Contract Value') }}</label>
                            <input type="number" class="form-control"  wire:model="contract_value" >
                            @error('contract_value')
                            <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                            @enderror
                        </div>
                        <div class="form-group col-md-3">
                            <label>{{ __('Date Receiving Info') }} <span class="text-danger">*</span></label>
                            <input type="date" class="form-control" wire:model="date_receiving_info">
                            @error('date_receiving_info')
                            <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                            @enderror
                        </div>
                        <div class="form-group col-md-4">
                            <label>{{ __('Status') }} <span class="text-danger">*</span></label>
                            <select class="form-control" wire:model="status">
                                <option value=""> --- Status --- </option>
                                @foreach(status_project_list() as $k =>$i)
                                <option value="{{$k}}">{{$i}}</option>
                                @endforeach
                            </select>
                            @error('date_receiving_info')
                            <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group">
                        <label>{{ __('RFI docs, Bidding Info Docs, etc') }}</label><br />
                        <input type="file" wire:model="rfi_file" />
                        @error('rfi_file')
                        <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                    </div>
                        @enderror
                    <hr>
                    <a href="{{route('project')}}"><i class="fa fa-arrow-left"></i> {{ __('Back') }}</a>
                    <button type="submit" class="btn btn-primary ml-3"><i class="fa fa-save"></i> {{ __('Save') }}</button>
                </form>
            </div>
        </div>
    </div>
</div>