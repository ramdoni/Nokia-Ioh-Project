<?php

namespace IakID\IakApiPHP\Helpers\Validations;

class IAKPostpaidValidator
{
    public static function validateCheckStatusRequest($request)
    {
        IAKValidationHelper::validateContentType($request);
        IAKValidationHelper::validateContentFields($request, ['refId']);
    }

    public static function validateDownloadBillRequest($request)
    {
        IAKValidationHelper::validateContentType($request);
        IAKValidationHelper::validateContentFields($request, ['trId']);
    }

    public static function validateInquiryRequest($request, $fields)
    {
        IAKValidationHelper::validateContentType($request);
        IAKValidationHelper::validateContentFields($request, $fields);
    }

    public static function validatePaymentRequest($request)
    {
        IAKValidationHelper::validateContentType($request);
        IAKValidationHelper::validateContentFields($request, ['trId']);
    }

    public static function validatePricelistRequest($request)
    {
        IAKValidationHelper::validateContentType($request);
    }
}