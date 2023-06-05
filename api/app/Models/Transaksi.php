<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\UserMember;
use App\Models\TransaksiItem;

class Transaksi extends Model
{
    use HasFactory;

    protected $table = 'transaksi';

    public function anggota()
    {
        return $this->hasOne(UserMember::class,'id','user_member_id');
    }

    public function user()
    {
        return $this->hasOne(User::class,'id','user_id');
    }

    public function items()
    {
        return $this->hasMany(TransaksiItem::class,'transaksi_id','id');
    }
}
