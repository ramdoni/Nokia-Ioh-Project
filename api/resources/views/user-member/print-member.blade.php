<html>
<head>
<title>a</title>
<style type="text/css">
    @page {
        size: A4;
        margin: 15;
    }
<!--
body 
    { font-family: Times New Roman; font-size: 14px; }
    .pos { position: absolute; z-index: 0; left: 0px; top: 0px }
-->
</style>
</head>
<body >
<nobr><nowrap>
    <div class="pos" id="_0:0" style="top:0">
        <img name="_1170:827" src="{{ public_path('storage/Logo-santa.jpg')}}" height="70" width="70" border="0" usemap="#Map">
    </div>
    <div class="pos" id="_156:37" style="left:70" >
        <span id="_16.2" style=" font-size:16px; color:#000000">Yayasan Sosial  </span>
    </div>
    <div class="pos" id="_405:37" style="left:300">
        <span id="_16.2" style="font-weight:bold; font-size:14px; color:#000000"><u>FORMULIR PERMOHONAN MENJADI ANGGOTA</u>
    </span>
    </div>
    <div class="pos" id="_662:56" style="top:25;left:450">
        <span id="_14.9" style="font-size:13px; color:#000000"> Form No : {{$data->no_form}}</span>
    </div>
    <div class="pos" id="_106:94" style="top:35;left:70">
        <span id="_21.7" style="font-weight:bold; font-size:20px; color:#000000"> SANTA MARIA</span>
    </div>
    <div class="pos" id="_27:117" style="top:55;left:0">
        <span id="_13.5" style=" font-size:13px; color:#000000"> Sekretariat: Jl. Citarum Tengah Ruko E-1</span>
    </div>
    <div class="pos" id="_77:133" style="top:68;left:48">
        <span id="_13.5" style="font-size:13px; color:#000000"> Telp. 024-354 4085 Semarang 50126</span>
    </div>
    <div class="pos" id="_400:126" style="top:68;left:300">
        <span id="_14.9" style="font-size:14px; color:#000000"> No. Anggota : {{$data->no_anggota_platinum}}</span>
    </div>
    <div class="pos" id="_19:168" style="top:90;left:0">
        <span id="_14.9" style="font-weight:bold; font-size:14px; color:#000000"> DATA CALON ANGGOTA</span>
    </div>
     <div class="pos" id="_656:387" style="top:90;left:450">
        <table border="1" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td>
                        <img name="_1170:827" src="{{ public_path('storage/'.$data->pas_foto)}}" style="width: 80; height: 120">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="pos" id="_19:187" style="top:105;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000"> (Mohon ditulis dengan <span style="font-weight:bold"> HURUF CETAK</span> ) </span>
    </div>
    <div class="pos" id="_17:217" style="top:120;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">Nama ( sesuai KTP )</span>
    </div>
    <div class="pos" id="_243:217" style="top:120;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->name}}</span>
    </div>
    <div class="pos" id="_17:235" style="top:135;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">Nama yang dicantumkan di KTA</span>
    </div>
    <div class="pos" id="_243:235" style="top:135;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->name_kta}}</span>
    </div>
    <div class="pos" id="_17:252" style="top:150;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">Tempat, Tgl. Lahir</span>
    </div>
    <div class="pos" id="_243:252" style="top:150;left:150">
    <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->tempat_lahir}} , {{$data->tanggal_lahir}}</span>
    </div>
    <div class="pos" id="_17:270" style="top:165;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">Alamat</span>
    </div>
    <div class="pos" id="_243:270" style="top:165;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->address}}</span>
    </div>
    <div class="pos" id="_17:287" style="top:180;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">Kota</span>
    </div>
    <div class="pos" id="_243:287" style="top:180;left:150">
    <span id="_14.9" style="font-size:14px; color:#000000">: {{isset($data->kota->name)?$data->kota->name:''}}</span>
    </div>
    <div class="pos" id="_17:305" style="top:195;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">No. KTP.</span>
    </div>
    <div class="pos" id="_243:305" style="top:195;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->Id_Ktp}}</span>
    </div>
    <div class="pos" id="_469:305" style="top:195;left:300">
        <span id="_14.9" style="font-size:14px; color:#000000">L/P :</span>
    </div>
    <div class="pos" id="_568:305" style="top:195;left:330">
        <span id="_14.9" style="font-size:14px; color:#000000">{{$data->jenis_kelamin}} </span>
    </div>
    <div class="pos" id="_17:322" style="top:210;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">No Telp. / HP</span>
    </div>
    <div class="pos" id="_243:322" style="top:210;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->phone_number}}</span>
    </div>
    <div class="pos" id="_469:322" style="top:210;left:300">
        <span id="_14.9" style="font-size:14px; color:#000000">Gol. Darah :</span>
    </div>
    <div class="pos" id="_568:322" style="top:210;left:355">
        <span id="_14.9" style="font-size:14px; color:#000000">{{$data->blood_type}}</span>
    </div>
    <div class="pos" id="_19:357" style="top:230;left:0">
        <span id="_14.9" style="font-weight:bold; font-size:14px; color:#000000"> DATA AHLI WARIS / SAKSI DARI YANG BERNAMA. DIATAS SEBAGAI ANGGOTA</span>
    </div>
    <div class="pos" id="_17:387" style="top:245;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">1. Nama ( sesuai KTP )</span>
    </div>
    <div class="pos" id="_237:387" style="top:245;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->name_waris1}}</span>
    </div>
    <div class="pos" id="_656:387" style="top:245;left:400">
        <table border="1" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td style="width: 100%;">
                        <div style="text-align: center;">
                            @if(isset($data->foto_ktpwaris1))
                                <input type="checkbox" checked="checked">
                            @else
                                <input type="checkbox"/>
                            @endif
                        Fotocopy KTP
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 100%;">
                        <div style="text-align: center;">Tanda Tangan</div>
                        <div data-empty="true" style="text-align: center;"><br></div>
                        <div data-empty="true" style="text-align: center;"><br></div>
                        <div style="text-align: center;">(..............................)</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="pos" id="_17:406" style="top:245;left:400">
        <span id="_14.9" style="font-size:14px; color:#000000">
     </span>
    </div>
    <div class="pos" id="_43:406" style="top:260;left:10">
        <span id="_14.9" style="font-size:14px; color:#000000">Tempat, Tgl. Lahir</span>
    </div>
    <div class="pos" id="_237:406" style="top:260;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->tempat_lahirwaris1}} , {{$data->tanggal_lahirwaris1}}</span>
    </div>
    <div class="pos" id="_43:424" style="top:275;left:10">
        <span id="_14.9" style="font-size:14px; color:#000000">Alamat</span>
    </div>
    <div class="pos" id="_237:424" style="top:275;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->address_waris1}}</span>
    </div>
    <div class="pos" id="_111:123" style="top:290;left:10">
        <span id="_14.9" style="font-size:14px; color:#000000">No. KTP</span>
    </div>
    <div class="pos" id="_237:442" style="top:290;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->Id_Ktpwaris1}}</span>
    </div>
    <div class="pos" id="_43:461" style="top:305;left:10">
        <span id="_14.9" style="font-size:14px; color:#000000">No Telp. / HP</span>
    </div>
    <div class="pos" id="_237:461" style="top:305;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->phone_numberwaris1}}</span>
    </div>
    <div class="pos" id="_457:461" style="top:305;left:300">
        <span id="_14.9" style="font-size:14px; color:#000000">L/P :</span>
    </div>
    <div class="pos" id="_552:461" style="top:305;left:330">
        <span id="_14.9" style="font-size:14px; color:#000000">{{$data->jenis_kelaminwaris1}} </span>
    </div>
    <div class="pos" id="_43:479" style="top:320;left:10">
        <span id="_14.9" style="font-size:14px; color:#000000">Hubungan dengan anggota</span>
    </div>
    <div class="pos" id="_237:479" style="top:320;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->hubungananggota1}}</span>
    </div>
    <div class="pos" id="_457:479" style="top:320;left:300">
        <span id="_14.9" style="font-size:14px; color:#000000">Gol. Darah :</span>
    </div>
    <div class="pos" id="_1:1" style="top:320;left:355">
        <span id="_14.9" style="font-size:14px; color:#000000">{{$data->blood_typewaris1}}</span>
    </div>
    <div class="pos" id="_17:515" style="top:340;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">2. Nama ( sesuai KTP )</span>
    </div>
    <div class="pos" id="_237:515" style="top:340;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->name_waris2}}</span>
    </div>
    <div class="pos" id="_656:515" style="top:340;left:400">
        <table border="1" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td style="width: 100%;">
                        <div style="text-align: center;">
                            @if(isset($data->foto_ktpwaris2))
                                <input type="checkbox" checked="checked">
                            @else
                                <input type="checkbox"/>
                            @endif
                        Fotocopy KTP
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 100%;">
                        <div style="text-align: center;">Tanda Tangan</div>
                        <div data-empty="true" style="text-align: center;"><br></div>
                        <div data-empty="true" style="text-align: center;"><br></div>
                        <div style="text-align: center;">(..............................)</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="pos" id="_17:534" style="top:340;left:400">
        <span id="_14.9" style="font-size:14px; color:#000000"></span>
    </div>
    <div class="pos" id="_43:534" style="top:355;left:10">
        <span id="_14.9" style="font-size:14.9px; color:#000000">Tempat, Tgl. Lahir</span>
    </div>
    <div class="pos" id="_237:534" style="top:355;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->tempat_lahirwaris2}} , {{$data->tanggal_lahirwaris2}}</span>
    </div>
    <div class="pos" id="_43:552" style="top:370;left:10">
        <span id="_14.9" style="font-size:14px; color:#000000">Alamat</span>
    </div>
    <div class="pos" id="_237:552" style="top:370;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->address_waris2}}</span>
    </div>
    <div class="pos" id="_43:570" style="top:385;left:10">
        <span id="_14.9" style="font-size:14px; color:#000000">No. KTP</span>
    </div>
    <div class="pos" id="_237:570" style="top:385;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->Id_Ktpwaris2}}</span>
    </div>
    <div class="pos" id="_43:588" style="top:400;left:10">
        <span id="_14.9" style="font-size:14px; color:#000000">No Telp. / HP</span>
    </div>
    <div class="pos" id="_237:588" style="top:400;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->phone_numberwaris2}}</span>
    </div>
    <div class="pos" id="_457:588" style="top:400;left:300">
        <span id="_14.9" style="font-size:14px; color:#000000">L/P :</span>
    </div>
    <div class="pos" id="_552:588" style="top:400;left:330">
        <span id="_14.9" style="font-size:14px; color:#000000">{{$data->jenis_kelaminwaris2}} </span>
    </div>
    <div class="pos" id="_43:607" style="top:415;left:10">
        <span id="_14.9" style="font-size:14px; color:#000000">Hubungan dengan anggota</span>
    </div>
    <div class="pos" id="_237:607" style="top:415;left:150">
        <span id="_14.9" style="font-size:14px; color:#000000">: {{$data->hubungananggota2}}</span>
    </div>
    <div class="pos" id="_457:607" style="top:415;left:300">
        <span id="_14.9" style="font-size:14px; color:#000000">Gol. Darah :</span>
    </div>
    <div class="pos" id="_2:2" style="top:415;left:355">
        <span id="_14.9" style="font-size:14px; color:#000000">{{$data->blood_typewaris2}}</span>
    </div>

    <div class="pos" id="_17:655" style="top:450;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">Lampiran : </span>
    </div>
    <div class="pos" id="_231:12" style="top:450;left:100">
        <span id="_14.9" style="font-size:14px; color:#000000">
            @if(isset($data->foto_ktp))
                <input type="checkbox" checked="checked">
            @else
                <input type="checkbox"/>
            @endif
            Foto Copy KTP
        </span>
    </div>
    <div class="pos" id="_292:655" style="top:450;left:200">
        <span id="_14.9" style="font-size:14px; color:#000000">
            @if(isset($data->foto_kk))
                <input type="checkbox" checked="checked">
            @else
                <input type="checkbox"/>
            @endif
            Foto Copy KK
        </span>
    </div>
    <div class="pos" id="_450:655" style="top:450;left:300">
        <span id="_14.9" style="font-size:14px; color:#000000">
            @if(isset($data->pas_foto))
                <input type="checkbox" checked="checked">
            @else
                <input type="checkbox"/>
            @endif
            Pasphoto 4 x 6, 3 lb
        </span>
    </div>
    <div class="pos" id="_17:704" style="top:490;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">Iuran Tetap : </span>
    </div>
    <div class="pos" id="_164:704" style="top:490;left:85">
        <span id="_14.9" style="font-size:14px; color:#000000">Rp. 8.000 x {{$data->iuran_tetap}} bulan</span>
    </div>
    <div class="pos" id="_341:704" style="top:490;left:200">
        <span id="_14.9" style="font-size:14px; color:#000000"> = Rp. {{number_format($data->total_iuran_tetap)}}</span>
    </div>
    <div class="pos" id="_487:704" style="top:490;left:300">
        <span id="_14.9" style="font-size:14px; color:#000000"> (minimal 6 (enam) bulan pertama)</span>
    </div>
    <div class="pos" id="_17:722" style="top:510;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">Sumbangan : </span>
    </div>
    <div class="pos" id="_164:722" style="top:510;left:85">
        <span id="_14.9" style="font-size:14px; color:#000000">Rp. 2.000 x {{$data->sumbangan}} bulan</span>
    </div>
    <div class="pos" id="_341:722" style="top:510;left:200">
        <span id="_14.9" style=" font-family:Times New Roman; font-size:14.9px; color:#000000"> = Rp. {{number_format($data->total_sumbangan)}}</span>
    </div>
    <div class="pos" id="_487:722" style="top:510;left:300">
        <span id="_14.9" style="font-size:14px; color:#000000"> (minimal 6 (enam) bulan pertama)</span>
    </div>
    <div class="pos" id="_17:740" style="top:530;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">Uang Pendaftaran :</span>
    </div>
    <div class="pos" id="_341:740" style="top:530;left:200">
        <span id="_14.9" style="font-size:14px; color:#000000"><u>= Rp. {{number_format($data->uang_pendaftaran)}} </u></span>
    </div>
    <div class="pos" id="_487:704" style="top:530;left:300">
        <span id="_14.9" style="font-size:14px; color:#000000"> (SUKARELA, minimum Rp. 50.000,-)</span>
    </div>
    <div class="pos" id="_17:775" style="top:550;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">TOTAL PEMBAYARAN PERTAMA</span>
    </div>
    <div class="pos" id="_365:775" style="top:550;left:210">
        <span id="_14.9" style="font-size:14px; color:#000000">Rp. {{number_format($data->total_pembayaran)}}</span>
    </div>
    <div class="pos" id="_19:809" style="top:580;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">Dengan ini saya bersedia mentaati semua peraturan yang telah ditetapkan maupun yang akan ditetapkan</span>
    </div>
    <div class="pos" id="_19:828" style="top:595;left:0">
        <span id="_14.9" style="font-size:14px; color:#000000">dikemudian demi kebaikan Bersama.
    </span>
    </div>
    <div class="pos" id="_17:858" style="top:620;left:0">
        <table>
            <tbody>
                <tr>
                    <td>
                        <table>
                            <tr>
                                <td>Diterima :</td>
                            </tr>
                            <tr>
                                <td>Tgl. {{$data->tanggal_diterima}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <div>Tanda Tangan</div>
                                    <br/>
                                    <br/>
                                    <div>(...........................)</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>Diterima YS. Santa Maria</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Tgl. {{$data->tanggal_diterima}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <div>Tanda Tangan</div>
                                    <br/>
                                    <br/>
                                    <div>(...........................)</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td style="padding-left: 75">
                        <table>
                            <tr>
                                <td style="text-align: center;">Disetujui :</td>
                            </tr>
                            <tr>
                                <td style="text-align: center;">Tgl. {{$data->tanggal_diterima}}  *)</td>
                            </tr>
                            <tr>
                                <td style="text-align: center;">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div>(KETUA)</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td style="padding-left: 90">
                        <table>
                            <tr style="text-align: right;">
                                <td>Semarang,  {{date('d/m/Y')}}</td>
                            </tr>
                            <tr style="text-align: center;">
                                <td>Pemohon:</td>
                            </tr>
                            <tr style="text-align: center;">
                                <td>
                                    <div>Tanda Tangan</div>
                                    <br/>
                                    <br/>
                                    <div>({{$data->name}})</div>
                                </td>
                            </tr>
                            <br/>
                            <tr style="text-align: center;">
                                <td>
                                    <div style="font-family:Times New Roman; font-size:14px; color:#000000"> *) Sah menjadi anggota dimulai dari</div>
                                    <div style="font-family:Times New Roman; font-size:14px; color:#000000">tanggal disetujui oleh KETUA</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    
</nowrap></nobr>
</body>
</html>
