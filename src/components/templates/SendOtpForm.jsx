const SendOtpForm = ({ mobile, setMobile, setStep }) => {
  const submitHandler = (event) => {
    event.preventDefault;
    console.log(event);
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
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
