<?php

namespace App\Http\Livewire\Konsinyasi;

use Livewire\Component;
use App\Models\Product;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    public function render()
    {
        $data = Product::where('type','Konsinyasi')->orderBy('id','DESC');

        return view('livewire.konsinyasi.index')->with(['data'=>$data->paginate(300)]);
    }
}
