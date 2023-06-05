<?php

namespace IakID\IakApiPHP;

use Dotenv\Dotenv;
use IakID\IakApiPHP\Helpers\FileHelper;
use IakID\IakApiPHP\Helpers\Validations\IAKValidator;

abstract class IAK
{
    const DOT_ENV = '.env';

    protected $credential, $stage, $url, $headers;

    public function __construct(array $data = [])
    {
        IAKValidator::validateCredentialRequest($data);

        $this->setEnvironmentFile();
        $this->setCredential($data);

        $this->headers = [
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ];
    }

    private function setEnvironmentFile()
    {
        $envDirectory = FileHelper::getAbsolutePathOfAncestorFile(self::DOT_ENV);
        
        if (file_exists($envDirectory . '/' . self::DOT_ENV)) {
            $dotEnv = Dotenv::createMutable(FileHelper::getAbsolutePathOfAncestorFile(self::DOT_ENV));
            $dotEnv->load();
        }
    }

    private function setCredential($data)
    {
        if (empty($data['userHp'])) {
            $this->credential['userHp'] = isset($_ENV['IAK_USERHP']) ? $_ENV['IAK_USERHP'] : '';
        } else {
            $this->credential['userHp'] = $data['userHp'];
        }

        if (empty($data['stage'])) {
            $this->stage = isset($_ENV['IAK_STAGE']) ? $_ENV['IAK_STAGE'] : 'SANDBOX';
        } else {
            $this->stage = $data['stage'];
        }

        $this->stage = strtoupper($this->stage) == 'PRODUCTION' ? 'PRODUCTION' : 'SANDBOX';

        if (empty($data['apiKey'])) {
            $this->credential['apiKey'] = isset($_ENV['IAK_APIKEY_' . $this->stage]) ? $_ENV['IAK_APIKEY_' . $this->stage] : '';
        } else {
            $this->credential['apiKey'] = $data['apiKey'];
        }
    }

    protected function generateSign($sign)
    {
        return md5($this->credential['userHp'] . $this->credential['apiKey'] . $sign);
    }
}