/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Student_Registry from "./pages/Student_Registry";
import User_Registry from "./pages/User_Registry";
import User_Register from "./pages/User_Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clock from "./students/Clock"
import AddStudents from "./students/AddStudents";
import EditStudents from "./students/EditStudents";
import ViewStudents from "./students/ViewStudents";
import React from 'react';
import { useState } from 'react';
import Search from './pages/Search';

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main>
    <div className="App">
      <Router>
      <Header user={user} setUser={setUser}/>
        <Navbar /> <Clock/> 
        

        <Routes>
          <Route exact path="/" element={<Home setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route exact path="/Student_Registry" element={<Student_Registry/>}/>
          <Route exact path="/User_Registry" element={<User_Registry/>}/>
          <Route exact path="/User_Register" element={<User_Register/>}/>
          <Route path="/Search" element={<Search user={user} isLoggedIn={isLoggedIn}/>} />
          <Route exact path="/addStudent" element={<AddStudents />} />
          <Route exact path="/editStudent/:id" element={<EditStudents />} />
          <Route exact path="/viewStudent/:id" element={<ViewStudents />} />
        </Routes>
        
      </Router>
      <div>
     <Footer/>
     </div>
    </div>
    </main>
  );
}

export default App;