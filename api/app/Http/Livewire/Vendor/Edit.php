<?php

namespace App\Http\Livewire\Vendor;

use Livewire\Component;
use App\Models\Vendor;

class Edit extends Component
{
    public $data;
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
        return view('livewire.vendor.edit')->with(['data'=>$this->data]);
    }

    public function mount($id)
    {
        $this->data = Vendor::find($id);
        $this->pic = $this->data->pic;
        $this->name = $this->data->name;
        $this->email = $this->data->email;
        $this->phone = $this->data->phone;
        $this->address = $this->data->address;
        $this->fax = $this->data->fax;
    }

    public function save(){
        $this->validate();
        
        $this->data->pic = $this->pic;
        $this->data->name = $this->name;
        $this->data->email = $this->email;
        $this->data->phone = $this->phone;
        $this->data->fax = $this->fax;
        $this->data->address = $this->address;
        $this->data->save();

        session()->flash('message-success',__('Data saved successfully'));

        return redirect()->to('vendor');
    }
}
