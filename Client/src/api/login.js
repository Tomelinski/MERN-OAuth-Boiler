import axios from "axios";
import { domain } from "./api-config.js";

export const attemptLogin = (credentials) => {
  return axios
    .post(domain + "/login", {
      credentials,
    })
    .then((response) => {
      // console.log("loginData: " + response);
      return response;
    })
    .catch((err) => {
      console.log("An Error has occured while authenticating");
    });
};

export const attemptGoogleLogin = () => {
  return axios
    .get(domain + "/auth/user", {
      withCredentials: true,
    })
    .then((response) => {
      // console.log("loginData: " + response);
      return response;
    })
    .catch((err) => {
      console.log("An Error has occured while authenticating with Google");
    });
};

export const attemptLogout = () => {
  axios.get(domain + "/auth/logout");
};
