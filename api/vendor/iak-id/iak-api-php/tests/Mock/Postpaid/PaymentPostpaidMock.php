<?php

namespace Tests\Mock\Postpaid;

class PaymentPostpaidMock
{
    public static function getSuccessMock()
    {
        return [
            'data' => [
                'tr_id' => 1,
                'code' => 'PDAM',
                'datetime' => '20180803170750',
                'hp' => '8801234560001',
                'tr_name' => 'Test',
                'period' => '202105',
                'nominal' => 50000,
                'admin' => 2500,
                'response_code' => '00',
                'message' => 'PAYMENT SUCCESS',
                'price' => 52500,
                'selling_price' => 52300,
                'balance' => 999490800,
                'noref' => '148732328035714773',
                'ref_id' => 'refid123',
                'desc' => []
            ],
            'meta' => []
        ];
    }
}