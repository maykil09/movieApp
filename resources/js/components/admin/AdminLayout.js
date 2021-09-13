import React from "react";
import { Route } from "react-router";
import Dashboard from "./Dashboard";
import UserList from "./UserList";

function AdminLayout() {
    return (
        <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
            <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h3 className="font-bold pl-2">User List</h3>
                </div>
            </div>
            <div className="flex flex-wrap">
                <table class="w-full border">
                    <thead>
                        <tr class="bg-gray-50 border-b">
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                    ID
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                    Name
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                    Email
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                    Status
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                    Action
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                            <td class="p-2 border-r">1</td>
                            <td class="p-2 border-r">John Doe</td>
                            <td class="p-2 border-r">john@gmail.com</td>
                            <td class="p-2 border-r">Sydney, Australia</td>
                            <td>
                                <a
                                    href="#"
                                    class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                                >
                                    Remove
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminLayout;
