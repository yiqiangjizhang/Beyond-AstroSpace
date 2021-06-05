import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import "./LaunchList.css";
import Loading from "./Loading";
import Filter from "./Filter";

// Launch object
const Launch = (props) => {
  return (
    <div className="launch">
      <img src={props.launch.links.patch.small} />
      <div className="info">
        <h1>{props.launch.name}</h1>
        <h4>Launch date: {props.launch.date_utc}</h4>
        <h4>Success: {props.launch.success ? "yes" : "no"}</h4>
        <h4>Reused: {props.launch.reused ? "yes" : "no"}</h4>
        <h4>Recovered: {props.launch.recovered ? "yes" : "no"}</h4>
        <p>{props.launch.details}</p>
      </div>
    </div>
  );
};

function LaunchList() {
  // Create state for list of rockets
  const [launch_list, set_launch_list] = useState(null);

  // // Select year with Filter.js
  // const [selected_year, set_selected_year] = useState(null);

  // Search
  const [search, set_search] = useState(null);

  // Load rockets function
  const loadLaunches = async () => {
    // Get the response from the server from url
    const response = await fetch(
      `https://api.spacexdata.com/v4/launches/?date_utc=${search}`
    );

    // Convert to jso5
    const json = await response.json();

    // Set list to json object
    set_launch_list(json);
  };

  const submit = (event) => {
    event.preventDefault(); // prevent page reloading
  };

  // OnChange event
  const onChange = (event) => {
    set_search(event.target.value);
  };

  // Update action, only call once
  useEffect(() => {
    loadLaunches(); // Call function
  }, [search]);

  /* The handleChange() function to set a new state for input */
  const handleChange = (event) => {
    set_search(event.target.value);
  };

  // If loading, then display loading message
  if (launch_list === null) {
    // return <div>Loading...</div>;
    return <Loading />;
  }

  const { launches, selected_launch } = launch_item.state;
  const filteredLaunches = launches.filter((launch) => {
    launch.height.meter > selected_launch;
  });

  // For every launch in rocket list, pass rocket id and rocket object to rocket list
  return (
    <div className="main-return">
      <NavBar />

      <Filter onChange={handleChange} />
      <div className="container">
        <div className="row">
          {/* <form onSubmit={submit}>
            <input type="text" value={search} onChange={onChange} />
            <button>Search</button>
          </form> */}
          {filteredLaunches.map((launch_item) => (
            <Launch key={launch_item.id} launch={launch_item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LaunchList;
