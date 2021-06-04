import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <Link className="navlink" to="/">Take me Home!</Link>
            </ul>
        </div>
    )
}

export default NavBar;