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

export const forgotPassword = (payload:any) => {  
  return ServiceInstance({
    method: "POST",
    url: apiUrl.FORGOT_PASS,
    data: {
      ...payload,
    },
  });
};

export const resetPassword = (payload:any) => {  
  return ServiceInstance({
    method: "PATCH",
    url: apiUrl.RESET_PASS,
    data: {
      ...payload,
    },
  });
};

export const allproducts = (payload:any) => {
  return ServiceInstance({
    method: "POST",
    url: apiUrl.ALL_PRODUCTS,
    data: {
      ...payload,
    },
  });
};


export const singleProduct = (payload:any) => {
  return ServiceInstance({
    method: "POST",
    url: apiUrl.SINGLE_PRODUCT,
    data: {
      ...payload,
    },
  });
};

export const addToCart = (payload:any) => {
  return ServiceInstance({
    method: "POST",
    url: apiUrl.ADD_TO_CART,
    data: {
      ...payload,
    },
  });
};

export const showCart = (payload:any) => {
  return ServiceInstance({
    method: "POST",
    url: apiUrl.SHOW_CART,
    data: {
      ...payload,
    },
  });
};