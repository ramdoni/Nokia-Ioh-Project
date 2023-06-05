<?php

namespace App\Http\Livewire\Iuran;

use Livewire\Component;

class CheckAll extends Component
{
    public $check_all_ = false;

    public function render()
    {
        return view('livewire.iuran.check-all');
    }

    public function check_all()
    {
        if($this->check_all_==false)
            $this->check_all_ = true;
        else
            $this->check_all_ = false;

        $this->emit('check-all',$this->check_all_);
    }
}
