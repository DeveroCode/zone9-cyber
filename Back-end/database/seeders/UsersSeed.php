<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Sergio',
            'last_name' => 'Apodaca',
            'type_user' => 'admin',
            'email' => 'admin@localhost.com',
            'password' => Hash::make('password'),
        ]);
        DB::table('users')->insert([
            'name' => 'Carlos',
            'last_name' => 'Martinez',
            'type_user' => 'empleado',
            'email' => 'empleado@localhost.com',
            'password' => Hash::make('password'),
        ]);
    }
}
