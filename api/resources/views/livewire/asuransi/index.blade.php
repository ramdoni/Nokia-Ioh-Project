@section('title', 'Asuransi')
@section('parentPageTitle', 'Home')
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="header row">
                <div class="col-md-3">
                    <select class="form-control" wire:model="statuskeyword">
                        <option value="4">All</option>
                        <option value="1">Perpanjangan End Date 15 Hari</option>
                        <option value="2">Perpanjangan End Date 30 Hari</option>
                        <option value="3">Penambahan</option>
                        <option value="4">Mature</option>
                    </select>
                </div>
                <div class="col-md-7">
                    <a href="javascript:;" class="btn btn-info btn-sm" wire:click="downloadExcel"><i class="fa fa-download"></i> Download</a>
                    <a href="javascript:;" class="btn btn-success btn-sm" data-toggle="modal" data-target="#modal_upload" class="ml-2" title="Upload Excel"><i class="fa fa-upload"></i> Upload</a>
                    <span wire:loading>
                        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                        <span class="sr-only">{{ __('Loading...') }}</span>
                    </span>
                </div>
            </div>
            <div class="body pt-0">
                <div class="table-responsive">
                    <table class="table table-striped m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>ID KTP</th>
                                <th>Name</th>
                                <th>Status Anggota</th>
                                <th>No Peserta</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data as $k => $item)
                            <tr>
                                <td style="width: 50px;">{{$k+1}}</td>
                                <td>{{isset($item->Id_Ktp)?$item->Id_Ktp:''}}</td>
                                <td>{{$item->name}}</td>
                                <td>{!! status_keanggotaan($item)!!}</td>
                                <td><!--<a href="{{route('asuransi.edit',['id'=>$item->id])}}">-->{{isset($item->asuransiMax->membernostr)?$item->asuransiMax->membernostr:''}}</td>
                                <td>@if(isset($item->asuransiMax->startdate))
                                    {{date('d M Y',strtotime($item->asuransiMax->startdate))}}
                                    @endif
                                </td>
                                 <td>@if(isset($item->asuransiMax->enddate))
                                    {{date('d M Y',strtotime($item->asuransiMax->enddate))}}
                                    @endif
                                </td>
                                <td>
                                    @if($item->status_asuransi==1)
                                        <span class="badge badge-info">Active</span>
                                    @endif
                                    @if($item->status_asuransi==2)
                                        <span class="badge badge-danger">Expired</span>
                                    @endif
                                    @if($item->status_asuransi==3)
                                        <span class="badge badge-success">Claim</span>
                                    @endif
                                </td>
                                <td class="px-0">
                                    @if($item->status == 4 and $item->status_asuransi ==1)
                                        <a href="javascript:void(0)" wire:click="$emit('modal-pengajuan-klaim',{{$item->asuransi_id}})" data-toggle="modal" data-target="#modal_konfirmasi_klaim" class="badge badge-success mx-0 bg-success text-white"><i class="fa fa-arrow-right"></i>Ajukan Klaim</a>
                                    @endif
                                    @if($item->status_asuransi==3)
                                        <a href="{{route('klaim.fppma',$item->id)}}" target="_blank" data-toggle="tooltip" title="Formulir Pengajuan Pembayaran Manfaat Asuransi (Klaim Meninggal Dunia)" class="badge badge-info mx-0 bg-info text-white"><i class="fa fa-print"></i> FPPMA</a>
                                    </td>
                                    @endif
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
    <div wire:ignore.self class="modal fade" id="modal_konfirmasi_klaim" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <livewire:asuransi.konfirmasi-klaim />
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="modal_upload" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <livewire:asuransi.upload />
        </div>
    </div>
</div>