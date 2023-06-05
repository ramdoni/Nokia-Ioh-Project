<?php

namespace IakID\IakApiPHP\Helpers\Validations;

use IakID\IakApiPHP\Exceptions\MissingArguements;

class IAKPrepaidValidator
{
    public static function validateCheckStatusRequest($request)
    {
        IAKValidationHelper::validateContentType($request);
        IAKValidationHelper::validateContentFields($request, ['refId']);
    }

    public static function validateInquiryGameIDRequest($request)
    {
        IAKValidationHelper::validateContentType($request);
        IAKValidationHelper::validateContentFields($request, ['customerId', 'gameCode']);
    }

    public static function validateInquiryGameServerRequest($request)
    {
        IAKValidationHelper::validateContentType($request);
        IAKValidationHelper::validateContentFields($request, ['gameCode']);
    }

    public static function validateInquiryPLNRequest($request)
    {
        IAKValidationHelper::validateContentType($request);
        IAKValidationHelper::validateContentFields($request, ['customerId']);
    }

    public static function validatePricelistRequest($request)
    {
        IAKValidationHelper::validateContentType($request);

        if (!empty($request['operator']) && empty($request['type'])) {
            throw new MissingArguements('Operator field is available but type field is missing.');
        }
    }

    public static function validateTopUpRequest($request)
    {
        IAKValidationHelper::validateContentType($request);
        IAKValidationHelper::validateContentFields($request, ['customerId', 'refId', 'productCode']);
    }
}