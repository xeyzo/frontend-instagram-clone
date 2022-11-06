import React from "react";


const Signup = () => {
    return(
        <div className="mycard">
        <div className="card auth-card input-field">
           <h2 className="brand-logo">
                SignUp
           </h2>
                <input
                    type="text"
                    placeholder="Username"
                />
                <input
                    type="text"
                    placeholder="Email"
                />
                <input
                    type="text"
                    placeholder="Password"
                />
                <button className="btn waves-effect waves-light light-blue lighten-1" type="submit" name="action">
                    Signup               
                </button>
                <p>
                    <a className="blue-text" href="/signin">Already have an account ?</a>
                </p>
        </div>
        </div>
    )
}

export default Signup