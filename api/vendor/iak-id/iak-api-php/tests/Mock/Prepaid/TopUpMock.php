<?php

namespace Tests\Mock\Prepaid;

class TopUpMock
{
    public static function getTopUpMock()
    {
        return [
            'data' => [
                'ref_id' => 'refid123',
                'status' => 0,
                'product_code' => 'htelkomsel10000',
                'customer_id' => '081357922222',
                'price' => 10850,
                'message' => 'PROCESS',
                'balance' => '99989150',
                'tr_id' => 1,
                'rc' => '39'
            ]
        ];
    }
}