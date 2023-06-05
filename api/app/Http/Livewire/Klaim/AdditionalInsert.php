<?php

namespace App\Http\Livewire\Klaim;

use App\Models\UserAccess;
use Illuminate\Support\Facades\Hash;
use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Models\UserMember;
use Illuminate\Support\Str;
use App\Models\Klaim;
use App\Models\KlaimAdditional;

class AdditionalInsert extends Component
{
    public $data;
    public $name;
    public $selected_id;
    public $klaim;
    public $nominal, $deskripsi;

    public function render()
    {
        return view('livewire.klaim.additionalinsert');
    }
    public function mount(Klaim $klaim)
    {
        $this->klaim = $klaim;
        $this->name = $this->klaim->user_member->name;
    }
    public function save()
    {
    	$this->validate([
        	'nominal'=> 'required',
            'deskripsi'=> 'required'
        ]);

        
        $klaimAdditional = new \App\Models\KlaimAdditional();
        $klaimAdditional->id_klaim = $this->klaim->id;
        $klaimAdditional->nominal = replace_idr($this->nominal);
        $klaimAdditional->deskripsi = $this->deskripsi;
        $klaimAdditional->save();

        session()->flash('message-success',__('Data Claim Additional berhasil disimpan'));
		return redirect()->route('klaim.additionalindex', ['klaim' => $this->klaim]);
    }
}
