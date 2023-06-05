<html>
    <head>
        <title>FORMULIR PENGAJUAN PEMBAYARAN MANFAAT ASURANSI - FORM NO : {{$klaim->form_no}} / {{$member->name}} / {{$member->no_anggota_platinum}}</title>
    </head>
    <style>
        body { 
            font-family: Arial, Helvetica, sans-serif; 
            font-size: 13px; 
        }
        .table-detail tr td:first-child{
            text-align: center;
        }
    </style>
    <body>
        <table style="width:100%;">
            <tr>
                <td style="text-align: left">NO :</td>
                <td style="text-align: right"><h2>CR-1</h2></td>
            </tr>
        </table>
        <div style="text-align:center;margin-bottom:20px;">
            <h3>FORMULIR PENGAJUAN PEMBAYARAN MANFAAT ASURANSI<br />
                (KLAIM MENINGGAL DUNIA)
            </h3>
        </div>
        <div>
            <span>Yang Bertanda tangan dibawah ini : </span>
            <table style="margin-left:20px;">
                <tr>
                    <td>Nama </td>
                    <td> : {{get_setting('pic_nama')}}</td>
                    <td><i>({{get_setting('pic_jenis_kelamin')}})*</i></td>
                </tr>
                <tr>
                    <td>Tempat/Tanggal Lahir </td>
                    <td> : {{get_setting('pic_tempat_lahir')}} / {{date('d M Y',strtotime(get_setting('pic_tanggal_lahir')))}}</td>
                    <td>Umur : {{hitung_umur(get_setting('pic_tanggal_lahir'))}} Tahun</td>
                </tr>
                <tr>
                    <td>Alamat </td>
                    <td> : {{get_setting('pic_alamat')}}</td>
                </tr>
                <tr>
                    <td>No Telp </td>
                    <td> : Kantor : {{get_setting('phone')}} HP : {{get_setting('pic_nomor_telp')}}</td>
                </tr>
            </table>
            <span style="margin-left:22px;"> Hubungan dengan Tertanggung(Almarhum/h) : <i>Istri / Suami / Anak / Orang Tua / Lainnya</i> </span>
        </div>
        <p>Dengan ini mengajukan permohonan pembayaran Manfaat Asuransi,atas nama : </p>
        <table style="margin-left:20px;" class="table-detail">
            <tr>
                <td style="width: 5px;">1. </td>
                <td style="width:40%;">Nama Tertanggung (Almarhum) </td>
                <td> : {{$member->name}}</td>
                <td>({!!$member->jenis_kelamin=="Laki-laki" ? "Pria/<strike>Wanita</strike>" : "<strike>Pria</strike>/Wanita"!!})</td>
            </tr>
            <tr>
                <td>2. </td>
                <td>Tempat/Tanggal Lahir </td>
                <td> : {{$member->tempat_lahir}} / {{date('d F Y',strtotime($member->tanggal_lahir))}}</td>
                <td>Umur : {{hitung_umur($member->tanggal_lahir)}} Tahun</td>
            </tr>
            <tr>
                <td>3. </td>
                <td>Nomor Polis </td>
                <td colspan="2"> : {{isset($asuransi->policyno) ? $asuransi->policyno : ''}}</td>
            </tr>
            <tr>
                <td>4. </td>
                <td>Pemegang Polis </td>
                <td colspan="2"> : {{isset($asuransi->partnername) ? $asuransi->partnername : ''}}</td>
            </tr>
            <tr>
                <td>5. </td>
                <td>Nomor Peserta </td>
                <td colspan="2"> : {{isset($asuransi->membernostr) ? $asuransi->membernostr : ''}}</td>
            </tr>
            <tr>
                <td>6. </td>
                <td>Jenis Manfaat Asuransi </td>
                <td colspan="2"> : Tetap/*</td>
            </tr>
            <tr>
                <td>7. </td>
                <td>Uang Pertanggungan</td>
                <td colspan="2"> : Rp. {{isset($asuransi->up) ? format_idr($asuransi->up) : ''}}</td>
            </tr>
            <tr>
                <td>8. </td>
                <td>Nilai Klaim yang diajukan </td>
                <td colspan="2"> : Rp. {{format_idr($klaim->total)}}</td>
            </tr>
            <tr>
                <td>9. </td>
                <td>Tanggal Meninggal </td>
                <td colspan="2"> : {{date('d/m/Y',strtotime($klaim->tgl_kematian))}}</td>
            </tr>
            <tr>
                <td>10. </td>
                <td>Sebab Meninggal </td>
                <td colspan="2"> : 
                    @foreach(['Sakit','Kecelakaan','Tindak Kriminal','Lainnya'] as $val)
                        @if($val==$klaim->sebab_meninggal)
                            {{$val}} /
                        @else
                            <strike>{{$val}} / </strike>
                        @endif
                    @endforeach
                </td>
            </tr>
            <tr>
                <td>11. </td>
                <td>Tempat Meninggal </td>
                <td colspan="2"> : 
                    @foreach(['Rumah','Rumah Sakit','Perjalanan','Luar Negeri','Lainnya'] as $val)
                        @if($val==$klaim->tempat_meninggal)
                            {{$val}} /
                        @else
                            <strike>{{$val}} /</strike>
                        @endif
                    @endforeach
                </td>
            </tr>
            <tr>
                <td>12. </td>
                <td colspan="3">Jika Meninggal Karena Sakit, Sakit apa dan sejak kapan ? : {!!"<u>".$klaim->sakit_apa_dan_sejak_kapan."</u>"!!}</td>
            </tr>
            <tr>
                <td>13. </td>
                <td colspan="3">Jika meninggal di Rumah Sakit, Rumah Sakit apa? RS St. Elisabeth Semarang</td>
            </tr>
            <tr>
                <td>14. </td>
                <td colspan="3">Berikan gambaran secara singkat & jelas mengenai gejala/kejadian meninggalnya, atau jika meninggal karena kecelakaan berikan kronologis terjadinya kecelakaan : {!!"<u>{$klaim->gambaran_singkat}</u>"!!}</td>
            </tr>
        </table>
        <p><strong>Dokumen yang perlu dilengkapi :</strong></p>
        <ol style="list-style-type:none">
            <li> - Fotocopy Identitas diri Tertanggung (ktp/SIM/passpor)*</li>
            <li> - Fotocopy Identitas diri Ahli Waris atau yang mewakili (beserta surat kuasa dari ahli waris)</li>
            <li> - Surat keterangan meninggal dari instansi pemerintah yang berwenang atau kelurahan (atau akte kematian)</li>
            <li> - Jika meninggal di Rumah Sakit, lampirkan Surat Keterangan sebab kematian atau resume medis dari dokter</li>
            <li> - Jika meninggal karena kecelakaan, lampirkan Surat Keterangan Kecelakaan dari kepolisian </li>
            <li> - Jika meninggal tidak wajar/kriminal, lampirkan surat Visum et repertum</li>
            <li> - Dokumen lain bila diperlukan</li>
        </ol>
        <p>Semarang, {{date('d',strtotime($asuransi->tanggal_klaim))}} {{getMonthName(date('m',strtotime($asuransi->tanggal_klaim)))}} {{date('Y',strtotime($asuransi->tanggal_klaim))}}</p>
        <br />
        @if(get_setting('pic_tanda_tangan'))
            <img src="{{ public_path()."/".get_setting('pic_tanda_tangan')}}" style="width:150px;" />
        @else
            <br />
            <br />
            <br />
            <br />
        @endif
        <p><strong>(IM Haryanto B)</strong></p>
        <p>Penerima Manfaat/Ahli Waris<br />
            Catatan : - Formulir klaim harap diisi lengkap, jujur dan benar dengan melampirkan dokumen klaim yang diperjanjikan <br />
            - )* coret yang tidak perlu
        </p>
    </body>
</html>