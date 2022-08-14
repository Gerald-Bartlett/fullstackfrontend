/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewStudent() {
  const [student, setStudent] = useState({
    name: "",
    username: "",
    email: "",
    campus_location: "",
    program: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/student/${id}`);
    setStudent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Student Details</h2>
          
          <div>
          <img id="image"
            src="https://keyin.com/assets/img/logo-keyin.svg"
            alt="fridge"
          />
          </div><br></br>
          <div className="card">
            <div className="card-header">
              Details of Students id : {student.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {student.name}
                </li>
                <li className="list-group-item">
                  <b>UserName:</b>
                  {student.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {student.email}
                </li>
                <li className="list-group-item">
                  <b>Campus Location:</b>
                  {student.campus_location}
                </li>
                <li className="list-group-item">
                  <b>Program:</b>
                  {student.program}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/Student_Registry"}>
            Back to Student Registry
          </Link>
        </div>
      </div>
    </div>
  );
}