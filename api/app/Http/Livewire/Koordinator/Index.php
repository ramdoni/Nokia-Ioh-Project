<?php

namespace App\Http\Livewire\Koordinator;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\UserMember;

class Index extends Component
{
    public $keyword;
    public $user_access_id;
    public $active_id;
    
    use WithPagination;
    
    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        $data = UserMember::select(["user_member.no_anggota_platinum","user_member.id","user_member.user_id","user_member.Id_Ktp","user_member.name","user_member.phone_number","user_member.email","user_member.address","user_member.status"])
                                ->join('users','users.id','=','user_member.user_id')->where('users.user_access_id',3)
                                ->orderBy('user_member.name','ASC');
        
        if($this->keyword){
            $data->where(function($table){
                foreach(\Illuminate\Support\Facades\Schema::getColumnListing('user_member') as $column){
                    $table->orWhere("user_member.".$column,'LIKE',"%{$this->keyword}%");
                }
            });
        }

        return view('livewire.koordinator.index')->with(['data'=>$data->paginate(100)]);
    }
}