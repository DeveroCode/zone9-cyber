<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReservationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/reservations', [ReservationController::class, 'index']);
    // Route::get('/stats', [ReservationController::class, 'show']);
});

Route::controller(ReservationController::class)->group(function () {
    Route::post('/create-reservation', 'store');
    Route::get('/stats', 'show');
});
Route::post('/auth/user', [AuthController::class, 'login']);