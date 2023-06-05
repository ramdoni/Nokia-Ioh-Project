<?php

namespace App\Http\Livewire\Module;

use Livewire\Component;

class Form extends Component
{
    public $item_name;
    public $item_link;
    public $type;
    public $data;
    public $icon;

    public function render()
    {
        return view('livewire.module.form');
    }

    public function mount($data)
    {
        $this->data = $data;
    }

    public function saveItems()
    {
        $this->validate([
            'item_name'=>'required',
            'item_link'=>'required',
            'type'=>'required',
            'icon'=>'required'
        ]);

        $data = new \App\Models\ModulesItem();
        $data->module_id = $this->data->id;
        $data->name = $this->item_name;
        $data->link = $this->item_link;
        $data->type = 1;
        $data->icon = $this->icon;
        $data->status = 1;
        $data->save();

        session()->flash('message-success',__('Data saved successfully'));
        
        $this->emitTo('module.edit','toggleModal');
        $this->reset('item_name','item_link','type','icon');
    }
}
