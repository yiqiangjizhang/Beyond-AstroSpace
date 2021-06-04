import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import "./LaunchList.css";

// Launch object
const Launch = (props) => {
  return (
    <div className="launch">
      <img src={props.launch.links.patch.small} />
      <div className="info">
        <h1>{props.launch.name}</h1>
        <h4>Launch date: {props.launch.date_utc}</h4>
        <h4>Success: {props.launch.success}</h4>
        <h4>Reused: {props.launch.reused}</h4>
        <h4>Recovered: {props.launch.recovered}</h4>

        <p>{props.launch.details}</p>
      </div>
    </div>
  );
};

function LaunchList() {
  // Create state for list of rockets
  const [launch_list, set_launch_list] = useState(null);

  // Load rockets function
  const loadLaunches = async () => {
    // Get the response from the server from url
    const response = await fetch(`https://api.spacexdata.com/v4/launches`);

    // Convert to jso5
    const json = await response.json();

    // Set list to json object
    set_launch_list(json);
  };

  // Update action, only call once
  useEffect(() => {
    loadLaunches(); // Call function
  }, []);

  // If loading, then display loading message
  if (launch_list === null) {
    return <div>Loading...</div>;
  }

  // For every launch in rocket list, pass rocket id and rocket object to rocket list
  return (
    <>
      <NavBar />

      <div className="container">
        <div className="row">
          {launch_list.map((launch_item) => (
            <Launch key={launch_item.id} launch={launch_item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LaunchList;
