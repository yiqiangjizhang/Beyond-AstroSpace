import "./App.css";
import RocketList from "./components/RocketList";
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
  );
}

export default App;
