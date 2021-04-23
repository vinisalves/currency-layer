import axios from "axios";
import "dotenv/config";

const currencyApi = axios.create({
  baseURL: process.env.BASE_API,
});

currencyApi.interceptors.request.use((config) => {
  config.params = {
    access_key: process.env.ACCESS_KEY,
  };

  return config;
});

export default currencyApi;
