import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <div>
                <p className="navigation__title">GO MOVIES</p>
            </div>
            <ul>
                <NavLink to="/" className={(navData) => (navData.isActive) ? "nav-active" : ""}>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/movies" className={(navData) => (navData.isActive) ? "nav-active" : ""}>
                    <li>Movies</li>
                </NavLink>
                <NavLink to="/about" className={(navData) => (navData.isActive) ? "nav-active" : ""}>
                    <li>About</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
