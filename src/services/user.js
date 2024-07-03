import { api } from "src/configs/api";

const getProfile = () =>
  api.get("user/whoami");

export { getProfile };
