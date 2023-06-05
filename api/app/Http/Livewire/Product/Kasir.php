<?php

namespace App\Http\Livewire\Product;

use Livewire\Component;
use App\Models\Product;

class Kasir extends Component
{
    public function render()
    {
        $data = Product::orderBy('id','DESC');

        return view('livewire.product.kasir')->with(['data'=>$data->paginate(300)]);
    }
}
