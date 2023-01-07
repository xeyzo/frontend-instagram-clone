import React,{ useEffect, createContext, useReducer, useContext} from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";


import Home from "./components/screens/Home.js";
import Signup from "./components/screens/Signup.js";
import Signin from "./components/screens/Signin.js";
import Profile from "./components/screens/Profile.js";
import CreatePost from "./components/screens/CreatePost.js";
import { initState, reducer } from "./reducers/useReducer.js";

export const UserContext = createContext()

const Routing = ()=>{
  const navigate = useNavigate()
  const {state, dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      navigate('/')
    }else{
      navigate('/signin')
    }
  },[])
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-post" element={<CreatePost />} />
    </Routes>
    
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
    <Navbar />
    <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;

