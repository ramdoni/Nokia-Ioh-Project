<?php

namespace App\Http\Livewire\KetuaYayasan\Member;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\UserMember;

class Index extends Component
{
    public $keyword,$is_approve;
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    public function render()
    {
        $data = UserMember::orderBy('id','desc');

        if($this->keyword) $data = $data->where('name','LIKE', '%'.$this->keyword.'%')
                                        ->orWhere('name_kta','LIKE', '%'.$this->keyword.'%')
                                        ->orWhere('email','LIKE', '%'.$this->keyword.'%');
        if($this->is_approve) $data = $data->where('status',$this->is_approve);
        return view('livewire.ketua-yayasan.member.index')
                ->with(['data'=>$data->paginate(100)]);
    }
}