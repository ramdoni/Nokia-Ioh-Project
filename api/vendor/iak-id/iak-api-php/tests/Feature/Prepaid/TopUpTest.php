<?php

namespace Tests\Feature\Prepaid;

use IakID\IakApiPHP\Exceptions\InvalidContentType;
use IakID\IakApiPHP\Exceptions\MissingArguements;
use IakID\IakApiPHP\Helpers\Formats\ResponseFormatter;
use Tests\Mock\Prepaid\TopUpMock;
use Tests\TestCase;

class TopUpTest extends TestCase
{
    protected $mock, $request;

    public function setUp()
    {
        parent::setUp();

        $this->setUpMock();
        $this->request = [
            'customerId' => '081357922222',
            'refId' => 'refid123',
            'productCode' => 'htelkomsel10000'
        ];
    }

    /** @test */
    public function top_up_return_success_and_not_empty()
    {
        $response = $this->iakPrepaid->topUp($this->request);

        $this->assertTrue(is_array($response));
        $this->assertNotEmpty($response);
        $this->assertEquals(ResponseFormatter::formatResponse(
            TopUpMock::getTopUpMock()['data']
        ), $response);
    }

    /** @test */
    public function top_up_without_ref_id_return_missing_arguements()
    {
        unset($this->request['refId']);
        $this->mock->shouldReceive('handleException')->andThrow(MissingArguements::class);

        try {
            $this->iakPrepaid->topUp($this->request);
            $this->assertTrue(false);
        } catch (MissingArguements $e) {
            $this->assertTrue(true);
        }
    }

    /** @test */
    public function top_up_with_string_parameter_return_invalid_content_type()
    {
        $this->mock->shouldReceive('handleException')->andThrow(InvalidContentType::class);

        try {
            $this->iakPrepaid->topUp('request');
            $this->assertTrue(false);
        } catch (InvalidContentType $e) {
            $this->assertTrue(true);
        }
    }

    private function setUpMock()
    {
        $this->mock = $this->mockClass('alias:IakID\IakApiPHP\Helpers\Request\Guzzle');
        $this->mock->shouldReceive('sendRequest')->andReturn(TopUpMock::getTopUpMock());
    }
}