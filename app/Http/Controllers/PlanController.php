<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $plan = Plan::all();
        return [
            "success" => true,
            "users" => $plan
        ];; 
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
            "name" => "required",
            "price" => "required|numeric",
            "user_id" => "required",
        ]);

        $plan = Plan::create([
            "name" => $fields['name'],
            "price" => $fields['price'],
            "user_id" => $fields['user_id'],
        ]);

        return [
            "success" => ($plan != null) ? true : false,
            "plan" => $plan,
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
        $plan = Plan::with('user')->find($id);
        return [
            "success" => ($plan != null) ? true : false,
            "plan" => $plan
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
        $plan = Plan::find($id);
        if($plan != null){
            $plan->update($request->all());
            return [
                "success" => true,
                "plan" => $plan
            ];
        }
        return [
            "success" => false,
            "plan" => $plan
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
        $user = Plan::destroy($id);
        return [
            "success" => ($user == 1) ? true : false,
            "user" => $user
        ];
    }
}
