<?php

namespace App\Http\Livewire\KetuaYayasan\Klaim;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\Klaim;

class Index extends Component
{
    public $keyword,$is_approve;
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    
    public function render()
    {
        $data = Klaim::orderBy('id','desc')->where('status',1);

        if($this->keyword) $data = $data->where(function($table){
                                        $table->where('name','LIKE', '%'.$this->keyword.'%')
                                        ->orWhere('name_kta','LIKE', '%'.$this->keyword.'%')
                                        ->orWhere('email','LIKE', '%'.$this->keyword.'%');
                                    });
        
        if($this->is_approve) $data = $data->where('status',$this->is_approve);
        
        return view('livewire.ketua-yayasan.klaim.index')
                ->with(['data'=>$data->paginate(100)]);
    }
}