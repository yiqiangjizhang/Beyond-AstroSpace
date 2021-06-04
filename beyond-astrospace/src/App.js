import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import RocketList from "./components/RocketList";
import LaunchList from "./components/LaunchList";
import LaunchPage from "./components/LaunchPage";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="header-content">
          Beyond AstroSpace ! Rediscover Space
        </div>
      </header>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
        <Route component={RocketList} path="/rocketlist" />
        <Route component={LaunchList} path="/launchlist" />
        <Route component={LaunchPage} path="/launchpage/:id" />
      </div>
      <footer>
        <p>Author: Someone</p>
        <p>
          <a href="mailto:hola@example.com">hola@example.com</a>
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
