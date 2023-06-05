<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asuransi extends Model
{
    use HasFactory;
    protected $table='asuransi';
    
    public function user_member()
    {
        return $this->belongsTo(UserMember::class);
    }
}
