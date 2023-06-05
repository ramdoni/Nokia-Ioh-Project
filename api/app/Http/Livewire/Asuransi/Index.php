<?php

namespace App\Http\Livewire\Asuransi;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\UserMember;
use App\Models\Asuransi;

class Index extends Component
{
    use WithPagination;
    
    public $statuskeyword,$status, $keyword,$coa_group_id;

    protected $paginationTheme = 'bootstrap';

    public function render()
    {       
        $dataMax = Asuransi::select(\DB::raw('MAX(asuransi.id) as max_id'))
                                    ->where(function($table){
                                        if($this->status) $table->where('status',$this->status);
                                    })
                                    ->groupBy('asuransi.user_member_id')
                                    ->get();
        $in_ = [];
        foreach($dataMax as $item){
            $in_[] = $item->max_id;
        }
        $date = date('Y-m-d');
        $dateEnd1 = now()->addDays(15)->format('Y-m-d');
        $dateEnd2 = now()->addDays(30)->format('Y-m-d');
        
        $data = UserMember::orderBy('user_member.id','DESC')
                            ->leftJoin('asuransi','asuransi.user_member_id','=','user_member.id')
                            ->select('user_member.*','asuransi.membernostr','asuransi.enddate','asuransi.startdate',\DB::raw('asuransi.status AS status_asuransi'),\DB::raw('asuransi.id AS asuransi_id'))
                            //->where(\DB::raw("TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE())"),'<',80)
                            //->where('user_member.status',2)
                            ;

        if($this->statuskeyword == 1) $data->whereIn('asuransi.id',$in_)->whereBetween('asuransi.enddate', [$date, $dateEnd1]);
        if($this->statuskeyword == 2) $data->whereIn('asuransi.id',$in_) ->whereBetween('asuransi.enddate', [$date, $dateEnd2]);
        if($this->statuskeyword == 3) {
            $dataNot = Asuransi::select('user_member_id')->orderBy('id','ASC');
            $data->whereNotIn('user_member.id',$dataNot);
        }
        if($this->statuskeyword == 4) $data = $data->where('asuransi.status',2);
        // if($this->status) $data = $data->where('asuransi.status',$this->status);

        return view('livewire.asuransi.index')->with(['data'=>$data->paginate(100)]);
    }
    public function downloadExcel()
    {
        $objPHPExcel = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
        // Set document properties
        $objPHPExcel->getProperties()->setCreator("Stalavista System")
                                    ->setLastModifiedBy("Stalavista System")
                                    ->setTitle("Office 2007 XLSX Product Database")
                                    ->setSubject("Asuransi")
                                    ->setDescription("Asuransi")
                                    ->setKeywords("office 2007 openxml php")
                                    ->setCategory("Asuransi");

        $drawing = new \PhpOffice\PhpSpreadsheet\Worksheet\Drawing();
        $drawing->setName('Logo');
        $drawing->setDescription('Logo');
        $drawing->setPath('logo.png'); // put your path and image here
        $drawing->setCoordinates('B2');
        $drawing->setOffsetX(35);
        $drawing->setWidthAndHeight(80, 60);
        $drawing->getShadow()->setVisible(true);
        $drawing->getShadow()->setDirection(45);
        $drawing->setWorksheet($objPHPExcel->getActiveSheet());

        $objPHPExcel->setActiveSheetIndex(0)
        ->setCellValue('C2', 'Asuransi')
        ->setCellValue('C3', 'Nama Pemegang Polis')->setCellValue('D3',': Yayasan Pelayana Kematian')
        ->setCellValue('C4', 'Produk')->setCellValue('D4', ': Reliance Term Life');
        
        $objPHPExcel->getActiveSheet()->getStyle('A6:O6')->getFill()
							->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
							->getStartColor()->setRGB('c8ddf5');
        $objPHPExcel->getActiveSheet()->getStyle('B6')->getAlignment()->setWrapText(false);
        $objPHPExcel->setActiveSheetIndex(0)
                    ->setCellValue('A6', 'No')
                    ->setCellValue('B6', 'No KTP')
                    ->setCellValue('C6', 'Nama')
                    ->setCellValue('D6', 'Wilayah')
                    ->setCellValue('E6', 'Jenis Kelamin')
                    ->setCellValue('F6', 'No HP')
                    ->setCellValue('G6', 'Tanggal Lahir')
                    ->setCellValue('H6', 'Tanggal Mulai Asuransi')
                    ->setCellValue('I6', 'Tanggal Akhir Asuransi')
                    ->setCellValue('J6', 'Uang Pertanggungan')
                    ->setCellValue('K6', 'Usia')
                    ->setCellValue('L6', 'Masa Asuransi(bulan)')
                    ->setCellValue('M6', 'Rate Premi')
                    ->setCellValue('N6', 'Premi')
                    ->setCellValue('O6', 'UW Limit');
        $objPHPExcel->getActiveSheet()->getStyle('A6:O6')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        $objPHPExcel->getActiveSheet()->getStyle('A6:O6')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        $objPHPExcel->getActiveSheet()->getRowDimension('6')->setRowHeight(34);
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
        //$objPHPExcel->getActiveSheet()->freezePane('A4');
        $objPHPExcel->getActiveSheet()->setAutoFilter('B6:O6');
        $num=7;
/*
        select a.* from user_member a
        join asuransi b on a.id = b.user_member_id
        where b.id in (SELECT max(c.id) FROM asuransi c GROUP BY c.user_member_id ) order by a.id desc

        select * from user_member a 
            where a.id not in (select b.user_member_id from asuransi b)

         //SELECT max(c.id) FROM asuransi c GROUP BY c.user_member_id
        $dataMax = \App\Models\Asuransi::selectRaw('MAX(asuransi.id)')->GROUPBY('asuransi.user_member_id');

        //$data = \App\Models\UserMember::select('user_member.*')->join('asuransi','user_member.id','=','asuransi.user_member_id')->where('user_member.status',2)->whereIn('asuransi.id',$dataMax)->orderBy('user_member.id','DESC')->get();

        $data = \App\Models\UserMember::where('status',2)->orderBy('id','DESC');
*/
        $dataMax = \App\Models\Asuransi::select(\DB::raw('MAX(asuransi.id) as max_id'))->groupBy('asuransi.user_member_id')->get();
            $in_ = [];
        foreach($dataMax as $item){
            $in_[] = $item->max_id;
        }

        $date = date('Y-m-d');
        $dateEnd1 = now()->addDays(15)->format('Y-m-d');
        $dateEnd2 = now()->addDays(30)->format('Y-m-d');
        //$data = \App\Models\UserMember::select('user_member.*')->where('user_member.status',2)->orderBy('user_member.id','DESC');
        $data = \App\Models\UserMember::select('user_member.*')->where('user_member.status',2)->where(\DB::raw("TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE())"),'<',80)->orderBy('user_member.id','DESC');
        
        if($this->statuskeyword == 1) {
            $data = $data->join('asuransi','user_member.id','=','asuransi.user_member_id')
                    ->whereIn('asuransi.id',$in_)
                    ->whereBetween('asuransi.enddate', [$date, $dateEnd1]);
                    //->where('asuransi.enddate', '>=', $dateEnd)
                    //->where('asuransi.enddate', '<=', $date)
                                    
        }
        if($this->statuskeyword == 2) {
            $data = $data->join('asuransi','user_member.id','=','asuransi.user_member_id')
                    ->whereIn('asuransi.id',$in_)
                    ->whereBetween('asuransi.enddate', [$date, $dateEnd2]);
                    //->where('asuransi.enddate', '>=', $dateEnd)
                    //->where('asuransi.enddate', '<=', $date)
        }
        $dataNot = \App\Models\Asuransi::select('user_member_id')->orderBy('id','ASC');
        if($this->statuskeyword == 3) {
             $data = $data->whereNotIn('user_member.id',$dataNot);
        }
        if($this->statuskeyword == 4) {
             $data = $data;
        }

        foreach($data->get() as $k => $i){
            $objPHPExcel->setActiveSheetIndex(0)
                ->setCellValue('A'.$num,($k+1))
                ->setCellValue('B'.$num,"'".$i->Id_Ktp)
                ->setCellValue('C'.$num,$i->name)
                ->setCellValue('D'.$num,isset($i->kota->name)?$i->kota->name:'')
                ->setCellValue('E'.$num,$i->jenis_kelamin)
                ->setCellValue('F'.$num,$i->phone_number)
                ->setCellValue('G'.$num,date('d-M-Y',strtotime($i->tanggal_lahir)))
                ->setCellValue('H'.$num,'')
                ->setCellValue('I'.$num,'')
                ->setCellValue('J'.$num,'17600000')
                ->setCellValue('K'.$num,hitung_umur($i->tanggal_lahir))
                ->setCellValue('L'.$num,'')
                ->setCellValue('M'.$num,'2,84')
                ->setCellValue('N'.$num,'50000')
                ->setCellValue('O'.$num,'FC');
            $objPHPExcel->getActiveSheet()->getStyle('J'.$num)->getNumberFormat()->setFormatCode('#,##0');
            $objPHPExcel->getActiveSheet()->getStyle('N'.$num)->getNumberFormat()->setFormatCode('#,##0');
            $num++;
        }
        $objPHPExcel->setActiveSheetIndex(0);

        $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($objPHPExcel, "Xlsx");

        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="asuransi-' .date('d-M-Y') .'.xlsx"');
        header('Cache-Control: max-age=0');
        header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
        header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
        header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
        header ('Pragma: public'); // HTTP/1.0
        return response()->streamDownload(function() use($writer){
            $writer->save('php://output');
        },'asuransi-' .date('d-M-Y') .'.xlsx');        
    }

}
