<?php

namespace App\Http\Livewire\Koordinator;

use Livewire\Component;

class Delete extends Component
{
    public $active_id;
    protected $listeners = ['setDelete'];
    public function render()
    {
        return view('livewire.koordinator.delete');
    }
    public function setDelete($id)
    {
        $this->active_id = $id;
    }
    public function delete()
    {
        $data = \App\Models\Koordinator::find($this->active_id);
        $user = \App\Models\User::find($data->user_id);
        if($user) $user->delete();
        if($data) $data->delete();
        session()->flash('message-success',__('Data deleted successfully'));
        return redirect()->route('koordinator.index');
    }
}