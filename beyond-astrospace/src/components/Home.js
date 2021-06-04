import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Link className="home-link" to="/nasaphoto">
        See into the stars!
      </Link>
      <Link className="home-link" to="/rocketlist">
        SpaceX rockets!
      </Link>
      <Link className="home-link" to="/launchlist">
        SpaceX launches!
      </Link>
    </div>
  );
}

export default Home;
