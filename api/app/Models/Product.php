<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProductUom;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $guarded = [];  
    public function uom()
    {
        return $this->hasOne(ProductUom::class,'id','product_uom_id');
    }
}
