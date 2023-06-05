<?php

namespace App\Http\Livewire\Iuran;

use Livewire\Component;
use App\Models\Iuran;

class CheckId extends Component
{
    public $data,$check_id;

    protected $listeners = ['check-all'=>'checkAll'];

    public function render()
    {
        return view('livewire.iuran.check-id');
    }

    public function mount($data)
    {
        $iuran = Iuran::find($data);
        if($iuran) $this->data = $iuran;
    }

    public function checkAll($cond)
    {
        if($cond and isset($this->data->id)){
            $this->check_id = $this->data->id;
        } else {
            $this->check_id = false;
        }
            
        $this->updated('check_id');
    }

    public function updated($propertyName)
    {
        if($this->$propertyName and isset($this->data->id))
            $this->emit('check-id', ['status'=>1,'key'=>$this->data->id]);
        else
            $this->emit('check-id', ['status'=>0,'key'=>$this->data->id]);
    }
}
