import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(process.env.MIX_STRIPE_KEY);

function StripeContainer() {
    const { planId } = useParams();
    console.log(planId);
    return (
        <div className="bg-white w-full lg:w-1/3 mx-auto items-center rounded-lg lg:my-20 px-4 py-4 shadow-lg">
            <Elements stripe={stripePromise}>
                <PaymentForm planId={planId} />
            </Elements>
        </div>
    );
}

export default StripeContainer;
