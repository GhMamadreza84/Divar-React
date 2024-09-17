import React from "react";
import SendOtpForm from "../components/templates/SendOtpForm";
import CheckOtpForm from "../components/templates/CheckOtpForm";

const AuthPage = () => {
  return (
    <div>
      <SendOtpForm />
      <CheckOtpForm />
    </div>
  );
};

export default AuthPage;
