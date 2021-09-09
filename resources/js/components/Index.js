import React from "react";
import ReactDOM from "react-dom";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Movies from "./movie/Movies";
import MovieFeatured from "./movie/MovieFeatured";
import MovieDetails from "./movie/movieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Header />
        <Navbar />
        <Switch>
            <Route path="/" exact component={MovieFeatured} />
            <Route path="/genre" component={Movies} />
            <Route path="/" component={MovieDetails} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
