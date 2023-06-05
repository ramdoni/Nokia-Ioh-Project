<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;
use App\Models\UserMember;

class Coopay extends Component
{
    public $data;
    public function render()
    {
        return view('livewire.user-member.coopay');
    }

    public function mount(UserMember $data)
    {
        $this->data = $data;
    }
}
