<?php

namespace App\Http\Controllers;

use App\Models\UserMember;
use App\Models\Iuran;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class UserMemberController extends Controller
{
    public function printMember($id)
    {   
        $pdf = \App::make('dompdf.wrapper');
        $data = \App\Models\UserMember::find($id);
        $pdf->loadView('user-member.print-member',['data'=>$data])->setPaper('a4', 'potrait');
        
        return $pdf->stream();
    }

    public function qrcode()
    {
        QrCode::format('png')->size(400)->generate(get_setting('no_koperasi'), '../public/qrcode.png');

        $pdf = \App::make('dompdf.wrapper');

        $pdf->loadView('user-member.qrcode');

        return $pdf->stream();
    }

    public function printIuran(UserMember $id,$tahun)
    {   
        $pdf = \App::make('dompdf.wrapper');

        $data = $id;
        $iuran = Iuran::where(['user_member_id'=>$data->id,'status'=>2,'tahun'=>$tahun])->orderBy('bulan','DESC')->first();
        $from_periode = '';
        $to_periode = '';
        $totalMonth = 12;
        if($iuran){
            if(date('m',strtotime("+1 months",strtotime("{$tahun}-{$iuran->bulan}-01"))) == 12){
                $totalMonth = 1;
                $from_periode = date('Y-m-d',strtotime("{$tahun}-12-1"));
                $to_periode = date('Y-m-d',strtotime("{$tahun}-12-1"));
            }else{
                $from_periode = date('Y-m-d',strtotime("{$tahun}-{$iuran->bulan}-01"));
                $to_periode = date('Y-m-d',strtotime("{$tahun}-12-1"));
                $totalMonth = countMount($from_periode, $to_periode);
            }    
        }else{
            $from_periode = date("Y-m-d",strtotime("{$tahun}-01-01"));
            $to_periode = date('Y-m-d',strtotime("+ 12 MONTHS"));
        }
        

        // // jika tahun uang pendaftaran = tahun pengecekan ke bulannya di end periode
        // $tahunPendaftaran = \App\Models\Iuran::where('user_member_id',$id)->where('type','Uang Pendaftaran')->whereYear('iuran.to_periode','=',$tahun)->first();
        // if($tahunPendaftaran)
        // {
        //     $endDate = $tahunPendaftaran->to_periode;
        //     $endYear = '01-12-'.$tahun;
        //     $data = \App\Models\UserMember::where('id',$id)->first();
        //     $data->from_periode = date('Y-m-d',strtotime("+1 months",strtotime($endDate)));
        //     $data->to_periode = date('Y-m-d', strtotime($endYear));
        //     $totalMonth = getTotalMonth($data->from_periode, $data->to_periode);
        //     $data->totalMonth = $totalMonth;
        //     $data->totalIuran = $totalMonth*10000; 
        // }
        // //jika tahun uang pendaftaran > tahun maka data null
        // $tahunBefore = \App\Models\Iuran::where('user_member_id',$id)->where('type','Uang Pendaftaran')->whereYear('iuran.to_periode','>',$tahun)->first();
        // if($tahunBefore)
        // {
        //     exit();
        // }

        // //jika tahun uang pendaftaran < tahun, maka tulis jan -des
        // $tahunAfter = \App\Models\Iuran::where('user_member_id',$id)->where('type','Uang Pendaftaran')->whereYear('iuran.to_periode','<',$tahun)->first();
        // if($tahunAfter){
            
        //     $data = \App\Models\UserMember::where('id',$id)->first();
        //     $data->from_periode = '01-01-'.$tahun;
        //     $data->to_periode = '01-12-'.$tahun;
        //     $totalMonth = getTotalMonth($data->from_periode, $data->to_periode);
        //     $data->totalMonth = $totalMonth;
        //     $data->totalIuran = $totalMonth*10000;

        // }
        
        $pdf->loadView('user-member.print-iuran',['data'=>$data, 'iuran'=>$iuran, 'total_month'=>$totalMonth,'tahun'=>$tahun,'from_periode'=>$from_periode,'to_periode'=>$to_periode]);

        return $pdf->stream();
    }

    public function exportMember()
    {
        $filename = 'member.xlsx';
     // here is generated a "normal" file download response of Laravel
        return Excel::download(new CustomExcelExport(), $filename);
    }
}
