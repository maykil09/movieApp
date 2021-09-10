import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Payment() {
    const [cardNumber, setCardNumber] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [cvc, setCvc] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const history = useHistory();

    const submitPayment = (e) => {
        e.preventDefault();
        setIsSubmit(true);

        let payment = {
            cardNumber,
            expMonth,
            expYear,
            cvc,
        };
        console.log(payment);
        return history.push("/");
    };
    return (
        <div className="bg-white w-full lg:w-2/3 mx-auto rounded-lg lg:my-20 px-4 py-4 shadow-lg">
            <h1 className="font-bold text-3xl text-center">Payment Details</h1>
            <form onSubmit={submitPayment}>
                <div className="mb-4 mt-6 mx-8">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Car Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Card Number"
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </div>
                <div className="mb-4 mx-8">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="exp-month"
                    >
                        Expiry Month
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="MM"
                        onChange={(e) => setExpMonth(e.target.value)}
                    />
                </div>
                <div className="mb-4 mx-8">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="exp-year"
                    >
                        Expiry Year
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="YYYY"
                        onChange={(e) => setExpYear(e.target.value)}
                    />
                </div>
                <div className="mb-6 mx-8">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="cvc"
                    >
                        CVC
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="CVC"
                        onChange={(e) => setCvc(e.target.value)}
                    />
                </div>
                <div className="mx-8">
                    <button
                        type="submit"
                        className={`text-white py-3 rounded-lg w-full font-bold text-xl tracking-wider  ${
                            isSubmit ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        style={{ backgroundColor: "#1977f2" }}
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Payment;
