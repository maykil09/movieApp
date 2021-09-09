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
import Plan from "./pages/Plan";
import Payment from "./pages/Payment";

function Index() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/plan" exact component={Plan} />
                    <Route path="/card/details" exact component={Payment} />
                    <div>
                        <Navbar />
                        <Route path="/" exact component={MovieFeatured} />
                        <Route path="/genre/:genre" component={Movies} />
                        <Route path="/movie/:id" component={MovieDetails} />
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
