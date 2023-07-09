<?php

namespace Tests\Feature\Postpaid;

use IakID\IakApiPHP\Exceptions\MissingArguements;
use IakID\IakApiPHP\Helpers\Formats\ResponseFormatter;
use Tests\Mock\Postpaid\DownloadBillMock;
use Tests\TestCase;

class DownloadBillTest extends TestCase
{
    protected $mock, $request;

    public function setUp()
    {
        parent::setUp();

        $this->setUpMock();
        $this->request = [
            'trId' => 1
        ];
    }

    /** @test */
    public function download_bill_return_success_and_not_empty()
    {
        $response = $this->iakPostpaid->downloadBill($this->request);

        $this->assertTrue(is_array($response));
        $this->assertNotEmpty($response);
        $this->assertEquals(ResponseFormatter::formatResponse(
            DownloadBillMock::getSuccessMock()['data']
        ), $response);
    }

    /** @test */
    public function download_bill_without_tr_id_return_missing_arguements()
    {
        unset($this->request['trId']);

        try {
            $this->iakPostpaid->downloadBill($this->request);
            $this->assertTrue(false);
        } catch (MissingArguements $e) {
            $this->assertTrue(true);
        }
    }

    private function setUpMock()
    {
        $this->mock = $this->mockClass('alias:IakID\IakApiPHP\Helpers\Request\Guzzle');
        $this->mock->shouldReceive('sendRequest')->andReturn(DownloadBillMock::getSuccessMock());
        $this->mock->shouldReceive('handleException')->andThrow(MissingArguements::class);
    }
}