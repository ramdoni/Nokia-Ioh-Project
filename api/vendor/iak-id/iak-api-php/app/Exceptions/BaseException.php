<?php

namespace IakID\IakApiPHP\Exceptions;

use Exception;

abstract class BaseException extends Exception
{
    public function __construct($message = null)
    {
        $this->message = empty($message) ? $this->setMessage() : $message;
    }

    abstract public function setMessage();
}