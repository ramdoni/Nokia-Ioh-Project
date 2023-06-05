<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;
use App\Models\UserMember;
use App\Models\LogActivity;

class DetailLog extends Component
{
    public $data;
    public function render()
    {
        return view('livewire.user-member.detail-log');
    }

    public function mount(UserMember $data)
    {
        $this->data = $data;
    }
}
