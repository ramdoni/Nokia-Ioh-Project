<?php

namespace App\Http\Livewire\Kasir;

use Livewire\Component;
use App\Models\UserKasir;

class EndWork extends Component
{
    public $end_cash;
    public function render()
    {
        return view('livewire.kasir.end-work');
    }
    public function save()
    {
        $this->validate([
            'end_cash'=>'required'
        ]);

        $data = UserKasir::whereDate('start_work_date',date('Y-m-d'))->where('user_id',\Auth::user()->id)->where('status',0)->first();
        if($data){
            $data->end_cash = replace_idr($this->end_cash);
            $data->end_work_date = date("Y-m-d H:i:s");
            $data->status = 1;
            $data->save();
        }

        \Auth::logout();
        \Session::flush();
        
        return $this->redirect('/');
    }
}
