import api from "configs/api";
console.log(getCok)

const getProfile = api.get("user/whoami");

export { getProfile };
