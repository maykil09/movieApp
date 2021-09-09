import React from "react";
import NavItems from "./NavItems";
import request from "../../utils/request";

function Navbar() {
    return (
        <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide py-5 ">
            {Object.entries(request).map(([key, { title }]) => (
                <NavItems key={key} title={title} url={key} />
            ))}
        </div>
    );
}

export default Navbar;
