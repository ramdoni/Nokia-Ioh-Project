<?php

namespace App\Http\Livewire\Koordinator\Iuranmember;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\UserMember;
use App\Models\Iuran;

class Index extends Component
{
    public $keyword,$koordinator_id,$status,$tahun,$check_id=[],$check_all_=false,$member_id;

    use WithPagination;
    
    protected $paginationTheme = 'bootstrap';
    
    protected $listeners = ['modal-insert-iuran'=>'modalInsertIuran'];

    public function render()
    {
        $data = UserMember::where(['koordinator_id'=>\Auth::user()->member->id]);
        
        if($this->member_id) $data->where('user_member.id',$this->member_id);

        if($this->keyword) $data->where(function($table){
                                $table->where('user_member.name','LIKE',"%{$this->keyword}%")
                                        ->orWhere('user_member.Id_Ktp', "LIKE","%{$this->keyword}%")
                                        ->orWhere('user_member.no_anggota_platinum', "LIKE","%{$this->keyword}%");
                                    });

        return view('livewire.koordinator.iuranmember.index')->layout('layouts.app')->with(['data'=>$data->paginate(100)]);
    }

    public function mount()
    {
        $this->tahun = date('Y');
    }

    public function modalInsertIuran()
    {
        if(count($this->check_id)==0){
            $this->emit('error-message', 'Pilih Anggota terlebih dahulu !');
        }else{
            $this->emit('show-insert-iuran',$this->check_id);
        }
    }

    public function check_all()
    {
        if($this->check_all_==false){
            $data = UserMember::orderBy('id','DESC')->where(['koordinator_id'=>\Auth::user()->member->id]);

            foreach($data->paginate(100) as $item){
                $this->check_id[] = $item->id;
            }
            $this->check_all_ = true;
        }else {
            $this->reset('check_id'); // reset
            $this->check_all_ = false;
        } 
        
    }

    public function downloadExcel()
    {
        $objPHPExcel = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
        // Set document properties
        $objPHPExcel->getProperties()->setCreator("Stalavista System")
                                    ->setLastModifiedBy("Stalavista System")
                                    ->setTitle("Office 2007 XLSX Product Database")
                                    ->setSubject("Iuran")
                                    ->setDescription("Iuran")
                                    ->setKeywords("office 2007 openxml php")
                                    ->setCategory("Iuran");
        
        $objPHPExcel->getActiveSheet()->getStyle('A1')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('689a3b');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('B1', 'IURAN ANGGOTA '.date('Y'));
        $objPHPExcel->setActiveSheetIndex(0)->mergeCells("B1:D1");

        $objPHPExcel->getActiveSheet()->getRowDimension('1')->setRowHeight(34);
        $objPHPExcel->getActiveSheet()->getStyle('B1')->getFont()->setSize(16);
        $objPHPExcel->getActiveSheet()->getStyle('B1')->getAlignment()->setWrapText(false);

        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('B2', 'Nama Koordinator');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('C2', ': '.\Auth::user()->name);

        $objPHPExcel->getActiveSheet()->getStyle('A4:D4')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('c2d7f3');
        $objPHPExcel->getActiveSheet()->getStyle('E4:P4')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('f2f2f2');
        $objPHPExcel->setActiveSheetIndex(0)
                    ->setCellValue('A4', 'NO')
                    ->setCellValue('B4', 'NAMA ANGGOTA')
                    ->setCellValue('C4', 'NIK')
                    ->setCellValue('D4', 'NO ANGGOTA')
                    ->setCellValue('E4', 'IURAN ANGGOTA');
        $objPHPExcel->setActiveSheetIndex(0)->mergeCells("A4:A5");
        $objPHPExcel->setActiveSheetIndex(0)->mergeCells("B4:B5");
        $objPHPExcel->setActiveSheetIndex(0)->mergeCells("C4:C5");
        $objPHPExcel->setActiveSheetIndex(0)->mergeCells("D4:D5");
        $objPHPExcel->setActiveSheetIndex(0)->mergeCells("E4:P4");
        
        $objPHPExcel->getActiveSheet()->getStyle('E5:G5')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('d9ecf9');
        $objPHPExcel->getActiveSheet()->getStyle('H5:J5')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('e8f2df');
        $objPHPExcel->getActiveSheet()->getStyle('K5:M5')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('e6ddec');
        $objPHPExcel->getActiveSheet()->getStyle('N5:P5')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('ffead5');
        $objPHPExcel->setActiveSheetIndex(0)
                    ->setCellValue('E5', 'JAN')
                    ->setCellValue('F5', 'FEB')
                    ->setCellValue('G5', 'MAR')
                    ->setCellValue('H5', 'APR')
                    ->setCellValue('I5', 'MAY')
                    ->setCellValue('J5', 'JUN')
                    ->setCellValue('K5', 'JUL')
                    ->setCellValue('L5', 'AUG')
                    ->setCellValue('M5', 'SEP')
                    ->setCellValue('N5', 'OCT')
                    ->setCellValue('O5', 'NOV')
                    ->setCellValue('P5', 'DEC');

        $objPHPExcel->getActiveSheet()->getStyle('A4:P4')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        $objPHPExcel->getActiveSheet()->getStyle('A4:P4')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        // $objPHPExcel->getActiveSheet()->getRowDimension('3')->setRowHeight(25);
        $objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(5);
        $objPHPExcel->getActiveSheet()->getColumnDimension('B')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('C')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('D')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('E')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('F')->setAutoSize(true);
        $objPHPExcel->getActiveSheet()->getColumnDimension('G')->setAutoSize(true);
        // $objPHPExcel->getActiveSheet()->freezePane('A4');
        // $objPHPExcel->getActiveSheet()->setAutoFilter('B3:G3');
        $num=6;
        $data = UserMember::orderBy('id','DESC')->where('koordinator_id',\Auth::user()->member->id);

        foreach($data->get() as $k => $i){

            $objPHPExcel->setActiveSheetIndex(0)
                ->setCellValue('A'.$num,($k+1))
                ->setCellValue('B'.$num,isset($i->name)?$i->name:'')
                ->setCellValue('C'.$num,isset($i->Id_Ktp)?"'".$i->Id_Ktp:'')
                ->setCellValue('D'.$num,isset($i->no_anggota_platinum)?"'".$i->no_anggota_platinum:'')
                ->setCellValue('E'.$num,"BELUM")
                ->setCellValue('F'.$num,"BELUM")
                ->setCellValue('G'.$num,"BELUM")
                ->setCellValue('H'.$num,"BELUM")
                ->setCellValue('I'.$num,"BELUM")
                ->setCellValue('J'.$num,"BELUM")
                ->setCellValue('K'.$num,"BELUM")
                ->setCellValue('L'.$num,"BELUM")
                ->setCellValue('M'.$num,"BELUM")
                ->setCellValue('N'.$num,"BELUM")
                ->setCellValue('O'.$num,"BELUM")
                ->setCellValue('P'.$num,"BELUM");

            $iurans = Iuran::where(['user_member_id'=>$i->id,'type'=>'Iuran'])->orderBy('bulan')->get();

            foreach($iurans as $iuran){
                if($iuran->bulan==1){
                    $objPHPExcel->getActiveSheet()->setCellValue('E'.$num,$iuran->nominal);
                    $objPHPExcel->getActiveSheet()->getStyle('E'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==2){
                    $objPHPExcel->getActiveSheet()->setCellValue('F'.$num,$iuran->nominal);
                    $objPHPExcel->getActiveSheet()->getStyle('F'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==3){
                    $objPHPExcel->getActiveSheet()->setCellValue('G'.$num,$iuran->nominal);
                    $objPHPExcel->getActiveSheet()->getStyle('G'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==4){
                    $objPHPExcel->getActiveSheet()->setCellValue('H'.$num,$iuran->nominal);
                    $objPHPExcel->getActiveSheet()->getStyle('H'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==5){
                    $objPHPExcel->getActiveSheet()->setCellValue('I'.$num,$iuran->nominal);
                    $objPHPExcel->getActiveSheet()->getStyle('I'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==6){
                    $objPHPExcel->getActiveSheet()->setCellValue('J'.$num,$iuran->nominal);
                    $objPHPExcel->getActiveSheet()->getStyle('J'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==7){
                    $objPHPExcel->getActiveSheet()->setCellValue('K'.$num,$iuran->nominal);
                    $objPHPExcel->getActiveSheet()->getStyle('K'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==8){
                    $objPHPExcel->getActiveSheet()->setCellValue('L'.$num,$iuran->nominal);
                    $objPHPExcel->getActiveSheet()->getStyle('L'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==9){
                    $objPHPExcel->getActiveSheet()->setCellValue('M'.$num,$iuran->nominal);
                    $objPHPExcel->getActiveSheet()->getStyle('M'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==10){
                    $objPHPExcel->getActiveSheet()->setCellValue('N'.$num,$iuran->nominal);
                    $objPHPExcel->getActiveSheet()->getStyle('N'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==11){
                    $objPHPExcel->getActiveSheet()->setCellValue('O'.$num,$iuran->nominal);
                    $objPHPExcel->getActiveSheet()->getStyle('O'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==12){
                    $objPHPExcel->getActiveSheet()->setCellValue('P'.$num,$iuran->nominal);
                    $objPHPExcel->getActiveSheet()->getStyle('P'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
            }
            // $objPHPExcel->getActiveSheet()->getStyle('D'.$num)->getNumberFormat()->setFormatCode('#,##0');
            $num++;
        }

        $objPHPExcel->setActiveSheetIndex(0);

        $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($objPHPExcel, "Xlsx");

        // Redirect output to a client’s web browser (Excel5)
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="iuran-' .date('d-M-Y') .'.xlsx"');
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
        },'iuran-'.\Auth::user()->name.'-'.date('d-M-Y') .'.xlsx');
    }
}
