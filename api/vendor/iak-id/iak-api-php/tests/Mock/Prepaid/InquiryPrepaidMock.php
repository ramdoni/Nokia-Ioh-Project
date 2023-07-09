<?php

namespace Tests\Mock\Prepaid;

class InquiryPrepaidMock
{
    public static function getGameIDMock()
    {
        return [
            'data' => [
                'username' => 'budi',
                'status' => 1,
                'message' => 'SUCCESS',
                'rc' => '00'
            ]
        ];
    }

    public static function getGameServerMock()
    {
        return [
            'data' => [
                'servers' => [
                    [
                        'name' => 'Test 1',
                        'value' => '90001'
                    ],
                    [
                        'name' => 'Test 2',
                        'value' => '90002'
                    ]
                ],
                'status' => 1,
                'message' => 'SUCCESS',
                'rc' => '00'
            ]
        ];
    }

    public static function getPLNMock()
    {
        return [
            'data' => [
                'status' => 1,
                'customer_id' => '12345678901',
                'meter_no' => '548933889287',
                'subscriber_id' => '12345678901',
                'name' => 'Test PLN',
                'segment_power' => 'R1M /000000900',
                'message' => 'SUCCESS',
                'rc' => '00'
            ]
        ];
    }
}