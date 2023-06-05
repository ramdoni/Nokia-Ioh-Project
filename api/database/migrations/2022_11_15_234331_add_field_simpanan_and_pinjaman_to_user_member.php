<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldSimpananAndPinjamanToUserMember extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_member', function (Blueprint $table) {
            $table->bigInteger('simpanan_pokok')->default(0)->nullable();
            $table->bigInteger('simpanan_wajib')->default(0)->nullable();
            $table->bigInteger('simpanan_sukarela')->default(0)->nullable();
            $table->bigInteger('simpanan_lain_lain')->default(0)->nullable();
            $table->bigInteger('pinjaman_uang')->default(0)->nullable();
            $table->bigInteger('pinjaman_astra')->default(0)->nullable();
            $table->bigInteger('pinjaman_toko')->default(0)->nullable();
            $table->bigInteger('pinjaman_motor')->default(0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_member', function (Blueprint $table) {
            //
        });
    }
}
