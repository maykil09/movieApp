import React from "react";

function Login() {
    return (
        <div className="bg-white w-full lg:w-1/3 mx-auto rounded-lg lg:my-20 px-4 py-4 shadow-lg">
            <h1 className="text-gray-700 font-bold text-4xl mb-4 text-center ">
                LOGIN
            </h1>
            <input
                type="text"
                placeholder="Email"
                className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            />
            <input
                type="text"
                placeholder="Password"
                className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button
                className="text-white py-3 rounded-lg w-full font-bold text-xl tracking-wider"
                style={{ backgroundColor: "#1977f2" }}
            >
                Login
            </button>
            <div className="flex justify-center my-6">
                <button
                    className="text-white h-12 rounded px-6 font-bold"
                    style={{ backgroundColor: "#54b72b" }}
                >
                    Create new Account
                </button>
            </div>
        </div>
    );
}

export default Login;
