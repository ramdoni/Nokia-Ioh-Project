<?php

namespace Tests\Mock\Postpaid;

class InquiryPostpaidMock
{
    public static function getBPJSSuccessMock()
    {
        return [
            'data' => [
                'tr_id' => 1,
                'code' => 'BPJS',
                'hp' => '8801234560001',
                'tr_name' => 'Test',
                'period' => '02',
                'nominal' => 50000,
                'admin' => 2500,
                'ref_id' => 'refid123',
                'response_code' => '00',
                'message' => 'INQUIRY SUCCESS',
                'price' => 52500,
                'selling_price' => 52300,
                'desc' => [
                    'kode_cabang' => '0901',
                    'nama_cabang' => 'JAKARTA PUSAT',
                    'sisa_pembayaran' => '0',
                    'jumlah_peserta' => '2'
                ]
            ],
            'meta' => []
        ];
    }

    public static function getPDAMSuccessMock()
    {
        return [
            'data' => [
                'tr_id' => 1,
                'code' => 'PDAM',
                'hp' => '8801234560001',
                'tr_name' => 'Test',
                'period' => '202105',
                'nominal' => 50000,
                'admin' => 2500,
                'ref_id' => 'refid123',
                'response_code' => '00',
                'message' => 'INQUIRY SUCCESS',
                'price' => 52500,
                'selling_price' => 52300,
                'desc' => []
            ],
            'meta' => []
        ];
    }
}