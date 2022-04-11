import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { login, signup } from "../../service/auth";
import actions from "./action";



// for signup

export function* signupReq() {
  
  yield takeEvery(actions.SIGNUP, function* (payload:any){
    console.log(payload, "saga payload");
    
    try {
      const response = yield call(signup, payload.payload);
      console.log("from saga", payload);

      if (response.status) {
        yield put({
          type: actions.SIGNUP_SUCCESS,
          userSignupSuccess: response.Message,
        });

      } else {
        yield put({
          type: actions.SIGNUP_FAILED,
          error: response,
        });
      }
    } catch (error: unknown) {
      yield put({ type: actions.SIGNUP_FAILED, error: error });
    }
  });
}

export function* loginRequest() {
  yield takeEvery(
    actions.LOGIN_REQUEST,
    function* ({ payload }: { type: string; payload: Record<string, string> }) {
      try {
        const response = yield call(login, payload);
        if (response.data && response.data.is_email_verified !== false) {
          yield put({
            type: actions.LOGIN_SUCCESS,
            token: response.data.access_token,
            userData: response.data,
          });
          // store toke in LS
          // navigate to home page
          //navigate user to home screen
          //   navigate("/")
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
  yield all([fork(signupReq), fork(loginRequest)]);
}

// import { call, put, takeEvery, fork } from "redux-saga/effects";
// import { signup } from "../../service/auth";
// import actions from "./action";

// function* getItems(payload): any {
//   const data = yield call(signup, payload);
//   // yield put( actions.SIGNUP_SUCCESS, data );
// }

// function* getSaga() {
//   console.log("sagas");

//   yield takeEvery(actions.SIGNUP, getItems);
// }

// const authSaga = [fork(getSaga)];

// export default authSaga;
