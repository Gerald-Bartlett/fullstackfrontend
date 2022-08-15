import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Student_Registry() {
  const [students, setStudents] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/students");
    setStudents(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/student/${id}`);
    loadStudents();
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
              <th scope="col">Student ID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Campus</th>
              <th scope="col">Program</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{student.name}</td>
                <td>{student.username}</td>
                <td>{student.email}</td>
                <td>{student.campus_location}</td>
                <td>{student.program}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewstudent/${student.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editstudent/${student.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(student.id)}
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
              Back to Search
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