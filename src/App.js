import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/screens/Home.js";
import Signup from "./components/screens/Signup.js";
import Signin from "./components/screens/Signin.js";
import Profile from "./components/screens/Profile.js";
import CreatePost from "./components/screens/CreatePost.js";

function App() {
  return (
    <>
      <BrowserRouter>
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
          <Route path="/create-post">
            <CreatePost />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

