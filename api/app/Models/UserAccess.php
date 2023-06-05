<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAccess extends Model
{
    public $timestamps = true;

    protected $table = 'user_access';
    
    use HasFactory;
}
