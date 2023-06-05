<?php

namespace App\Http\Livewire\Koordinator\Member;

use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    public $keyword,$koordinator_id,$status;
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    public function render()
    {
        $dataMember = \App\Models\UserMember::where('user_id',\Auth::user()->id)->first();
        $data = \App\Models\UserMember::orderBy('id','desc')->where('koordinator_id',$dataMember->id);

        if($this->keyword) $data = $data->where('name','LIKE', '%'.$this->keyword.'%')
                                        ->orWhere('name_kta','LIKE', '%'.$this->keyword.'%')
                                        ->orWhere('email','LIKE', '%'.$this->keyword.'%');
        return view('livewire.koordinator.member.index')
                ->layout('layouts.app')
                ->with(['data'=>$data->paginate(100)]);
    }
}
