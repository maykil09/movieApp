import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Movies from "./movie/Movies";
import MovieFeatured from "./movie/MovieFeatured";
import MovieDetails from "./movie/movieDetails";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation,
} from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Plan from "./pages/Plan";
import StripeContainer from "./pages/StripeContainer";
import ProtectedAuth from "./ProtectedAuth";
import ProtectedGuest from "./ProtectedGuest";
import Cookies from "js-cookie";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import UserList from "./admin/UserList";

function Index() {
    return (
        <Router>
            <Header />
            <Switch>
                {/* <AdminLayout /> */}
                <ProtectedAuth path="/admin/user/list" component={UserList} />
                <ProtectedAuth path="/admin/dashboard" component={Dashboard} />;
                <ProtectedAuth exact path="/plan" component={Plan} />
                <ProtectedAuth
                    exact
                    path="/plan/:planId"
                    component={StripeContainer}
                />
                <ProtectedGuest exact path="/login" component={Login} />
                <ProtectedGuest exact path="/register" component={Register} />
                <Route path="/movie/:id" component={MovieDetails} />
                <>
                    <Navbar />
                    <Route exact path="/" exact render={() => isAuth()} />
                    <Route path="/genre/:genre" component={Movies} />
                </>
            </Switch>
        </Router>
    );
}

const isAuth = () => {
    let token = Cookies.get("token");
    let stripeId = Cookies.get("st_id");
    let isAdmin = Cookies.get("isAdmin");

    console.log(isAdmin);
    if (token) {
        if (isAdmin) {
            return <Redirect to="/admin/dashboard" />;
        } else {
            if (stripeId) {
                return <MovieFeatured />;
            } else {
                return <Redirect to="/plan" />;
            }
        }
    } else {
        return <MovieFeatured />;
    }
};

export default Index;
if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
