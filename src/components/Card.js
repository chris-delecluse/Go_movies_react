import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import api_key from "../.hidden/api_key";

const CardComponent = () => {
    const base_url = `https://image.tmdb.org/t/p/w500`
    const [trendingMovies, setTrendingMovies] = useState([])

    const getTitle = (data) => {
        if (data.title !== undefined) {
            return data.title
        } else if (data.original_title !== undefined) {
            return data.original_title
        } else if (data.original_name !== undefined) {
            return data.original_name
        }
    }

    useEffect(() => {
        const fetchTrendingMovie = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?${api_key}`)
                setTrendingMovies(response.data.results)
        }

        fetchTrendingMovie()
    }, [])

    return (
        trendingMovies.map((movie, index) => (
            <Card sx={{
                minWidth: 450,
                maxWidth: 450,
                textAlign: "center",
                backgroundColor: "darkgray",
                color: "white"
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={base_url + movie.poster_path}
                        alt="jacket"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom variant="h6"
                            component="div"
                        />
                        { getTitle(movie)}
                    </CardContent>
                </CardActionArea>
            </Card>
        ))
    );
};

export default CardComponent;
