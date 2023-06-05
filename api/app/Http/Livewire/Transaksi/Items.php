<?php

namespace App\Http\Livewire\Transaksi;

use Livewire\Component;
use App\Models\Transaksi;
use App\Models\TransaksiItem;

class Items extends Component
{
    public $data;
    public function render()
    {
        return view('livewire.transaksi.items');
    }

    public function mount(Transaksi $data)
    {
        $this->data = $data;
    }
}
