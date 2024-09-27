import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img className={styles.logo} src="divar.svg" alt="" />
        </Link>
        <span>
          <img src="location.svg" alt="" />
          <p>تهران</p>
        </span>
      </div>
      <div className="">
        <Link to="/auth">
          <span>
            <img src="profile.svg" alt="" />
            <p>دیوار من</p>
          </span>
        </Link>
        <Link className={styles.button} to="/dashboard">
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
};

export default Header;
