import React from "react";

const CheckOtpForm = ({ mobile, code, setCode, setStep }) => {
  return (
    <form>
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
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
};

export default CheckOtpForm;
