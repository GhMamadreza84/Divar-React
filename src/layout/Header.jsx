import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="">
        <Link to="/">
          <img src="divar.svg" alt="" />
        </Link>
        <span>
          <img src="location.svg" alt="" />
          <p>تهران</p>
        </span>
        <div className="">
          <Link to="/auth">
            <span>
              <img src="profile.svg" alt="" />
              <p>دیوار من</p>
            </span>
          </Link>
          <Link to="/dashboard">ثبت آگهی</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
