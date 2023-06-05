<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableUserMemberAhliWaris extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_member_ahli_waris', function (Blueprint $table) {
            $table->id();
            $table->integer('user_member_id')->nullable();
            $table->string('name',100)->nullable();
            $table->string('no_ktp',200)->nullable();
            $table->string('tempat_lahir',200)->nullable();
            $table->date('tanggal_lahir')->nullable();
            $table->string('no_telepon',25)->nullable();
            $table->text('alamat')->nullable();
            $table->string('jenis_kelamin',14)->nullable();
            $table->string('golongan_darah',2)->nullable();
            $table->string('hubungan',50)->nullable();
            $table->text('foto_ktp')->nullable();
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
        Schema::dropIfExists('user_member_ahli_waris');
    }
}
