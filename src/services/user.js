import { api } from "src/configs/api";
import { getCookie } from "utils/cookie";
console.log(getCookie("accessToken"));

const getProfile = api.get("user/whoami");

export { getProfile };
