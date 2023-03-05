<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Customer extends Model
{
    use HasUuids, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'user_id'
    ];

    /**
     * Get the apps for the customer.
     */
    public function apps(): HasMany
    {
        return $this->hasMany(App::class);
    }

    /**
     * Get customer users.
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
