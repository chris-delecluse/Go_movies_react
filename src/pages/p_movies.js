import React, { useEffect, useState } from 'react';
import Navigation from "../components/Navigation";
import CardComponent from "../components/Card";
import axios from "axios";
import api_key from "../.hidden/api_key";

const Movies_p = () => {

    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovie = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?${api_key}`);
            setTrendingMovies(response.data.results);
        };

        fetchTrendingMovie();
    }, []);

    return (
        <div>
            <Navigation/>
            <div className="container">
                {trendingMovies.map((el, key) => {
                    return <CardComponent key={key} movie={el}/>;
                })}
            </div>
            {console.log(trendingMovies)}
        </div>
    );
};

export default Movies_p;
