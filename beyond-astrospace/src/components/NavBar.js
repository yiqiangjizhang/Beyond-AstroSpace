import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <Link className="navlink" to="/">Home</Link>
            </ul>
            <ul>
                <Link className="navlink" to="/nasaphoto">NASA Picture of the day</Link>
            </ul>
            <ul>
                <Link className="navlink" to="/rocketlist">SpaceX rockets</Link>
            </ul>
            <ul>
                <Link className="navlink" to="/launchlist">SpaceX launches</Link>
            </ul>
        </div>
    )
}

export default NavBar;