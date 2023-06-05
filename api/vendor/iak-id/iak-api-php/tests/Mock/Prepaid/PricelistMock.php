<?php

namespace Tests\Mock\Prepaid;

class PricelistMock
{
    public static function getPricelistMock()
    {
        return [
            'data' => [
                [
                    'product_code' => 'alfamart100',
                    'product_description' => 'Alfamart Voucher',
                    'product_nominal' => 'Voucher Alfamart Rp 100.000',
                    'product_details' => '-',
                    'product_price' => 100000,
                    'product_type' => 'voucher',
                    'active_period' => '0',
                    'status' => 'active',
                    'icon_url' => 'https =>//cdn.mobileproduct.net/img/product/operator_list/140119034649-Alfa-01.png'
                ],
                [
                    'product_code' => 'altel10',
                    'product_description' => 'Malaysia Topup',
                    'product_nominal' => '10',
                    'product_details' => '-',
                    'product_price' => 39750,
                    'product_type' => 'malaysia',
                    'active_period' => '0',
                    'status' => 'active',
                    'icon_url' => '-'
                ],
                [
                    'product_code' => 'altel100',
                    'product_description' => 'Malaysia Topup',
                    'product_nominal' => '100',
                    'product_details' => '-',
                    'product_price' => 397500,
                    'product_type' => 'malaysia',
                    'active_period' => '0',
                    'status' => 'active',
                    'icon_url' => '-'
                ]
            ]
        ];
    }
}