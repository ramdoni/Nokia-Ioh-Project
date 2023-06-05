<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableUangPendaftaran extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uang_pendaftaran', function (Blueprint $table) {
            $table->id();
            $table->integer('user_member_id')->nullable();
            $table->integer('nominal')->nullable();
            $table->boolean('status')->default(0)->nullable()->comment="0 = waiting payment, 1 = disetujui, 2 = ditolak";
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
        Schema::dropIfExists('uang_pendaftaran');
    }
}
