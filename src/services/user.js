import api from "../configs/api";
import { getCookie } from "../utils/cookie";

const getProfile = () => api.get("user/whoami", getCookie);

export { getProfile };
