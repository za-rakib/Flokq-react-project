import React from "react";
import { Link } from "react-router-dom";
import movie from "../../image/placeholder.png";
import classes from "./Home.module.css";

const Home = () => {
  
  return (
    <div className={`m-5 d-flex ${classes.cardItem}`}>
      <div>
        <Link to="/series">
          <div className={`card ${classes.series}`}>
            <img src={movie} className="" alt="..." />
            <h3>SERIES</h3>
          </div>
        </Link>
        <small>Popular Series</small>
      </div>
      <div>
        <Link to="/movies">
          <div className={`card ${classes.series}`}>
            <img src={movie} className="" alt="..." />
            <h3>MOVIE</h3>
          </div>
        </Link>
        <small>Popular Movie</small>
      </div>
    </div>
  );
};

export default Home;
