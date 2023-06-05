<?php

namespace IakID\IakApiPHP\Helpers;

class FileHelper
{
    public static function getAbsolutePathOfAncestorFile($fileName)
    {
        $isRootDirectory = false;
        $path = __DIR__;

        while (!$isRootDirectory) {
            $file = $path . '/' . $fileName;

            if (file_exists($file)) {
                return $path;
            }

            $isRootDirectory = self::isRootDirectory($path);
            $path = dirname($path);
        }

        return $path;
    }

    public static function isRootDirectory($path)
    {
        return dirname($path) == $path;
    }
}