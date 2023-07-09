<?php

namespace Tests\Feature\Prepaid;

use IakID\IakApiPHP\Exceptions\MissingArguements;
use IakID\IakApiPHP\Helpers\Formats\ResponseFormatter;
use Tests\Mock\Prepaid\PricelistMock;
use Tests\TestCase;

class PricelistTest extends TestCase
{
    protected $mock;

    public function setUp()
    {
        parent::setUp();

        $this->setUpMock();
    }

    /** @test */
    public function pricelist_return_success_and_not_empty()
    {
        $response = $this->iakPrepaid->pricelist();

        $this->assertTrue(is_array($response));
        $this->assertNotEmpty($response);
        $this->assertEquals(ResponseFormatter::formatResponse(
            PricelistMock::getPricelistMock()['data']
        ), $response);
    }

    /** @test */
    public function pricelist_with_type_return_success_and_not_empty()
    {
        $request = [
            'type' => 'pulsa'
        ];

        $response = $this->iakPrepaid->pricelist($request);

        $this->assertTrue(is_array($response));
        $this->assertNotEmpty($response);
        $this->assertEquals(ResponseFormatter::formatResponse(
            PricelistMock::getPricelistMock()['data']
        ), $response);
    }

    /** @test */
    public function pricelist_with_type_and_operator_return_success_and_not_empty()
    {
        $request = [
            'type' => 'pulsa',
            'operator' => 'telkomsel'
        ];

        $response = $this->iakPrepaid->pricelist($request);

        $this->assertTrue(is_array($response));
        $this->assertNotEmpty($response);
        $this->assertEquals(ResponseFormatter::formatResponse(
            PricelistMock::getPricelistMock()['data']
        ), $response);
    }

    /** @test */
    public function pricelist_with_operator_only_return_missing_arguements()
    {
        $request = [
            'operator' => 'telkomsel'
        ];

        try {
            $this->iakPrepaid->pricelist($request);
            $this->assertTrue(false);
        } catch (MissingArguements $e) {
            $this->assertTrue(true);
        }
    }

    private function setUpMock()
    {
        $this->mock = $this->mockClass('alias:IakID\IakApiPHP\Helpers\Request\Guzzle');
        $this->mock->shouldReceive('sendRequest')->andReturn(PricelistMock::getPricelistMock());
        $this->mock->shouldReceive('handleException')->andThrow(MissingArguements::class);
    }
}