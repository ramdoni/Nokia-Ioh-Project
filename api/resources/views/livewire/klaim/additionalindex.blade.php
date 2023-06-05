@section('title', isset($klaim->user_member->name)?$klaim->user_member->name:'Klaim')
@section('parentPageTitle', 'Klaim Additional')
<div class="row clearfix">
    <div class="col-lg-6">
        <div class="card">
            <div class="header row">
                <div class="col-md-12">
                   <a href="{{route('klaim.index')}}" class="mr-2"><i class="fa fa-arrow-left"></i> Kembali</a>
                   <a href="javascript:;" data-toggle="modal" data-target="#modal_add_additional" class="btn btn-primary"><i class="fa fa-plus"></i> Tambah</a>
               </div>
           </div>
            <div class="body pt-0">
                <div class="table-responsive">
                    <table class="table table-striped m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nominal</th>
                                <th>Deskripsi</th>
                            </tr>
                           @foreach($data as $k => $item)
                           <tr>
                                <td style="width: 50px;">{{$k+1}}</td>
                                <td><a href="javascript:;" wire:click="$emit('edit',{{$item}})" >{{number_format($item->nominal, 2, ',', '.')}}</a></td>
                                <td>{{$item->deskripsi}}</td>
                           @endforeach
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="modal_add_additional" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-plus"></i> Additional</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true close-btn">×</span>
                </button>
            </div>
            <div class="modal-body">
                <livewire:klaim.additional-insert :klaim="$klaim"/>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="modal_edit_additional" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-plus"></i> Additional</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true close-btn">×</span>
                </button>
            </div>
            <div class="modal-body">
                <livewire:klaim.additional-edit />
            </div>
        </div>
    </div>
</div>

@push('after-scripts')
<script src="{{ asset('assets/js/jquery.priceformat.min.js') }}"></script>
<script>
Livewire.on('edit',(data)=>{
    $("#modal_edit_additional").modal("show");
});
$(document).ready(function() {
    $('.format_number').priceFormat({
        prefix: '',
        centsSeparator: '.',
        thousandsSeparator: '.',
        centsLimit: 0
    });
});
</script>
@endpush