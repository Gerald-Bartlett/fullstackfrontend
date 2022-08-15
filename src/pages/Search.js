/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { Link } from "react-router-dom";





const Search = () => {
  
  return (
    <div>
         <div className="container">
      <div className="py-4">
      <h1 className="text-center font-weight-light mt-5">
          
          </h1>
          <img id="image"
            src="https://keyin.com/assets/img/logo-keyin.svg"
            alt="fridge"
          />
          </div>
          <div> <img id="image"
            src="https://pbs.twimg.com/media/CeVuxsXUIAAuH2T.jpg"
            alt="fridge"/>
      </div>
    </div>
      
      
          <Link className="btn btn-primary my-2" to="/Student_Registry" style={{margin:"5px"}}>
            Student Registry 
          </Link>
          <Link className="btn btn-primary my-2" to="/addstudent" style={{margin:"5px"}}>
            Add New Student 
          </Link>
      
      <br />
      
      <br/>
       <button id="btn2">
              <Link className="btn btn-primary my-2" to={"/"}>
              Back to Home
            </Link>
            </button>
    </div>
  );
};

export default Search;
