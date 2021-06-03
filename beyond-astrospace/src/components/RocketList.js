import React from "react";
import "./RocketList.css";

function RocketList() {
  // Create state for list of rockets
  const [rocket_list, set_rocket_list] = useState(null);

  // If loading, then display loading message
  if (rocket_list === null) {
    return <div>Loading...</div>;
  }

  return <div>Adios</div>;
}

export default RocketList;
