import axios from "axios";
import { map } from "jquery";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";

function UserList() {
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
                    setUsers(users.data.users);
                }
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, []);

    const deleteUser = async (id) => {
        // console.log(id);
        const token = Cookies.get("token");
        var config = {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const res = await axios.delete(
                `http://127.0.0.1:8000/api/users/${id}`,
                config
            );
            if (res.data.success) {
                alert("User Deleted");
                window.location.reload();
            }
        } catch (err) {}
    };
    return (
        <div className="flex">
            <AdminSidebar />
            <div className="main-content flex-1 bg-gray-100  pb-24 md:pb-5">
                <div className="bg-gray-800 pt-3">
                    <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                        <h3 className="font-bold pl-2">User List</h3>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <table className="w-full border">
                        <thead>
                            <tr className="bg-gray-50 border-b">
                                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div className="flex items-center justify-center">
                                        ID
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        ></svg>
                                    </div>
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div className="flex items-center justify-center">
                                        Name
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        ></svg>
                                    </div>
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div className="flex items-center justify-center">
                                        Email
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        ></svg>
                                    </div>
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div className="flex items-center justify-center">
                                        Status
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        ></svg>
                                    </div>
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div className="flex items-center justify-center">
                                        Action
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        ></svg>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => {
                                return (
                                    <tr
                                        key={user.id}
                                        className="bg-gray-100 text-center border-b text-sm text-gray-600"
                                    >
                                        <td className="p-2 border-r">
                                            {user.id}
                                        </td>
                                        <td className="p-2 border-r">
                                            {`${user.firstName} ${user.lastName}`}
                                        </td>
                                        <td className="p-2 border-r">
                                            {user.email}
                                        </td>
                                        <td className="p-2 border-r">
                                            {user?.stripe_id
                                                ? "Subcribed"
                                                : "New User"}
                                        </td>
                                        <td>
                                            <a
                                                href="#"
                                                className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                                            >
                                                Edit
                                            </a>
                                            <button
                                                onClick={() =>
                                                    deleteUser(user.id)
                                                }
                                                href="#"
                                                className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserList;
