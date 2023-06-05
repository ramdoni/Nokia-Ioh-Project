<?php

namespace App\Http\Livewire\Klaim;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\Klaim;

class Edit extends Component
{
   	public $data;
   	   
    public function render()
    {
        return view('livewire.klaim.edit');
    }
    
    public function mount(Klaim $id)
    {
        $this->data = $id;
    }
}
