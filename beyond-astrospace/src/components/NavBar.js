import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div>
        <ul>
          <Link className="navlink" to="/">
            Home
          </Link>
        </ul>
      </div>
      <div>
        <ul>
          <Link className="navlink" to="/nasaphoto">
            NASA Picture of the day
          </Link>
        </ul>
      </div>
      <div>
        <ul>
          <Link className="navlink" to="/rocketlist">
            SpaceX rockets
          </Link>
        </ul>
      </div>
      <div>
        <ul>
          <Link className="navlink" to="/launchlist">
            SpaceX launches
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
