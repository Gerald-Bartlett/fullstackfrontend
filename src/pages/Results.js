/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// handles the search results and processes the data for display, limits number of visible result
// results are displayed very rudimentarily, could increase amount of data displayed and incorporate paging etc...
const Results = (props) => {
  const results = props.results;
  const [shortResults, setShortResults] = useState([]);

  useEffect(() => {
    if (props.database === "MySQL") {
      console.log(results[0]);
      let temp = [];
      let number;
      results.length < 20 ? (number = results.length) : (number = 20);
      // ^^ if the results are less than 20, display all results otherwise display 20
      for (let i = 0; i < number; i++) {
        temp.push(results[i]);
      }
      setShortResults(temp);
    } else {
      console.log(results);
      setShortResults(results);
    }
  }, []);

  let i = 0;
  if (props.database === "MySQL") {
    return (
      <div>
        <h1> MySQL Results</h1>
        {shortResults.map((result) => {
          console.log(result);
          return (
            <div>
              <h2>{result.name}</h2>
              <p>
                {`${result.program}`}
                <br />
                
                {/* found an error this morning, fixed review_count to be displayed instead of .stars twice :) */}
                {`Rated ${result.stars} stars across ${result.review_count} reviews.`}
                <br />
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h1>{`Search History for ${props.students}`}</h1>
        {results.map((result) => {
          return (
            <div>
              <p className="searchHistory">{`Searched "${result.search}" on the ${result.database} database on ${result.time}`}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Results;