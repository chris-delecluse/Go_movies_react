import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <div>
                <p className="navigation__title">GO MOVIES</p>
            </div>
            <ul>
                <NavLink  to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/movies" className={(nav) => (nav.isActive) ? "nav-active" : ""}>
                    <li>Movies</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive) ? "nav-active" : ""}>
                    <li>About</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
