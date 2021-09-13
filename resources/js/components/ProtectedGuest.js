import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedGuest({ component: Component, ...rest }) {
    const token = Cookies.get("token");
    console.log(`ProtectedAuth:${token}`);

    return (
        <Route
            {...rest}
            render={() => (!token ? <Component /> : <Redirect to="/" />)}
        />
    );
}

export default ProtectedGuest;
