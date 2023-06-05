<?php

namespace App\Http\Livewire\Klaim;

use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;
    public $keyword,$coa_group_id;
    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        $data = \App\Models\Klaim::orderBy('id','DESC')->where(['status'=>1]);

        return view('livewire.klaim.index')->with(['data'=>$data->paginate(50)]);
    }
}
