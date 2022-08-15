import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
// bcrypt is unhappy about react, there are work arounds... to be continued time allowing
//import bcrypt from "bcryptjs";

const User_Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (username === "" || password === "" || passConfirm === "") {
      setError("Please enter a username and password");
    } else if (password !== passConfirm) {
      setError("Passwords do not match");
    } else {
      setError(null);
      let user = new User(username, password);
      // bcrypt.hash(user.password, 10, (err, hash) => {})
      // ^^ this is where i would encode the password, unless server side encryption becomes my chosen solution
      await fetch("http://localhost:3000/user/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).catch((error) => {
        window.alert(error);
        return;
      });
      window.alert("User created, returning to login");
      setUserName("");
      setPassword("");
      setPassConfirm("");
      navigate("/");
    }
  };

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
      <h1>Register Users</h1>
      <form id="registerForm" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="password"
          value={passConfirm}
          onChange={(e) => setPassConfirm(e.target.value)}
        />
        <br />
        <input id="submit" type="submit" value="Register" />
      </form>
      {error ? <p className="error">{error}</p> : null}
      <div>
        <p>
          Already have an account? <Link to="/"> Login here.</Link>
        </p>
      </div>
    </div>
    
  );
};

export default User_Register;