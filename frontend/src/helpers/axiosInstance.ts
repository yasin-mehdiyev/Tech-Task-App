import axios from "axios";

const BASE_URL : string = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf8",
  },
});

export default axiosInstance;
