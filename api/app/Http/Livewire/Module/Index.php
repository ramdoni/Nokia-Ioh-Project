<?php

namespace App\Http\Livewire\Module;

use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{   
    use WithPagination;

    protected $paginationTheme = 'bootstrap';
    public $keyword;
    public function render()
    {
        $data = \App\Models\Module::orderBy('name','ASC');
        
        if($data) $data = $data->where("name","LIKE","%{$this->keyword}%");

        return view('livewire.module.index')->with(['data'=>$data->paginate(100)]);
    }

    public function delete($id)
    {
        \App\Models\Module::find($id)->delete();
    }
}
