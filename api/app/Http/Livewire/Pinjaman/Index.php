<?php

namespace App\Http\Livewire\Pinjaman;

use Livewire\Component;
use App\Models\Pinjaman;

class Index extends Component
{
    public function render()
    {
        $data = Pinjaman::orderBy('id','DESC');

        return view('livewire.pinjaman.index')->with(['data'=>$data->paginate(100)]);
    }
}
