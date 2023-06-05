<div>
    @if(isset($data->id))
        <input type="checkbox" value="{{$data->id}}" wire:model="check_id" />
    @endif
</div>
