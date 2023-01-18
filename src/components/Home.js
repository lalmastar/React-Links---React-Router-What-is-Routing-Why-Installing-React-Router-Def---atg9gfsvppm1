
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-div">
      <ul>
        <Link to='/'>
          <li>
            <h2 id="home-item">Home</h2>
          </li>
        </Link>
        <Link to='/topics'>
          <li>
            <h2 id="topics-item">Topics</h2>
          </li>
        </Link>
      </ul>
      <hr />
    </div>
  );
};

export default Home;
