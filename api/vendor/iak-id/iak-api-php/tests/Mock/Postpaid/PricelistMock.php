<?php

namespace Tests\Mock\Postpaid;

class PricelistMock
{
    public static function getPricelistMock()
    {
        return [
            'data' => [
                'pasca' => [
                    [
                        'code' => 'AETRA',
                        'name' => 'AETRA',
                        'status' => 1,
                        'fee' => 2500,
                        'komisi' => 700,
                        'type' => 'pdam'
                    ],
                    [
                        'code' => 'BPJS',
                        'name' => 'BPJS Kesehatan',
                        'status' => 1,
                        'fee' => 2000,
                        'komisi' => 100,
                        'type' => 'bpjs'
                    ]
                ]
            ],
            'meta' => []
        ];
    }
}