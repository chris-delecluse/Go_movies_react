import React, { useState } from 'react';
import {
    Backdrop,
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Fade,
    Modal,
    Rating,
    Typography
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import {
    cardFonts,
    cardTheme,
    modalMainBoxStyle,
    modalTypographyBigStyle,
    modalTypographyContent,
    modalTypographyNormalStyle, modalTypographyReleaseDate,
    rateStyle
} from "./styles/movieCardStyle.css";

const CardComponent = (props) => {
    const base_url = `https://image.tmdb.org/t/p/w500`;
    const value = props.movie.vote_average;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const getTitle = (data) => {
        if (data.title !== undefined) {
            return data.title;
        } else if (data.original_title !== undefined) {
            return data.original_title;
        } else if (data.original_name !== undefined) {
            return data.original_name;
        }
    };

    return (
        <div>
            <Card
                sx={cardTheme}
                onClick={showModal}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={base_url + props.movie.poster_path}
                        alt="jacket"
                    />
                    <CardContent sx={cardFonts}>
                        <Typography
                            gutterBottom variant={"h6"}
                            component={"p"}
                        />
                        {getTitle(props.movie)}
                    </CardContent>
                </CardActionArea>
            </Card>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isModalOpen}
                onClose={closeModal}
                onBackdropClick={closeModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={isModalOpen}>
                    <Box sx={modalMainBoxStyle}>
                        <CardMedia
                            component="img"
                            width="100%"
                            image={base_url + props.movie.backdrop_path}
                        />
                        <Box sx={modalTypographyContent}>
                            <Typography
                                id="transition-modal-title"
                                variant="h6"
                                component="h2"
                                sx={modalTypographyBigStyle}
                            >
                                {getTitle(props.movie)}
                            </Typography>
                            <Typography sx={modalTypographyReleaseDate}>
                                {props.movie.release_date}
                            </Typography>
                            <Box>
                                <Rating
                                    name="text-feedback"
                                    value={value / 2}
                                    readOnly
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"/>}
                                />
                            </Box>
                        </Box>
                        <Typography id="transition-modal-description" sx={modalTypographyNormalStyle}>
                            {props.movie.overview}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default CardComponent;
