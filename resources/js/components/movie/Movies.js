import React, { useState, useEffect } from "react";
import MovieItems from "./MovieItems";
import axios from "../../utils/axios";
import request from "../../utils/request";

function Movies({ match }) {
    const [movies, setMovies] = useState([]);
    const base_img_url = "https://image.tmdb.org/t/p/w500";

    let genre = match.params.genre;

    const filtered = Object.keys(request)
        .filter((key) => genre.includes(key))
        .reduce((obj, key) => {
            obj[key] = request[key];
            return obj;
        }, {});

    const fetchUrl = Object.values(filtered)[0].url;

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
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div className="lg:px-5 px-10 w-full grid lg:grid-cols-4 md:grid-cols-3 gap-10">
            {movies.map((movie) => (
                <MovieItems
                    key={movie.id}
                    imgPath={`${base_img_url}${movie.poster_path}`}
                    title={movie?.title || movie?.name}
                    description={truncate(movie.overview, 200)}
                />
            ))}
        </div>
    );
}

export default Movies;
