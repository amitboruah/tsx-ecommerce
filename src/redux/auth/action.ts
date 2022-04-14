const actions = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",

  SIGNUP: "SIGNUP",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  SIGNUP_FAILED: "SIGNUP_FAILED",

  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FAIL: "FORGOT_PASSWORD_FAIL",

  RESET_PASSWORD: "RESET_PASSWORD",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAIL: "RESET_PASSWORD_FAIL",

  CLEAR_ERROR: "CLEAR_ERROR",

  loginReq: (payload: any) => ({
    type: actions.LOGIN_REQUEST,
    payload: payload,
  }),

  signupReq: (payload: any) => ({
    type: actions.SIGNUP,
    payload: payload,
  }),

  clearError: (payload: any) => ({
    type: actions.CLEAR_ERROR,
    payload: payload,
  }),

  forgotPassword: (payload: any) => ({
    type: actions.FORGOT_PASSWORD,
    payload: payload,
  }),

  resetPassword: (payload: any) => ({
    type: actions.RESET_PASSWORD,
    payload: payload,
  }),
};

export default actions;
