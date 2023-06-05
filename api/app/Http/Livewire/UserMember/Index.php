<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\UserMember;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class Index extends Component
{
    public $keyword,$koordinator_id,$status;
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    public $dataMember,$selected,$password,$insert=false;
    public $no_anggota,$error_no_anggota,$nama,$no_telepon;
    public function render()
    {
        $data = UserMember::select('user_member.*')->join('users','users.id','=','user_member.user_id')
                            ->orderBy('user_member.no_anggota_platinum','DESC');

        if($this->keyword){
            $data->where(function($table){
                foreach(\Illuminate\Support\Facades\Schema::getColumnListing('user_member') as $column){
                    $table->orWhere("user_member.".$column,'LIKE',"%{$this->keyword}%");
                }
            });
        }
        
        if($this->koordinator_id) $data = $data->where('user_member.koordinator_id',$this->koordinator_id);
        if($this->status) $data = $data->where('user_member.status',$this->status);
            
        return view('livewire.user-member.index')
                ->layout('layouts.app')
                ->with(['data'=>$data->paginate(100)]);
    }

    public function changePassword()
    {
        $this->validate([
            'password' => 'required'
        ]);
        $user = User::find($this->selected->user_id);
        if($user){
            $user->password = \Hash::make($this->password);
            $user->save();
        }
        
        session()->flash('message-success',__('Password berhasil dirubah'));
        
        return redirect()->to('user-member');
    }
    
    public function set_member(UserMember $selected)
    {
        $this->selected = $selected;
    }

    public function delete($id)
    {
        UserMember::find($id)->delete();
    }

    public function save()
    {
        $this->validate([
            'no_anggota'=>'required',
            'nama'=>'required',
            'no_telepon'=>'required'
        ]);

        $find = UserMember::where('no_anggota_platinum',$this->no_anggota)->first();
        if($find){
            $this->error_no_anggota = 'No Anggota sudah digunakan';
            return;
        }

        $user = new User();
        $user->user_access_id = 4; // Member
        $user->name = $this->nama;
        // $user->email = $this->email;
        $user->telepon = $this->no_telepon;
        $user->password = Hash::make('12345678');
		$user->username = $this->no_anggota;
        $user->save();

        $data = new UserMember();
     	$data->no_anggota_platinum = $this->no_anggota;
     	$data->name = $this->nama;
     	$data->phone_number = $this->no_telepon;
        $data->user_id = $user->id;
        $data->save();

        // Sinkron Coopzone
        $response = sinkronCoopzone([
            'url'=>'koperasi/user/insert',
            'data'=>[
                'no_anggota'=>$this->no_anggota,
                'nama'=>$this->nama,
                'no_telepon'=>$this->no_telepon
            ],
        ]);

        $this->reset(['no_anggota','nama','no_telepon']);
        $this->insert = false;
    }
    
    public function downloadExcel()
    {
        $objPHPExcel = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
        // Set document properties
        $objPHPExcel->getProperties()->setCreator("Stalavista System")
                                    ->setLastModifiedBy("Stalavista System")
                                    ->setTitle("Office 2007 XLSX Product Database")
                                    ->setSubject("Data Member")
                                    ->setDescription("Data Member")
                                    ->setKeywords("office 2007 openxml php")
                                    ->setCategory("Member");

        $objPHPExcel->getActiveSheet()->getStyle('A1')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('689a3b');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('B1', 'DATA ANGGOTA YAYASAN SOSIAL SANTA MARIA');
        $objPHPExcel->getActiveSheet()->getStyle('A1')->getFont()->setSize(16);
        $objPHPExcel->getActiveSheet()->getStyle('A1')->getAlignment()->setWrapText(false);
        $objPHPExcel->setActiveSheetIndex(0)
                    ->setCellValue('A3', 'No Urut')
                    ->setCellValue('B3', 'No Anggota Platinum')
                    ->setCellValue('C3', 'No Anggota Ex Gold')
                    ->setCellValue('D3', 'No Form')
                    ->setCellValue('E3', 'Koordinator')
                    ->setCellValue('F3', 'Tgl. Diterima')
                    ->setCellValue('G3', 'Nama Anggota')
                    ->setCellValue('H3', 'Tempat, Tgl. Lahir')
                    ->setCellValue('I3', 'Alamat')
                    ->setCellValue('J3', 'Golongan Darah')
                    ->setCellValue('K3', 'Kota')
                    ->setCellValue('L3', 'Jenis Kelamin')
                    ->setCellValue('M3', 'No. KTP')
                    ->setCellValue('N3', 'No Telp. / HP')
                    ->setCellValue('O3', 'Agama')
                    ->setCellValue('P3', 'Tgl. Meninggal')
                    ->setCellValue('Q3', 'Nama (Ahli Waris I)')
                    ->setCellValue('R3', 'Alamat (Ahli Waris I)')
                    ->setCellValue('S3', 'Tempat, Tgl. Lahir (Ahli Waris I)')
                    ->setCellValue('T3', 'Golongan Darah (Ahli Waris I)')
                    ->setCellValue('U3', 'Jenis Kelamin (Ahli Waris I)')
                    ->setCellValue('V3', 'No. KTP (Ahli Waris I)')
                    ->setCellValue('W3', 'No Telp. / HP (Ahli Waris I)')
                    ->setCellValue('X3', 'Hubungan dengan Anggota (Ahli Waris I)')
                    ->setCellValue('Y3', 'Nama (Ahli Waris II)')
                    ->setCellValue('Z3', 'Alamat (Ahli Waris II)')
                    ->setCellValue('AA3', 'Tempat, Tgl. Lahir (Ahli Waris II)')
                    ->setCellValue('AB3', 'Golongan Darah (Ahli Waris II)')
                    ->setCellValue('AC3', 'Jenis Kelamin (Ahli Waris II)')
                    ->setCellValue('AD3', 'No. KTP (Ahli Waris II)')
                    ->setCellValue('AE3', 'No Telp. / HP (Ahli Waris II)')
                    ->setCellValue('AF3', 'Hubungan dengan Anggota (Ahli Waris II)')
                    ->setCellValue('AG3', 'Iuran Tetap (Pembayaran pertama)')
                    ->setCellValue('AH3', 'Sumbangan (Pembayaran pertama)')
                    ->setCellValue('AI3', 'Uang Pendaftaran (Pembayaran pertama)')
                    ->setCellValue('AJ3', 'Jumlah bulan s/d (Pembayaran pertama)')
                    ->setCellValue('AK3', 'Total (Pembayaran pertama)')
                    ->setCellValue('AL3', 'Perekrut')
                    ->setCellValue('AM3', 'No Ins')
                    ->setCellValue('AN3', 'Keterangan')
                    ->setCellValue('AO3', 'Tanggal Keluar')
                    ->setCellValue('AP3', 'Alasan Keluar')
                    ->setCellValue('AQ3', 'Asuransi');
                    
        $objPHPExcel->getActiveSheet()->getStyle('A3:AQ3')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('c2d7f3');
        $objPHPExcel->getActiveSheet()->getStyle('A3:AQ3')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        $objPHPExcel->getActiveSheet()->getStyle('A3:AQ3')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        $objPHPExcel->getActiveSheet()->getRowDimension('3')->setRowHeight(34);
        $objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(5);
        $objPHPExcel->getActiveSheet()->getColumnDimension('B')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('C')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('D')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('E')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('F')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('G')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('H')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('I')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('J')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('K')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('L')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('M')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('N')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('O')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('P')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('Q')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('R')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('S')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('T')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('U')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('V')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('W')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('X')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('Y')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('Z')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AA')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AB')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AC')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AD')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AE')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AF')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AG')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AH')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AI')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AJ')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AK')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AL')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AM')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AN')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AO')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AP')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('AQ')->setAutoSize(true);
        //$objPHPExcel->getActiveSheet()->freezePane('A4');
        $objPHPExcel->getActiveSheet()->setAutoFilter('B3:AQ3');
        $num=4;

        $data = \App\Models\UserMember::orderBy('id','DESC');
        if($this->keyword) {
            $data = $data->where('name','LIKE', '%'.$this->keyword.'%')
                                        ->orWhere('name_kta','LIKE', '%'.$this->keyword.'%')
                                        ->orWhere('email','LIKE', '%'.$this->keyword.'%');
        }
        if($this->koordinator_id)  $data = $data->where('koordinator_id',$this->koordinator_id);
        
        if($this->status) $data = $data->where('status',$this->status);
        
        foreach($data->get() as $k => $i){
            if($i->koordinator_id==1)
                $koordinator_name = "Kantor";
            else
                $koordinator_name = isset($i->koordinatorUser->name)?$i->koordinatorUser->name:'';

            $objPHPExcel->setActiveSheetIndex(0)
                ->setCellValue('A'.$num,($k+1))
                ->setCellValue('B'.$num,$i->no_anggota_platinum)
                ->setCellValue('C'.$num,$i->no_anggota_gold)
                ->setCellValue('D'.$num,$i->no_form)
                ->setCellValue('E'.$num, $koordinator_name)
                ->setCellValue('F'.$num,date('d-m-Y',strtotime($i->tanggal_diterima)))
                ->setCellValue('G'.$num, $i->name)
                ->setCellValue('H'.$num,$i->tempat_lahir.', '.date('d-m-Y',strtotime($i->tanggal_lahir)))
                ->setCellValue('I'.$num,$i->alamat)
                ->setCellValue('J'.$num,$i->blood_type)
                ->setCellValue('K'.$num,isset($i->kota->name)?$i->kota->name:'')
                ->setCellValue('L'.$num,$i->jenis_kelamin)
                ->setCellValue('M'.$num,$i->Id_Ktp)
                ->setCellValue('N'.$num,$i->phone_number)
                ->setCellValue('O'.$num,$i->agama)
                ->setCellValue('P'.$num,date('d-m-Y',strtotime($i->tanggal_meninggal)))
                ->setCellValue('Q'.$num,$i->name_waris1)
                ->setCellValue('R'.$num,$i->address_waris1)
                ->setCellValue('S'.$num,$i->tempat_lahirwaris1.', '.date('d-m-Y',strtotime($i->tanggal_lahirwaris1)))
                ->setCellValue('T'.$num,$i->blood_typewaris1)
                ->setCellValue('U'.$num,$i->jenis_kelaminwaris1)
                ->setCellValue('V'.$num,$i->Id_Ktpwaris1)
                ->setCellValue('W'.$num,$i->phone_numberwaris1)
                ->setCellValue('X'.$num,$i->hubungananggota1)
                ->setCellValue('Y'.$num,$i->name_waris2)
                ->setCellValue('Z'.$num,$i->address_waris2)
                ->setCellValue('AA'.$num,$i->tempat_lahirwaris2.', '.date('d-m-Y',strtotime($i->tanggal_lahirwaris2)))
                ->setCellValue('AB'.$num,$i->blood_typewaris2)
                ->setCellValue('AC'.$num,$i->jenis_kelaminwaris2)
                ->setCellValue('AD'.$num,$i->Id_Ktpwaris2)
                ->setCellValue('AE'.$num,$i->phone_numberwaris2)
                ->setCellValue('AF'.$num,$i->hubungananggota2)
                ->setCellValue('AG'.$num,$i->total_iuran_tetap)
                ->setCellValue('AH'.$num,$i->total_sumbangan)
                ->setCellValue('AI'.$num,$i->uang_pendaftaran)
                ->setCellValue('AJ'.$num,$i->iuran_tetap)
                ->setCellValue('AK'.$num,$i->total_pembayaran)
                ->setCellValue('AL'.$num, isset($i->koordinatorUser->name)?$i->koordinatorUser->name:'')
                ->setCellValue('AM'.$num,'')
                ->setCellValue('AN'.$num,'')
                ->setCellValue('AO'.$num,'')
                ->setCellValue('AP'.$num,'')
                ->setCellValue('AP'.$num,strip_tags(getAsuransi($i->id)));
            $objPHPExcel->getActiveSheet()->getStyle('AG'.$num)->getNumberFormat()->setFormatCode('#,##0');
            $objPHPExcel->getActiveSheet()->getStyle('AH'.$num)->getNumberFormat()->setFormatCode('#,##0');
            $objPHPExcel->getActiveSheet()->getStyle('AI'.$num)->getNumberFormat()->setFormatCode('#,##0');
            $objPHPExcel->getActiveSheet()->getStyle('AK'.$num)->getNumberFormat()->setFormatCode('#,##0');
            $num++;
        }
        // Rename worksheet
        //$objPHPExcel->getActiveSheet()->setTitle('Iuran-'. date('d-M-Y'));
        // Set active sheet index to the first sheet, so Excel opens this as the first sheet
        $objPHPExcel->setActiveSheetIndex(0);

        $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($objPHPExcel, "Xlsx");

        // Redirect output to a client’s web browser (Excel5)
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="member-' .date('d-M-Y') .'.xlsx"');
        header('Cache-Control: max-age=0');
        // If you're serving to IE 9, then the following may be needed
        //header('Cache-Control: max-age=1');

        // If you're serving to IE over SSL, then the following may be needed
        header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
        header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
        header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
        header ('Pragma: public'); // HTTP/1.0
        return response()->streamDownload(function() use($writer){
            $writer->save('php://output');
        },'member-' .date('d-M-Y') .'.xlsx');
    }
}
