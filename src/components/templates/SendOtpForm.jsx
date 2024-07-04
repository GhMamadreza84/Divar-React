import { sendOtp } from "services/auth";
import styles from "./SendOtpForm";
const SendOtpForm = ({ mobile, setMobile, setStep }) => {
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(event);
    if (mobile.length !== 11) return;
    const { response, error } = await sendOtp(mobile);
    console.log({ response, error });
    setStep(2);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={styles.form}>
        <p>ورود به حساب کاربری</p>
        <span>
          برای استفاده از امکانات دیوار , لطفا شماره موبایل خود را وارد کنید .
          کد تایید به این شماره پیامک خواهد شد .
        </span>
        <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
        <input
          type="text"
          id="input"
          placeholder="شماره موبایل"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit">ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOtpForm;
