import axios from "axios";

const api = axios.create({
  baseURL: "https://spoo.me",
  timeout: 10000,
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
});

export default api;
