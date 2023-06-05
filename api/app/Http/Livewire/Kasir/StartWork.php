<?php

namespace App\Http\Livewire\Kasir;

use Livewire\Component;
use App\Models\UserKasir;

class StartWork extends Component
{
    public $starting_cash;
    public function render()
    {
        return view('livewire.kasir.start-work');
    }

    public function save()
    {
        $this->validate([
            'starting_cash'=>'required'
        ]);

        $data = new UserKasir();
        $data->user_id = \Auth::user()->id;
        $data->starting_cash = replace_idr($this->starting_cash);
        $data->start_work_date = date("Y-m-d H:i:s");
        $data->status = 0;
        $data->save();

        $this->emit('close-modal-start-work');
    }
}
