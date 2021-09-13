<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

          // api/test
Route::get('/test', function(){
    $user = User::create([
        "firstName" => "Michael",
        "lastName" => "Guilaran",
        "email" => "test@gmail.com",
        "password" => "test"
    ]);

    return $user;
});


// Public Routes
Route::post('/users', [UserController::class, 'store']);
Route::post('/login', [AuthController::class, 'login']);





// Protected Routes
Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // Users Routes
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::put('/users{id}', [UserController::class, 'update']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);
    Route::get('/users/search/{name}', [UserController::class, 'search']);

    //plan Routes
    // Route::get('/plan', [PlanController::class, 'index']);
    // Route::post('/plan', [PlanController::class, 'store']);
    // Route::get('/plan/{plan:user_id}', [PlanController::class, 'show']);
    // Route::put('/plan/{plan:user_id}', [PlanController::class, 'update']);
    // Route::delete('/plan/{id}', [PlanController::class, 'destroy']);

    // Subs Route
    Route::post('/payment', [SubscriptionController::class, 'purchase']);
    
});

