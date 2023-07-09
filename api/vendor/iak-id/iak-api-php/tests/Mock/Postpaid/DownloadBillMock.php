<?php

namespace Tests\Mock\Postpaid;

class DownloadBillMock
{
    public static function getSuccessMock()
    {
        return [
            'data' => [
                'HEADER' => 'STRUK PEMBAYARAN BPJS Kesehatan',
                'NO REFERENSI' => '148732328035714773',
                'TANGGAL' => '2021-05-27 18:56:01',
                'NO. RESI' => '148732328035714773',
                'NAMA PRODUK' => 'BPJS Kesehatan',
                'JUMLAH PESERTA' => '2 ORANG',
                'SISA SBLMNYA' => 'Rp 0',
                'PERIODE' => '2 BULAN',
                'ID PELANGGAN' => '8801234560001',
                'NAMA' => 'Test',
                'JUMLAH TAGIHAN' => 'Rp 50.000',
                'ADMIN' => 'Rp 2.500'
            ]
        ];
    }
}