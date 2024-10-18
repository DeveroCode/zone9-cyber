<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReservationRequest;
use App\Http\Resources\ReservationsCollection;
use App\Http\Resources\StatsCollection;
use App\Models\Reservation;

class ReservationController extends Controller
{
    //
    public function index()
    {
        $reservations = Reservation::all();
        return new ReservationsCollection($reservations);
    }

    public function show()
    {
        $reservations = Reservation::all();
        return new StatsCollection($reservations);
    }

    public function store(ReservationRequest $request)
    {
        $data = $request->validated();

        Reservation::create([
            'name' => $data['name'],
            'last_name' => $data['last_name'],
            'folio' => $data['folio'],
            'pc' => $data['pc'],
            'phone' => $data['phone'],
            'start' => $data['start'],
            'end' => $data['end'],
            'total_hours' => $data['total_hours'],
            'total_mount' => $data['total_mount'],
        ]);

        return response()->json(['message' => "Reservacion creada"], 201);
    }

    public function create(){
        // Add code
    }
}