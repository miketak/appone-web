import http from "./httpService";
import jwtDecode from "jwt-decode";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    // return jwtDecode(jwt);
    // TODO: Change this when jwt is implemented
    //       on backend
    if (jwt && jwt !== -1) {
      // console.log("Login successful with jwt:" + jwt);
      return { user: { name: "Fake Name" } };
    }
    return null;
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
