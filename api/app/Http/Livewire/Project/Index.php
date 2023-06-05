<?php

namespace App\Http\Livewire\Project;

use Livewire\Component;
use App\Models\Project;
use Livewire\WithPagination;

class Index extends Component
{
    public $keyword;

    use WithPagination;

    protected $paginationTheme = 'bootstrap';
    
    public function render()
    {
        $data = Project::select('projects.*')->orderBy('id','DESC')->join('customer','customer.id','=','projects.customer_id');

        if($this->keyword!="") $data = $data->where('background_of_opportunity',"LIKE","%{$this->keyword}%")->orWhere('customer.name',"LIKE","%{$this->keyword}%");

        return view('livewire.project.index')
                    ->with(['data'=>$data->paginate(100)]);
    }
}
