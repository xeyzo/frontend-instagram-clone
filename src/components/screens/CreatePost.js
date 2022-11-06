import React from "react"


const CreatePost = () =>{
    return(
        <div style={{
            margin:"10px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }} className="card">
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="body"/>
            <div className="file-field input-field">
            <div className="btn light-blue darken-1">
                <span>File</span>
                <input type="file" multiple />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder="Upload one or more files" />
            </div>
            </div>
            <button className="btn waves-effect waves-light light-blue darken-1" style={{width:"100%"}} type="submit" name="action">
                Submit
            </button>
        </div>
    )
}

export default CreatePost