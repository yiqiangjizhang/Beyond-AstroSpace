import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./LaunchList.css";

// Rocket object
const Launch = (props) => {
  return (
    <div className="rocket">
      <h3>{props.launch.name}</h3>
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

  // For every rocket in rocket list, pass rocket id and rocket object to rocket list
  return (
    <div>
      {launch_list.map((launch_item) => (
        <Launch key={launch_item.id} launch={launch_item} />
      ))}
    </div>
  );
}

export default LaunchList;
