export const cardTheme = {
    maxWidth: 450,
    minWidth: 450,
    maxHeight: 800,
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

export const cardFonts = {
    fontFamily: "Roboto", fontSize: 16
};

export const modalMainBoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 350,
    bgcolor: '#262628',
    border: 'solid 1px #A9A9A9',
    borderRadius: 2,
    boxShadow: 24,
    overflow: "hidden"
};

export const modalTypographyNormalStyle = {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#A9A9A9",
    mt: 1
};

export const modalTypographyBigStyle = {
    fontFamily: "Roboto",
    fontSize: 16,
    color: '#FF8C00FF',
    mt: 1
};
