<?php

namespace App\Http\Livewire\Module;

use Livewire\Component;

class FormFunction extends Component
{
    public $name;
    public $link;
    public $icon;
    public $parent_id;
    public $data;
    
    public function render()
    {
        return view('livewire.module.form-function');
    }

    public function mount($data,$parent_id)
    {
        $this->data = $data;
        $this->parent_id = $parent_id;
    }
    
    public function save()
    {
        $this->validate([
            'name'=>'required',
            'icon'=>'required',
        ]);

        $data = new \App\Models\ModulesItem();
        $data->module_id = $this->data->id;
        $data->name = $this->name;
        $data->link = $this->link;
        $data->type = 2;
        $data->icon = $this->icon;
        $data->parent_id = $this->parent_id;
        $data->status = 1;
        $data->save();

        session()->flash('message-success',__('Data saved successfully'));
        
        //$this->emitTo('module.edit','toggleModal');
        $this->reset('name','link','icon');
    }
}
