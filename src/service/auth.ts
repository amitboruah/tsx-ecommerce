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

export const signup = (payload:any) => {
  console.log("from auth");
  
  return ServiceInstance({
    method: "POST",
    url: apiUrl.SIGNUP,
    data: {
      ...payload,
    },
  });
};


export const allproducts = (payload:any) => {
  console.log("from auth");
  
  return ServiceInstance({
    method: "POST",
    url: apiUrl.ALL_PRODUCTS,
    data: {
      ...payload,
    },
  });
};