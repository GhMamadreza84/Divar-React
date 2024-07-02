const setToken = (tokens) => {
  document.cookie = `accessToken = ${tokens.accessToken}; max-age=${
    1 * 24 * 60 * 60
  }`;
  document.cookie = `refreshToken = ${tokens.refreshToken}; max-age=${
    1 * 24 * 60 * 60
  }`;
};

export {setToken}