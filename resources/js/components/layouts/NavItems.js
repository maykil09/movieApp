import React from "react";
import { Link } from "react-router-dom";

function NavItems({ title, url }) {
    return (
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125">
            <Link to={`/genre?genre=${url}`}>{title}</Link>
        </h2>
    );
}

export default NavItems;
