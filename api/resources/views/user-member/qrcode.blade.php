<html>
<head>
    <title></title>
    <style>
        @page { 
            size: 10cm 15cm portrait;
            margin:10px;
        }
        body { 
            margin: 10px; 
            border: 3px solid #08cfb6;
            border-radius:5px;
        }
    </style>
</head>
<body>
    <div style="padding:10px">
        <p style="text-align:left;">
            <img src="{{get_setting('logo')}}" style="width:50px;" />
        </p>
        <p style="text-align:center;width:80%;margin:auto;">
            Scan dengan aplikasi Coopzone dan mulai bayar tanpa uang tunai
        </p>
        <p style="text-align:center">
            <img src="qrcode.png" style="width:60%" />
        </p>
        <div style="min-width:40%;margin:auto;text-align:center;">
            <p style="font-size:20px;padding-bottom:10px;"><u>{{get_setting('company')}}</u></p>
        </div>
        <div>
        </div>
    </div>
</body>
</html>