<?php

namespace Tests\Mock;

class CheckBalanceMock
{
    public static function getCheckBalanceSuccessResult()
    {
        return [
            'data' => [
                'balance' => 100000000,
                'message' => 'SUCCESS',
                'rc' => '00'
            ]
        ];
    }
}