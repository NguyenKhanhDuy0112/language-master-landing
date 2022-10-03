import { deleteToken, getToken } from "./../shared/helpers/localStorage";
import axios from "axios";

const url = {
  baseUrl: "https://lang-mates-test-api.aegona.work/api",
  dashboard: "/dashboard",
  auth: "/Auth",
  account: "/Account",
  home: "/HomePages",
};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const api = {
  url,
  instance,
  get: instance.get,
  put: instance.put,
  delete: instance.delete,
  post: instance.post,
};

instance.interceptors.request.use(async (config: any) => {
  const token = getToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        window.location.href = "/signin";
        break;
      case 403:
        window.location.href = "/no-permission";
        break;
      case 451:
        deleteToken()
        alert("Cookie expired, Please login to access the system");
        break;
      default:
        window.location.href = '/no-internet';
    }
    return Promise.reject(error);
  }
);

export default api;
