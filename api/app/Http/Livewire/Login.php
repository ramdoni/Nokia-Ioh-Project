<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\Auth;
use App\Models\UserPlatinum;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;

class Login extends Component
{
    public $email;
    public $password,$remember_me=false;
    public $message,$type_login=1,$token;
    public function render()
    {
        return view('livewire.login')
                ->layout('layouts.auth');
    }

    public function login()
    {
        $this->validate([
                'email' => 'required',
                'password' => 'required',
            ],
            [
                'email.required'=>'No Anggota is required'
            ]
        );

        if(is_numeric($this->email)){ 
            $credentials = ['username'=>$this->email,'password'=>$this->password]; // Login with NIK
        }else{
            $credentials = ['email'=>$this->email,'password'=>$this->password];
        }


        $response = Http::post('https://www.google.com/recaptcha/api/siteverify?secret='.env('CAPTCHA_SITE_SECRET').'&response='. $this->token);
        $response = $response->json();
        
        if (!$response['success']) {
            $this->message = 'Google thinks you are a bot, please refresh and try again';
        }else{
            if (Auth::attempt($credentials,$this->remember_me)) {
                // Authentication passed...
                return redirect('/user-member');
            }else $this->message = __('Email / Password incorrect please try again');
        }   
    }
}
