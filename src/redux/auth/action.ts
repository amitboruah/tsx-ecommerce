const actions = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",

  SIGNUP: "SIGNUP",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  SIGNUP_FAILED: "SIGNUP_FAILED",

  CLEAR_ERROR: "CLEAR_ERROR",

  loginReq: (payload:any) => ({
    type: actions.LOGIN_REQUEST,
    payload: payload,
  }),

  signupReq: (payload:any) => (
    {    
    type: actions.SIGNUP,
    payload: payload,
  }),

  clearError: (payload:any) => ({
    type: actions.CLEAR_ERROR,
    payload: payload,
  }),
};

export default actions;
