import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import RocketList from "./components/RocketList";
import LaunchList from "./components/LaunchList";
import LaunchPage from "./components/LaunchPage";
import NasaPhoto from "./components/NasaPhoto";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
        <Route component={RocketList} path="/rocketlist" />
        <Route component={LaunchList} path="/launchlist" />
        <Route component={LaunchPage} path="/launchpage/:id" />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
