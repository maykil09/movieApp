<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Stripe;

class SubscriptionController extends Controller
{
    public function purchase(Request $request)
    {
        $user = User::find($request->user_id);
        $user->newSubscription(
            'plan', $request->plan
        )->create($request->paymentMethodId);
        
        $user = User::find($request->user_id);

        return [
            "success" => true,
            "user" => $user
        ];
    }
}
