<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableIuran extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('iuran', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->integer('nominal')->nullable();
            $table->tinyInteger('from_periode')->nullable();
            $table->tinyInteger('to_periode')->nullable();
            $table->text('file')->nullable();
            $table->integer('bank_account_id')->nullable();
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
        Schema::dropIfExists('iuran');
    }
}
