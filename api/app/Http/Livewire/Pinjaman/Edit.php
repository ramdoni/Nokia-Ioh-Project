<?php

namespace App\Http\Livewire\Pinjaman;

use Livewire\Component;
use App\Models\Pinjaman;
use App\Models\PinjamanItem;

class Edit extends Component
{
    public $data,$selected_id,$payment_date,$metode_pembayaran_;
    protected $listeners = ['reload'=>'$refresh'];
    public function render()
    {
        return view('livewire.pinjaman.edit');
    }

    public function mount(Pinjaman $data)
    {
        $this->data = $data;
    }

    public function lunas()
    {
        $this->validate(
            [
                'payment_date'=>'required',
                'metode_pembayaran_'=>'required'
            ]);

        PinjamanItem::find($this->selected_id)->update([
            'status'=>1,
            'payment_date'=>$this->payment_date,
            'metode_pembayaran'=>$this->metode_pembayaran_]);

        $this->emit('reload');
    }
}
