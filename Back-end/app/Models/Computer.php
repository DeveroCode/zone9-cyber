<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Computer extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'name'];


    public function users(){
        return $this->belongsToMany(User::class);
    }
}