<?php

namespace App\Http\Livewire\Product;

use Livewire\Component;
use App\Models\Product;
use App\Models\ProductStock;
use App\Models\TransaksiItem;

class Detail extends Component
{
    public $data,$penjualan,$pembelian;
    protected $listeners = ['reload-page'=>'$refresh'];
    public function render()
    {
        return view('livewire.product.detail');
    }

    public function mount(Product $data)
    {
        $this->data = $data;
        $this->penjualan = TransaksiItem::where('product_id',$data->id)->get();
        if($this->data->ppn==0) {
            $this->data->ppn = @$this->data->harga_jual * 0.11;
            $this->data->save();
        }
        $this->pembelian = ProductStock::where('product_id',$this->data->id)->get();
    }
}
