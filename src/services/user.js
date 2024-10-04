import api from "../configs/api";
import { getCookie } from "../utils/cookie";

const getProfile = () => api.get("user/whoami", getCookie);
const getPosts = () => api.get("post/my");
export { getProfile, getPosts };
