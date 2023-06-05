<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreateAsuransiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asuransi', function (Blueprint $table) {
            $table->id();
            $table->integer('user_member_id')->nullable();
            $table->text('policyno')->nullable();
            $table->text('partnername')->nullable();
            $table->text('productname')->nullable();
            $table->text('membernostr')->nullable();
            $table->text('name')->nullable();
            $table->date('dob')->nullable();
            $table->text('age')->nullable();
            $table->date('startdate')->nullable();
            $table->date('enddate')->nullable();
            $table->text('term')->nullable();
            $table->double('up')->nullable();
            $table->double('premi')->nullable();
            $table->text('mortalita')->nullable();
            $table->double('ekstra_premi')->nullable();
            $table->double('total_premi')->nullable();
            $table->text('medicaltype')->nullable();
            $table->text('noinvoice')->nullable();
            $table->text('noreg')->nullable();
            $table->date('accept_date')->nullable();
            $table->text('batchno')->nullable();
            $table->date('stnc_remarks')->nullable();
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
        Schema::dropIfExists('asuransi');
    }
}
