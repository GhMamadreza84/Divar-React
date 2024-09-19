import React, { useState } from "react";
import SendOtpForm from "../components/templates/SendOtpForm";
import CheckOtpForm from "../components/templates/CheckOtpForm";

const AuthPage = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 ? (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />
      ) : (
        <CheckOtpForm code={code} setCode={setCode} mobile={mobile} setStep={setStep} />
      )}
    </div>
  );
};

export default AuthPage;
