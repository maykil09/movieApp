<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        return [
            "success" => true,
            "total" => User::all()->count(),
            "subscribed" => User::all()->whereNotNull('stripe_id')->count(),
            "new" =>  User::all()->whereNull('stripe_id')->count(),
            "users" => User::all()
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            "firstName" => "required",
            "lastName" => "required",
            "email" => "required|email",
            "role" => "required",
            "password" => "required"
        ]);

        $user = User::create([
            "firstName" => $fields['firstName'],
            "lastName" => $fields['lastName'],
            "email" => $fields['email'],
            "role" => $fields['role'],
            "password" => bcrypt($fields['password']),
        ]);

        $token = $user->createToken('movieapp')->plainTextToken;
    

        return [
            "success" => ($user != null) ? true : false,
            "user" => $user,
            'token' => $token
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return [
            "success" => ($user != null) ? true : false,
            "user" => $user
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if($user != null){
            $user->update($request->all());
            return [
                "success" => true,
                "user" => $user
            ];
        }
        return [
            "success" => false,
            "user" => $user
        ];
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::destroy($id);
        return [
            "success" => ($user == 1) ? true : false,
            "user" => $user
        ];
    }

    public function search($name)
    {
        
        return User::where('firstName', 'like', '%'.$name.'%')
                    ->orWhere('lastName', 'like', '%'.$name.'%')        
                    ->get();
    }
    
}
