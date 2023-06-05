<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNotesToUsermember extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_member', function (Blueprint $table) {
            //
            $table->integer('user_id_recomendation')->nullable();
            $table->string('ketua_notes')->nullable();
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
            $table->dropColumn(['user_id_recomendation',  'ketua_notes']);
        });
    }
}
