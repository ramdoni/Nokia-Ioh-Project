<?php

namespace App\Http\Livewire\Klaim;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\Klaim;
use App\Models\KlaimAdditional;

class AdditionalIndex extends Component
{
    use WithPagination;
    public $keyword,$coa_group_id,$klaim;
    protected $paginationTheme = 'bootstrap';
    public $selected_id, $id_klaim;

    public function mount(Klaim $klaim)
    {
        $this->klaim = $klaim;
    }

    public function render()
    {
        $data = $this->klaim->additional;
          
        return view('livewire.klaim.additionalindex')->with(['data'=>$data]);
    }  
}
