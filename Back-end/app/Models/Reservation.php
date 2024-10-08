<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    public $fillable = [
        'name',
        'last_name',
        'folio',
        'pc',
        'phone',
        'start',
        'end',
    ];
}
