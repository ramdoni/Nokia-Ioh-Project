<?php

namespace Tests\Mock\Postpaid;

class CheckStatusMock
{
    public static function getSuccessStatusMock()
    {
        return [
            'data' => [
                'tr_id' => 1,
                'code' => 'CODE',
                'datetime' => '20180803171608',
                'hp' => '08123123123',
                'tr_name' => 'Test',
                'period' => '202105,202106',
                'nominal' => 120000,
                'admin' => 7500,
                'ref_id' => 'refid12',
                'status' => 0,
                'response_code' => '00',
                'message' => 'PAYMENT SUCCESS',
                'price' => 127500,
                'selling_price' => 126000,
                'balance' => 981230000,
                'desc' => []
            ],
            'meta' => []
        ];
    }
}