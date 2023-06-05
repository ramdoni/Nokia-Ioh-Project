<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon"> <!-- Favicon-->
        <title>@yield('title') - {{ get_setting('company') }}</title>
        <meta name="description" content="@yield('meta_description', config('app.name'))">
        <meta name="author" content="@yield('meta_author', config('app.name'))">
        @yield('meta')

        {{-- See https://laravel.com/docs/5.5/blade#stacks for usage --}}
        @stack('before-styles')

        <link rel="stylesheet" href="{{ asset('assets/vendor/bootstrap/css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/vendor/font-awesome/css/font-awesome.min.css') }}">
        
        <!-- Custom Css -->
        <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/color_skins.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/custom.css').(env('APP_DEBUG')==true?'?date='.date('YmdHis') : '') }}">
        @stack('after-styles')
        @livewireStyles
        <style>
            body,.auth-main::before {
                background-color: #efefef !important;
            }
            .auth-main:after {
                background:#efefef;
            } 
        </style>
    </head>
    <body class="theme-blue">
        <!-- Page Loader -->
        <div class="page-loader-wrapper">
            <div class="loader">
                @if(get_setting('logo'))
                <div class="m-t-30">
                    <img src="{{get_setting('logo')}}" height="48" alt="{{get_setting('company')}}">
                </div>
                @endif
                <p>Please wait...</p>        
            </div>
        </div>
        <div id="wrapper">
            <div class="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block" style="position:absolute;top:10px;left:10px;">
                <img src="{{get_setting('logo')}}" alt="{{get_setting('company')}}" style="height: 50px">
            </div>
            @yield('content')
            {{$slot}}
        </div>

        <!-- Scripts -->
        @stack('before-scripts')
        <script src="{{ asset('assets/bundles/libscripts.bundle.js') }}"></script>    
        <script src="{{ asset('assets/bundles/vendorscripts.bundle.js') }}"></script>
        <script src="{{ asset('assets/bundles/mainscripts.bundle.js') }}"></script>
        @stack('after-scripts')
        @livewireScripts
        @if (trim($__env->yieldContent('page-script')))
            <script>
                @yield('page-script')
            </script>
        @endif
        <script>
            var counting_form_ = 0;
            Livewire.on('counting_form',()=>{
                counting_form_ = 0;
                console.log('counting form : '+counting_form_);
            });

            Livewire.on('go-to-div',(id)=>{
                go_to_div("#rekomendasi_anggota_"+id);
            });
        </script>
    </body>
</html>
