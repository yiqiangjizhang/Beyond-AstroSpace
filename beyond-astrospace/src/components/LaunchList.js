import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import "./LaunchList.css";
import Loading from "./Loading";
import NavBar from "./NavBar";

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
  const [filtered_list, set_filtered_list] = useState(null);

  // // Select year with Filter.js
  // const [selected_year, set_selected_year] = useState(null);

  // Search
  const [search, set_search] = useState(null);

  // Load rockets function
  const loadLaunches = async () => {
    // Get the response from the server from url
    const response = await fetch(`https://api.spacexdata.com/v4/launches/`);

    // Convert to jso5
    let launches = await response.json();

    // Set list to json object
    set_launch_list(launches);
    set_filtered_list(launches); // Set filtered to no filter first time
  };

  const filterLaunches = () => {
    let new_filtered_list = launch_list;
    if (search) {
      new_filtered_list = launch_list.filter((launch) => {
        const startYear = new Date(`${search}-01-01T00:00:00.000Z`);
        const endYear = new Date(`${search}-12-31T23:59:59.999Z`);
        const date = new Date(launch.date_utc);
        return date > startYear && date < endYear;
      });
    }
    set_filtered_list(new_filtered_list);
  };

  // Update action, only call once
  useEffect(() => {
    loadLaunches(); // Load launches only once
  }, []);

  useEffect(() => {
    filterLaunches(); // Filter launches on every change in year
  }, [search]);

  /* The handleChange() function to set a new state for input */
  const handleChange = (event) => {
    set_search(event.target.value);
  };

  // If loading, then display loading message
  if (filtered_list === null) {
    // return <div>Loading...</div>;
    return <Loading />;
  }

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
          {filtered_list.map((launch_item) => (
            <Launch key={launch_item.id} launch={launch_item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LaunchList;
