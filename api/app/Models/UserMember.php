<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\UserMemberSimpanan;
use App\Models\UserMember;

class UserMember extends Model
{
    use HasFactory;

    protected $guarded = [];
    
    protected $table = 'user_member';



    public function provinsi()
    {
        return $this->hasOne('\App\Models\Provinsi','id_prov','provinsi_id');
    }
    public function kabupaten()
    {
        return $this->hasOne('\App\Models\Kabupaten','id_kab','kabupaten_id');
    }
    public function koordinator()
    {
        return $this->hasOne('\App\Models\Koordinator','id','koordinator_id');
    }
    
    public function simpanan()
    {
        return $this->hasMany(UserMemberSimpanan::class,'user_member_id','id');
    }
    
    public function klaim()
    {
        return $this->hasOne('\App\Models\Klaim','user_member_id','id');
    }
    
    public function kota()
    {
        return $this->hasOne('\App\Models\City','code','city');
    }   
}