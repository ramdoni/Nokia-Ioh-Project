<?php

namespace App\Http\Livewire\Sapphire\Anggota;

use Livewire\Component;
use App\Models\UserMember;

class Approval extends Component
{
    public $data;

    public function render()
    {
        return view('livewire.sapphire.anggota.approval');
    }

    public function mount(UserMember $id)
    {
        $this->data = $id;
    }
}
