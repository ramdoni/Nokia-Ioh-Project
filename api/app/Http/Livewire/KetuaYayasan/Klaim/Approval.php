<?php

namespace App\Http\Livewire\KetuaYayasan\Klaim;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\UserAccess;
use Illuminate\Support\Facades\Hash;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Models\UserMember;
use App\Models\Klaim;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class Approval extends Component
{
	use WithFileUploads;
    public $data;
    public $persen;
    protected $listeners = ['approve','reject'];
    public function render()
    {
        return view('livewire.ketua-yayasan.klaim.approval')
                        ->with([
                            'access' => UserAccess::all(),
                            'data' => $this->data
                        ]);
    }

    public function mount($id)
    {
        $this->data = Klaim::find($id);  
        if($this->data->total < 15000000)
        {
            $this->persen = 75;
        }elseif($this->data->total = 15000000)
        {
            $this->persen = 100;
        }   
    }
    
    public function approve()
    {
        $this->data->is_approve_ketua = 2;
        $this->data->tgl_approve_ketua=date('Y-m-d');
        $this->data->save();

        $userMember = \App\Models\UserMember::where('id',$this->data->user_member_id)->first();
        $userMember->status = 4;
        $user = \App\Models\User::where('id',$userMember->user_id)->first();
        if($user->user_access_id = 3)
        {
            $dataKor = \App\Models\UserMember::where('koordinator_id',$this->data->user_member_id)->get();
            foreach ($dataKor as $key => $value) {
                $memberKor = \App\Models\UserMember::where('id',$value->id)->first();
                $memberKor->koordinator_id = 0;
                $memberKor->save();
            }
        }
        $userMember->save();
        session()->flash('message-success',__('Data berhasil di Approve'));
        return redirect()->to('ketua-yayasan');
    }
    public function reject()
    {
        $this->data->is_approve_ketua = 3;
        $this->data->tgl_approve_ketua=date('Y-m-d');
        $this->data->save();

        session()->flash('message-success',__('Data berhasil di Reject'));
        return redirect()->to('ketua-yayasan');
    }

}