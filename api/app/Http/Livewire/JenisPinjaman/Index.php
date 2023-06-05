<?php

namespace App\Http\Livewire\JenisPinjaman;

use Livewire\Component;
use App\Models\JenisPinjaman;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    public $insert=false,$name;
    public function render()
    {
        $data = JenisPinjaman::orderBy('id','DESC');

        return view('livewire.jenis-pinjaman.index')->with(['data'=>$data->paginate(100)]);
    }

    public function save()
    {
        $this->validate([
            'name'=>'required'
        ]);

        $data = new JenisPinjaman();
        $data->name = $this->name;
        $data->save();

        $this->insert = false;
        $this->reset(['name']);
    }
}
