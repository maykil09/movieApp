import React, { useEffect, useState, useContext } from "react";
import MovieItems from "./MovieItems";
import axios from "../../utils/axios";

function MovieFeatured() {
    const [movies, setMovies] = useState([]);
    const [featured, setFeatured] = useState({});
    const base_img_url = "https://image.tmdb.org/t/p/original";
    const fetchUrl =
        "/movie/popular?api_key=7c4295b591188cbcbf41833193d9db0e&page=1";

    useEffect(() => {
        async function fetchData() {
            var config = {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                withCredentials: false,
            };

            const request = await axios.get(fetchUrl, config);
            setMovies(request.data.results);
            setFeatured(
                request.data.results[ranNumber(request.data.results.length)]
            );
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const ranNumber = (len) => {
        let num = -1;
        while (num < 0) {
            num = Math.floor(Math.random() * len - 1);
        }
        return num;
    };

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div className="lg:px-5 px-10 w-full ">
            <div
                className="w-full h-96 bg-no-repeat mb-6 bg-cover rounded-xl"
                style={{
                    backgroundImage: `url(${
                        featured?.backdrop_path &&
                        featured?.backdrop_path !== "undefined"
                            ? base_img_url + featured.backdrop_path
                            : ""
                    })`,
                }}
            >
                <div className="ml-16 pt-44  w-2/5  h-40 cursor-pointer">
                    <div className="filter drop-shadow-md rounded-xl p-3 bg-gradient-to-r from-black ">
                        <h2 className="font-bold text-4xl pb-1 text-white  ">
                            {featured?.title || featured?.name}
                        </h2>
                        <p className="text-sm text-white pb-6">
                            {truncate(featured.overview, 200)}
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10">
                {movies.map((movie) => (
                    <MovieItems
                        key={movie.id}
                        imgPath={`${
                            movie.poster_path !== "undefined"
                                ? base_img_url + movie.poster_path
                                : ""
                        } `}
                        title={movie?.title || movie?.name}
                        description={movie.overview}
                    />
                ))}
            </div>
        </div>
    );
}

export default MovieFeatured;
