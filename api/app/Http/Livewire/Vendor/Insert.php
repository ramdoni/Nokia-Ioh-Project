<?php

namespace App\Http\Livewire\Vendor;

use Livewire\Component;
use App\Models\Vendor;

class Insert extends Component
{
    public $pic;
    public $name;
    public $email;
    public $phone;
    public $address;
    public $fax;
    public $message;

    protected $rules = [
        'pic' => 'required|string',
        'name' => 'required|string',
        'email' => 'required|email|unique:users',
        'phone' => 'required',
        'address' => 'required',
    ];

    public function render()
    {
        return view('livewire.vendor.insert');
    }

    public function save(){
        $this->validate();
        
        $data = new Vendor();
        $data->pic = $this->pic;
        $data->name = $this->name;
        $data->email = $this->email;
        $data->phone = $this->phone;
        $data->fax = $this->fax;
        $data->address = $this->address;
        $data->save();

        session()->flash('message-success',__('Data saved successfully'));

        return redirect()->to('vendor');
    }
}
