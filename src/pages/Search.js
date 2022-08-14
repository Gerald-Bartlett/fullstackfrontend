/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import Results from "./Results";
import { useNavigate } from "react-router";
import { Logger } from "../logger/logger";
import { Link } from "react-router-dom";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);
  const [searchBy, setSearchBy] = useState("businessName");
  const [database, setDatabase] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const logger = new Logger();

  const logSearch = async () => {
    // setMessage(logger.create(props.user, search, database, new Date()));
    console.log(message);
    await fetch("http://localhost:3000/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  };

  // functions for searches
  const handleSearchMongo = async () => {
    setResults(null);
    const response = await fetch(
      `http://localhost:3000/Search/${searchBy}/${search}`
    );
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      console.log(message);
      return;
    }
    const results = await response.json();
    console.log(results);
    setResults(results);
    setSearch("");
    navigate("/Search");
  };

  const handleSearchPostgres = async () => {
    setResults(null);
    const response = await fetch(
      `http://localhost:3000/Search/${database}/${search}`
    );
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      console.log(message);
      return;
    }
    const results = await response.json();
    console.log(results);
    setResults(results);
    setSearch("");
    navigate("/Search");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(search);
    console.log(searchBy);
    console.log(database);
    if (database === "postgres") {
      handleSearchPostgres();
      setMessage(logger.create(props.user, search, database, new Date()));
    }
    handleSearchMongo();
    setMessage(logger.create(props.user, search, database, new Date()));
  };

  // a useEffect to ensure a use is logged in, if not redirect to login page
  useEffect(() => {
    if (!props.isLoggedIn) {
      navigate("/Search");
    }
  }, []);

  // a use effect to log the search when the message is set
  useEffect(() => {
    if (message !== "") {
      logSearch();
    }
  }, [message]);

  const searchHistory = async (e) => {
    e.preventDefault();
    setDatabase("");
    const response = await fetch(`http://localhost:3000/log/${props.user}`);
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      console.log(message);
      return;
    }
    const results = await response.json();
    console.log(results);
    setResults(results);
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
      <h1>Search or Add New Student</h1>
      <Link className="btn btn-primary my-2" to="/addstudent">
            Add New Student 
          </Link>
      <form id="searchForm" onSubmit={handleSubmit}>
        <div>
         
          <input
            type="radio"
            name="database"
            value="MySQL"
            onChange={(e) => setDatabase(e.target.value)}
          />
          <label>MySQL</label>
        </div>
        <br />
        {database === "MySQL" ? (
          <div>
            <label>
              <input
                type="radio"
                name="searchBy"
                value="name"
                onChange={(e) => setSearchBy(e.target.value)}
              />
              Name
            </label>
            <label>
              <input
                type="radio"
                name="searchBy"
                value="program"
                onChange={(e) => setSearchBy(e.target.value)}
              />
              Program
            </label>
            <label>
              <input
                type="radio"
                name="searchBy"
                value="partial"
                onChange={(e) => setSearchBy(e.target.value)}
              />
              Partial Text Search
            </label>
            <br />
          </div>
        ) : null}
        <br />
        <input
            id="submit"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        {/* <input type="submit" value="Submit Search" onSubmit={handleSubmit}/> */}
        <button id="submit" type="submit">
          Submit Search
        </button>
      </form>
      <br />
      <form id="searchForm" onSubmit={searchHistory}>
        <button id="submit" type="submit">
          Search History
        </button>
      </form>
      {results ? (
        <div>
          {<Results results={results} database={database} user={props.user} />}
        </div>
      ) : null}
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
