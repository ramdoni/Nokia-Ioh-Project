<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\Auth;

class Privacy extends Component
{
    public function render()
    {
        return view('livewire.privacy')
                ->layout('layouts.auth');
    }
}