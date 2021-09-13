<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $user = User::where('email', $fields['email'])->first();

        if (!Auth::attempt($fields)) {
            return response([
                'message' => 'Cant find Credentials'
            ], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'success' => true,
            'user' => $user,
            'token' => $token
        ];

        return response($response,201);
    }

    public function logout(Request $request) {
        
        $user = User::find($request->user_id);
        $user->tokens()->delete();

        return [
            'message' => 'Logged out',
            'success' => true
        ];
    }
}
