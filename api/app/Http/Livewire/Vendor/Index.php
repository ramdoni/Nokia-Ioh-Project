<?php

namespace App\Http\Livewire\Vendor;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\Vendor;

class Index extends Component
{
    public $keyword,$insert=false;
    public $pic,$name,$phone,$keterangan,$email,$address,$selected_item;
    use WithPagination;
    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        $data = Vendor::orderBy('id','DESC');

        if($this->keyword) $data = $data->where('name','LIKE', '%'.$this->keyword.'%')
                                        ->orWhere('email','LIKE', '%'.$this->keyword.'%')
                                        ->orWhere('phone','LIKE', '%'.$this->keyword.'%')
                                        ->orWhere('address','LIKE', '%'.$this->keyword.'%')
                                        ->orWhere('pic','LIKE', '%'.$this->keyword.'%');

        return view('livewire.vendor.index')->with(['data'=>$data->paginate(100)]);
    }

    public function edit($id)
    {
        $data = Vendor::find($id);
        $this->selected_item = $data;
        $this->pic = $data->pic_name;
        $this->name = $data->name;$this->email = $data->email;
        $this->phone = $data->no_telepon;$this->address = $data->alamat;

        $this->insert = true;
    }

    public function delete($id)
    {
        Vendor::find($id)->delete();
    }

    public function save()
    {
        $this->validate([
            'pic'=>'required',
            'name'=>'required',
            'phone'=>'required',
            'email'=>'required',
            'address'=>'required'
        ]);

        if(!$this->selected_item) 
            $vendor = new Vendor();
        else
            $vendor = $this->selected_item;

        $vendor->pic_name = $this->pic;
        $vendor->name = $this->name;
        $vendor->email = $this->email;
        $vendor->keterangan = $this->keterangan;
        $vendor->no_telepon = $this->phone;
        $vendor->alamat = $this->address;
        $vendor->save();

        $this->insert = false; $this->reset('selected_item','pic','name','email','keterangan','phone','address');
    }

    public function cancel()
    {
        $this->insert = false; $this->reset('selected_item','pic','name','email','keterangan','phone','address');
    }
}
