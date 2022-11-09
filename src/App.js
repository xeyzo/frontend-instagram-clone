import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/screens/Home.js";
import Signup from "./components/screens/Signup.js";
import Signin from "./components/screens/Signin.js";
import Profile from "./components/screens/Profile.js";
import CreatePost from "./components/screens/CreatePost.js";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-post" element={<CreatePost />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;

