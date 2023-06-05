<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Iuran extends Model
{
    use HasFactory;
    protected $table='iuran';

    public function user_member()
    {
        return $this->belongsTo(UserMember::class);
    }
    public function bank_account()
    {
        return $this->belongsTo(BankAccount::class);
    }
}
