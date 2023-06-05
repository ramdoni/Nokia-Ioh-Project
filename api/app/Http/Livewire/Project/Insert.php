<?php

namespace App\Http\Livewire\Project;

use Livewire\Component;
use App\Models\Project;
use App\Models\Customer;

class Insert extends Component
{
    public $customer_id;
    public $background_of_opportunity;
    public $contract_value;
    public $date_receiving_info;
    public $status;

    protected $rules = [ 
        'customer_id' => 'required|string',
        'background_of_opportunity' => 'required',
        'date_receiving_info' => 'required',
        'status' => 'required'
    ];

    public function render()
    {
        $customer = Customer::orderBy('name','ASC')->get();

        return view('livewire.project.insert')->with(['customer'=>$customer]);
    }

    public function save(){
        $this->validate();
        
        $data = new Project();
        $data->customer_id = $this->customer_id;
        $data->background_of_opportunity = $this->background_of_opportunity;
        $data->contract_value = $this->contract_value;
        $data->date_receiving_info = date('Y-m-d',strtotime($this->date_receiving_info));
        $data->status = $this->status;
        $data->save();

        session()->flash('message-success','Project saved.');

        return redirect()->to('project');
    }
}
