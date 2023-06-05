@section('title', 'Klaim Additional')
@section('parentPageTitle', 'Klaim')
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
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
                                <td>{{number_format($item->nominal, 2, ',', '.')}}</td>
                                <td>{{$item->deskripsi}}</td>
                           @endforeach
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <br />
            </div>
        </div>
    </div>
</div>
@push('after-scripts')
<script>
    $(document).ready(function(){
        $(".btn-link").trigger('click');
    });
</script>
@endpush