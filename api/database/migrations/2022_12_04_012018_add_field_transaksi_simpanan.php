<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldTransaksiSimpanan extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaksi_simpanan', function (Blueprint $table) {
            $table->id();
            $table->integer('transaksi_id')->nullable();
            $table->smallInteger('tahun')->nullable();
            $table->smallInteger('bulan')->nullable();
            $table->integer('nominal')->nullable();
            $table->integer('user_member_id')->nullable();
            $table->boolean('status')->default(0)->nullable();
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
        Schema::dropIfExists('transaksi_simpanan');
    }
}
