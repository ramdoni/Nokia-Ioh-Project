<?php

namespace Tests\Mock\Prepaid;

class CheckStatusMock
{
    public static function getSuccessStatusMock()
    {
        return [
            'data' => [
                'ref_id' => 'refid123',
                'status' => 1,
                'product_code' => 'htelkomsel10000',
                'customer_id' => '081357922222',
                'price' => 10850,
                'message' => 'SUCCESS',
                'balance' => '99989150',
                'tr_id' => 1,
                'rc' => '00',
                'sn' => '123456789'
            ]
        ];
    }
}