import React from 'react'
import "./Header.css";

function Header() {
    return (
        <header>
            <div className="header_container">
                <img className="nasa_logo" src="/images/nasa_logo.png" alt="NASA logo" />
                <img className="spacex_logo" src="/images/spacex.png" alt="SpaceX logo" />
                <div className="header_text">Beyond AstroSpace ! Rediscover Space</div>
                <img className="upc_logo" src="/images/upc.png" alt="SpaceX logo" />
            </div>
        </header >
    )
}

export default Header;
