<?php

namespace IakID\IakApiPHP\Services;

use Exception;
use IakID\IakApiPHP\Helpers\Formats\ResponseFormatter;
use IakID\IakApiPHP\Helpers\Formats\Url;
use IakID\IakApiPHP\Helpers\Request\Guzzle;
use IakID\IakApiPHP\Helpers\Request\RequestFormatter;
use IakID\IakApiPHP\Helpers\Validations\IAKPrepaidValidator;
use IakID\IakApiPHP\IAK;

class IAKPrepaid extends IAK
{
    public function __construct($data = [])
    {
        parent::__construct($data);

        $this->url = Url::URL_PREPAID[$this->stage];
    }

    public function checkBalance()
    {
        try {
            $request = [
                'username' => $this->credential['userHp'],
                'sign' => $this->generateSign('bl')
            ];

            $response = Guzzle::sendRequest($this->url . '/api/check-balance', 'POST', $this->headers, $request);
            $response = $response['data'];

            return ResponseFormatter::formatResponse($response);
        } catch (Exception $e) {
            return Guzzle::handleException($e);
        }
    }

    public function checkStatus($request = [])
    {
        try {
            IAKPrepaidValidator::validateCheckStatusRequest($request);

            $request = RequestFormatter::formatArrayKeysToSnakeCase($request);

            $request = array_merge($request, [
                'username' => $this->credential['userHp'],
                'sign' => $this->generateSign($request['ref_id'])
            ]);

            $response = Guzzle::sendRequest($this->url . '/api/check-status', 'POST', $this->headers, $request);
            $response = $response['data'];

            return ResponseFormatter::formatResponse($response);
        } catch (Exception $e) {
            return Guzzle::handleException($e);
        }
    }

    public function inquiryGameID($request = [])
    {
        try {
            IAKPrepaidValidator::validateInquiryGameIDRequest($request);

            $request = RequestFormatter::formatArrayKeysToSnakeCase($request);

            $request = array_merge($request, [
                'username' => $this->credential['userHp'],
                'sign' => $this->generateSign($request['game_code'])
            ]);

            $response = Guzzle::sendRequest($this->url . '/api/inquiry-game', 'POST', $this->headers, $request);
            $response = $response['data'];

            return ResponseFormatter::formatResponse($response);
        } catch (Exception $e) {
            return Guzzle::handleException($e);
        }
    }

    public function inquiryGameServer($request = [])
    {
        try {
            IAKPrepaidValidator::validateInquiryGameServerRequest($request);

            $request = RequestFormatter::formatArrayKeysToSnakeCase($request);

            $request = array_merge($request, [
                'username' => $this->credential['userHp'],
                'sign' => $this->generateSign($request['game_code'])
            ]);

            $response = Guzzle::sendRequest($this->url . '/api/inquiry-game-server', 'POST', $this->headers, $request);
            $response = $response['data'];

            return ResponseFormatter::formatResponse($response);
        } catch (Exception $e) {
            return Guzzle::handleException($e);
        }
    }

    public function inquiryPLN($request = [])
    {
        try {
            IAKPrepaidValidator::validateInquiryPLNRequest($request);

            $request = RequestFormatter::formatArrayKeysToSnakeCase($request);

            $request = array_merge($request, [
                'username' => $this->credential['userHp'],
                'sign' => $this->generateSign($request['customer_id'])
            ]);

            $response = Guzzle::sendRequest($this->url . '/api/inquiry-pln', 'POST', $this->headers, $request);
            $response = $response['data'];

            return ResponseFormatter::formatResponse($response);
        } catch (Exception $e) {
            return Guzzle::handleException($e);
        }
    }

    public function pricelist($request = [])
    {
        try {
            IAKPrepaidValidator::validatePricelistRequest($request);

            $request = array_merge($request, [
                'username' => $this->credential['userHp'],
                'sign' => $this->generateSign('pl')
            ]);

            $prepaidUrl = $this->url . '/api/pricelist';

            if (!empty($request['type'])) {
                $prepaidUrl .= '/' . $request['type'];
            }

            if (!empty($request['operator'])) {
                $prepaidUrl .= '/' . $request['operator'];
            }

            $response = Guzzle::sendRequest($prepaidUrl, 'POST', $this->headers, $request);
            $response = $response['data'];

            return ResponseFormatter::formatResponse($response);
        } catch (Exception $e) {
            return Guzzle::handleException($e);
        }
    }

    public function topUp($request = [])
    {
        try {
            IAKPrepaidValidator::validateTopUpRequest($request);

            $request = RequestFormatter::formatArrayKeysToSnakeCase($request);

            $request = array_merge($request, [
                'username' => $this->credential['userHp'],
                'sign' => $this->generateSign($request['ref_id'])
            ]);

            $response = Guzzle::sendRequest($this->url . '/api/top-up', 'POST', $this->headers, $request);
            $response = $response['data'];

            return ResponseFormatter::formatResponse($response);
        } catch (Exception $e) {
            return Guzzle::handleException($e);
        }
    }
}