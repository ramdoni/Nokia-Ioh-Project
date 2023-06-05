<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKlaimTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('klaim', function (Blueprint $table) {
            $table->id();
            $table->integer('user_member_id')->nullable();
            $table->double('santunan_pelayanan')->nullable();
            $table->double('santunan_uang_duka')->nullable();
            $table->double('total')->nullable();
            $table->date('tgl_kematian')->nullable();
            $table->text('foto_ktp_kk_meninggal')->nullable();
            $table->text('ktp_ahliwaris')->nullable();
            $table->text('surat_kematian')->nullable();
            $table->text('foto_kta')->nullable();
            $table->date('tgl_pengajuan')->nullable();
            $table->integer('is_approve_ketua')->nullable();
            $table->date('tgl_approve_ketua')->nullable();
            $table->integer('is_finish')->nullable();
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
        Schema::dropIfExists('klaim');
    }
}
