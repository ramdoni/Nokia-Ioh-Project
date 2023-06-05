<div>
    <form wire:submit.prevent="save">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-plus"></i> Informasi</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true close-btn">×</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
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
                                    <td class="py-2">{{isset($data->name) ? $data->name : ''}}</td>
                                </tr>
                                <tr>
                                    <th class="py-2">{{ __('Tanggal Diterima')}} </th>
                                    <td class="py-2">{{isset($data->tanggal_diterima) ? date('d-M-Y',strtotime($data->tanggal_diterima)) : ''}}</td>
                                </tr>
                                <tr>
                                    <th class="py-2">{{ __('Masa Tunggu')}}</th>
                                    <td class="py-2">{{isset($data->masa_tenggang) ? date('d-M-Y',strtotime($data->masa_tenggang)) : ''}}</td>
                                </tr>
                                <tr>
                                    <th class="py-2">{{ __('Kota/ Kabupaten')}}</th>
                                    <td class="py-2">{{isset($data->kota->name) ? $data->kota->name : ''}}
                                     @if(isset($data->city) and $data->city == 'OTHER')
                                        ({{isset($data->city_lainnya) ? $data->city_lainnya : ''}})
                                    @endif
                                </td>
                                </tr>
                                <tr>
                                    <th class="py-2">{{ __('Santunan Pelayanan')}}</th>
                                    <td class="py-2">{{isset($klaim->santunan_pelayanan) ? format_idr($klaim->santunan_pelayanan) : ''}}</td>
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
                                        <td class="py-2">{{isset($klaim->santunan_uang_duka) ? format_idr($klaim->santunan_uang_duka) : ''}}</td>
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
                                        <td class="py-2">
                                            {{isset($klaim->total) ? format_idr($klaim->total) : ''}}<strong>
                                            @if(isset($klaim->total))
                                                ( {{($klaim->persen)}}% )
                                            @endif
                                            </strong>
                                        </td>
                                     @endif
                                </tr>
                            </tbody>    
                        </table>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>{{ __('Tanggal Kematian')}}</label>
                            <input type="date" class="form-control" wire:model="tgl_kematian" {{isset($data->status)==4?"disabled" : ''}}>
                            @error('tgl_kematian')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label>{{ __('Sebab Meninggal')}}</label>
                            <select class="form-control" wire:model="sebab_meninggal" disabled>
                                <option value=""> --- PILIH --- </option>
                                <option>Sakit</option>
                                <option>Kecelakaan</option>
                                <option>Tindak Kriminal</option>
                                <option>Lainnya</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>{{ __('Tempat Meninggal')}}</label>
                            <select class="form-control" wire:model="tempat_meninggal" disabled>
                                <option value=""> --- PILIH --- </option>
                                <option>Rumah</option>
                                <option>Rumah Sakit</option>
                                <option>Perjalanan</option>
                                <option>Luar Negeri</option>
                                <option>Lainnya</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>{{ __('Jika Meninggal karena Sakit, Sakit apa dan sejak kapan ?')}}</label>
                        <textarea class="form-control" wire:model="sakit_apa_dan_sejak_kapan" disabled></textarea>
                    </div>
                    <div class="form-group">
                        <label>{{ __('Berikan gambaran secara singkat & jelas mengenai gejala/kejadian meninggalnya, atau jika meninggal karena kecelakaan berikan kronologis terjadinya kecelakaan :')}}</label>
                        <textarea class="form-control" wire:model="gambaran_singkat" disabled></textarea>
                    </div>
                </div>
                <div class="col-md-4">
                    <label>Fotocopy KTP/SIM Ahli waris yang berhak</label>
                    <div class="media photo">
                        <div class="media-left m-r-15">
                            @if(isset($klaim->ktp_ahliwaris))
                            <img src="{{ asset($klaim->ktp_ahliwaris) }}" class="user-photo media-object" alt="KTP Ahli Waris" style="height :100px;">
                            @endif
                        </div>
                    </div>
                    <label>Surat Kematian</label>
                    <div class="media photo">
                        <div class="media-left m-r-15">
                            @if(isset($klaim->surat_kematian))
                            <img src="{{ asset($klaim->surat_kematian) }}" class="user-photo media-object" alt="Surat Kematian" style="height :100px;">
                            @endif
                        </div>
                    </div>
                    <label>KTA Santa Maria</label>
                    <div class="media photo">
                        <div class="media-left m-r-15">
                            @if(isset($klaim->foto_kta))
                            <img src="{{ asset($klaim->foto_kta) }}" class="user-photo media-object" alt="KTA Santa Maria" style="height :100px;">
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
