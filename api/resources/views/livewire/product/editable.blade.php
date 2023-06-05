<div class="editable">
    @if($is_edit)
        @if($msg_error)
            <span class="text-danger">{{$msg_error}}</span>
        @endif
        @if($field=='product_uom_id')
            <select class="form-control" wire:model="value" style="height:30px;">
                <option value=""> --- UOM --- </option>
                @foreach(\App\Models\ProductUom::get() as $item)
                    <option value="{{$item->id}}">{{$item->name}}</option>
                @endforeach 
            </select>
        @elseif($field=='jenis_kelamin')
            <select class="form-control" wire:model="value" style="height:30px;">
                <option value=""> --- Jenis Kelamin --- </option>
                @foreach(config('vars.jenis_kelamin') as $i)
                    <option>{{$i}}</option> 
                @endforeach
            </select>
        @elseif($field=='tanggal_lahir')
            <input type="date" class="form-control" style="height:30px;" wire:model="value" wire:keydown.enter="save" placeholder="{{$field}}"  />
        @else
            <input type="text" class="form-control" style="height:30px;" wire:model="value" wire:keydown.enter="save" placeholder="{{$field}}"  />
        @endif
        <a href="javascript:void(0)" wire:loading.remove wire:target="save" wire:click="$set('is_edit',false)"><i class="fa fa-close text-danger"></i></a>
        <a href="javascript:void(0)" wire:loading.remove wire:target="save" wire:click="save"><i class="fa fa-save text-success"></i></a>
        <!-- @if($field=='kode_produksi')
            <p>
                Jenis barcode yang sering kali banyak di Indonesia yaitu EAN 13, EAN 13 ini adalah kode barcode yang sampai 13 digit.<br /> 3 kode barcode awal menunjukkan kode negara Indonesia yaitu 889. 4 angka selanjutnya meunjukkan kode barcode perusahaan. Dan 5 angka secara berurut menunjukkan kode produk dan juga angka terakhir merupakan validasi / cek digit.
            </p>
        @endif -->
    @else
        @if($field=='plafond' || $field=='simpanan_ku' || $field=='plafond_digunakan' || $field=="shu" || $field=='amount' || $field=='simpanan_pokok' || $field=='simpanan_wajib' || $field=='simpanan_sukarela' || $field=='simpanan_lain_lain' || $field=='pinjaman_uang' || $field=='pinjaman_astra' || $field=='pinjaman_toko'|| $field=='pinjaman_motor')
            <a href="javascript:void(0)" wire:click="$set('is_edit',true)">{!!$value?format_idr($value):'<i style="color:grey">-</i>'!!}</a>
        @else
            <a href="javascript:void(0)" wire:click="$set('is_edit',true)">{!!$value?$value:'<i style="color:grey">edit</i>'!!}</a>
            @if($field =='kode_produksi' and strlen($value)>10 and is_numeric($value))
                <a href="{{route('transaksi.cetak-barcode',$value)}}" style="float:right;color:red" target="_blank"><i class="fa fa-barcode"></i></a>
            @endif
        @endif
    @endif
    <span wire:loading wire:target="save">
        <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
        <span class="sr-only">{{ __('Loading...') }}</span>
    </span>
</div>
