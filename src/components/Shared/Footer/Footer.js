import React from "react";
import classes from "./Footer.module.css";
import facebook from "../../../image/facebook-white.svg";
import twitter from "../../../image/twitter-white.svg";
import instagram from "../../../image/instagram-white.svg";
import app from "../../../image/app-store.svg";
import play from "../../../image/play-store.svg";
import windows from "../../../image/windows-store.svg";

const Footer = () => {
  return (
    <div className={`${classes.footer}`}>
      <div className={`container pt-4  ${classes.text}`}>
        <div>
          <p>
            <span>Home</span> |<span>Terms and conditions</span> |
            <span>Privacy Policy </span>|<span>Help </span>|
            <span>Manage Account </span>
          </p>
          <small>Copyright@2021 DEMO Streaming. All rights reserved.</small>
        </div>
        <div className={`${classes.icon} mt-4 pb-5 d-flex`}>
          <div className={`${classes.socialIcon}`}>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
          <div className={`${classes.storeIcon}`}>
            <img src={app} alt="" />
            <img src={play} alt="" />
            <img src={windows} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
