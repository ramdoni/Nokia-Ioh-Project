@section('title', "Klain Anggota : ".(isset($data->user_member->name)?$data->user_member->name:'') )
@section('parentPageTitle', 'Klaim')
<div class="col-md-12">
    <div class="card">
        <div class="body row">
            <div class="table-responsive col-md-4">
                <table class="table table-striped table-hover m-b-0 c_list table_padding_1">
                    <tr>
                        <th>Nama Anggota</th>
                        <td>{{isset($data->user_member->name)?$data->user_member->name:''}}</td>
                    </tr>
                    <tr>
                        <th>Kota</th>
                        <td>{{isset($data->user_member->kota->name)?$data->user_member->kota->name:''}}</td>
                    </tr>
                    <tr>
                        <th>Tanggal Aktif</th>
                        <td>{{date('d M Y',strtotime($data->user_member->tanggal_diterima))}}</td>
                    </tr>
                    <tr>
                        <th>Tanggal Meninggal</th>
                        <td>{{date('d M Y',strtotime($data->tgl_kematian))}}</td>
                    </tr>
                    <tr>
                        <th>Sebab Meninggal</th>
                        <td>{{$data->sebab_meninggal}}</td>
                    </tr>
                    <tr>
                        <th>Sebab Meninggal</th>
                        <td>{{$data->sebab_meninggal}}</td>
                    </tr>
                    <tr>
                        <th>Tempat Meninggal</th>
                        <td>{{$data->tempat_meninggal}}</td>
                    </tr>
                    <tr>
                        <th>Jika Meninggal karena Sakit, Sakit apa dan sejak kapan</th>
                        <td>{{$data->sakit_apa_dan_sejak_kapan}}</td>
                    </tr>
                    <tr>
                        <th>Gambaran secara singkat mengenai gejala/kejadian meninggalnya</th>
                        <td>{{$data->gambaran_singkat}}</td>
                    </tr>
                    <tr>
                        <th>Tanggal Pengajuan</th>
                        <td>{{date('d M Y',strtotime($data->tgl_pengajuan))}}</td>
                    </tr>
                    <tr>
                        <th>Santunan Pelayanan</th>
                        <td>{{number_format($data->santunan_pelayanan)}}</td>
                    </tr>
                    <tr>
                        <th>Santunan Uang Duka</th>
                        <td>{{number_format($data->santunan_uang_duka)}}</td>
                    </tr>
                    <tr>
                        <th>Total Hak</th>
                        <td>{{format_idr($data->total)}} <strong>( {{($data->persen)}}% )</strong></td>
                    </tr>
                    <tr>
                        <th>Total Klaim</th>
                        <td>{{number_format($data->total_klaim)}}</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-3">
                <p>Fotocopy KTP/KK yang meninggal</p>
                @if(!empty($data->user_member->foto_ktp))
                <div class="media photo">
                        <a href="{{ asset('storage/'. $data->user_member->foto_ktp) }}" target="_blank"><img src="{{ asset('storage/'. $data->user_member->foto_ktp) }}" class="user-photo media-object" style="width:100%;"></a>
                    </div>    
                @endif
                @if(!empty($data->user_member->foto_kk))
                <div class="media photo">
                        <a href="{{ asset('storage/'. $data->user_member->foto_kk) }}" target="_blank"><img src="{{ asset('storage/'. $data->user_member->foto_kk) }}" class="user-photo media-object" style="width:100%;"></a>
                    </div>    
                @endif
                <p>Fotocopy KTP/SIM Ahli waris yang berhak</p>
                @if(!empty($data->ktp_ahliwaris))
                <div class="media photo">
                        <a href="{{ asset('storage/'. $data->ktp_ahliwaris) }}" target="_blank"><img src="{{ asset('storage/'. $data->ktp_ahliwaris) }}" class="user-photo media-object" style="width:100%;"></a>
                    </div>    
                @endif
            </div>
            <div class="col-md-3">
                <p>Surat Kematian</p><br />
                @if(!empty($data->surat_kematian))
                <div class="media photo">
                        <a href="{{ asset('storage/'. $data->surat_kematian) }}" target="_blank"><img src="{{ asset('storage/'. $data->surat_kematian) }}" class="user-photo media-object" style="width:100%;"></a>
                    </div>    
                @endif
                <p>KTA Santa Maria</p>
                @if(!empty($data->foto_kta))
                <div class="media photo">
                        <a href="{{ asset('storage/'. $data->foto_kta) }}" target="_blank"><img src="{{ asset('storage/'. $data->foto_kta) }}" class="user-photo media-object" style="width:100%;"></a>
                    </div>    
                @endif
            </div>
            <div class="col-md-12">
                <hr />
                <a href="javascript:void(0)" onclick="history.back()"><i class="fa fa-arrow-left"></i> Back</a>
                @if($data->is_approve_ketua==0)
                    <a href="javascript:void(0)" wire:click="$emit('confirm-approve')" class="ml-3 btn btn-info"><i class="fa fa-check"></i> Approve</a>
                    <a href="javascript:void(0)" wire:click="$emit('confirm-reject')" class="ml-3 btn btn-danger"><i class="fa fa-times"></i> Reject</a>
                @endif
            </div>  
        </div>
    </div>
</div>
@push('after-scripts')
<script>
    $(document).ready(function(){
        $(".btn-link").trigger('click');
    });
    Livewire.on('confirm-approve',()=>{
        if(confirm('Approve data anggota ?')){
            Livewire.emit('approve');
        }
    });
    Livewire.on('confirm-reject',()=>{
        if(confirm('Reject data anggota ?')){
            Livewire.emit('reject');
        }
    });
</script>
@endpush