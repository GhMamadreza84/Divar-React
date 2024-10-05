import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const removeCookie = () => {
    Cookies.remove("token");
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    navigate("/");
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
                <li onClick={removeCookie}>خروج از حساب کاربری</li>
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
