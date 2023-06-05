<?php

namespace App\Http\Livewire\Koordinator;

use Livewire\Component;

class Edit extends Component
{
    public $data,$no_ktp,$name;
    public $email;
    public $password,$confirm;
    public $telepon;
    public $address;
    public $message;
    protected $rules = [
        'name' => 'required|string',
        'email' => 'required|email',
        'telepon' => 'required',
        //'password' => 'min:6|required|required_with:confirm|same:confirm',
        //'confirm' => 'min:6|required',
    ];

    public function render()
    {
        return view('livewire.koordinator.edit');
    }
    public function mount($id)
    {
        $this->data = \App\Models\Koordinator::find($id);
        $this->name = $this->data->name;
        $this->email = $this->data->email;
        $this->telepon = $this->data->telepon;
        $this->address = $this->data->address;
        $this->no_ktp = $this->data->no_ktp;
    }
    public function save(){
        $this->validate();
        $user = \App\Models\User::find($this->data->user_id);
        if($user){
            $user->name = $this->name;
            $user->email = $this->email;
            $user->telepon = $this->telepon;
            $user->address = $this->address;
            $user->save();
        }

        $this->data->no_ktp = $this->no_ktp;
        $this->data->name = $this->name;
        $this->data->email = $this->email;
        $this->data->telepon = $this->telepon;
        $this->data->address = $this->address;
        $this->data->save();
        session()->flash('message-success',__('Data saved successfully'));
        return redirect()->to('koordinator');
    }
}
