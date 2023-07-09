<?php

namespace IakID\IakApiPHP\Helpers;

class CoreHelper
{
    public static function isStringContainsString($haystack, $needle)
    {
        return stripos($haystack, $needle) !== false;
    }
}