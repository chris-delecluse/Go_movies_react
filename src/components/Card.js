import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import api_key from "../.hidden/api_key";

const themeConfig = {
    minWidth: 450,
    maxWidth: 450,
    backgroundColor: "rgba(169, 169, 169, 0.20)",
    color: "#A9A9A9",
    textAlign: "center",
    borderBottom: 1,
    transition: "0.4s ease-in-out",

    ":hover": {
        backgroundColor: "rgba(169, 169, 169, 0.60)",
        color: "#FFF",
        transform: "scale(1.1)",
        transition: "0.4s ease-in-out",
    },
}

const fontConfig = {
    fontFamily: "Roboto",
    fontSize: 16
}

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
            <Card sx={themeConfig}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={base_url + movie.poster_path}
                        alt="jacket"
                    />
                    <CardContent sx={fontConfig}>
                        <Typography
                            gutterBottom variant={"h6"}
                            component={"p"}
                        />
                        {getTitle(movie)}
                    </CardContent>
                </CardActionArea>
            </Card>
        ))
    );
};

export default CardComponent;
