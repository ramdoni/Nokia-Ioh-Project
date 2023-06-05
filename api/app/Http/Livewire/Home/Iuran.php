<?php

namespace App\Http\Livewire\Home;

use Livewire\Component;
use App\Models\Iuran as IuranModel;
use Livewire\WithPagination;

class Iuran extends Component
{
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    public function render()
    {
        $data = IuranModel::with(['user_member','bank_account'])
                        ->orderBy('id','desc');

        return view('livewire.home.iuran')->with(['data'=>$data->paginate(100)]);
    }
}
