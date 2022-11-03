import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/screens/Home.js";
import Signup from "./components/screens/Signup.js";
import Signin from "./components/screens/Signin.js";
import Profile from "./components/screens/Profile.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

