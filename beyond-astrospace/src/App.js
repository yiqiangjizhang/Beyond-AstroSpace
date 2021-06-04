import "./App.css";
import RocketList from "./components/RocketList";
<<<<<<< HEAD
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
    </BrowserRouter>

    // <div>
    //   <RocketList />
    // </div>
=======
import LaunchList from "./components/LaunchList";

function App() {
  return (
    <div>
      <RocketList />
      {/* <LaunchList /> */}
    </div>
>>>>>>> 46ad3796b235ab8ccb89800219907c13d3636639
  );
}

export default App;
