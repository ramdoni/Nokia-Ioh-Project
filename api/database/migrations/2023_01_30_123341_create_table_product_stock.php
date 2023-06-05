<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableProductStock extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_stock', function (Blueprint $table) {
            $table->id();
            $table->string('requester',150)->nullable();
            $table->string('pr_number',150)->nullable();
            $table->date('pr_date')->nullable();
            $table->string('po_number',150)->nullable();
            $table->date('po_date')->nullable();
            $table->string('do_number',150)->nullable();
            $table->date('receipt_date')->nullable();
            $table->integer('product_id')->nullable();
            $table->date('expired_date')->nullable();
            $table->integer('price')->nullable();
            $table->integer('qty')->nullable();
            $table->bigInteger('total')->nullable();
            $table->bigInteger('total_margin')->nullable();
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
        Schema::dropIfExists('product_stock');
    }
}
