import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";

function Dashboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const token = Cookies.get("token");
            try {
                var config = {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const users = await axios.get("/api/users", config);
                if (users) {
                    console.log(users.data);
                    setUsers(users.data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, []);
    return (
        <div className="flex">
            <AdminSidebar />
            <div className="main-content flex-1 bg-gray-100 pb-24 md:pb-5">
                <div className="bg-gray-800 pt-3">
                    <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                        <h3 className="font-bold pl-2">Dashboard</h3>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-blue-600">
                                        <i className="fas fa-server fa-2x fa-inverse"></i>
                                    </div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h5 className="font-bold uppercase text-gray-600">
                                        Total User
                                    </h5>
                                    <h3 className="font-bold text-3xl">
                                        {users.total}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-green-600">
                                        <i className="fa fa-wallet fa-2x fa-inverse"></i>
                                    </div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h5 className="font-bold uppercase text-gray-600">
                                        Subscribed User
                                    </h5>
                                    <h3 className="font-bold text-3xl">
                                        {users.subscribed}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-yellow-600">
                                        <i className="fas fa-user-plus fa-2x fa-inverse"></i>
                                    </div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h5 className="font-bold uppercase text-gray-600">
                                        New Users
                                    </h5>
                                    <h3 className="font-bold text-3xl">
                                        {users.new}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
