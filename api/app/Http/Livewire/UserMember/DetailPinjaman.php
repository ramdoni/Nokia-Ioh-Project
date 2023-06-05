<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;
use App\Models\JenisPinjaman;
use App\Models\Pinjaman;
use App\Models\UserMember;

class DetailPinjaman extends Component
{
    public $jenis_pinjaman,$member,$selected_id,$note;
    protected $listeners = ['reload'=>'$refresh'];
    public function render()
    {
        $data = Pinjaman::with(['jenis_pinjaman'])->where(['user_member_id'=>$this->member->id])->orderBy('id','DESC');

        return view('livewire.user-member.detail-pinjaman')->with(['data'=>$data->paginate(100)]);
    }

    public function mount(UserMember $data)
    {
        $this->member = $data;
        $this->jenis_pinjaman = JenisPinjaman::get();
    }

    public function approve()
    {
        $data = Pinjaman::find($this->selected_id);
        $data->status = 1;
        $data->approved_date = date('Y-m-d');
        $data->save();

        // Sinkron Coopzone
        $response = sinkronCoopzone([
            'url'=>'koperasi/pinjaman/approve',
            'no_pengajuan'=>$data->no_pengajuan,
        ]);

        $this->emit('reload');
    }

    public function reject()
    {
        $data = Pinjaman::find($this->selected_id);
        $data->status = 3;
        $data->approved_date = date('Y-m-d');
        $data->save();
        
        // Sinkron Coopzone
        $response = sinkronCoopzone([
            'url'=>'koperasi/pinjaman/reject',
            'no_pengajuan'=>$data->no_pengajuan,
        ]);

        $this->emit('reload');
    }
}
