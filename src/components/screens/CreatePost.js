import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photo, setPhoto] = useState("");
  const [url, setUrl] = useState("");

  useEffect(()=>{
    if(url){
    fetch("http://localhost:5000/post/create-post", {
      method: "post",
      headers: {
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem('jwt') 
      },
      body: JSON.stringify({
        title:title,
        body:body,
        photo:url
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.messageError) {
          M.toast({ html: data.messageError, classes: "red darken-3 rounded" });
        } else {
          M.toast({ html: "Created post success", classes: "green darken-3 rounded" });
          navigate("/");
        }
      });
    }
  },[body, navigate, title, url])


  const postDetails = () =>{
    const data = new FormData()
    data.append("file", photo)
    data.append("upload_preset","insta-clone")
    data.append("cloud_name","dwtny4uwg")
    fetch("https://api.cloudinary.com/v1_1/dwtny4uwg/image/upload", {
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data => {
        setUrl(data.url)
    })
    .catch(err =>{
        console.log(err)
    })
    
  }
  return (
    <div
      style={{
        margin: "10px auto",
        marginTop: "50px",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
      className="card"
    >
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="file-field input-field">
        <div className="btn light-blue darken-1">
          <span>File</span>
          <input type="file" multiple 
          onChange={(e)=> setPhoto(e.target.files[0])}/>
        </div>
        <div className="file-path-wrapper">
          <input
            className="file-path validate"
            type="text"
            placeholder="Upload one or more files"
          />
        </div>
      </div>
      <button
        className="btn waves-effect waves-light light-blue darken-1"
        style={{ width: "100%" }}
        type="submit"
        name="action"
        onClick={()=>postDetails()}
      >
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
