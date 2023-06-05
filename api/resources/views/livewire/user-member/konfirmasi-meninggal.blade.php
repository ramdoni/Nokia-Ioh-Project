<div>
    <form wire:submit.prevent="save">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-plus"></i> Konfirmasi Meninggal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true close-btn">×</span>
            </button>
        </div>
        <div class="modal-body" x-data="{type_form:''}">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label class="fancy-radio">
                            <input type="radio" wire:model="type_form" x-model="type_form" value="1">
                            <span><i></i>Meninggal</span>
                        </label>
                        <label class="fancy-radio">
                            <input type="radio" wire:model="type_form" x-model="type_form" value="2">
                            <span><i></i>Keluar</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row" x-show="type_form==2">
                <div class="col-md-4">
                    <div class="body">
                        <div class="form-group">
                            <label>Tanggal Keluar</label>
                            <input type="date" class="form-control" wire:model="tanggal_keluar" />
                            @error('tanggal_keluar') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group">
                            <label>Alasan Keluar</label>
                            <textarea class="form-control" wire:model="alasan_keluar"></textarea>
                            @error('alasan_keluar') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" x-show="type_form==1">
                <div class="col-md-4">
                    <div class="body">
                        <table class="table table-striped">
                            <thead></thead>
                            <tbody> 
                                <tr>
                                    <th class="py-2">{{ __('Nomor Anggota')}}</th>
                                    <td class="py-2">{{isset($data->no_anggota_platinum) ? $data->no_anggota_platinum : ''}}</td>
                                </tr>
                                <tr>
                                    <th class="py-2">{{ __('Nama Anggota')}}</th>
                                    <td class="py-2">{{$name}}</td>
                                </tr>
                                <tr>
                                    <th class="py-2">{{ __('Tanggal Diterima')}} </th>
                                    <td class="py-2">{{date('d-M-Y',strtotime($tanggal_diterima))}} / <span class="badge badge-danger">{{$lama_keanggotaan_string}}</span></td>
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
                                <!-- <tr>
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
                                </tr> -->
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
                <div class="col-md-4">
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
                <div class="col-md-4">
                    <label>Fotocopy KTP/SIM Ahli waris yang berhak</label>
                    <div class="media photo">
                        <div class="media-left m-r-15">
                            @if(!empty($ktp_ahliwaris))
                            <img src="{{ $ktp_ahliwaris->temporaryUrl() }}" class="user-photo media-object" alt="KTP Ahli Waris" style="width:100%;">
                            @endif
                        </div>
                        <div class="media-body">
                            <input type="file" id="ktp_ahliwaris" wire:model="ktp_ahliwaris">
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
                            <input type="file" id="surat_kematian" wire:model="surat_kematian">
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
                            <input type="file" id="foto_kta" wire:model="foto_kta">
                            @error('foto_kta')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <span wire:loading  wire:target="save">
                <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                <span class="sr-only">{{ __('Loading...') }}</span>
            </span>
            <button type="submit" class="btn btn-info close-modal"><i class="fa fa-save"></i> Submit</button>
        </div>
    </form>
</div>
