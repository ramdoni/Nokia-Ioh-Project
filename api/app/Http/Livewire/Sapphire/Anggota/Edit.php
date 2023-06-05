<?php

namespace App\Http\Livewire\Sapphire\Anggota;

use Livewire\Component;
use App\Models\UserMember;

class Edit extends Component
{
    public $data;
    public function render()
    {
        return view('livewire.sapphire.anggota.edit');
    }

    public function mount(UserMember $id)
    {
        $this->data = $id;
    }
}