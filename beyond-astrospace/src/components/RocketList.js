import React, { useEffect, useState } from "react";
import "./RocketList.css";

const Rocket = (props) => {
  return <div className="rocket">{props.rocket.name}</div>;
};

function RocketList() {
  // Create state for list of rockets
  const [rocket_list, set_rocket_list] = useState(null);

  // Load rockets function
  const loadRockets = async () => {
    // Get the response from the server from url
    const response = await fetch(`https://api.spacexdata.com/v3/rockets`);

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
    return <div>Loading...</div>;
  }

  // For every rocket in rocket list, pass rocket id and rocket object to rocket list
  return (
    <div>
      {rocket_list.map((rocket_item) => (
        <Rocket key={rocket_item.id} rocket={rocket_item} />
      ))}
    </div>
  );
}

export default RocketList;
