<?php

namespace App\Http\Livewire\Home;

use Livewire\Component;
use App\Models\Klaim as ModelKlaim;
use Livewire\WithPagination;

class Klaim extends Component
{
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    public function render()
    {
        $data = ModelKlaim::orderBy('id','desc')
                ->with(['user_member','additional']);
        
        return view('livewire.home.klaim')->with(['data'=>$data->paginate(100)]);
    }
}
