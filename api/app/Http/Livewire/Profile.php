<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class Profile extends Component
{
    use WithFileUploads;

    public $name,$signature;
    public $last_name;
    public $email;
    public $telepon;
    public $photo;
    public $profile_photo_path;
    public $user;
    public $address;
    public $current_password;
    public $new_password;
    public $confirm_new_password;
    public $message;
    public function render()
    {
        return view('livewire.profile')->with(['profile_photo_path'=>$this->profile_photo_path]);
    }

    public function mount()
    {
        $this->name = \Auth::user()->name;
        $this->email = \Auth::user()->email;
        $this->telepon = \Auth::user()->telepon;
        $this->profile_photo_path = \Auth::user()->profile_photo_path;
        $this->signature = \Auth::user()->signature;
        $this->address = \Auth::user()->address;
        $this->user = User::where('id',\Auth::user()->id)->first();
    }
    
    public function saveBasicInformation()
    {
        $this->user->name = $this->name;
        $this->user->email = $this->email;
        $this->user->address = $this->address;
        $this->user->save();

        session()->flash('message-success',__('Data saved successfully'));
    }

    public function saveChangePassword()
    {
        $this->validate([
            'current_password' => 'required|password',
            'new_password' => 'required|string|min:8',
            'confirm_new_password'=>'required|same:new_password'
        ]);

        $this->user->password = Hash::make($this->new_password);
        $this->user->save();
        
        session()->flash('message-success',__('Password saved successfully'));

        return redirect()->to('profile');
    }

    public function autoSavePhoto()
    {
        $this->validate([
            'photo' => 'image:max:1024', // 1Mb Max
        ]);
        $name = date('dmYHis').'.'.$this->photo->extension();
        $this->photo->storePubliclyAs('public/photo/'.\Auth::user()->id,$name);

        $user = User::where('id',\Auth::user()->id)->first();
        $user->profile_photo_path = '/storage/photo/'.\Auth::user()->id.'/'.$name;
        $user->save();
        session()->flash('message-success',__('Data saved successfully'));

        return redirect()->to('profile');
    }
    public function saveSignature()
    {
        $this->validate([
            'signature' => 'image:max:1024', // 1Mb Max
        ]);
        $name = date('dmYHis').'.'.$this->signature->extension();
        $this->signature->storePubliclyAs('public/signature/'.\Auth::user()->id,$name);
        $user = User::where('id',\Auth::user()->id)->first();
        $user->signature = '/storage/signature/'.\Auth::user()->id.'/'.$name;
        $user->save();
        session()->flash('message-success',__('Signature saved successfully'));

        return redirect()->to('profile');
    }
}
