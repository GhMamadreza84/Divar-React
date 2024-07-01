const CheckOtpForm = ({ code, setCode, setStep, mobile }) => {
  return <form>
    <p>تایید کد اس ام اس شده</p>
    <span>کد پیامک شده به شماره «{mobile}» را وارد کنید  </span>
  </form>;
};

export default CheckOtpForm;
