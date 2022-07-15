import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/users";

export function signup(user) {
  return http.post(apiEndPoint, {
    email: user.email,
    password: user.password,
    name: user.name,
  });
}

export default {
  signup,
};