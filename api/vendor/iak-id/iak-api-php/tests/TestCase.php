<?php

namespace Tests;

use IakID\IakApiPHP\Services\IAKPostpaid;
use IakID\IakApiPHP\Services\IAKPrepaid;
use PHPUnit\Framework\TestCase as BaseTest;

use Mockery;

class TestCase extends BaseTest
{
    protected $data, $iakPrepaid, $iakPostpaid;

    public function setUp()
    {
        $this->data = [
            'userHp' => 'user_testing',
            'apiKey' => 'api_key',
            'stage' => 'sandbox'
        ];

        $this->iakPrepaid = new IAKPrepaid($this->data);
        $this->iakPostpaid = new IAKPostpaid($this->data);
    }

    public function tearDown()
    {
        parent::tearDown();

        Mockery::close();
    }

    public function mockClass($class)
    {
        return Mockery::mock($class);
    }

}