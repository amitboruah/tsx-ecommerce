import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { login, signup } from "../../service/auth";
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
          userSignupSuccess: response.Message,
        });

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);

      } else {
        yield put({
          type: actions.SIGNUP_FAILED,
          error: response.Message,
        });
      }
    } catch (error: unknown) {
      yield put({ type: actions.SIGNUP_FAILED, error: error });
    }
  });
}

export function* loginReq() {
  yield takeEvery(
    actions.LOGIN_REQUEST,
    function* (payload:any):any {
      try {
        const response = yield call(login, payload.payload);
        if (response && response?.Email_verify) {
          // yield put({
          //   type: actions.LOGIN_SUCCESS,
          //   token: response.data.access_Token,
          //   userData: response.data,
          // });
          localStorage.setItem("token", response.access_Token)
          localStorage.setItem("user", response.Email)
          
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
    }
  );
}


export default function* authSaga() {
  yield all([fork(signupReq), fork(loginReq)]);
}
