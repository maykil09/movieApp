import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function PaymentForm({ planId }) {
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    console.log(planId);
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            console.log("[error]", error);
        } else {
            console.log("[PaymentMethod]", paymentMethod);
        }
    };

    const submitPayment = async (e) => {
        // Block native form submission.
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        console.log(elements.getElement(CardElement));

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        const email = Cookies.get("email");
        // Use your card Element with other Stripe.js APIs
        const results = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: {
                email: email,
            },
        });
        const token = Cookies.get("token");
        var config = {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const res = await axios.get("/sanctum/csrf-cookie");
            console.log(res);
            const creds = {
                paymentMethodId: results.paymentMethod.id,
                plan: planId,
                user_id: Cookies.get("user_id"),
            };

            try {
                const payment = await axios.post("/api/payment", creds, config);
                // console.log(payment.data.success);
                // console.log(payment.data.user.stripe_id);

                if (payment.data.success) {
                    Cookies.set("st_id", payment.data.user.stripe_id);
                    return history.push("/");
                }
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <form onSubmit={submitPayment}>
                <div>
                    <CardElement
                        className="mb-4 border border-gray-200 px-2 py-4 rounded-xl"
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#424770",
                                    "::placeholder": {
                                        color: "#aab7c4",
                                    },
                                },
                                invalid: {
                                    color: "#9e2146",
                                },
                            },
                        }}
                    />
                </div>
                <div className="mx-8">
                    <button
                        type="submit"
                        className={`text-white py-3 rounded-lg w-full font-bold text-xl tracking-wider`}
                        style={{ backgroundColor: "#1977f2" }}
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </>
    );
}

export default PaymentForm;
