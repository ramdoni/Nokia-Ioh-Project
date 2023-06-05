<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTablePinjamanItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pinjaman_items', function (Blueprint $table) {
            $table->id();
            $table->integer('pinjaman_id')->nullable();
            $table->date('bulan')->nullable();
            $table->smallInteger('angsuran_ke')->nullable();
            $table->integer('angsuran_nominal')->nullable();
            $table->string('jasa',10)->nullable();
            $table->integer('jasa_nominal')->nullable();
            $table->integer('tagihan')->nullable();
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
        Schema::dropIfExists('pinjaman_items');
    }
}
