<?php
use Illuminate\Support\Str;

function type_anggota($val)
{
    if($val==1) return "Anggota";
    if($val==2) return "Non Anggota";
}

function str_replace_first($search, $replace, $subject)
{
    $search = '/'.preg_quote($search, '/').'/';
    return preg_replace($search, $replace, $subject, 1);
}

function digiflazz($param){
    $username = env('DIGIFLAZZ_USERNAME');  
    $apiKey = env('DIGIFLAZZ_KEY_PROD');
    // $apiKey = env('DIGIFLAZZ_KEY_DEV');
  
    $url = "";
    if($param['action']=='topup'){
      $url = 'transaction';
      $data = [
          "username"=> $username,
          "buyer_sku_code"=> $param['product'],
          "customer_no"=> $param['no'],
          "ref_id"=> $param['ref_id'],
          "sign"=> md5("$username$apiKey" . $param['ref_id']),
        //   "testing"=> ($param['type']=="demo"?true:false),
          "msg"=>$param['id']
        ];
  
      if(isset($param['commands'])) $data['commands'] = $param['commands'];
      
      $data = json_encode($data);
    }
  
    if($param['action']=='cek-tagihan-token'){
      $url = 'transaction';
      $data = json_encode(
        [
          "username"=> $username,
          "customer_no"=> $param['no'],
          "commands"=>$param['commands'],
          "ref_id"=> $param['ref_id'],
          "sign"=> md5("$username$apiKey" . $param['ref_id']),
        //   "testing"=> ($param['type']=="demo"?true:false),
          "msg"=>$param['id']
        ]);
    }
    
    $header = array(
      'Content-Type: application/json',
    );
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.digiflazz.com/v1/{$url}");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    $result = curl_exec($ch);
    
    return $result;
}

function sinkronKoperasi($param)
{
    $param['token'] = get_setting('apps_token') ? get_setting('apps_token') : env('COOPZONE_TOKEN');
    
    $response = Http::post( ( get_setting('apps_url') ? get_setting('apps_url') : env('KOPERASI_URL')).'/api/sync', $param);

    return $response;
}

function sinkronCoopzone($param)
{
    $param['token'] = env('COOPZONE_TOKEN');
    
    $response = Http::post(env('COOPZONE_URL').$param['url'], $param);

    return $response;
}

function status_product($status){
    switch($status){
        case 1:
          return "<span class=\"badge badge-success\">Aktif</span>";
          break;
        case 2:
          return "<span class=\"badge badge-warning\">Tidak Aktif</span>"; 
          break;
        default:
          return '-';
        break;
      }
}

function status_transaksi($status){
    switch($status){
        case 1:
          return "<span class=\"badge badge-success\">Sukses</span>";
          break;
        case 2:
          return "<span class=\"badge badge-warning\">Batal</span>"; 
          break;
        case 3:
          return "<span class=\"badge badge-danger\">Gagal</span>"; 
          break;
        case 4:
            return "<span class=\"badge badge-danger\">Void</span>"; 
            break;
        default:
            return "<span class=\"badge badge-warning\">Batal</span>"; 
        break;
      }
}

function metode_pembayaran($key=''){

    if($key=='') return [1=>'SIMPANAN',2=>'SIMPANAN',3=>'BAYAR NANTI',4=>'TUNAI',5=>'COOPAY',7=>'KARTU KREDIT',8=>'KARTU DEBIT',9=>'TRANSFER'];

    switch($key){
        case 1:
            return "Simpanan"; // Sukarela
        break;
        case 2:
            return "Simpanan"; // Lain-lain
        break;
        case 3:
            return "BAYAR NANTI";
        break;
        case 4:
            return "TUNAI";
            break;
        case 5:
            return "COOPAY";
            break;
        case 6:
            return "PAYROLL";
            break;
        case 7:
            return "KARTU KREDIT";
            break;
        case 8:
            return "KARTU DEBIT";
            break;
        default:
            return 'TUNAI';
        break;
    }
}

function push_notification_android($device_id,$title,$message,$type,$vibrate=0,$sound=0){
    /**
     * Store notification
     */
    $member = \App\Models\UserMember::where('device_token',$device_id)->first();
    if($member){
        $data = new \App\Models\Notification();
        $data->user_member_id = $member->id;
        $data->title = $title;
        $data->message = $message;
        $data->status = 0;
        $data->save();
    }
    
    /*api_key available in:
    Firebase Console -> Project Settings -> CLOUD MESSAGING -> Server key*/    
    $api_key = 'AAAA4LyBl1Y:APA91bFLf-2oSt9e2GMNIsoOiBBHH3tER5vk45_f6xwZESuZzl1s_6F0ZLkDO8QVOlzPHWto-kkCLl0dctRpjvt30IN7AMvxrGV-keRxn8TBG-DyROqzvGSN8YQN1l7qVVBW9T4BN2_g';
   
    //API URL of FCM
    $url = 'https://fcm.googleapis.com/fcm/send';
    $fields = array (
        'registration_ids' => array (
                $device_id
        ),
        'notification' => array (
            "title" => $title,
            "body" => $message,
            "sound"=> "default"
        ),
        'data' => array(
            'type' => $type ,
            'vibrate'	=> $vibrate,
	        'sound'		=> $sound,
            'volume' => 5
        )
    );

    //header includes Content type and api key
    $headers = array(
        'Content-Type:application/json',
        'Authorization:key='.$api_key
    );
                
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
    $result = curl_exec($ch);
    if ($result === FALSE) {
        dd('FCM Send Error: ' . curl_error($ch));
    }
    curl_close($ch);
    
    return $result;
}

function getRomawi($bln){
    switch ($bln){
        case 1: 
            return "I";
            break;
        case 2:
            return "II";
            break;
        case 3:
            return "III";
            break;
        case 4:
            return "IV";
            break;
        case 5:
            return "V";
            break;
        case 6:
            return "VI";
            break;
        case 7:
            return "VII";
            break;
        case 8:
            return "VIII";
            break;
        case 9:
            return "IX";
            break;
        case 10:
            return "X";
            break;
        case 11:
            return "XI";
            break;
        case 12:
            return "XII";
            break;
    }
}

function getMonthName($key)
{
    $month = [
        1=>'Januari',
        2 =>'Februari',
        3=>'Maret',
        4=>'April',
        5=>'Mei',
        6=>'Juni',
        7=>'Juli',
        8=>'Agustus',
        9=>'September',
        10=>'Oktober',
        11=>'November',
        12=>'Desember'];

    return @$month[(int)$key];
}


function countMount($start,$end)
{
    $d1 = strtotime($start);
    $d2 = strtotime($end);
    
    return abs((date('Y', $d2) - date('Y', $d1))*12 + (date('m', $d2) - date('m', $d1)));
}

function calculate_masa_tenggang($date){
    $birthDate = new \DateTime('today');
	$today = new \DateTime($date);
	if ($birthDate > $today) { 
	    return 0;
    }
    $day = $today->diff($birthDate)->d;
    $month = $today->diff($birthDate)->m;
    if($day || $month) return "<span>".($month!=0?$month." Month " : '') . ($day!=0?$day.' Day' : '').'</span>';
}

function hitung_masa_klaim($tanggal_diterima,$format="y")
{
    $birthDate = new \DateTime($tanggal_diterima);
    $today = new \DateTime("today");
    if ($birthDate > $today) { 
        return 0;
    }
    $tahun = $today->diff($birthDate)->$format;
    return $tahun; 
}

function hitung_umur($tanggal_lahir){
    $birthDate = new \DateTime($tanggal_lahir);
	$today = new \DateTime("today");
	if ($birthDate > $today) { 
	    return 0;
    }
    $tahun = $today->diff($birthDate)->y;

    if($today->diff($birthDate)->d > 1) $tahun = $tahun +1; // Perhitungan umur lewat dari satu hari ulang tahun dihitung menjadi 1 tahun 
    return $tahun;
}

function format_idr($number)
{
    if(is_numeric($number)) return number_format($number,0,0,'.');
}

function get_setting($key,$absolute_path=false)
{
    $setting = \App\Models\Settings::where('key',$key)->first();

    if($setting)
    {
        if($key=='logo' || $key=='favicon' ){
            if($absolute_path)
                // return  public_path("storage/{$setting->value}");
                return  "/public/storage/{$setting->value}";
            else
                return  asset("storage/{$setting->value}");
        }

        return $setting->value;
    }
}

function update_setting($key,$value)
{
    $setting = \App\Models\Settings::where('key',$key)->first();
    if($setting){
        $setting->value = $value;
        $setting->save();
    }else{
        $setting = new \App\Models\Settings();
        $setting->key = $key;
        $setting->value = $value;
        $setting->save();
    }
}

function sendNotifWa ($messageWa, $phone)
{
    return false; // disable notif wa
    $message = strip_tags($messageWa ."\n\n_Do not reply to this message, as it is generated by system._");
    $message = $message;
    $number = Str::replaceFirst('0','62',  $phone);
    $number = str_replace('-', '', $number);
    
    $curl = curl_init(); 
    $token = "HioVXgQTselUx6alx9GmtfcJgpySCDnH3FCZh2tARb0C7vRtQon5shmOwx0KmGl1";
    $data = [
        'phone' => $number,
        'message' => $message,
    ];

    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array(
            "Authorization: ". $token,
        )
    );
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($curl, CURLOPT_URL, "https://console.wablas.com/api/send-message");
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
    $result = curl_exec($curl);
    curl_close($curl);
}

function getMonth($start,$end)
{
    if($start == $end) return date('F Y',strtotime($start));
    
    $begin = new DateTime($start);
    $end = new DateTime($end);
    $end->add(new DateInterval("P1M"));
    $interval = DateInterval::createFromDateString('1 month');
    $period = new DatePeriod($begin, $interval, $end);
    $counter = 0;
    foreach($period as $dt) {
        echo $dt->format('M  Y');
        echo "<br>";
        $counter++;
    }
}

function getTotalMonth($start,$end)
{
    $begin = new DateTime($start);
    $end = new DateTime($end);
    $end->add(new DateInterval("P1M"));
    $interval = DateInterval::createFromDateString('1 month');
    $period = new DatePeriod($begin, $interval, $end);
    $counter = 0;
    foreach($period as $dt) {
        $counter++;
    }
    return $counter;
}

function replace_idr($nominal)
{
    if($nominal == "") return 0;

    $nominal = str_replace('Rp. ', '', $nominal);
    $nominal = str_replace(' ', '', $nominal);
    $nominal = str_replace('.', '', $nominal);
    $nominal = str_replace(',', '', $nominal);
    $nominal = str_replace('-', '', $nominal);
    $nominal = str_replace('(', '', $nominal);
    $nominal = str_replace(')', '', $nominal);

    return (int)$nominal;
}

function getAsuransi($id)
{
    $user = \App\Models\UserMember::where('id',$id)->first();
    $umur = hitung_umur($user->tanggal_lahir);
    
    if($umur < 80)
    {
        $asuransi = \App\Models\Asuransi::where('user_member_id',$id)->get()->last();
        if($asuransi)
            return '<label class="badge badge-success">'.$asuransi->membernostr.'</label>';
        else
            return '<label class="badge badge-warning">Inactive</label>';
    } else {
        return '<label class="badge badge-danger">No Criteria</label>';
    }    
}
