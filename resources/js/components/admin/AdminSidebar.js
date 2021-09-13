import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
    return (
        <div className="w-2/12 h-screen bg-gray-800">
            <div>
                <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                    <li className="mr-3 flex-1">
                        <div
                            href="#"
                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
                        >
                            <i className="fas fa-tasks pr-0 md:pr-3"></i>
                            <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                                <Link to="/admin/dashboard"> Dashboard</Link>
                            </span>
                        </div>
                    </li>
                    <li className="mr-3 flex-1">
                        <div
                            href="#"
                            className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
                        >
                            <i className="fa fa-envelope pr-0 md:pr-3"></i>
                            <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                                <Link to="/admin/user/list">User List</Link>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AdminSidebar;
