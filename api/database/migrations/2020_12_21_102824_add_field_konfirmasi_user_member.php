<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldKonfirmasiUserMember extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_member', function (Blueprint $table) {
            $table->date('tanggal_konfirmasi')->nullable();
            $table->text('file_konfirmasi')->nullable();
            $table->smallInteger('iuran_tetap')->nullable();
            $table->smallInteger('sumbangan')->nullable();
            $table->integer('total_iuran_tetap')->nullable();
            $table->integer('total_sumbangan')->nullable();
            $table->integer('uang_pendaftaran')->nullable();
            $table->integer('total_pembayaran')->nullable();
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
        });
    }
}
