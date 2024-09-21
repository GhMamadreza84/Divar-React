const setCookie = (token) => {
  document.cookie = `accessToken=${token.accessToken}`;
};
