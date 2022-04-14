import actions from "./action";

const initialState = {
  // idToken: localStorage.getItem("id_token"),
  signup: "",
  signupError: "",
  userSignupSuccess: "",
  loginError: "",
  forgotSuccess: "",
  forgotError: "",
  resetSuccess: "",
  resetError: "",
};

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        idToken: action.token,
        payload: action.payload,
      };

    case actions.LOGIN_REQUEST:
      return {
        ...initialState,
      };

    case actions.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.error,
      };

    case actions.SIGNUP:
      return {
        ...initialState,
      };

    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        userSignupSuccess: action.userSignupSuccess,
      };

    case actions.SIGNUP_FAILED:
      return {
        ...state,
        signupError: action.signupError,
      };

    case actions.FORGOT_PASSWORD:
      return {
        ...initialState,
      };

    case actions.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotSuccess: action.forgotSuccess,
      };

    case actions.FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        forgotError: action.forgotError,
      };

    case actions.FORGOT_PASSWORD:
      return {
        ...initialState,
      };

    case actions.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetSuccess: action.resetSuccess,
      };

    case actions.RESET_PASSWORD_FAIL:
      return {
        ...state,
        resetError: action.resetError,
      };

    default:
      return { ...state };
  }
}
