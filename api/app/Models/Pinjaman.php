<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\UserMember;

class Pinjaman extends Model
{
    use HasFactory;

    protected $table = 'pinjaman';

    public function items()
    {
        return $this->hasMany(PinjamanItem::class,'pinjaman_id','id');
    }

    public function anggota()
    {
        return $this->hasOne(UserMember::class,'id','user_member_id');
    }

    public function jenis_pinjaman()
    {
        return $this->hasOne(JenisPinjaman::class,'id','jenis_pinjaman_id');
    }
}
