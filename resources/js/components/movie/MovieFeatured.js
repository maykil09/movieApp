import React, { useEffect, useState } from "react";
import MovieItems from "./MovieItems";
import axios from "../../utils/axios";

function MovieFeatured() {
    const [movies, setMovies] = useState([]);
    const [featured, setFeatured] = useState({});
    const base_img_url = "https://image.tmdb.org/t/p/w500";

    const fetchUrl =
        "/trending/all/week?api_key=7c4295b591188cbcbf41833193d9db0e&language=en-US";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
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

    console.log(featured);
    return (
        <div className="lg:px-5 px-10 w-full ">
            <div
                className="w-full h-96 bg-no-repeat mb-6 bg-cover rounded-xl"
                style={{
                    backgroundImage: `url(${base_img_url}${featured.backdrop_path})`,
                }}
            >
                <div className="ml-16 pt-52  w-2/5  h-40 cursor-pointer">
                    <div className="filter drop-shadow-md rounded-xl p-3">
                        <h2 className="font-bold text-4xl pb-1 text-white">
                            {featured?.title || featured?.name}
                        </h2>
                        <p className="text-sm text-white">
                            {truncate(featured.overview)}
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10">
                {movies.map((movie) => (
                    <MovieItems
                        key={movie.id}
                        imgPath={`${base_img_url}${movie.poster_path}`}
                        title={movie?.title || movie?.name}
                        description={movie.overview}
                    />
                ))}
            </div>
        </div>
    );
}

export default MovieFeatured;
