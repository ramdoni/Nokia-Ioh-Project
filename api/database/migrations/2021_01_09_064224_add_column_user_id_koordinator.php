<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnUserIdKoordinator extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('koordinator', function (Blueprint $table) {
            $table->integer('user_id')->nullable();
            $table->boolean('status')->default(0)->nullable()->comment = '1=Active / 0=Inactive';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('koordinator', function (Blueprint $table) {
            //
        });
    }
}
