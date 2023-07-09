<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeGroup extends Model
{
    use HasFactory;

    protected $table = 'employee_group';

    public function items()
    {
        return $this->hasMany(EmployeeGroupItem::class,'employee_group_id','id');
    }
}
