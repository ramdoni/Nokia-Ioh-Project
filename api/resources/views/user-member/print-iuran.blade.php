<html>
<head>
<title>{{$data->name}}</title>
<style type="text/css">
    @page {
        size: 8cm 23.5cm;  potrait; 
        margin:0 10px; 
    }
    body { 
        font-family: Arial, Helvetica, sans-serif; 
        font-size: 12px; 
    }
    .break {
        page-break-before: always;
    }
    .logo {
        height: 5cm;
        border-bottom:3px dotted #eee;
    }
    .page-4cm {
        height: 4cm;
        border-bottom:3px dotted #eee;
        padding-left:20px;padding-right:20px;
        padding-top:3px;
        padding-bottom:0;
    }
    .page-45cm {
        height: 5cm;
        border-bottom:3px dotted #eee;
        padding-left:20px;padding-right:20px;
        padding-top:3px;
        padding-bottom:0;
    }
    .page-4cm table tr td,
    .page-4cm table tr th {
        font-size:9px !important;
        padding-top:0;
        padding-bottom:0;
    }
    .page-45cm table tr td,
    .page-45cm table tr th {
        font-size:10px !important;
        padding-top:0;
        padding-bottom:0;
    }
    .table_header tr th {
        text-align:left;
        padding-bottom:0;
        padding-top:0;
    }
</style>
</head>
<body>
    <div class="logo">
        <div class="" style="margin-left:2.5cm;padding-top:1.4cm">
            <img src="{{get_setting('logo',true)}}" style="height:25px;" />
        </div>
        <div style="padding-left:20px;padding-right:20px;">
            <h3 style="padding:0;margin:0"><b>{{$tahun}}</b></h3>
            <table class="table_header" style="width:100%;">
                <tr>
                    <th>No Anggota</th>
                    <th> : {{$data->no_anggota_platinum}}</th>
                </tr>
                <tr>
                    <th>Nama</th>
                    <th> : {{$data->name}}</th>
                </tr>
                <tr>
                    <th>Alamat</th>
                    <th> : {{$data->address}}</th>
                </tr>
                <tr>
                    <th>Kota</th>
                    <th> : {{isset($data->kota->name) ? $data->kota->name : ''}}</th>
                </tr>
            </table>
        </div>
    </div>
    @php($monthNum=1)
   
    @if($total_month <3)
        
        <div class="page-4cm">
            <p style="font-size:14px;margin-bottom:0;padding-bottom:0;margin-top:0;padding-top:0">Bukti Pembayaran Iuran YS St.Maria<</p>
            <table style="width:100%;">
                <tr>
                    <td>No Anggota</td>
                    <td> : {{$data->no_anggota_platinum}}</td>
                    <td>{{date('d/m/Y')}}</td>
                </tr>
                <tr>
                    <td>Nama</td>
                    <td colspan="2"> : {{$data->name}}</td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td colspan="2"> : {{$data->address}}</td>
                </tr>
                <tr>
                    <td style="text-align:right;font-size:8px !important">IURAN</td>
                    <td style="font-size:11px !important" colspan="2"> : Rp. 8.000,-</td>
                </tr>
                <tr>
                    <td style="text-align:right;font-size:8px !important">Sumbangan</td>
                    <td style="font-size:8px !important" colspan="2"><u>: Rp. 2.000,-</u>
                        <br >Rp. 10.000,-/ bulan
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right;">
                        @php($totalLoopMonth=0)
                        @php($monthNum=(int)date('m',strtotime($from_periode)))
                        @if($monthNum==12)
                            <strong>Desember {{$tahun}}</strong>
                            @php($totalLoopMonth++)
                        @else
                            @php($lastLoop=12)
                            @for($b=3;$b>0;$b--)
                                @if($lastLoop <= (int)$monthNum) 
                                    @continue
                                @endif
                                <strong>{{ date('F', mktime(0, 0, 0, $lastLoop, 10)) }} {{$tahun}}</strong><br />
                                @php($totalLoopMonth++)
                                @php($lastLoop--)
                            @endfor
                        @endif
                    </td>
                    <td style="text-align:right;" colspan="2"><h3> Rp. {{format_idr($totalLoopMonth*10000)}},-</h3></td>
                </tr>
            </table>
        </div>
    @else
        @php($sisaBagi = $total_month%3)
        @php($total = floor($total_month / 3) + ($sisaBagi!=0?1 : 0) )
        @php($monthNum=(int)date('m',strtotime($from_periode)))
        @php($monthNum = $monthNum!=1?($monthNum+1):$monthNum)
        @php($lastLoop=12)
        
        @for($bulan=1;$bulan<=$total;$bulan++)
            @if(date('Y',strtotime($data->tanggal_diterima))>=$tahun and (int)date('m',strtotime($data->tanggal_diterima))>$lastLoop)
                @continue
            @endif
            
            <div class="{{$bulan==4? 'page-45cm': 'page-4cm'}}">
                <p style="text-align: center;font-size:14px;margin-bottom:0;padding-bottom:0;margin-top:0;padding-top:0">Bukti Pembayaran Iuran YS St.Maria<</p>
                <table style="width:100%;">
                    <tr>
                        <td>No Anggota</td>
                        <td> : {{$data->no_anggota_platinum}}</td>
                        <td>{{date('d/m/Y')}}</td>
                    </tr>
                    <tr>
                        <td>Nama</td>
                        <td colspan="2"> : {{$data->name}}</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td colspan="2"> : {{$data->address}}</td>
                    </tr>
                    <tr>
                        <td style="text-align:right;font-size:8px !important">IURAN</td>
                        <td style="font-size:11px !important" colspan="2"> : Rp. 8.000,-</td>
                    </tr>
                    <tr>
                        <td style="text-align:right;font-size:8px !important">Sumbangan</td>
                        <td style="font-size:8px !important" colspan="2"><u>: Rp. 2.000,-</u>
                            <br >Rp. 10.000,-/ bulan
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align:right;">
                            @php($totalLoopMonth=0)
                            @for($b=3;$b>0;$b--)
                                
                                @if(date('Y',strtotime($data->tanggal_diterima))>=$tahun and (int)date('m',strtotime($data->tanggal_diterima))>$lastLoop)
                                    @continue
                                @endif
                                
                                @if($lastLoop < (int)$monthNum) 
                                    @continue
                                @endif
                                <strong>{{ date('F', mktime(0, 0, 0, $lastLoop, 10)) }} {{$tahun}}</strong><br />
                                @php($totalLoopMonth++)
                                @php($lastLoop--)
                            @endfor
                        </td>
                        <td style="text-align:right;" colspan="2"><h3> Rp. {{format_idr($totalLoopMonth*10000)}},-</h3></td>
                    </tr>
                </table>   
            </div>
        @endfor
    @endif
</body>
</html>