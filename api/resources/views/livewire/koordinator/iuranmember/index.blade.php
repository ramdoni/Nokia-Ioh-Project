@section('title', 'Iuran')
@section('parentPageTitle', 'Home')
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
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
                <div class="col-md-6">
                    <a href="javascript:;" class="btn btn-info" wire:click="downloadExcel"><i class="fa fa-download"></i> Download</a>
                    <a href="javascript:void(0)" wire:loading.remove wire:click="$emit('modal-insert-iuran')" class="btn btn-primary"><i class="fa fa-plus"></i> Iuran</a>
                    {{-- <a href="{{route('koordinator.iuranmember.cetak')}}" class="btn btn-success"><i class="fa fa-print"></i> Print Tagihan</a> --}}
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
                                    Check All<br />
                                    <input type="checkbox" wire:click="check_all" />
                                </th>                          
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
                        <tbody>
                            @foreach($data as $k => $item)
                                <tr>
                                    <td class="text-center">
                                        <input type="checkbox" value="{{$item->id}}" wire:model="check_id" />
                                    </td>
                                    <td>{{isset($item->name)?$item->name:''}}</td>
                                    <td>{{isset($item->Id_Ktp)?$item->Id_Ktp:''}}</td>
                                    <td>{{isset($item->no_anggota_platinum)?$item->no_anggota_platinum:''}}</td>
                                    @php($iurans = \App\Models\Iuran::where(['user_member_id'=>$item->id,'type'=>'Iuran','tahun'=>$tahun])->whereNotNull('bulan')->orderBy('bulan')->get())
                                    @php($bulan=[1=>'BELUM',2=>'BELUM',3=>'BELUM',4=>'BELUM',5=>'BELUM',6=>'BELUM',7=>'BELUM',8=>'BELUM',9=>'BELUM',10=>'BELUM',11=>'BELUM',12=>'BELUM'])
                                    @foreach($iurans as $k => $iuran)
                                        @if($iuran->status == 1 || $iuran->status === NULL || $iuran->status === 0)
                                            @php($bulan[$iuran->bulan]="PROCESS")
                                        @else
                                            @php($bulan[$iuran->bulan]="SUCCESS")
                                        @endif
                                    @endforeach
                                    @foreach($bulan as $k => $iuran)
                                        <td class="text-center">
                                            @if($iuran=='BELUM')
                                                <a href="javascript:;"  class="text-danger"><i class="fa fa-times"></i></a>
                                            @else
                                                @if($iuran=='PROCESS')
                                                    <a href="javascript:;" data-toggle="tooltip" title="Waiting approval admin"><i class="fa fa-history"></i></a>
                                                @else
                                                    <a href="javascript:;" class="text-success"><i class="fa fa-check"></i></a>
                                                @endif
                                            @endif
                                        </td>
                                    @endforeach
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
                    @livewire('koordinator.iuranmember.insert')
                </div>
            </div>
        </div>
    </div>
</div>

@push('after-scripts')
    <script>
        Livewire.on('show-insert-iuran',()=>{
            $("#modal_add_iuran").modal("show");
        });
    </script>
@endpush
