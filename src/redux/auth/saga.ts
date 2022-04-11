import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { login, signup } from "../../service/auth";
import actions from "./action";


// for signup

export function* signupRequest() {
  //   const user = yield call(login(data));
  //   yield put({ type: "REGISTER_USER", user });
}



export function* loginRequest() {
  yield takeEvery(actions.LOGIN_REQUEST, function* ({ payload }: { type: string; payload: Record<string, string> }) {
    try {
      const response = yield call(login, payload);
      if (response.data && response.data.is_email_verified !== false) {
        yield put({
          type: actions.LOGIN_SUCCESS,
          token: response.data.access_token,
          userData: response.data
        });
  // store toke in LS
  // navigate to home page
        //navigate user to home screen
      //   navigate("/")
      } else {
        yield put({
          type: actions.LOGIN_ERROR,
          error: response?.data?.message || response?.message
        });
      }
    } catch (error: any) {
      yield put({ type: actions.LOGIN_ERROR, error: error });
    }
  });
}

export default function* authSaga() {
  yield all([fork(signupRequest), fork(loginRequest)]);
}
