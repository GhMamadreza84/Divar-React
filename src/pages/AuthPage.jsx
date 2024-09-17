import React, { useState } from "react";
import SendOtpForm from "../components/templates/SendOtpForm";
import CheckOtpForm from "../components/templates/CheckOtpForm";

const AuthPage = () => {
  const [step, setStep] = useState(2);
  return <div>{step === 1 ? <SendOtpForm /> : <CheckOtpForm />}</div>;
};

export default AuthPage;
