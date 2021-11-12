import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Event from "./components/Event/Event";
import Navbar from "./components/Navbar/Navbar";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/event" component={Event} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
