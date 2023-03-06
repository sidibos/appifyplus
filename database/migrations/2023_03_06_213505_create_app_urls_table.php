<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_urls', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('relative_url');
            $table->string('content_id');
            $table->uuid('app_id');
            $table->enum(
                'content_type', 
                [
                    'page', 
                    'dynamic', 
                    'event'
                ]
            );
            $table->uuid('provider_id')->nullable();
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
        Schema::dropIfExists('app_urls');
    }
};
