import React from 'react';
import Navigation from "../components/Navigation";
import CardComponent from "../components/Card";

const Movies_p = () => {
    return (
        <div>
            <Navigation />
            <div className="container">
                <CardComponent />
            </div>
        </div>
    );
};

export default Movies_p;
