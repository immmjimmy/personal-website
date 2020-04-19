import React from "react";

import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Background from "./assets/wallpaper.png";

const App = () => {
  return (
    <div
      style={{
        height: "100%",
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        overflowY: "scroll",
      }}
    >
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/resume"></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
