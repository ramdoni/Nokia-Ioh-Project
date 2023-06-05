<?php

namespace App\Http\Livewire\Product;

use Livewire\Component;
use App\Models\Product;

class Editable extends Component
{
    public $data,$field,$is_edit=false,$value,$msg_error;
    public function render()
    {
        return view('livewire.product.editable');
    }

    public function mount($field,$data,$id)
    {
        $this->field = $field;
        $this->value = $data;
        $this->data = $id;
    }

    public function save()
    {
        $this->reset('msg_error');
        $field = $this->field;
        if($field=='kode_produksi' and strlen($this->value)<10){
            $this->msg_error = "Kode barcode minimal harus 10 digit";
            return;
        }
        $data = Product::find($this->data);

        // Sinkron Coopzone
        // $response = sinkronCoopzone([
        //     'url'=>'koperasi/user/edit',
        //     'field'=>$field,
        //     'value'=>$this->value,
        //     'no_anggota'=>$data->no_anggota_platinum
        // ]);

        $data->$field = $this->value;
        $data->save();

        if($field=='product_uom_id') $this->value = isset($data->uom->name) ? $data->uom->name : '';   

        $this->is_edit = false;
    }
}
