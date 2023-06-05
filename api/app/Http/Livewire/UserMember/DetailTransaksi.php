<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;
use App\Models\UserMember;
use App\Models\Transaksi;

class DetailTransaksi extends Component
{
    public $transaksi;
    protected $listeners = ['reload'=>'$refresh'];
    public function render()
    {
        $data = Transaksi::where('user_member_id',$this->transaksi->id)->orderBy('id','DESC');

        return view('livewire.user-member.detail-transaksi')->with(['data'=>$data->paginate(200)]);
    }

    public function mount(UserMember $data)
    {
        $this->transaksi = $data;
    }
}
