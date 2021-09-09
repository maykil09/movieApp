import React from "react";

function MovieItems({ title, description, imgPath }) {
    const strLength = (str) => {
        if (str.length > 200 && str.length > 0) {
            let new_str = str + "";
            new_str = str.substr(0, 200);
            new_str = str.substr(0, new_str.lastIndexOf(" "));
            new_str = new_str.length > 0 ? new_str : str.substr(0, 200);
            return new_str + "...";
        }
        return str;
    };

    return (
        <div className="bg-white w-12/12 rounded-xl cursor-pointer transition duration-100 transform hover:scale-105">
            <img src={imgPath} className="object-contain w-full rounded-t-xl" />

            <div className="grid">
                <div className="p-5">
                    <div className="font-bold text-2xl text-center pb-2 text-blue-500">
                        {title}
                    </div>
                    <div className="text-sm text-center text-gray-500">
                        <p>{strLength(description)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieItems;
