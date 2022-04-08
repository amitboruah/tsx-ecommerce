import { ServiceInstance, ServiceAuthInstance, apiUrl } from "./index";

//Login

export const login = (payload) => {
  return ServiceInstance({
    method: "POST",
    url: apiUrl.LOGIN,
    data: {
      ...payload,
    },
  });
};

//Signup

export const signup = (payload) => {
  return ServiceInstance({
    method: "POST",
    url: apiUrl.SIGNUP,
    data: {
      ...payload,
    },
  });
};
