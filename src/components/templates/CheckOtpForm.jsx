import React from "react";
import { checkOtp } from "../../services/auth";
import { setCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import styles from "./CheckOtpForm.module.css";
import { useQueryClient } from "@tanstack/react-query";
const CheckOtpForm = ({ mobile, code, setCode, setStep }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      setCookie(response.data);
      navigate("/");
      queryClient.invalidateQueries(["profile"]);
    } else {
      console.log(error.response.data.message);
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>تایید کد اس ام اس شده </p>
      <span>کد پیامک شده به شماره موبایل {mobile} را وارد کنید.</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button className={styles.backButton} onClick={() => setStep(1)}>
        تغییر شماره موبایل
      </button>
    </form>
  );
};

export default CheckOtpForm;
