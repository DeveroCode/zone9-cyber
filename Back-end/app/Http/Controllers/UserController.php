<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdatePassword;
use App\Http\Requests\UpdatePasswordRequest;
use App\Http\Resources\UserCollection;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    
    public function index()
    {
        $user = User::where('type_user', '!=', 'admin')->get();
        return new UserCollection($user);
    }
    
    public function update(UpdatePasswordRequest $request, $id)
    {
        $data = $request->validated();
        $user = User::findOrFail($id);
        

        if($user){
            $user->update($data);
            return response()->json(['message' => 'Contraseña actualizada correctamente'], 200);
        }else {
            return response()->json(['message' => "Usuario no encontrado"], 404);
        }
    }

    public function show($word){
        $user = User::where('name', 'like', '%' . $word . '%')->orWhereRaw("CONCAT(name, ' ', last_name) LIKE ?", ["%{$word}%"])->get();
        
        if($user->isNotEmpty()){
            return new UserCollection($user);
        }else{
            return response()->json(['message' => "Usuario no encontrado"], 404);
        }
    }
}