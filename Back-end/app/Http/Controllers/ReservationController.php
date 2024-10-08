<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReservationRequest;
use App\Models\Reservation;

class ReservationController extends Controller
{
    //
    public function create(ReservationRequest $request)
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
        ]);

        return response()->json(['message' => "Reservacion creada"], 201);
    }
}
