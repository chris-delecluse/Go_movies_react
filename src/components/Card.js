import React, { useEffect, useState } from 'react';
import { Backdrop, Box, Card, CardActionArea, CardContent, CardMedia, Fade, Modal, Typography } from "@mui/material";

const cardTheme = {
    maxWidth: 450,
    minWidth: 450,
    backgroundColor: "rgba(169, 169, 169, 0.20)",
    color: "#A9A9A9",
    textAlign: "center",
    borderBottom: 1,
    transition: "0.4s ease-in-out",

    ":hover": {
        backgroundColor: "rgba(169, 169, 169, 0.60)",
        color: "#FF8C00FF",
        borderBottom: 2,
        transform: "scale(1.1)",
        transition: "0.4s ease-in-out"
    }
};

const cardFonts = {
    fontFamily: "Roboto",
    fontSize: 16
};

const modalBoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 350,
    height: 600,
    bgcolor: '#262628',
    border: 'solid 1px #A9A9A9',
    borderRadius: 2,
    boxShadow: 24,
    overflow: "hidden"
};

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
                    <Box sx={modalBoxStyle}>
                        <CardMedia
                            component="img"
                            width="100%"
                            height="300"
                            image={base_url + props.movie.backdrop_path}
                        />
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {getTitle(props.movie)}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {props.movie.overview}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default CardComponent;
