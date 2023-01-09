import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
 

const Navbar = () =>{
  const {state,dispatch} = useContext(UserContext)
  const protectNavbar= ()=>{
    if(state){
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create-post">Create Post</Link></li>
      ]
    }else{
      return [
        <li><Link to="/signin">Signin</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }
    return(
        <nav>
        <div className="nav-wrapper white">
          <Link to={state?"/":"/signin"} className="brand-logo left" style={{padding:"10px", paddingBlockStart:"inherit"}}>Instagram</Link>
          <ul id="nav-mobile" className="right ">
            {protectNavbar()}
          </ul>
        </div>
      </nav>    
    )
}

export default Navbar;