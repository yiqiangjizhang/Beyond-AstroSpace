import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import "./RocketList.css";
import Loading from "./Loading";

// Rocket object
const Rocket = (props) => {
  return (
    <div className="rocket">
      <img src={props.rocket.flickr_images[1]} />
      <div className="info">
        <h1>{props.rocket.name}</h1>
        <p>{props.rocket.description}</p>
        <h4>Active status: {props.rocket.active}</h4>
        <h4>Booters: {props.rocket.boosters}</h4>
        <h4>Cost per launch: {props.rocket.cost_per_launch}</h4>
        <h4>First flight: {props.rocket.first_flight}</h4>

        <h4>Height: {props.rocket.height.meters}</h4>

        <h4>Isp: {props.rocket.engines.isp.sea_level}</h4>

        {/* <h3>{props.rocket.engines.thrust_sea_level}</h3> */}
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

function RocketList() {
  // Create state for list of rockets
  const [rocket_list, set_rocket_list] = useState(null);

  // Load rockets function
  const loadRockets = async () => {
    // Get the response from the server from url
    const response = await fetch(`https://api.spacexdata.com/v4/rockets`);

    // Convert to jso5
    const json = await response.json();

    // Set list to json object
    set_rocket_list(json);
  };

  // Update action, only call once
  useEffect(() => {
    loadRockets(); // Call function
  }, []);

  // If loading, then display loading message
  if (rocket_list === null) {
    // return <div>Loading...</div>;
    return (
      <Loading />
    )
  }

  // For every rocket in rocket list, pass rocket id and rocket object to rocket list
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          {rocket_list.map((rocket_item) => (
            <Rocket key={rocket_item.id} rocket={rocket_item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default RocketList;
