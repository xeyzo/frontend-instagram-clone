import React from "react";

const Signin = () => {
    return(
        <div className="mycard">
        <div className="card auth-card input-field">
           <h2 className="brand-logo">
                SignIn
           </h2>
                <input
                    type="text"
                    placeholder="email"
                />
                <input
                    type="text"
                    placeholder="password"
                />
                <button className="btn waves-effect waves-light light-blue darken-1" style={{width:"100%"}} type="submit" name="action">
                    Login                
                </button>
                <p>
                    <a className="blue-text" href="/signup">Create account ?</a>
                </p>
        </div>
        </div>
    )
}

export default Signin