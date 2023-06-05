<?php

namespace App\Http\Livewire\Asuransi;

use Livewire\Component;
use App\Models\UserAccess;
use App\Models\User;
use App\Models\Asuransi;
use App\Models\UserMember;
use Illuminate\Support\Facades\Hash;

class Edit extends Component
{
    public $data;
    public $nik;
    public $policyno, $partnername, $productname, $membernostr, $name, $dob, $age, $startdate,$enddate;
    public $term, $up, $premi, $mortalita, $ekstra_premi, $total_premi, $medicaltype, $noinvoice;
    public $noreg, $accept_date, $batchno, $stnc_remarks;


     protected $rules = [
        'policyno' => 'required|string',
        'startdate' => 'required|string',
        'enddate' => 'required|string',
    ];


    public function render()
    {
        return view('livewire.asuransi.edit')
                        ->with([
                            'access' => UserAccess::all(),
                            'data' => $this->data
                        ]);
    }

    public function mount($id)
    {
        $this->data = Asuransi::find($id);
        $this->policyno = $this->data->policyno;
        $this->partnername = $this->data->partnername;
        $this->productname = $this->data->productname;
        $this->membernostr = $this->data->membernostr;
        $this->name = $this->data->name;
        $this->nik = $this->data->user_member->Id_Ktp;
        $this->dob = $this->data->dob;
        $this->age = $this->data->age;
        $this->startdate = $this->data->startdate;
        $this->enddate = $this->data->enddate;
        $this->term = $this->data->term;
        $this->up = $this->data->up;
        $this->premi = $this->data->premi;
        $this->mortalita = $this->data->mortalita;
        $this->ekstra_premi = $this->data->ekstra_premi;
        $this->total_premi = $this->data->total_premi;
        $this->medicaltype = $this->data->medicaltype;
        $this->noinvoice = $this->data->noinvoice;
        $this->noreg = $this->data->noreg;
        $this->accept_date = $this->data->accept_date;
        $this->batchno = $this->data->batchno;
        $this->stnc_remarks = $this->data->stnc_remarks;
    }

    public function save(){
        $this->validate();
        $this->data->policyno = $this->policyno;
        $this->data->partnername = $this->partnername;
        $this->data->productname = $this->productname;
        $this->data->membernostr = $this->membernostr;
        $this->data->name = $this->name;
        $this->data->dob = $this->dob;
        $this->data->age = $this->age;
        $this->data->startdate = $this->startdate;
        $this->data->enddate = $this->enddate;
        $this->data->term = $this->term;
        $this->data->up = $this->up;
        $this->data->premi = $this->premi;
        $this->data->mortalita = $this->mortalita;
        $this->data->ekstra_premi = $this->ekstra_premi;
        $this->data->total_premi = $this->total_premi;
        $this->data->medicaltype = $this->medicaltype;
        $this->data->noinvoice = $this->noinvoice;
        $this->data->noreg = $this->noreg;
        $this->data->accept_date = $this->accept_date;
        $this->data->batchno = $this->batchno;
        $this->data->stnc_remarks = $this->stnc_remarks;
        $this->data->save();

        session()->flash('message-success',__('Data updated successfully'));
        
        return redirect()->to('asuransi');
    }
}
