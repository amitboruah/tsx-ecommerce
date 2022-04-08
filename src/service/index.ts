import axios, { AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

// Axios NoAuth Instance

export const ServiceInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "content-type": "application/json",
    accept: "application/json",
  },
});

// Axios Auth Instance
export const ServiceAuthInstance: any = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "content-type": "application/json",
    accept: "application/json",
  },
});

//all API URLS
export const apiUrl = {
  SIGNUP: "/user/register",
  LOGIN: "/user/login",
};

//Handle Auth request

ServiceAuthInstance.interceptors.request.use((config) => {
  if (!localStorage.getItem("access_token")) {
    return navigate("/");
  }

  config.headers["Authorization"] = localStorage.getItem("access_token")
    ? `Bearer ${localStorage.getItem("access_token")}`
    : "";
  return config;
});

//Handle noAuth request

ServiceInstance.interceptors.request.use((config) => {
  return config;
});

//Handle Auth response

ServiceAuthInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    ServiceAuthInstance.interceptors.response.reject(ServiceAuthInstance);
    return error?.response
  }
);

//Handle noAuth response

ServiceInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const { data } = error?.response;
    if (data && data.message) {
    }
    return Promise.reject(data.message);
  }
);