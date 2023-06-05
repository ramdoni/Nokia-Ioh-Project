<?php

namespace Tests\Feature\Prepaid;

use IakID\IakApiPHP\Exceptions\MissingArguements;
use IakID\IakApiPHP\Helpers\Formats\ResponseFormatter;
use Tests\Mock\Prepaid\InquiryPrepaidMock;
use Tests\TestCase;

class InquiryGameIDTest extends TestCase
{
    protected $mock, $request;

    public function setUp()
    {
        parent::setUp();

        $this->setUpMock();
        $this->request = [
            'customerId' => '156378300|8483',
            'gameCode' => '103'
        ];
    }

    /** @test */
    public function inquiry_game_id_return_success_and_not_empty()
    {
        $response = $this->iakPrepaid->inquiryGameID($this->request);

        $this->assertTrue(is_array($response));
        $this->assertNotEmpty($response);
        $this->assertEquals(ResponseFormatter::formatResponse(
            InquiryPrepaidMock::getGameIDMock()['data']
        ), $response);
    }

    /** @test */
    public function inquiry_game_id_without_customer_id_return_missing_arguements()
    {
        unset($this->request['customerId']);

        try {
            $this->iakPrepaid->inquiryGameID($this->request);
            $this->assertTrue(false);
        } catch (MissingArguements $e) {
            $this->assertTrue(true);
        }
    }

    private function setUpMock()
    {
        $this->mock = $this->mockClass('alias:IakID\IakApiPHP\Helpers\Request\Guzzle');
        $this->mock->shouldReceive('sendRequest')->andReturn(InquiryPrepaidMock::getGameIDMock());
        $this->mock->shouldReceive('handleException')->andThrow(MissingArguements::class);
    }
}