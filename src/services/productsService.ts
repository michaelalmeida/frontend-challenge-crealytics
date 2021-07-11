import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_PRODUCTS_API_BASE_URL,
});

instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;
