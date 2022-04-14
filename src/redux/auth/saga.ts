import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  forgotPassword,
  login,
  signup,
  resetPassword,
} from "../../service/auth";
import actions from "./action";

// for signup

export function* signupReq() {
  yield takeEvery(actions.SIGNUP, function* (payload: any) {
    console.log(payload, "saga payload");

    try {
      const response = yield call(signup, payload.payload);

      if (response.status) {
        yield put({
          type: actions.SIGNUP_SUCCESS,
          userSignupSuccess: response.message,
        });

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        yield put({
          type: actions.SIGNUP_FAILED,
          signupError: response.message,
        });
      }
    } catch (error: unknown) {
      yield put({ type: actions.SIGNUP_FAILED, error: error });
    }
  });
}

// for login

export function* loginReq() {
  yield takeEvery(actions.LOGIN_REQUEST, function* (payload: any): any {
    try {
      const response = yield call(login, payload.payload);
      if (response && response?.Email_verify) {
        // yield put({
        //   type: actions.LOGIN_SUCCESS,
        //   token: response.data.access_Token,
        //   userData: response.data,
        // });
        localStorage.setItem("token", response.access_Token);
        localStorage.setItem("user", response.Email);

        window.location.href = "/home";
      } else {
        yield put({
          type: actions.LOGIN_ERROR,
          error: response?.data?.message || response?.message,
        });
      }
    } catch (error: any) {
      yield put({ type: actions.LOGIN_ERROR, error: error });
    }
  });
}

//forgot password

export function* forgotPass() {
  yield takeEvery(actions.FORGOT_PASSWORD, function* (payload: any): any {
    try {
      const response = yield call(forgotPassword, payload.payload);
      if (response && response?.status) {
        yield put({
          type: actions.FORGOT_PASSWORD_SUCCESS,
          forgotSuccess: response.message,
        });
        // window.location.href = "/";
      } else {
        yield put({
          type: actions.FORGOT_PASSWORD_FAIL,
          forgotError: response?.message,
        });
      }
    } catch (error: any) {
      yield put({ type: actions.FORGOT_PASSWORD_FAIL, error: error });
    }
  });
}

// reset password

export function* resetPass() {
  yield takeEvery(actions.RESET_PASSWORD, function* (payload: any): any {
    try {
      const response = yield call(resetPassword, payload.payload);

      if (response && response?.status) {
        yield put({
          type: actions.RESET_PASSWORD_SUCCESS,
          resetSuccess: response.message,
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        yield put({
          type: actions.RESET_PASSWORD_FAIL,
          resetError: response?.message,
        });
      }
    } catch (error: any) {
      yield put({ type: actions.RESET_PASSWORD_FAIL, resetError: error });
    }
  });
}

export default function* authSaga() {
  yield all([
    fork(signupReq),
    fork(loginReq),
    fork(forgotPass),
    fork(resetPass),
  ]);
}
