import React from "react";
import ReactDOM from "react-dom";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Movies from "./movie/Movies";
import MovieFeatured from "./movie/MovieFeatured";
import MovieDetails from "./movie/movieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";

function Index() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Register path="/register" component={Register} />
                    <div>
                        <Navbar />
                        <Route path="/" exact component={MovieFeatured} />
                        <Route path="/genre/:genre" component={Movies} />
                        <Route path="/" component={MovieDetails} />
                    </div>
                </Switch>
            </Router>
        </div>
    );
}

export default Index;
if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
