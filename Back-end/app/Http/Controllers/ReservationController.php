<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\StatsCollection;
use App\Http\Requests\ReservationRequest;
use App\Http\Resources\ReservationsCollection;
use App\Http\Requests\UpdateReservationRequest;

class ReservationController extends Controller
{
    //
    public function index()
    {
        $reservations = Reservation::orderBy('created_at', 'desc')->get();
        return new ReservationsCollection($reservations);
    }

    public function update(UpdateReservationRequest $request , $id)
    {   
        $data = $request->validated();
        $reservation = Reservation::findOrFail($id);

        if($reservation){
            $reservation->update($data);
            return response()->json(['message' => "Reservación actualizada con exito"], 200);
        }else {
            return response()->json(['message' => "Reservación no encontrada"], 404);
        }
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
            'total_amount' => $data['total_amount'],
        ]);

        return response()->json(['message' => "Reservación creada con exito"], 201);
    }

    public function show()
    {
        $reservations = Reservation::all();
        return new StatsCollection($reservations);
    }

    public function destroy($id)
    {
        $reservation = Reservation::findOrFail($id);
        if($reservation){
            $reservation->delete();
            return response()->json(['message' => "Reservación eliminada con exito"], 200);
        }else {
            return response()->json(['message' => "Reservación no encontrada"], 404);
        }   
    }
}