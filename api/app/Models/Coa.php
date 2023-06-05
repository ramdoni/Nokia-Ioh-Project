<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coa extends Model
{
    use HasFactory;

    public function group()
    {
        return $this->hasOne('\App\Models\CoaGroup','id','coa_group_id');
    }

    public function type()
    {
        return $this->hasOne('\App\Models\CoaType','id','coa_type_id');
    }
}
