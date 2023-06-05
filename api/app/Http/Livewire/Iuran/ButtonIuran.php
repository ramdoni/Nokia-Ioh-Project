<?php

namespace App\Http\Livewire\Iuran;

use Livewire\Component;

class ButtonIuran extends Component
{
    protected $listeners = ['check-id'=>'checkId','modal-insert-iuran'=>'modalInsertIuran'];
    
    public $check_id=[];

    public function render()
    {
        return view('livewire.iuran.button-iuran');
    }

    public function checkId($data)
    {
        if($data['status']==1)
            $this->check_id[$data['key']] = $data['key'];
        else
            unset($this->check_id[$data['key']]);
    }

    public function modalInsertIuran()
    {
        if(count($this->check_id)==0){
            $this->emit('error-message', 'Pilih Anggota terlebih dahulu !');
        }else{
           $this->emit('show-insert-iuran',$this->check_id);
        }
    }
}
