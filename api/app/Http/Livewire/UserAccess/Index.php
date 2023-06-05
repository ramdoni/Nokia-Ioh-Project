<?php

namespace App\Http\Livewire\UserAccess;

use Livewire\Component;
use App\Models\UserAccess;

class Index extends Component
{
    public $keyword;
    public function render()
    {
        $data = UserAccess::orderBy('id','DESC');

        if($this->keyword!="") $data = $data->where('name','LIKE',"%{$this->keyword}%");
        
        return view('livewire.user-access.index')->with(['data'=>$data->get()]);
    }

    public function delete($id){
        UserAccess::find($id)->delete();
    }
}
