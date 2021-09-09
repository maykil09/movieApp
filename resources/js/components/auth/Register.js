import React, { useState } from "react";

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const submitRegistration = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        let newUser = {
            firstName,
            lastName,
            email,
            password,
            passwordRepeat,
        };
        console.log(newUser);
    };

    return (
        <div className="bg-white w-full lg:w-1/3 mx-auto rounded-lg lg:my-20 px-4 py-4 shadow-lg">
            <h1 className="text-gray-700 font-bold text-4xl mb-4 text-center ">
                Register
            </h1>
            <form onSubmit={submitRegistration}>
                <input
                    type="text"
                    placeholder="First Name"
                    className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password repeat"
                    className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setPasswordRepeat(e.target.value)}
                />
                <button
                    className={`text-white py-3 rounded-lg w-full font-bold text-xl tracking-wider ${
                        isSubmit ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    style={{ backgroundColor: "#1977f2" }}
                >
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default Register;
