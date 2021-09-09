import React, { useState, useEffect } from "react";
import MovieItems from "./MovieItems";
import axios from "../../utils/axios";
import { useLocation } from "react-router-dom";
import request from "../../utils/request";

function Movies() {
    const [movies, setMovies] = useState([]);

    const base_img_url = "https://image.tmdb.org/t/p/w500";

    // A custom hook that builds on useLocation to parse
    // the query string for you.
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    function urlCheck() {
        let query = useQuery();
        return query.get("genre");
    }

    const filtered = Object.keys(request)
        .filter((key) => (urlCheck() === null ? {} : urlCheck().includes(key)))
        .reduce((obj, key) => {
            obj[key] = request[key];
            return obj;
        }, {});

    const fetchUrl =
        urlCheck() !== null
            ? Object.values(filtered)[0].url
            : "/trending/all/week?api_key=7c4295b591188cbcbf41833193d9db0e&language=en-US";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    return (
        <div className="lg:px-5 px-10 w-full grid lg:grid-cols-4 md:grid-cols-3 gap-10">
            {movies.map((movie) => (
                <MovieItems
                    key={movie.id}
                    imgPath={`${base_img_url}${movie.poster_path}`}
                    title={movie?.title || movie?.name}
                    description={movie.overview}
                />
            ))}
        </div>
    );
}

export default Movies;
