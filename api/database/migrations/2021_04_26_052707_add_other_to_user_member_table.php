<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOtherToUserMemberTable extends Migration
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
            $table->text('city_lainnya')->nullable();
            $table->text('hubungananggota1_lainnya')->nullable();
            $table->text('hubungananggota2_lainnya')->nullable();
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
            $table->dropColumn(['city_lainnya','hubungananggota1_lainnya','hubungananggota2_lainnya']);
        });
    }
}
