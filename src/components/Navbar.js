import React from "react";
 

const Navbar = () =>{
    return(
        <nav>
        <div className="nav-wrapper white">
          <a href="/" className="brand-logo left" style={{padding:"10px", paddingBlockStart:"inherit"}}>Instagram</a>
          <ul id="nav-mobile" className="right ">
            <li><a href="/signin">Signin</a></li>
            <li><a href="/signup">Signup</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/create-post">Create Post</a></li>
          </ul>
        </div>
      </nav>    
    )
}

export default Navbar