<?php

namespace App\Http\Livewire\Konsinyasi;

use Livewire\Component;
use App\Models\Product;

class Detail extends Component
{
    public $data,$penjualan=[],$insert_stock=false;
    public $date,$expired_date,$qty,$harga_beli;
    public function render()
    {
        return view('livewire.konsinyasi.detail');
    }

    public function mount(Product $data)
    {
        $this->data = $data;
        $this->date = date('Y-m-d');
        
        if($data->expired_day==1){
            $this->expired_date = date('d/M/Y');
        }else{
            $this->expired_date = date('d/M/Y',strtotime("+".($data->expired_day-1)." Days"));
        }
    }
}
