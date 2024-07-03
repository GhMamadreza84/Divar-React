import axios from "axios";
import { getCookie } from "src/utils/cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (token) {
      request.headers["Authorization"] = `bearer ${accessToken}`;
    }
    return request;
  },
  (erorr) => {
    return Promise.reject(erorr);
  }
);
export { api };
