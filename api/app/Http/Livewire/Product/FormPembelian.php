<?php

namespace App\Http\Livewire\Product;

use Livewire\Component;
use App\Models\Product;
use App\Models\ProductStock;

class FormPembelian extends Component
{
    public $product,$requester,$pr_number,$pr_date,$po_number,$po_date,$do_number,$receipt_date,$price,$unit,$expired_date;
    public $total,$total_margin;
    public function render()
    {
        return view('livewire.product.form-pembelian');
    }

    public function mount(Product $data)
    {
        $this->product = $data; 
    }

    public function updated($propertyName)
    {
        if($this->price){
            $this->total = $this->price * $this->unit;
            $this->total_margin = @($this->product->harga_jual - $this->price) * $this->unit;
        }
    }

    public function save()
    {
        $this->validate([
            'requester' => 'required',
            'pr_number' => 'required',
            'pr_date' => 'required',
            'po_number' => 'required',
            'po_date' => 'required',
            'do_number' => 'required',
            'receipt_date' => 'required',
            'price' => 'required',
            'unit' => 'required',
            'expired_date' => 'required'
        ]);

        $data = new ProductStock();
        $data->product_id = $this->product->id;
        $data->requester = $this->requester;
        $data->pr_number = $this->pr_number;
        $data->pr_date = $this->pr_date;
        $data->po_number = $this->po_number;
        $data->po_date = $this->po_date;
        $data->do_number = $this->do_number;
        $data->receipt_date = $this->receipt_date;
        $data->price = $this->price;
        $data->qty = $this->unit;
        $data->expired_date = $this->expired_date;
        $data->total_margin = $this->total_margin;
        $data->total = $this->total;
        $data->save();

        $stock = ProductStock::where('product_id',$this->product->id)->get()->sum('qty');
        $qty_moving = TransaksiItem::join('transaksi','transaksi.id','=','transaksi_item.transaksi_id')
                            ->where('transaksi_item.product_id',$this->product->id)
                            ->where('transaksi.status',1)
                            ->where('transaksi.is_temp',0)->get()->sum('qty_moving');

        $this->product->qty = $stock;
        $this->qty_moving = $qty_moving;
        $this->product->save();

        $this->reset('requester','pr_number','pr_date','po_number','po_date','do_number','receipt_date','price','unit','expired_date');
        $this->emit('reload-page');
        $this->emit('close-modal');
    }
}
