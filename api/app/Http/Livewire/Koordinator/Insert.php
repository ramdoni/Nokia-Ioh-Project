<?php

namespace App\Http\Livewire\Koordinator;

use Livewire\Component;
use App\Models\User;
use App\Models\UserAccess;
use App\Models\UserMember;
use App\Models\Koordinator;
use Illuminate\Support\Facades\Hash;

class Insert extends Component
{
    public $user_id,$data,$referal_code;
    public function render()
    {
        $this->referal_code = 'RFC-000'.\App\Models\User::where('user_access_id',3)->count();
        return view('livewire.koordinator.insert');
    }

    public function updated($propertyName)
    {
        if($propertyName=='user_id') 
            $this->data = UserMember::find($this->user_id);
    }
    
    public function save()
    {
        $this->validate(
            [
                'user_id' => 'required',
                'referal_code' => 'required',
            ],
            [
                'user_id.required' =>'NIK / Nama harus dipilih !'
            ]
        );

        $user = User::find($this->data->user_id);
        if($user){
            $user->user_access_id = 3;
            $user->referal_code = $this->referal_code;
            $user->save();
        }
        
        session()->flash('message-success',__('Data koordinator berhasil disimpan.'));
        
        return redirect()->to('koordinator');
    }
}