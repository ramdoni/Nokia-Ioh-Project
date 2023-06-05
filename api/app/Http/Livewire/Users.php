<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\User;

class Users extends Component
{
    public function render()
    {
        $param['data'] = User::all();
        
        return view('livewire.user.index')
                ->layout('layouts.app')
                ->with($param);
    }
}
