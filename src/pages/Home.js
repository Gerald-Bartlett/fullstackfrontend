
import React from "react";

import { Link } from "react-router-dom";


//will need many more imports including useEffect and useState

 export default function Home ()  {
  

 
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
    <h1>Add New User or Continue on to User Registry</h1>
      <Link className="btn btn-primary my-2"  to="/User_Registry" style={{margin:"5px"}}>
            User Registry 
          </Link>
          <Link className="btn btn-primary my-2" to="/AddUser" style={{margin:"5px"}}>
            Add New User 
          </Link>
    
    
      </div>
    
    
  );
  }




  
    
   