import React from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

function Header() {
    const token = Cookies.get("token");

    const logout = async () => {
        try {
            await axios.get("/sanctum/csrf-cookie");
            try {
                const token = Cookies.get("token");
                console.log(token);
                var config = {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                };
                console.log(config);
                const response = await axios.post(
                    "/api/logout",
                    { user_id: Cookies.get("user_id") },
                    config
                );
                if (response.data.success) {
                    alert(response.data.message);
                    console.log(response.data.message);
                    Cookies.remove("token");
                    Cookies.remove("user_id");
                    Cookies.remove("st_id");
                    Cookies.remove("isAdmin");
                    Cookies.remove("email");
                    window.location.reload();
                }
            } catch (err) {
                console.log(err);
            }
        } catch (err) {
            console.log(err);
        }
    };

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
                    {token ? (
                        <div className="p-3 hover:text-white cursor-pointer">
                            <button onClick={logout}>logout</button>
                        </div>
                    ) : (
                        <>
                            <div className="p-3 hover:text-white cursor-pointer">
                                <Link to="/login">Login</Link>
                            </div>{" "}
                            <div className="p-3 hover:text-white cursor-pointer">
                                <Link to="/register">Register</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
