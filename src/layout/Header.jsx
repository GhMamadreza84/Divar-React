import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
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
        <span>
          <img src="profile.svg" alt="" />
          <p onClick={toggleModal}>
            دیوار من
            {isModalOpen ? (
              <ul className={styles.modal}>
                <li>ورود به پنل کاربری</li>
                <li>خروج از حساب کاربری</li>
              </ul>
            ) : null}
          </p>
        </span>
        <Link className={styles.button} to="/dashboard">
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
};

export default Header;
