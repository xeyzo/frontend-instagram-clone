import React, {useState} from "react";
import M from "materialize-css";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const postData = () =>{
        if (!/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({html:"invalid email",classes:'red darken-3 rounded'})
            return
        }
        fetch("http://localhost:5000/auth/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        }).then(res => res.json())
        .then(data =>{
            if(data.messageError){
                M.toast({html:data.messageError,classes:'red darken-3 rounded'})
            }else{
                M.toast({html:data.message,classes:'green darken-3 rounded'})
                navigate('/signin')
            }
        }).catch(err =>{
            console.log(err)
        })
    }

    return(

        <div className="mycard">
        <div className="card auth-card input-field">
           <h2 className="brand-logo">
                SignUp
           </h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light light-blue darken-1" style={{width:"100%"}} 
                onClick={()=>postData()}
                >
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