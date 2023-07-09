<?php

namespace IakID\IakApiPHP\Helpers\Formats;

class StringFormatter
{
    public static function convertCamelCaseToSnakeCase($camelCase)
    {
        $snakeCase = preg_split('/(?=[A-Z])/', lcfirst($camelCase));
        $snakeCase = array_map('strtolower', $snakeCase);

        return implode('_', $snakeCase);
    }
}