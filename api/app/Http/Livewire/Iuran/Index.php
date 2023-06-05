<?php

namespace App\Http\Livewire\Iuran;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\UserMember;
use App\Models\Iuran;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Color;

class Index extends Component
{
    use WithPagination;
    
    public $keyword,$user_member_id,$tahun,$koordinator_id,$koordinator,$member_id,$result;

    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        $data = UserMember::select(["user_member.id","user_member.name","user_member.koordinator_id","user_member.Id_Ktp",
                                    "user_member.no_anggota_platinum","user_member.tanggal_diterima",\DB::raw('user_member_koordinator.name as koordinator_name')])
                                ->leftJoin(\DB::raw('user_member as user_member_koordinator'),'user_member_koordinator.id','=','user_member.koordinator_id')
                                ->where(['user_member.is_non_anggota'=>0,'user_member.status'=>2])
                                ->orderBy('user_member.id','DESC');

        if($this->koordinator_id) $data->where('user_member.koordinator_id',$this->koordinator_id);
        if($this->member_id) $data->where('user_member.id',$this->member_id);
        if($this->keyword) $data->where(function($table){
                                $table->where('user_member.name','LIKE',"%{$this->keyword}%")
                                        ->orWhere('user_member.Id_Ktp', "LIKE","%{$this->keyword}%")
                                        ->orWhere('user_member.no_anggota_platinum', "LIKE","%{$this->keyword}%");
                                    });
        $data = $data->paginate(100);
        $paging = $data->links();
                                    
        $result = [];
        
        foreach($data as $k => $item){
            $result[$k] = $item;
            
            $bulan = [1 => 'BELUM', 2 => 'BELUM', 3 => 'BELUM', 4 => 'BELUM', 5 => 'BELUM', 6 => 'BELUM', 7 => 'BELUM', 8 => 'BELUM', 9 => 'BELUM', 10 => 'BELUM', 11 =>'BELUM', 12 => 'BELUM'];
            
            $item->load(["iuran"=>function($query){
                $query->where('iuran.tahun',$this->tahun)->whereNotNull('iuran.bulan')->orderBy('iuran.bulan');
            }]);

            foreach($item->iuran as $iuran) $bulan[$iuran->bulan] = $iuran;
             
            $result[$k]['bulan'] = $bulan;
        }

        $this->result = $result;

        return view('livewire.iuran.index')->with(['data'=>$result,'paging'=>$paging]);
    }

    public function mount()
    {
        $this->koordinator = UserMember::select('user_member.name','user_member.id')->join('users','users.id','=','user_member.user_id')->where('users.user_access_id',3)->orderBy('user_member.name','ASC')->get();
        $this->tahun = date('Y');
    }

    public function downloadExcel()
    {
        $get_koordinator = UserMember::find($this->koordinator_id);
        
        $objPHPExcel = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
        // Set document properties
        $objPHPExcel->getProperties()->setCreator("Stalavista System")
                                    ->setLastModifiedBy("Stalavista System")
                                    ->setTitle("Office 2007 XLSX Product Database")
                                    ->setSubject("Iuran")
                                    ->setDescription("Iuran")
                                    ->setKeywords("office 2007 openxml php")
                                    ->setCategory("Iuran");
        
        $activeSheet = $objPHPExcel->setActiveSheetIndex(0);

        $activeSheet->getStyle('A1')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('689a3b');
        $activeSheet->setCellValue('B1', 'IURAN ANGGOTA '.date('Y'));
        $activeSheet->mergeCells("B1:D1");

        $activeSheet->getRowDimension('1')->setRowHeight(34);
        $activeSheet->getStyle('B1')->getFont()->setSize(16);
        $activeSheet->getStyle('B1')->getAlignment()->setWrapText(false);

        $activeSheet->setCellValue('B2', 'Nama Koordinator');

        if($this->koordinator_id==1)
            $koordinator_name = "Kantor";
        else
            $koordinator_name = (isset($get_koordinator->name) ? $get_koordinator->name : '');
        
        $activeSheet->setCellValue('C2', ': '.$koordinator_name);

        $activeSheet->getStyle('A4:D4')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('c2d7f3');
        $activeSheet->getStyle('E4:P4')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('f2f2f2');
        $activeSheet
                    ->setCellValue('A4', 'NO')
                    ->setCellValue('B4', 'NO ANGGOTA')
                    ->setCellValue('C4', 'NAMA ANGGOTA')
                    ->setCellValue('D4', 'ALAMAT')
                    ->setCellValue('E4', 'IURAN ANGGOTA');
        $activeSheet->mergeCells("A4:A5");
        $activeSheet->mergeCells("B4:B5");
        $activeSheet->mergeCells("C4:C5");
        $activeSheet->mergeCells("D4:D5");
        $activeSheet->mergeCells("E4:P4");
        
        $activeSheet->getStyle('E5:G5')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('d9ecf9');
        $activeSheet->getStyle('H5:J5')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('e8f2df');
        $activeSheet->getStyle('K5:M5')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('e6ddec');
        $activeSheet->getStyle('N5:P5')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('ffead5');
        $activeSheet
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

        $activeSheet->getStyle('A4:P4')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        $activeSheet->getStyle('A4:P4')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        // $objPHPExcel->getActiveSheet()->getRowDimension('3')->setRowHeight(25);
        $activeSheet->getColumnDimension('A')->setWidth(5);
        $activeSheet->getColumnDimension('B')->setAutoSize(true);
        $activeSheet->getColumnDimension('C')->setAutoSize(true);
        $activeSheet->getColumnDimension('D')->setAutoSize(true);
        $activeSheet->getColumnDimension('E')->setAutoSize(true);
        $activeSheet->getColumnDimension('F')->setAutoSize(true);
        $activeSheet->getColumnDimension('G')->setAutoSize(true);
        // $objPHPExcel->getActiveSheet()->freezePane('A4');
        // $objPHPExcel->getActiveSheet()->setAutoFilter('B3:G3');
        $num=6;
        $data = UserMember::orderBy('id','DESC');

        if($this->koordinator_id) $data->where('koordinator_id',$this->koordinator_id);
        
        $styleArray = array(
            'borders' => array(
                'allBorders' => array(
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => array('argb' => '000000'),
                ),
            ),
        );

        $activeSheet->getStyle("A4:P4")->applyFromArray($styleArray);
        $activeSheet->getStyle("A5:P5")->applyFromArray($styleArray);

        foreach($data->get() as $k => $i){
            $activeSheet
                ->setCellValue('A'.$num,($k+1))
                ->setCellValue('B'.$num,isset($i->no_anggota_platinum)?"'".$i->no_anggota_platinum:'')
                ->setCellValue('C'.$num,isset($i->name)?$i->name:'')
                ->setCellValue('D'.$num,isset($i->address)?$i->address:'')
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

            $iurans = Iuran::where(['user_member_id'=>$i->id,'type'=>'Iuran','tahun'=>$this->tahun])->orderBy('bulan')->get();

            foreach($iurans as $iuran){
                if($iuran->bulan==1){
                    $activeSheet->setCellValue('E'.$num,"10000");
                    $activeSheet->getStyle('E'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==2){
                    $activeSheet->setCellValue('F'.$num,"10000");
                    $activeSheet->getStyle('F'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==3){
                    $activeSheet->setCellValue('G'.$num,"10000");
                    $activeSheet->getStyle('G'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==4){
                    $activeSheet->setCellValue('H'.$num,"10000");
                    $activeSheet->getStyle('H'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==5){
                    $activeSheet->setCellValue('I'.$num,"10000");
                    $activeSheet->getStyle('I'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==6){
                    $activeSheet->setCellValue('J'.$num,"10000");
                    $activeSheet->getStyle('J'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==7){
                    $activeSheet->setCellValue('K'.$num,"10000");
                    $activeSheet->getStyle('K'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==8){
                    $activeSheet->setCellValue('L'.$num,"10000");
                    $activeSheet->getStyle('L'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==9){
                    $activeSheet->setCellValue('M'.$num,"10000");
                    $activeSheet->getStyle('M'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==10){
                    $activeSheet->setCellValue('N'.$num,"10000");
                    $activeSheet->getStyle('N'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==11){
                    $activeSheet->setCellValue('O'.$num,"10000");
                    $activeSheet->getStyle('O'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
                if($iuran->bulan==12){
                    $activeSheet->setCellValue('P'.$num,"10000");
                    $activeSheet->getStyle('P'.$num)->getNumberFormat()->setFormatCode('#,##0');
                }
            }
            $activeSheet->getStyle("A{$num}:P{$num}")->applyFromArray($styleArray);
            $num++;
        }

        // Rename worksheet
		$activeSheet->setTitle('Iuran');

		// Set active sheet index to the first sheet, so Excel opens this as the first sheet
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
        },'iuran-' .date('d-M-Y') .'.xlsx');
    }

    public function submit_cetak_tagihan()
    {
        $this->validate([
            'tahun' => 'required',
            'user_member_id' => 'required'
        ]);

        return redirect()->route('cetak-tagihan',['id'=>$this->user_member_id,'tahun'=>$this->tahun]);
    }
}
