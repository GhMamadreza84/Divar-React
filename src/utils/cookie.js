const setToken = (tokens) => {
  document.cookie = `accesToken = ${tokens.accesToken}; max-age=${
    1 * 24 * 60 * 60
  }`;
  document.cookie = `refreshToken = ${tokens.refreshToken}; max-age=${
    1 * 24 * 60 * 60
  }`;
};

export {setToken}