<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected function customer()
    {
        return $this->hasOne('App\Models\Customer','id','customer_id');
    }
}
