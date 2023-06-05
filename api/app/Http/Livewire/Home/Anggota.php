<?php

namespace App\Http\Livewire\Home;

use Livewire\Component;
use App\Models\UserMember;
use Livewire\WithPagination;

class Anggota extends Component
{
    public $keyword,$koordinator_id,$status;
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    public function render()
    {
        $data = UserMember::select('user_member.*')
                        ->with(['koordinatorUser'])
                        ->join('users','users.id','=','user_member.user_id')
                        ->orderBy('user_member.no_anggota_platinum','desc')
                        ->where('user_member.no_anggota_platinum','<>','900000000')
                        ->where('users.user_access_id',4);;

        if($this->keyword){
            $data->where(function($table){
                foreach(\Illuminate\Support\Facades\Schema::getColumnListing('user_member') as $column){
                    $table->orWhere("user_member.".$column,'LIKE',"%{$this->keyword}%");
                }
            });
        }
        if($this->koordinator_id) {
            $dataMember = UserMember::where('user_id',$this->koordinator_id)->first();
            $data = $data->where('user_member.koordinator_id',$dataMember->id);
        }
        if($this->status) {
            $data = $data->where('user_member.status',$this->status);
        }
        return view('livewire.home.anggota')->with(['data'=>$data->paginate(100)]);
    }
}
