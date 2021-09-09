import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="p-2 bg-gray-800">
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="text-white flex flex-col items-center">
                    <div className="p-3 font-semibold text-2xl">Movie App</div>
                </div>
                <div className="text-gray-300 flex items-center justify-evenly max-w-2xl">
                    <div className="p-3 hover:text-white cursor-pointer">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="p-3 hover:text-white cursor-pointer">
                        <a>Login</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
