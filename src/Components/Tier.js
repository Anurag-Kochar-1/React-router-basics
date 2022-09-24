import React from "react";
import { Link } from "react-router-dom"

function Tier (props) {
  return (
    <>
        <div className="card p-4 m-3" style={{width : "18rem", height: "300px"}}>
            <div className="card-body">
            <h5 className="card-title"> {props.title} </h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </p>
         
            <Link to={'/home'} className="btn btn-primary"> Buy now </Link>

            </div>
        </div>
    </>
  );
}

export default Tier;
