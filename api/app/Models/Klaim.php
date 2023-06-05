<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Klaim extends Model
{
    use HasFactory;
    protected $table='klaim';

    public function user_member()
    {
        return $this->belongsTo(UserMember::class);
    }

    public function additional()
    {
        return $this->hasMany(KlaimAdditional::class,'id_klaim','id');
    }
}
