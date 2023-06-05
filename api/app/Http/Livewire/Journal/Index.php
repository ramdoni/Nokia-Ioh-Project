<?php

namespace App\Http\Livewire\Journal;

use Livewire\Component;

class Index extends Component
{
    public $keyword;
    public function render()
    {
        $data = \App\Models\Journal::orderBy('id','DESC');
        
        return view('livewire.journal.index')->with(['data'=>$data->paginate(50)]);
    }
}
