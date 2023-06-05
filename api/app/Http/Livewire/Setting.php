<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;

class Setting extends Component
{
    use WithFileUploads;

    public $logoUrl;
    public $logo;
    public $faviconUrl;
    public $favicon;
    public $message;
    public $company;
    public $email;
    public $phone,$mobile;
    public $website;
    public $address;
    public $pinjaman_jasa=0;

    public function render()
    {
        return view('livewire.setting')->with(['title'=>'General']);
    }

    public function mount()
    {
        $this->company = get_setting('company');
        $this->email = get_setting('email');
        $this->phone = get_setting('phone');
        $this->mobile = get_setting('mobile');
        $this->website = get_setting('website');
        $this->address = get_setting('address');
        $this->logoUrl = get_setting('logo');
        $this->faviconUrl = get_setting('favicon');
        $this->pinjaman_jasa = get_setting('pinjaman_jasa');

    }

    public function updateBasic()
    {
        update_setting('company',$this->company);
        update_setting('email',$this->email);
        update_setting('phone',$this->phone);
        update_setting('mobile',$this->mobile);
        update_setting('website',$this->website);
        update_setting('address',$this->address);
        update_setting('pinjaman_jasa',$this->pinjaman_jasa);
    }

    public function save()
    {
        if($this->logo!=""){
            $this->validate([
                'logo' => 'image:max:1024', // 1Mb Max
            ]);
            $name = 'logo'.date('Ymdhis').'.'.$this->logo->extension();
            $this->logo->storePubliclyAs('public',$name);
    
            update_setting('logo',$name);
        }

        if($this->favicon!=""){
            $this->validate([
                'favicon' => 'image:max:1024', // 1Mb Max
            ]);
            $name = 'favicon'.date('YmdHis').'.'.$this->favicon->extension();
            $this->favicon->storePubliclyAs('public',$name);

            update_setting('favicon',$name);
        }
        session()->flash('message-success',__('Data saved successfully'));

        return redirect()->to('setting');
    }
}