@section('title', __("FORM NO : {$form_no}"))
@section('parentPageTitle', 'Anggota')
<form method="post" wire:submit.prevent="save">
    @if($total==0)
    <div class="alert alert-danger" role="alert">
        <div><i class="fa fa-warning"></i> Klaim belum bisa dilakukan karna Masa Aktif anggota dibawah 6 bulan.</div>
    </div>
    @endif
    <div class="clearfix row">
        <div class="col-lg-7">
            <div class="card">
                <div class="body">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label>{{ __('Tanggal Kematian')}}</label>
                                    <input type="date" class="form-control" wire:model="tgl_kematian">
                                    @error('tgl_kematian')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group col-md-6">
                                    <label>{{ __('Sebab Meninggal')}}</label>
                                    <select class="form-control" wire:model="sebab_meninggal">
                                        <option value=""> --- PILIH --- </option>
                                        <option>Sakit</option>
                                        <option>Kecelakaan</option>
                                        <option>Tindak Kriminal</option>
                                        <option>Lainnya</option>
                                    </select>
                                    @error('sebab_meninggal')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label>{{ __('Tempat Meninggal')}}</label>
                                    <select class="form-control" wire:model="tempat_meninggal">
                                        <option value=""> --- PILIH --- </option>
                                        <option>Rumah</option>
                                        <option>Rumah Sakit</option>
                                        <option>Perjalanan</option>
                                        <option>Luar Negeri</option>
                                        <option>Lainnya</option>
                                    </select>
                                    @error('tempat_meninggal')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                               
                            </div>
                            <div class="form-group">
                                <label>{{ __('Jika Meninggal karena Sakit, Sakit apa dan sejak kapan ?')}}</label>
                                <textarea class="form-control" wire:model="sakit_apa_dan_sejak_kapan"></textarea>
                            </div>
                            <div class="form-group">
                                <label>{{ __('Berikan gambaran secara singkat & jelas mengenai gejala/kejadian meninggalnya, atau jika meninggal karena kecelakaan berikan kronologis terjadinya kecelakaan :')}}</label>
                                <textarea class="form-control" wire:model="gambaran_singkat"></textarea>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <label>Fotocopy KTP/SIM Ahli waris yang berhak</label>
                            <div class="media photo">
                                <div class="media-left m-r-15">
                                    @if(!empty($ktp_ahliwaris))
                                    <img src="{{ $ktp_ahliwaris->temporaryUrl() }}" class="user-photo media-object" alt="KTP Ahli Waris" style="width:100%;">
                                    @endif
                                </div>
                                <div class="media-body">
                                    <button type="button" class="btn btn-default-dark" id="btn-upload-photo-waris"><i class="fa fa-upload"></i> Upload</button>
                                    <input type="file" id="ktp_ahliwaris" class="sr-only" wire:model="ktp_ahliwaris">
                                    @error('ktp_ahliwaris')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                            <label>Surat Kematian</label>
                            <div class="media photo">
                                <div class="media-left m-r-15">
                                    @if(!empty($surat_kematian))
                                    <img src="{{ $surat_kematian->temporaryUrl() }}" class="user-photo media-object" alt="Surat Kematian" style="width :100%;">
                                    @endif
                                </div>
                                <div class="media-body">
                                    <button type="button" class="btn btn-default-dark" id="btn-upload-photo-surat"><i class="fa fa-upload"></i> Upload</button>
                                    <input type="file" id="surat_kematian" class="sr-only" wire:model="surat_kematian">
                                    @error('surat_kematian')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                            <label>KTA Santa Maria</label>
                            <div class="media photo">
                                <div class="media-left m-r-15">
                                    @if(!empty($foto_kta))
                                    <img src="{{ $foto_kta->temporaryUrl() }}" class="user-photo media-object" alt="KTA Santa Maria" style="width:100%;">
                                    @endif
                                </div>
                                <div class="media-body">
                                    <button type="button" class="btn btn-default-dark" id="btn-upload-photo-kta"><i class="fa fa-upload"></i> Upload</button>
                                    <input type="file" id="foto_kta" class="sr-only" wire:model="foto_kta">
                                    @error('foto_kta')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <a href="javascript:void(0)" onclick="history.back()" class="mr-3"><i class="fa fa-arrow-left"></i> Kembali</a>
                    <span wire:loading>
                        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                        <span class="sr-only">{{ __('Loading...') }}</span>
                    </span>
                    @if($total!=0)
                        <button wire:loading.remove type="submit" class="btn btn-info"><i class="fa fa-save"></i> Submit Pengajuan</button>
                    @endif
                </div>
            </div>
        </div>

        <div class="col-lg-5">
            <div class="card">
                <div class="body">
                    <table class="table table-striped">
                        <thead></thead>
                        <tbody> 
                            <tr>
                                <th class="py-2">{{ __('Nomor Anggota')}}</th>
                                <td class="py-2">{{$data->no_anggota_platinum}}</td>
                            </tr>
                            <tr>
                                <th class="py-2">{{ __('Nama Anggota')}}</th>
                                <td class="py-2">{{$name}}</td>
                            </tr>
                            <tr>
                                <th class="py-2">{{ __('Tanggal Diterima')}} </th>
                                <td class="py-2">{{date('d-M-Y',strtotime($tanggal_diterima))}} / <span class="badge badge-danger">{{$lama_keanggotaan}}</span></td>
                            </tr>
                            <tr>
                                <th class="py-2">{{ __('Masa Tunggu')}}</th>
                                <td class="py-2">{{date('d-M-Y',strtotime($masa_tenggang))}}</td>
                            </tr>
                            <tr>
                                <th class="py-2">{{ __('Kota/ Kabupaten')}}</th>
                                <td class="py-2">{{$city}}
                                 @if($city_other == 'OTHER')
                                    ({{$city_lainnya}})
                                @endif
                            </td>
                            </tr>
                            <tr>
                                <th class="py-2">{{ __('Santunan Pelayanan')}}</th>
                                @if($city_other=='OTHER')
                                <td>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="santunan_pelayanan" placeholder="santunan_pelayanan" wire:model="santunan_pelayanan">
                                        @error('santunan_pelayanan') 
                                            <span class="text-danger">{{ $message }}</span> 
                                        @enderror
                                    </div>
                                </td>
                                @else
                                <td class="py-2">{{format_idr($santunan_pelayanan)}}</td>
                                @endif
                            </tr>
                            <tr>
                                <th class="py-2">{{ __('Santunan Uang Duka')}}</th>
                                @if($city_other=='OTHER')
                                <td>
                                    <div class="form-group">
                                            <input type="text" class="form-control" id="santunan_uang_duka" placeholder="santunan_uang_duka" wire:model="santunan_uang_duka">
                                            @error('santunan_uang_duka') <span class="text-danger">{{ $message }}</span> @enderror
                                    </div>
                                </td>
                                @else
                                <td class="py-2">{{format_idr($santunan_uang_duka)}}</td>
                                @endif
                            </tr>
                            <tr>
                                <th class="py-2">{{ __('Total Hak / Total Klaim')}}</th>
                                @if($city_other=='OTHER')
                                <td>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="total" placeholder="total" wire:model="total">
                                        @error('total') <span class="text-danger">{{ $message }}</span> @enderror
                                    </div>
                                </td>
                                @else
                                <td class="py-2">{{format_idr($total)}}<strong>
                                    ( {{($persen)}}% )
                                </strong></td>
                                 @endif
                            </tr>
                        </tbody>
                    </table>
                    <div class="alert alert-warning" role="alert">
                        <ol type="1">
                            <li>Masa anggota > 6 bulan - 1 tahun jumlah santunan 25% tapi tidak bisa diambil tunai</li>
                            <li>Masa > 1 tahun - tahun ke 2 jumlah santunan 50% ini juga tidak bisa diambil tunai</li>
                            <li>Masa masuk tahun ke 3 baru  100%</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
@section('page-script')
$('#btn-upload-photo-meninggal').on('click', function() {
    $(this).siblings('#foto_ktp_kk_meninggal').trigger('click');
});
$('#btn-upload-photo-waris').on('click', function() {
    $(this).siblings('#ktp_ahliwaris').trigger('click');
});
$('#btn-upload-photo-surat').on('click', function() {
    $(this).siblings('#surat_kematian').trigger('click');
});
$('#btn-upload-photo-kta').on('click', function() {
    $(this).siblings('#foto_kta').trigger('click');
});
@endsection
@push('after-scripts')
<script src="{{ asset('assets/js/jquery.priceformat.min.js') }}"></script>
<script>
    $(document).ready(function() {
        $('#santunan_pelayanan').priceFormat({
            prefix: 'Rp. ',
            centsSeparator: '.',
            thousandsSeparator: '.',
            centsLimit: 0
        });
        $('#santunan_uang_duka').priceFormat({
            prefix: 'Rp. ',
            centsSeparator: '.',
            thousandsSeparator: '.',
            centsLimit: 0
        });
        $('#total').priceFormat({
            prefix: 'Rp. ',
            centsSeparator: '.',
            thousandsSeparator: '.',
            centsLimit: 0
        });
    });
    $('#totalKlaim').priceFormat({
            prefix: 'Rp. ',
            centsSeparator: '.',
            thousandsSeparator: '.',
            centsLimit: 0
    });
</script>
@endpush