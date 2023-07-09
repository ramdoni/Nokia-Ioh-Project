<?php

function generate_password($name,$date)
{
    $name = str_replace(" ", "",$name);
    $name = str_replace("-", "",$name);
    $name = str_replace("_", "",$name);
    $name = str_replace(".", "",$name);
    $name = str_replace(",", "",$name);

    return $name.date('dm',strtotime($date));
}

function status_approval($user){
    switch($user->is_approve){
        case 0:
            return "<span class=\"badge badge-warning\">Waiting</span>";
            break;
        case 1:
            return "<span class=\"badge badge-success\">Approve</span>";
        break;
        case -1:
            return "<span class=\"badge badge-danger\">Reject</span>";
        break;
    }
}

function status_keanggotaan($user){
    switch($user->status){
        case 0:
            return "<a href=\"javascript:void(0)\" class=\"badge badge-warning\">Inactive</a>";
            break;
        case 1:
            return "<span class=\"badge badge-warning\">Inactive</span>";
        break;
        case 2:
            return "<a  href=\"javascript:void(0)\" class=\"badge badge-success\" data-toggle=\"tooltip\" title=\"".($user->tanggal_diterima ?  date('d M Y',strtotime($user->tanggal_diterima)):'')."\">Active</a>";
        break;
        case 3:
            return "<a class=\"badge badge-danger\">Ditolak</a>";
        break;
        case 4:
            return "<span class=\"badge badge-danger\">Meninggal</span>";
        break;
        case 5:
            return "<span class=\"badge badge-danger\">Keluar</span>";
        break;
    }
}

function status_registration_payment_ketua_yayasan($user){
    switch($user->status_pembayaran){
        case 0:
            return "<a href=\"".route('ketua-yayasan.member.approval',['id'=>$user->id])."\" data-toggle=\"tooltip\" title=\"Klik disini untuk melakukan konfirmasi data anggota\" class=\"badge badge-warning\">Menunggu Persetujuan</a>";
        break;
        case 1:
            return "<span class=\"badge badge-success\">Confirm</span>";
        break;
        case 2:
            return "<span class=\"badge badge-danger\">Reject</span>";
        break;
    }
}

function status_registration_payment($user){
    switch($user->status_pembayaran){
        case 0:
            return "<a href=\"".route('user-member.proses',['id'=>$user->id])."\" data-toggle=\"tooltip\" title=\"Klik disini untuk melakukan konfirmasi data anggota\" class=\"badge badge-warning\">Menunggu Persetujuan</a>";
        break;
        case 1:
            return "<span class=\"badge badge-success\">Confirm</span>";
        break;
        case 2:
            return "<span class=\"badge badge-danger\">Reject</span>";
        break;
    }
}
function status_iuran($iuran){
    //1(need confirm),2(confirm),3(reject)
    switch($iuran->status){
        case 0:
            return "";
            break;
        case 1:
            return "<span class=\"badge badge-warning\">Need Confirmation</span>";
        break;
        case 2:
            return "<span class=\"badge badge-success\">Confirm</span>";
        break;
        case 3:
            return "<span class=\"badge badge-danger\">Reject</span>";
        break;
    }
}
function status_claim($user){
    $masa_tenggang = calculate_masa_tenggang($user->masa_tenggang);
    return $masa_tenggang;
}
function status_approval_claim($klaim){
    switch($klaim->is_approve_ketua){
        case 0:
            return "<span class=\"badge badge-warning\">Menunggu Persejutuan</span>";
            break;
        case 2:
            return "<span class=\"badge badge-success\">Disetujui</span>";
        break;
        case 3:
            return "<span class=\"badge badge-danger\">Ditolak</span>";
        break;
    }
}
