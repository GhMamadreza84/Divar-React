import api from "../configs/api";
import { getCookie } from "../utils/cookie";

getCookie("accessToken");

const getProfile = () => api.get("user/whoami");

export { getProfile };
