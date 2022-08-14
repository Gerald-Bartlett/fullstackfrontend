/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
   
    username: "",
    password: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          
          <div>
          <img id="image"
            src="https://keyin.com/assets/img/logo-keyin.svg"
            alt="fridge"
          />
          </div><br></br>
          <div className="card">
            <div className="card-header">
              Details of User id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Password:</b>
                  {user.password}
                </li>
                
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/User_Registry"}>
            Back to User Registry
          </Link>
        </div>
      </div>
    </div>
  );
}
