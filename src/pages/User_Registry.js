import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function User_Registry() {
  const [users, setUsers] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  
  
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };
  
  return (
    <div className="container">
      <div className="py-4">
      <div>
          <img id="image"
            src="https://keyin.com/assets/img/logo-keyin.svg"
            alt="fridge"
          />
        </div><br></br>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">User Id </th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
               
               
                <td>{user.username}</td>
                <td>{user.password}</td>
                
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
        <button id="btn2">
              <Link className="btn btn-primary my-2" to={"/Search"}>
              Go to Search Page
            </Link>
            </button>

        <button id="btn2">
              <Link className="btn btn-primary my-2" to={"/"}>
              Back to Home
            </Link>
            </button>
      </div>
    </div>
  );
}
