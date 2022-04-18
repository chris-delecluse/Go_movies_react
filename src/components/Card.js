import React, { useEffect, useState } from 'react';
import { Backdrop, Box, Card, CardActionArea, CardContent, CardMedia, Fade, Modal, Typography } from "@mui/material";
import {
    cardTheme,
    cardFonts,
    modalTypographyNormalStyle,
    modalTypographyBigStyle,
    modalMainBoxStyle
} from "./styles/movieCardStyle";

const CardComponent = (props) => {
    const base_url = `https://image.tmdb.org/t/p/w500`;

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
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "25px"
                        }}>
                            <Typography
                                id="transition-modal-title"
                                variant="h6"
                                component="h2"
                                sx={modalTypographyBigStyle}
                            >
                                {getTitle(props.movie)}
                            </Typography>
                            <Typography sx={modalTypographyNormalStyle}>
                                {props.movie.vote_average} / 10
                            </Typography>
                            <Typography id="transition-modal-description" sx={modalTypographyNormalStyle}>
                                {props.movie.overview}
                            </Typography>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default CardComponent;
