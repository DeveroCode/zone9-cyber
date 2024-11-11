<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/reservations', [ReservationController::class, 'index']);
    Route::get('/stats', [ReservationController::class, 'show']);
    Route::post('/update-reservation/{id}', [ReservationController::class, 'update']);
    Route::delete('/delete-reservation/{id}', [ReservationController::class, 'destroy']);
    Route::post('/reservation-loan-update/{id}', [ReservationController::class, 'loanUpdate']);

    // Route::get('/user', [UserController::class, 'show']);
    Route::controller(UserController::class)->group(function () {
        Route::get('/all-users', 'index');
        Route::post('/update-password/{id}', 'update');
        Route::get('/search-users/{word}', 'show');
    })->middleware(IsAdmin::class);
});

Route::controller(ReservationController::class)->group(function () {
    Route::post('/create-reservation', 'store');
});
Route::post('/auth/user', [AuthController::class, 'login']);