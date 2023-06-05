<?php

namespace App\Http\Livewire\KetuaYayasan\Klaim;

use Livewire\Component;
use Livewire\WithPagination;

class Additional extends Component
{
	use WithPagination;
    public $keyword,$coa_group_id;
    protected $paginationTheme = 'bootstrap';
    public $selected_id, $id_klaim;

    public function mount($id)
    {
        $this->selected_id = $id;
    }
    public function render()
    {
        $data = \App\Models\KlaimAdditional::where('id_klaim',$this->selected_id)->orderBy('id','ASC');
        return view('livewire.ketua-yayasan.klaim.additional')->with(['data'=>$data->paginate(50)]);
    }  
}