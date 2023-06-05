<?php

namespace App\Http\Livewire\Koordinator\Iuran;


use App\Models\UserAccess;
use Illuminate\Support\Facades\Hash;
use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Models\UserMember;
use Illuminate\Support\Str;

class Index extends Component
{
    use WithFileUploads;
    
    public function render()
    {
        //tabel iuran menyimpan user_member_id,
        // relasi tabel user_member ke table user_id
        //relasi user_id ke Auth user id
        $idMember = $data = \App\Models\UserMember::where('user_id',\Auth::user()->id)->first();

        $data = \App\Models\Iuran::where('user_member_id',$idMember->id)->orderBy('id','DESC');
        return view('livewire.Koordinator.iuran.index')->with(['data'=>$data->paginate(50)]);
    }
}
