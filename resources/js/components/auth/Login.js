import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const requestLogin = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        let req = { email, password };
    };

    return (
        <div className="bg-white w-full lg:w-1/3 mx-auto rounded-lg lg:my-20 px-4 py-4 shadow-lg">
            <h1 className="text-gray-700 font-bold text-4xl mb-4 text-center ">
                LOGIN
            </h1>
            <form onSubmit={requestLogin}>
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Password"
                    className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 active:bg-blue-700 "
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className={`text-white py-3 rounded-lg w-full font-bold text-xl tracking-wider ${
                        isSubmit ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    style={{ backgroundColor: "#1977f2" }}
                >
                    Login
                </button>
                <div className="flex justify-center my-6">
                    <Link
                        to="/register"
                        className="text-white font-bold py-3 px-5 rounded"
                        style={{ backgroundColor: "#54b72b" }}
                    >
                        Create new Account
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
