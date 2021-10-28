import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${classes.title} pt-3`}>
      <h3> Popular Title</h3>
    </div>
  );
};

export default Header;
