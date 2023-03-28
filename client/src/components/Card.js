import React from "react";
import L from "../assets/l.jpg";
import "../App.css"


const Card = () => {
  return (
    <div className="card">
      <img src={L} className="card-img-top "alt="Love" style={{width:"200px",height:"150px"}}/>
      <div className="card-body">
        <p className="card-text ">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Card;
