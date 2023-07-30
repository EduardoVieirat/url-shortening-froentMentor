import axios from "axios";

const api = axios.create({
  baseURL: "https://api.shrtco.de/v2",
  timeout: 10000,
});

export default api;
