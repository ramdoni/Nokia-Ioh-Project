<html>
    <head>
    <style>
        @page {
            size: 7.5cm 23.5cm;  potrait; 
            margin:0 10px; 
            font-size:10px;
        }
        @media print {
            @page {
                size: 7.5cm 23.5cm;  potrait; 
                margin:0 10px; 
                font-size:10px;
            }
        }
    </style>
    </head>
<body>
    <div style="border-bottom:1px dotted black;margin-top:20px;width:100%">
        <p style="text-align:center;">
            {{get_setting('company')}}<br />
            <small>{!!get_setting('address')!!}</small>
        </p>
        <div style="clear:both"></div>
    </div>
    <div style="border-bottom:1px dotted black;width:100%">
        <div style="width:50%;float:left;margin:0;padding:0;">
            {{$data->no_transaksi}}<br />
            Kasir : {{isset($data->user->name) ? $data->user->name : '-'}} 
        </div>
        <div style="width:50%;float:right;margin:0;padding:0;text-align:right;">{{date('d.F.Y H:i:s',strtotime($data->created_at))}}</div>
        <div style="clear:both"></div>
    </div>
    <table style="width:100%">
        @php($total=0)
        @foreach($data->items as $item)
            <tr>
                <td style="width:80%;padding-right:10px;">{{$item->description}}</td>
                <td style="width:10%;">{{$item->qty}}</td>
                <td style="width:10%;">{{format_idr($item->price)}}</td>
                <td style="width:10%;padding-left:10px;">{{format_idr($item->price*$item->qty)}}</td>
            </tr>
            @php($total += $item->price)
        @endforeach
        <tr>
            <td colspan="3" style="border-top:1px dotted black;">Sub Total</td>
            <td style="text-align:right;border-top:1px dotted black;">Rp.{{format_idr($total)}}</td>
        </tr>
        <tr>
            <td colspan="3">Rounding</td>
            <td style="text-align:right;">-</td>
        </tr>
        <tr>
            <td colspan="3">Total</td>
            <td style="text-align:right;">{{format_idr($total)}}</td>
        </tr>
        
        <tr>
            <td colspan="4" style="border-top:1px dotted black;" >
                <strong>{{$item->metode_pembayaran ? metode_pembayaran($item->metode_pembayaran) : 'TUNAI'}}</strong>
            </td>
        </tr>
        <tr>
            <td colspan="2">Amount</td>
            <td style="text-align:right;" colspan="2">Rp. {{format_idr($data->uang_tunai)}}</td>
        </tr>
        <tr>
            <td colspan="2">Change</td>
            <td style="text-align:right;" colspan="2">Rp. {{format_idr($data->uang_tunai_change)}}</td>
        </tr>
        <tr>
            <td colspan="2">Saving</td>
            <td style="text-align:right;" colspan="2">Rp. 0</td>
        </tr>
        <tr>
            <td colspan="2">DPP</td>
            <td style="text-align:right;" colspan="2">Rp. {{format_idr($total - ($total * 0.11))}}</td>
        </tr>
        <tr>
            <td colspan="2">Pajak</td>
            <td style="text-align:right;" colspan="2">Rp. {{format_idr($total * 0.11)}}</td>
        </tr>
        <tr>
            <td colspan="5" style="border-top:1px dotted black;" ></td>
        </tr>
    </table>
    <p style="text-align:center;">
    Yuk segera download<br/>
    Coopzone mobile apps &<br />
    dapatkan penawaran seru!<br />
    di google play/apps store</p>
    <p style="text-align:center">
        <img src="{{$data->id}}.png" style="width:60px;" />
    </p>
</body>
</html>