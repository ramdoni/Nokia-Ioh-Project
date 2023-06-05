<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\UserMember;

class Simpanan extends Model
{
    use HasFactory;

    protected $table = 'simpanan';

    public function jenis_simpanan()
    {
        return $this->hasOne(JenisSimpanan::class,'id','jenis_simpanan_id');
    }

    public function anggota()
    {
        return $this->hasOne(UserMember::class,'id','user_member_id');
    }
}
