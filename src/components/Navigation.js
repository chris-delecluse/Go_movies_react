import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <div>
                <p className="navigation__title">GO MOVIES</p>
            </div>
            <ul>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/movies">
                    <li>Movies</li>
                </NavLink>
                <NavLink to="/about">
                    <li>About</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
