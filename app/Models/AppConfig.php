<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
//use Illuminate\Database\Eloquent\Concerns\HasUuids;

class AppConfig extends Model
{
    use HasFactory;

    /**
     * Get the customer that owns the app.
     */
    public function app(): BelongsTo
    {
        return $this->belongsTo(App::class);
    }
}
