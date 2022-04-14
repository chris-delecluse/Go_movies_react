import React from 'react';
import Navigation from "../components/Navigation";
import CardComponent from "../components/Card";
import Footer from "../components/Footer";

const Movies_p = () => {
    return (
        <div>
            <Navigation />
            <div className="container">
                <CardComponent />
            </div>
            <Footer />
        </div>
    );
};

export default Movies_p;
