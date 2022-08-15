import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
  
    username: "",
    password: "",
   
  });

  const {  username, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/User_Registry");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
       
          <h2 className="text-center m-4">Register User</h2>
          <div>
          <img id="image"
            src="https://keyin.com/assets/img/logo-keyin.svg"
            alt="fridge"
          />
          </div><br></br>
          <form onSubmit={(e) => onSubmit(e)}>
         
           
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
               Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
          <Link className="btn btn-primary my-2" to={"/User_Registry"}>
           User Registry
          </Link>
          <br/>
          <Link className="btn btn-primary my-2" to={"/Search"}>
            Back to Search
            </Link>
          <br/>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
            </Link>
        </div>
       
      </div>
    </div>
  );
}
