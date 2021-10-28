import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={`container-fluid ${classes.navbar}`}>
      <div className="row">
        <div className="col-md-8 ">
          <div className={`${classes.logo} mt-3`}>
            <a href="/home">
              <span>
                {" "}
                <h2>DEMO Streaming</h2>
              </span>
            </a>
          </div>
        </div>
        <div className={`login  col-md-3 mt-4`}>
          <div className={` ${classes.button}`}>
            <button className={`${classes.buttonLogin}`}>Login</button>
            <button className={`${classes.buttonStart}`}>
              Start Yor Free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
