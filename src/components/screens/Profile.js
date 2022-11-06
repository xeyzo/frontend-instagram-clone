import React from "react";

const Profile = () => {
    return(
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src ="https://images.unsplash.com/photo-1667263901664-9e1505a23b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    alt="img not found"
                    />
                </div>
                <div>
                    <h4>Khabi lame</h4>
                    <div style={{display:"flex",justifyContent:"space-between", width:"115%"}}>
                        <h6>40 post</h6>
                        <h6>40 post</h6>
                        <h6>40 post</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" alt="img not found" src="https://images.unsplash.com/photo-1667263901664-9e1505a23b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" alt="img not found" src="https://images.unsplash.com/photo-1667263901664-9e1505a23b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" alt="img not found" src="https://images.unsplash.com/photo-1667263901664-9e1505a23b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" alt="img not found" src="https://images.unsplash.com/photo-1667263901664-9e1505a23b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" alt="img not found" src="https://images.unsplash.com/photo-1667263901664-9e1505a23b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" alt="img not found" src="https://images.unsplash.com/photo-1667263901664-9e1505a23b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
            </div>

        </div>
    )
}

export default Profile