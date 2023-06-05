<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableBankKoordinator extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bank_account', function (Blueprint $table) {
            $table->id();
            $table->string('bank',100)->nullable();
            $table->string('owner',100)->nullable();
            $table->string('no_rekening',100)->nullable();
            $table->string('cabang',200)->nullable();
            $table->timestamps();
        });
        Schema::create('koordinator', function (Blueprint $table) {
            $table->id();
            $table->string('name',100)->nullable();
            $table->string('telepon',100)->nullable();
            $table->string('email',100)->nullable();
            $table->text('address')->nullable();
            $table->string('referal_code',100)->nullable();
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
        Schema::dropIfExists('bank_account');
    }
}
