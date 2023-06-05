<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserKasir extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_kasir', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->integer('starting_cash')->nullable();
            $table->dateTime('start_work_date')->nullable();
            $table->integer('end_cash')->nullable();
            $table->dateTime('end_work_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_kasir');
    }
}
