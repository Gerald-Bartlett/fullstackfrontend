import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, clockState } from 'react';

export default function Navbar(props) {

  

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Final Sprint Team 1 Keyin College Student Registry
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div  style={{ fontSize: "55px", margin: "60px" }}>{clockState}</div> */}
         
        </div>
      </nav>
    </div>
  );
  }

