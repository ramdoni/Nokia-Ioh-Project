<?php

namespace Tests\Feature\Prepaid;

use IakID\IakApiPHP\Exceptions\MissingArguements;
use IakID\IakApiPHP\Helpers\Formats\ResponseFormatter;
use Tests\Mock\Prepaid\CheckStatusMock;
use Tests\TestCase;

class CheckStatusTest extends TestCase
{
    protected $mock, $request;

    public function setUp()
    {
        parent::setUp();

        $this->setUpMock();
        $this->request = [
            'refId' => 'refid123'
        ];
    }

    /** @test */
    public function check_status_return_success_and_not_empty()
    {
        $response = $this->iakPrepaid->checkStatus($this->request);

        $this->assertTrue(is_array($response));
        $this->assertNotEmpty($response);
        $this->assertEquals(ResponseFormatter::formatResponse(
            CheckStatusMock::getSuccessStatusMock()['data']
        ), $response);
    }

    /** @test */
    public function check_status_without_ref_id_return_missing_arguements()
    {
        unset($this->request['refId']);

        try {
            $this->iakPrepaid->checkStatus($this->request);
            $this->assertTrue(false);
        } catch (MissingArguements $e) {
            $this->assertTrue(true);
        }
    }

    private function setUpMock()
    {
        $this->mock = $this->mockClass('alias:IakID\IakApiPHP\Helpers\Request\Guzzle');
        $this->mock->shouldReceive('sendRequest')->andReturn(CheckStatusMock::getSuccessStatusMock());
        $this->mock->shouldReceive('handleException')->andThrow(MissingArguements::class);
    }
}