@section('title', __('No Pengajuan : '. $data->no_pengajuan))
@section('parentPageTitle', 'Users')

<div class="row clearfix">
    <div class="col-md-9">
        <div class="card">
            <div class="body">
                <div class="row">
                    <div class="form-group col-md-6">
                        <div class="table-responsive">
                            <table class="table m-b-0 c_list table-striped">
                                <thead>
                                    <tr>
                                        <th>Pinjaman</th>
                                        <td style="width:5px;">:</td> 
                                        <td>{{format_idr($data->amount)}}</td>
                                    </tr>
                                    <tr>
                                        <th>Lama Angsuran</th>
                                        <td>:</td> 
                                        <td>{{$data->angsuran}} Bulan</td>
                                    </tr>
                                    <tr>
                                        <th>Jasa</th>
                                        <td>:</td> 
                                        <td>{{format_idr($data->jasa)}}</td>
                                    </tr>
                                    <tr>
                                        <th>Platform Fee</th>
                                        <td>:</td> 
                                        <td>{{format_idr($data->platform_fee)}}</td>
                                    </tr>
                                    <tr>
                                        <th>Proteksi Pinjaman</th>
                                        <td>:</td> 
                                        <td>{{format_idr($data->proteksi_pinjaman)}}</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <div class="table-responsive">
                            <table class="table m-b-0 c_list table-striped">
                                <thead>
                                    <tr>
                                        <th>Tagihan Perbulan</th>
                                        <td style="width:5px;">:</td> 
                                        <td>{{format_idr($data->total)}}</td>
                                    </tr>
                                    <tr>
                                        <th>Status</th>
                                        <td style="width:5px;">:</td> 
                                        <td>
                                            @if($data->status==0)
                                                <span class="badge badge-warning">Approval</span>
                                            @endif
                                            @if($data->status==1)
                                                <span class="badge badge-success">On Going</span>
                                            @endif
                                            @if($data->status==2)
                                                <span class="badge badge-info">Completed</span>
                                            @endif
                                            @if($data->status==3)
                                                <span class="badge badge-danger">Rejected</span>
                                            @endif
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3"></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped m-b-0 c_list table-bordered">
                        <thead>
                            <tr>
                                <th rowspan="2">Bulan</th>                                    
                                <th rowspan="2">Pembiayan</th>                                    
                                <th colspan="2" class="text-center">Angsuran</th>                                    
                                <th colspan="2" class="text-center">Jasa</th>                                    
                                <th rowspan="2" class="text-center">Tagihan</th>
                                <th rowspan="2" class="text-center">Tanggal Pembayaran</th>
                                <th rowspan="2" class="text-center">Metode Pembayaran</th>
                                <th rowspan="2">Status</th>
                                <th rowspan="2"></th>
                            </tr>
                            <tr>
                                <th class="text-center">Ke</th>
                                <th class="text-right">Rp</th>
                                <th class="text-center">%</th>
                                <th class="text-right">Rp</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data->items as $k => $item)
                                <tr>
                                    <td>{{date('d-M-Y',strtotime($item['bulan']))}}</td>
                                    <td>{{format_idr($item['pembiayaan'])}}</td>
                                    <td class="text-center">{{$k+1}}</td>
                                    <td class="text-right">{{format_idr($item['angsuran_perbulan'])}}</td>
                                    <td class="text-center">{{@abs($item['jasa'])}}</td>
                                    <td class="text-center">{{format_idr($item['jasa_nominal'])}}</td>
                                    <td class="text-right">{{format_idr($item->tagihan)}}</td>
                                    <td>{{$item->payment_date?date('d-M-Y',strtotime($item->payment_date)) : '-'}}</td>
                                    <td>{{$item->metode_pembayaran ? metode_pembayaran($item->metode_pembayaran) : '-'}}</td>
                                    <td>
                                        @if($item->status==0)
                                            <span class="badge badge-danger">Belum lunas</span>
                                        @endif
                                        @if($item->status==1)
                                            <span class="badge badge-success">Lunas</span>
                                        @endif
                                    </td>
                                    <td>
                                        @if($item->status==0)
                                            <a href="javascript:void(0)" wire:click="$set('selected_id',{{$item->id}})" data-toggle="modal" data-target="#modal_bayar" class="badge badge-warning badge-active"><i class="fa fa-check"></i> Lunas</a>
                                        @endif
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                    <span wire:loading>
                        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                        <span class="sr-only">{{ __('Loading...') }}</span>
                    </span>
                </div>
                <hr />
                <div class="form-group">
                    <a href="javascript:void(0)" onclick="history.back()"><i class="fa fa-arrow-left"></i> {{ __('Kembali') }}</a>
                </div>
            </div>
        </div>
    </div>

    <div wire:ignore.self class="modal fade" id="modal_bayar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form wire:submit.prevent="lunas">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-plus"></i> Bayar</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true close-btn">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Metode Pembayaran</label>
                            <select class="form-control" wire:model="metode_pembayaran_">   
                                <option value=""> -- Pilih -- </option>
                                @foreach(metode_pembayaran() as $k => $item)
                                    <option value="{{$k}}">{{$item}}</option>
                                @endforeach
                            </select>
                            @error('metode_pembayaran_') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group">
                            <label>Tanggal Pembayaran</label>
                            <input type="date" class="form-control" wire:model="payment_date"/>
                            @error('payment_date') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-info close-modal">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>

@push('after-scripts')
    <link rel="stylesheet" href="{{ asset('assets/vendor/select2/css/select2.min.css') }}"/>
    <script src="{{ asset('assets/vendor/select2/js/select2.min.js') }}"></script>
    <script>
        select__2 = $('.select_anggota').select2();
        $('.select_anggota').on('change', function (e) {
            var data = $(this).select2("val");
            @this.set("user_member_id", data);
        });
    </script>
@endpush