import React,{useState, useEffect} from "react";

const Home = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('/post/all-post',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res => res.json())
    .then(result => {
      setData(result.data)
    })
  },[])

  return (
    <div className="home">
      {
        data.map(item=>(
          <div className="card home-card">
            <h5 style={{padding:"5px"}}>{item.postedBy.name}</h5>
            <div className="card-image">
              <img
                src={item.photo}
                alt="img not found"
              />
            </div>
            <div className="card-content">
              <i className="material-icons" style={{ color: "red" }}>
                favorite
              </i>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              <input type="text" placeholder="add a comment" />
            </div>
          </div>
        ))
      } 
    </div>
  );
};

export default Home;
