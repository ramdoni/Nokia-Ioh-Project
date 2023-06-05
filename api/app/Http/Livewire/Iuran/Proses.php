<?php

namespace App\Http\Livewire\Iuran;

use Livewire\Component;
use Livewire\WithPagination;

class Proses extends Component
{
    use WithPagination;
    
    public $keyword,$coa_group_id, $payment_date;
    
    protected $paginationTheme = 'bootstrap';

	public $data;

    protected $listeners = ['event-approve'=>'approve','event-reject'=>'reject'];

    public function render()
    {
        return view('livewire.iuran.proses');
    }
    
    public function mount($id)
    {
        $this->data = \App\Models\Iuran::find($id);
        $this->payment_date = $this->data->payment_date;
    }
    
    public function approve()
    {
        $this->data->status=2;
        $this->data->payment_date = $this->payment_date;
        $this->data->save();

        session()->flash('message-success',__('Data  berhasil di Konfirmasi'));
        return redirect()->to('iuran');
    }

    public function reject()
    {
        $this->data->status=3;
        $this->data->payment_date = $this->payment_date;
        $this->data->save();

        session()->flash('message-success',__('Data berhasil di Reject'));
        return redirect()->to('iuran');
    }
}
