<?php

namespace App\Http\Livewire\Klaim;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\KlaimAdditional;
class AdditionalEdit  extends Component 
{
	public $data;
	public $name, $nominal, $deskripsi;
    protected $listeners = ['edit' => 'mount_'];
	protected $rules = [
        'nominal' => 'required',
        'deskripsi' => 'required'
    ];

    public function render()
    {
        return view('livewire.klaim.additionaledit');
    }
    public function mount_(KlaimAdditional $klaim)
    {
        $this->data = $klaim;
        $dataKlaim = \App\Models\Klaim::find($this->data->id_klaim);
        $this->nominal = format_idr($this->data->nominal);
        $this->deskripsi = $this->data->deskripsi;
    }

    public function save(){
        $this->validate();
        
        $this->data->nominal = replace_idr($this->nominal);
        $this->data->deskripsi = $this->deskripsi;
        $this->data->save();

        session()->flash('message-success',__('Data updated successfully'));
        return redirect()->route('klaim.additionalindex', ['klaim' => $this->data->id_klaim]);
    }
}
