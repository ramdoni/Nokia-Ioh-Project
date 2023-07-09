<?php

namespace Tests\Feature\Prepaid;

use IakID\IakApiPHP\Exceptions\MissingArguements;
use IakID\IakApiPHP\Helpers\Formats\ResponseFormatter;
use Tests\Mock\Prepaid\InquiryPrepaidMock;
use Tests\TestCase;

class InquiryPLNTest extends TestCase
{
    protected $mock, $request;

    public function setUp()
    {
        parent::setUp();

        $this->setUpMock();
        $this->request = [
            'customerId' => '12345678901'
        ];
    }

    /** @test */
    public function inquiry_pln_return_success_and_not_empty()
    {
        $response = $this->iakPrepaid->inquiryPLN($this->request);

        $this->assertTrue(is_array($response));
        $this->assertNotEmpty($response);
        $this->assertEquals(ResponseFormatter::formatResponse(
            InquiryPrepaidMock::getPLNMock()['data']
        ), $response);
    }

    /** @test */
    public function inquiry_pln_without_customer_id_return_missing_arguements()
    {
        unset($this->request['customerId']);

        try {
            $this->iakPrepaid->inquiryPLN($this->request);
            $this->assertTrue(false);
        } catch (MissingArguements $e) {
            $this->assertTrue(true);
        }
    }

    private function setUpMock()
    {
        $this->mock = $this->mockClass('alias:IakID\IakApiPHP\Helpers\Request\Guzzle');
        $this->mock->shouldReceive('sendRequest')->andReturn(InquiryPrepaidMock::getPLNMock());
        $this->mock->shouldReceive('handleException')->andThrow(MissingArguements::class);
    }
}