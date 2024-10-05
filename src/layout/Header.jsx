import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { data } = useQuery(["profile"], getProfile);
  console.log(data);
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
          <button onClick={toggleModal}>
            دیوار من
            {isModalOpen ? (
              <ul className={styles.modal}>
                <li>
                  {data === undefined ? (
                    <Link to="/auth">ورود به پنل کاربری</Link>
                  ) : (
                    ""
                  )}
                  {data?.data.role === "USER" ? (
                    <Link to="/dashboard">ورود به داشبورد</Link>
                  ) : (
                    ""
                  )}
                  {data?.data.role === "ADMIN" ? (
                    <Link to="/admin">ورود به پنل ادمین</Link>
                  ) : (
                    ""
                  )}
                </li>
                <li onClick={removeCookie}>خروج از حساب کاربری</li>
              </ul>
            ) : null}
          </button>
        </span>
        <Link className={styles.button} to="/dashboard">
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
};

export default Header;
