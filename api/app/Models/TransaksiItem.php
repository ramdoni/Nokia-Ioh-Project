<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\Transaksi;

class TransaksiItem extends Model
{
    use HasFactory;

    public function product()
    {
        return $this->hasOne(Product::class,'id','product_id');
    }

    public function transaksi()
    {
        return $this->hasOne(Transaksi::class,'id','transaksi_id');
    }
}
