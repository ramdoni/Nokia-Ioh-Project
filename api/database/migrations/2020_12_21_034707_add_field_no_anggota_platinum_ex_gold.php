<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldNoAnggotaPlatinumExGold extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_member', function (Blueprint $table) {
            $table->string('no_form',100)->nullable();
            $table->string('no_anggota_platinum',100)->nullable();
            $table->string('no_anggota_gold',100)->nullable();
            $table->integer('koordinator_id')->nullable();
            $table->date('tanggal_diterima')->nullable();
            $table->date('tanggal_meninggal')->nullable();
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
