<div wire:ignore.self class="modal fade" id="modal_add_simpanan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form wire:submit.prevent="save">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-plus"></i> Simpanan</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true close-btn">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Jenis Simpanan</label>
                        <select class="form-control" wire:model="jenis_simpanan_id">   
                            <option value=""> -- Pilih -- </option>
                            @foreach($jenis_simpanan as $item)
                                <option value="{{$item->id}}">{{$item->name}}</option>
                            @endforeach
                        </select>
                        @error('jenis_simpanan_id') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Nominal</label>
                            <input type="number" class="form-control" wire:model="amount" />
                            @error('amount') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label>Payment Date</label>
                            <input type="date" class="form-control" wire:model="payment_date" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Bulan</label>
                            <select class="form-control" wire:model="bulan">
                                <option value="">-- Pilih -- </option>
                                <option value="1">Januari</option>
                                <option value="2">Februari</option>
                                <option value="3">Maret</option>
                                <option value="4">April</option>
                                <option value="5">Mei</option>
                                <option value="6">Juni</option>
                                <option value="7">Juli</option>
                                <option value="8">Agustus</option>
                                <option value="9">September</option>
                                <option value="10">Oktober</option>
                                <option value="11">November</option>
                                <option value="12">Desember</option>
                            </select>
                            @error('bulan') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group col-md-6">
                            <label>Tahun</label>
                            <select class="form-control" wire:model="tahun">
                                <option value="">-- Pilih -- </option>
                                @for($tahun=date('Y');$tahun<=(date('Y')+2);$tahun++)
                                    <option>{{$tahun}}</option>
                                @endfor
                            </select>
                            @error('tahun') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" wire:model="description"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-info close-modal">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>