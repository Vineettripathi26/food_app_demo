import React from "react";
import ReactDOM from "react-dom/client";
// import "/index.css"

const Restaurant = ({
    name,
    area,
    cloudinaryImageId,
    costForTwoString}) => {
    return (
      <>
        <div className="food-card">
          <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
          <h4>{name}</h4>
          <h5>{area}</h5>
          <h5>{costForTwoString}</h5>
        </div>
      </>
    )
  }

export default Restaurant
  