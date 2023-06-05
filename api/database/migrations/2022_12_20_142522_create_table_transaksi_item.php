<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableTransaksiItem extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaksi_items', function (Blueprint $table) {
            $table->id();
            $table->integer('transaksi_id')->nullable();
            $table->integer('product_id')->nullable();
            $table->text('description')->nullable();
            $table->integer('price')->nullable();
            $table->integer('qty')->nullable();
            $table->integer('total')->nullable();
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
        Schema::dropIfExists('transaksi_items');
    }
}
