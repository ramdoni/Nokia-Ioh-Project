<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;
use App\Models\UserMember;

class Editable extends Component
{
    public $data,$field,$is_edit=false,$value;
    public function render()
    {
        return view('livewire.user-member.editable');
    }

    public function mount($field,$data,$id)
    {
        $this->field = $field;
        $this->value = $data;
        $this->data = $id;
    }

    public function save()
    {
        $field = $this->field;
        $data = UserMember::find($this->data);

        // Sinkron Coopzone
        $response = sinkronCoopzone([
            'url'=>'koperasi/user/edit',
            'field'=>$field,
            'value'=>$this->value,
            'no_anggota'=>$data->no_anggota_platinum
        ]);

        $data->$field = $this->value;
        $data->save();

        $this->is_edit = false;
    }
}
