<div class="editable">
    @if($is_edit)
        @if($field=='agama')
            <select class="form-control" wire:model="value" style="height:30px;">
                <option value=""> --- Agama --- </option>
                <option>Islam</option> 
                <option>Kristen</option> 
                <option>Katolik</option> 
                <option>Hindu</option> 
                <option>Buddha</option> 
                <option>Konghucu</option> 
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
        <a href="javascript:void(0)" wire:click="$set('is_edit',false)"><i class="fa fa-close text-danger"></i></a>
        <a href="javascript:void(0)" wire:click="save"><i class="fa fa-save text-success"></i></a>
    @else
        @if($field=='plafond' || $field=='simpanan_ku' || $field=='plafond_digunakan' || $field=="shu" || $field=='amount' || $field=='simpanan_pokok' || $field=='simpanan_wajib' || $field=='simpanan_sukarela' || $field=='simpanan_lain_lain' || $field=='pinjaman_uang' || $field=='pinjaman_astra' || $field=='pinjaman_toko'|| $field=='pinjaman_motor')
            <a href="javascript:void(0)" wire:click="$set('is_edit',true)">{!!$value?format_idr($value):'<i style="color:grey">-</i>'!!}</a>
        @else
            <a href="javascript:void(0)" wire:click="$set('is_edit',true)">{!!$value?$value:'<i style="color:grey">-</i>'!!}</a>
        @endif
    @endif
</div>
