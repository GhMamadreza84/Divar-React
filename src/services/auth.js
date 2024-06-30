const sendOtp = async () => {
  try {
    const response = await api.post("auth/send-otp");
    return { response };
  } catch (error) {
    return { error  };
  }
};
