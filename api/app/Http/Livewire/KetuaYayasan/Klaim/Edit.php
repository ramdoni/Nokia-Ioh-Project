<?php

namespace App\Http\Livewire\KetuaYayasan\Klaim;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\UserAccess;
use Illuminate\Support\Facades\Hash;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Models\UserMember;
use App\Models\Klaim;
use Illuminate\Support\Str;

class Edit extends Component
{
	use WithFileUploads;
    public $data;
    public $persen;
    public function render()
    {
        return view('livewire.ketua-yayasan.klaim.edit')
                        ->with([
                            'access' => UserAccess::all(),
                            'data' => $this->data
                        ]);
    }

    public function mount($id)
    {
        $this->data = Klaim::find($id); 
        if($this->data->total < 15000000)
        {
            $this->persen = 75;
        }elseif($this->data->total = 15000000)
        {
            $this->persen = 100;
        }  
    }
}