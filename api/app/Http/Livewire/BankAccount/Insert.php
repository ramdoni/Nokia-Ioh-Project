<?php

namespace App\Http\Livewire\BankAccount;

use Livewire\Component;

class Insert extends Component
{
    public $owner,$bank,$no_rekening,$cabang;
    public function render()
    {
        return view('livewire.bank-account.insert');
    }

    public function save()
    {
        $this->validate([
            'owner'=>'required',
            'bank'=>'required',
            'no_rekening'=>'required',
            'cabang'=>'required',
        ]);
        
        $data = new \App\Models\BankAccount();
        $data->owner = $this->owner;
        $data->bank = $this->bank;
        $data->no_rekening = $this->no_rekening;
        $data->cabang = $this->cabang;
        $data->save();
        
        session()->flash('message-success',__('Data saved successfully'));

        return redirect()->to('bank-account');
    }
}
