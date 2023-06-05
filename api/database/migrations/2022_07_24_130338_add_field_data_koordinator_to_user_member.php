<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldDataKoordinatorToUserMember extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_member', function (Blueprint $table) {
            $table->string('koordinator_nama')->nullable();
            $table->string('koordinator_nik')->nullable();
            $table->string('koordinator_hp')->nullable();
            $table->string('koordinator_alamat')->nullable();
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
