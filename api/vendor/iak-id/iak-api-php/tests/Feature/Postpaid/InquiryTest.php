<?php

namespace Tests\Feature\Postpaid;

use IakID\IakApiPHP\Exceptions\MissingArguements;
use IakID\IakApiPHP\Helpers\Formats\ResponseFormatter;
use Tests\Mock\Postpaid\InquiryPostpaidMock;
use Tests\TestCase;

class InquiryTest extends TestCase
{
    protected $mock, $request;

    public function setUp()
    {
        parent::setUp();

        $this->setUpMock();
        $this->request = [
            'code' => 'PDAM',
            'hp' => '8801234560001',
            'refId' => 'refid123'
        ];
    }

    /** @test */
    public function inquiry_return_success_and_not_empty()
    {
        $this->mock->shouldReceive('sendRequest')->andReturn(InquiryPostpaidMock::getPDAMSuccessMock());

        $response = $this->iakPostpaid->inquiry($this->request);

        $this->assertTrue(is_array($response));
        $this->assertNotEmpty($response);
        $this->assertEquals(ResponseFormatter::formatResponse(
            InquiryPostpaidMock::getPDAMSuccessMock()['data']
        ), $response);
    }

    /** @test */
    public function inquiry_without_code_return_missing_arguements()
    {
        unset($this->request['code']);

        try {
            $this->iakPostpaid->inquiry($this->request);
            $this->assertTrue(false);
        } catch (MissingArguements $e) {
            $this->assertTrue(true);
        }
    }

    /** @test */
    public function inquiry_bpjs_return_success_and_not_empty()
    {
        $this->request['code'] = 'BPJS';
        $this->request['month'] = 2;

        $this->mock->shouldReceive('sendRequest')->andReturn(InquiryPostpaidMock::getBPJSSuccessMock());

        $response = $this->iakPostpaid->inquiry($this->request);

        $this->assertTrue(is_array($response));
        $this->assertNotEmpty($response);
        $this->assertEquals(ResponseFormatter::formatResponse(
            InquiryPostpaidMock::getBPJSSuccessMock()['data']
        ), $response);
    }

    /** @test */
    public function inquiry_bpjs_without_month_return_missing_arguements()
    {
        $this->request['code'] = 'BPJS';        

        try {
            $this->iakPostpaid->inquiry($this->request);
            $this->assertTrue(false);
        } catch (MissingArguements $e) {
            $this->assertTrue(true);
        }
    }

    private function setUpMock()
    {
        $this->mock = $this->mockClass('alias:IakID\IakApiPHP\Helpers\Request\Guzzle');
        $this->mock->shouldReceive('handleException')->andThrow(MissingArguements::class);
    }
}