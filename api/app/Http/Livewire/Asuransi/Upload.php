<?php

namespace App\Http\Livewire\Asuransi;

use Livewire\Component;
use App\Models\UserMember;
use App\Models\Asuransi;
use Livewire\WithFileUploads;

class Upload extends Component
{
    use WithFileUploads;
    public $file;
    public function render()
    {
        return view('livewire.asuransi.upload');
    }

    public function save()
    {
        $this->validate([
            'file'=>'required|mimes:xls,xlsx|max:51200' // 50MB maksimal
        ]);
        
        $path = $this->file->getRealPath();
        $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
        $reader->setReadDataOnly(true);
        $data = $reader->load($path);
        $sheetData = $data->getActiveSheet()->toArray();
        
        if(count($sheetData) > 0){
            $countLimit = 1;
            foreach($sheetData as $key => $i){
                if($key<1) continue; // skip header
                $policyno = $i[1];
                $partnername = $i[2];
                $productname = $i[3];
                $membernostr = $i[4];
                $name = $i[5];
                $nik = str_replace("'","",$i[6]);
                $nik = trim($nik);
                $dob = $i[7];
                $dob = \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($i[7])->format('Y-m-d');
                $age = $i[8];
                $startdate = \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($i[9])->format('Y-m-d');
                $enddate = \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($i[10])->format('Y-m-d');
                $term = $i[11];
                $up = $i[12];
                $premi = $i[13];
                $mortalita = $i[14];
                $ekstra_premi = $i[15];
                $total_premi = $i[16];
                $medicaltype = $i[17];
                $noinvoice = $i[18];
                $noreg = $i[19];
                $accept_date = \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($i[20])->format('Y-m-d');
                $batchno = $i[21];
                $stnc_remarks = \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($i[22])->format('Y-m-d');

                $find_user = UserMember::where('Id_Ktp', $nik)->first();
                if (!$find_user)continue; // skip jika data tidak ada
                $existData = Asuransi::where('user_member_id',$find_user->id)->where('startdate',$startdate)->where('enddate',$enddate)->first();
                if(!$existData){
                    $data  = new Asuransi();
                    $data->user_member_id = $find_user->id;
                    $data->policyno = $policyno;
                    $data->partnername = $partnername;
                    $data->productname = $productname;
                    $data->membernostr = $membernostr;
                    $data->name = $name;
                    $data->dob = $dob;
                    $data->age = $age;
                    $data->startdate = $startdate;
                    $data->enddate = $enddate;
                    $data->term = $term;
                    $data->up = $up;
                    $data->premi = $premi;
                    $data->mortalita = $mortalita;
                    $data->ekstra_premi = $ekstra_premi;
                    $data->total_premi = $total_premi;
                    $data->medicaltype = $medicaltype;
                    $data->noinvoice = $noinvoice;
                    $data->noreg = $noreg;
                    $data->accept_date = $accept_date;
                    $data->batchno = $batchno;
                    $data->stnc_remarks = $stnc_remarks;
                    $data->save();  
                }
            }
        }
        session()->flash('message-success',__('Data berhasil di upload'));
        return redirect()->route('asuransi.index');
    }
}
