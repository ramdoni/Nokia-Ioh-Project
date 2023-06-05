<?php

namespace App\Http\Livewire\Transaksi;

use Livewire\Component;
use App\Models\Transaksi;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    public function render()
    {
        $data = Transaksi::where('is_temp',0)->orderBy('id','DESC');

        return view('livewire.transaksi.index')->with(['data'=>$data->paginate(500)]);
    }
}
