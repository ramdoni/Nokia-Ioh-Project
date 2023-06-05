@section('title', 'Iuran')
@section('parentPageTitle', 'Home')
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                <div class="col-md-3" wire:ignore>
                    <select class="form-control select_koordinator">
                        <option value=""> --- Koordinator --- </option>
                        @foreach ($koordinator as $item)
                            <option value="{{ $item->id }}">{{ $item->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="col-md-2" wire:ignore>
                    <select class="form-control" wire:model="tahun">
                        @for ($num = 2019; $num < date('Y', strtotime('+5 year')); $num++)
                            <option>{{ $num }}</option>
                        @endfor
                    </select>
                </div>
                <div class="col-md-2">
                    <input type="text" class="form-control" wire:model="keyword" placeholder="Name / NIK / No Anggota" />
                </div>
                <div class="col-md-5">
                    <a href="javascript:;" class="btn btn-info" wire:click="downloadExcel"><i class="fa fa-download"></i> Download</a>
                    @livewire('iuran.button-iuran')
                    <span wire:loading>
                        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                        <span class="sr-only">{{ __('Loading...') }}</span>
                    </span>
                </div>
            </div>
            <div class="body pt-0">
                <div class="table-responsive">
                    <table class="table table-hover table-header-nowrap m-b-0 c_list">
                        <thead>
                            <tr>
                                <th rowspan="2" style="vertical-align: middle;text-align:center;">
                                    @livewire('iuran.check-all')
                                </th>
                                <th rowspan="2" style="vertical-align: middle;">Koordinator</th>
                                <th rowspan="2" style="vertical-align: middle;">Nama Anggota</th>
                                <th rowspan="2" style="vertical-align: middle;">NIK</th>
                                <th rowspan="2" style="vertical-align: middle;">No Anggota</th>
                                <th colspan="12" style="vertical-align: middle; text-align:center">Iuran Anggota</th>
                            </tr>
                            <tr>
                                <th>Jan</th>
                                <th>Feb</th>
                                <th>Mar</th>
                                <th>Apr</th>
                                <th>May</th>
                                <th>Jun</th>
                                <th>Jul</th>
                                <th>Aug</th>
                                <th>Sep</th>
                                <th>Oct</th>
                                <th>Nov</th>
                                <th>Dec</th>
                            </tr>
                        </thead>
                        <tbody> 
                        @foreach ($data as $k => $item)
                            @if($item->id ==7252 || $item->id ==12) @continue @endif
                            <tr>
                                <td class="text-center" wire:ignore>
                                    @livewire('iuran.check-id',['data'=>$item->id],key($item->id.date('Ymd')))
                                </td>
                                <td>
                                    @if ($item->koordinator_id == 1)
                                        Kantor
                                    @else
                                        {{ isset($item->koordinator_name) ? $item->koordinator_name : '' }}
                                    @endif
                                </td>
                                <td><a href="{{route('user-member.print-iuran',['id'=>$item->id,'tahun'=>$tahun])}}" target="_blank" data-toggle="tooltip" title="Cetak Tagihan {{$tahun}}"><i class="fa fa-print"></i></a>
                                    {{ isset($item->name) ? $item->name : '' }}
                                </td>
                                <td>{{ isset($item->Id_Ktp) ? $item->Id_Ktp : '' }}</td>
                                <td>{{ isset($item->no_anggota_platinum) ? $item->no_anggota_platinum : '' }}</td>
                                @if(isset($item['bulan']))
                                    @foreach ($item['bulan'] as $k => $iuran)
                                        <td class="text-center">
                                            @if ($iuran == 'BELUM')
                                                @if(date('Y',strtotime($item->tanggal_diterima))>=$tahun and (int)date('m',strtotime($item->tanggal_diterima))>$k)
                                                    -
                                                @else
                                                    <a href="javascript:;" class="text-danger" data-toggle="tooltip" title="Belum melakukan pembayaran Iuran"><i class="fa fa-times"></i></a>
                                                @endif
                                            @else
                                                @if ($iuran->status == 1 || $iuran->status === null || $iuran->status === 0)
                                                    <a href="{{ route('iuran.proses', ['id' => $iuran->id]) }}" data-toggle="tooltip" title="Konfirmasi Iuran"><i class="fa fa-history"></i></a>
                                                @else
                                                    <a href="javascript:;" class="text-{{$iuran->iuran_pertama==1? 'warning' : 'success'}}" data-toggle="tooltip" title="{{$iuran->iuran_pertama==1? 'Iuran pertama' : 'Iuran'}}"><i class="fa fa-check"></i></a>
                                                @endif
                                            @endif
                                        </td>
                                    @endforeach
                                @endif
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
                <br />
                {!! $paging !!}
            </div>
        </div>
    </div>

    <div class="modal fade" wire:ignore.self id="modal_add_iuran" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-plus"></i> Tambah Pembayaran Iuran</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true close-btn">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    @livewire('iuran.insert')
                </div>
            </div>
        </div>
    </div>
@push('after-scripts')
    <link rel="stylesheet" href="{{ asset('assets/vendor/select2/css/select2.min.css') }}" />
    <script src="{{ asset('assets/vendor/select2/js/select2.min.js') }}"></script>
    <script>
        Livewire.on('show-insert-iuran',(data)=>{
            $("#modal_add_iuran").modal("show");
        });
        $('.select_koordinator').select2();
        $('.select_koordinator').on('change', function(e) {
            var data = $(this).select2("val");
            @this.set("koordinator_id", data);
        });
        $('.select_member').select2();
        $('.select_member').on('change', function(e) {
            var data = $(this).select2("val");
            @this.set("member_id", data);
        });
    </script>
@endpush
