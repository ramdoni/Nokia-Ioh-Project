<?php

namespace App\Http\Livewire\Product;

use Livewire\Component;
use App\Models\Product;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    public $keyword;
    public function render()
    {
        $data = Product::orderBy('id','DESC');

        if($this->keyword){
            $data->where('keterangan','LIKE',"%{$this->keyword}%")
                ->orWhere('kode_produksi','LIKE',"%{$this->keyword}%");
        }

        return view('livewire.product.index')->with(['data'=>$data->paginate(200)]);
    }
}
