<?php

namespace IakID\IakApiPHP\Helpers\Formats;

class ResponseFormatter
{
    public static function formatResponse($data, $code = 200, $status = 'success')
    {
        return [
            'status' => $status,
            'code' => $code,
            'data' => $data
        ];
    }
}