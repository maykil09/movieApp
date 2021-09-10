import React from "react";
import { useHistory } from "react-router-dom";

function Plan() {
    const history = useHistory();

    const submitPlan = (e) => {
        e.preventDefault();
        return history.push("/card/details");
    };

    return (
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Pricing
            </h1>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                    <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="p-8 text-3xl font-bold text-center border-b-4">
                            Personal
                        </div>
                        <ul className="w-full text-center text-sm">
                            <li className="border-b py-4">
                                Number of device can use: 1
                            </li>
                            <li className="border-b py-4">
                                Unlimited movies and TV shows
                            </li>
                            <li className="border-b py-4">No HD available</li>
                        </ul>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                            ₱300.00
                        </div>
                        <div className="flex items-center justify-center">
                            <form onSubmit={submitPlan}>
                                <button
                                    type="submit"
                                    className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg bg-blue-500"
                                >
                                    Buy
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="w-full p-8 text-3xl font-bold text-center border-b-4">
                            Basic
                        </div>

                        <ul className="w-full text-center text-base font-bold">
                            <li className="border-b py-4">
                                Number of device can use: 2
                            </li>
                            <li className="border-b py-4">
                                Unlimited movies and TV shows
                            </li>
                            <li className="border-b py-4">HD available</li>
                        </ul>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="w-full pt-6 text-4xl font-bold text-center">
                            ₱500.00
                        </div>
                        <div className="flex items-center justify-center">
                            <form onSubmit={submitPlan}>
                                <button
                                    type="submit"
                                    className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg bg-blue-500"
                                >
                                    Buy
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                    <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="p-8 text-3xl font-bold text-center border-b-4">
                            Family
                        </div>
                        <ul className="w-full text-center text-sm">
                            <li className="border-b py-4">
                                Number of device can use: 5
                            </li>
                            <li className="border-b py-4">
                                Unlimited movies and TV shows
                            </li>
                            <li className="border-b py-4">HD available</li>
                            <li className="border-b py-4">
                                Ultra HD available
                            </li>
                        </ul>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                            ₱999.00
                        </div>
                        <div className="flex items-center justify-center">
                            <form onSubmit={submitPlan}>
                                <button
                                    type="submit"
                                    className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg bg-blue-500"
                                >
                                    Buy
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plan;
