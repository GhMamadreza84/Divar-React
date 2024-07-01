const CheckOtpForm = ({ code, setCode, setStep, mobile }) => {
  return (
    <form>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیامک شده به شماره «{mobile}» را وارد کنید </span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
    </form>
  );
};

export default CheckOtpForm;
