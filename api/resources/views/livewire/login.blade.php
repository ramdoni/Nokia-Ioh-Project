@section('title', 'Login')
<div class="vertical-align-wrap">
	<div class="vertical-align-middle auth-main">
		<div class="auth-box">

            <div class="top text-center d-block d-sm-none d-none d-sm-block d-md-none"> 
                <img src="{{get_setting('logo')}}" alt="{{get_setting('company')}}">
            </div>
			<div class="card">
                <div class="header">
                    <p class="lead">{{__('Login to your account')}}</p>
                </div>
                <div class="body">
                    <form class="form-auth-small" method="POST" wire:submit.prevent="login" action="">
                        @if($message)
                        <p class="text-danger">{{$message}}</p>
                        @endif
                        <div class="form-group">
                            <label for="signin-email" class="sr-only control-label">{{ __('Email') }}</label>
                            <input type="text" class="form-control" id="signin-email" wire:model="email" placeholder="{{ __('NIK / No Anggota') }}">
                            @error('email')
                            <p class="text-danger">{{ $message }}</p>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="signin-password" class="sr-only control-label">{{ __('Password') }}</label>
                            <input type="password" class="form-control" id="signin-password" wire:model="password" placeholder="{{ __('Password') }}">
                            @error('password')
                                <p class="text-danger">{{ $message }}</p>
                            @enderror
                        </div>
                        <div class="clearfix form-group">
                            <label class="fancy-checkbox element-left">
                                <input type="checkbox" wire:model="remember_me">
                                <span>{{__('Remember me')}}</span>
                            </label>								
                        </div>
                        <div wire:ignore>
                            <div class="g-recaptcha" data-callback="verifyCallback" data-sitekey="{{env('CAPTCHA_SITE_KEY')}}"></div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg btn-block mt-1"><i class="fa fa-sign-in mr-2"></i>{{ __('LOGIN') }}</button>
                    </form>
                </div>
            </div>
		</div>
        <div class="col-md-12" style="position: absolute;bottom:0;">
            <p>Address : {{get_setting('address')}} | Phone : {{get_setting('phone')}} | Mobile : {{get_setting('mobile')}}</p>
        </div>
	</div>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script>
        var verifyCallback = function(response) {
            @this.set('token', response);
        };
    </script>
</div>