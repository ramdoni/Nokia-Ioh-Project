<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Home extends Component
{
    public function render()
    { 
        /**
         * if kasir
         */
        if(\Auth::user()->user_access_id==6) redirect()->route('kasir.index');
        
        return view('livewire.home');
    }
}