import { call, put, takeEvery, fork, all } from "redux-saga/effects";
import { allproducts , singleProduct } from "../../service/auth";
import actions from "./action";

export function* getSaga() {
  yield takeEvery(actions.FETCH_DATA, function* (payload: any): any {
    // try {
    // console.log(payload.payload , "from saga");

    const response = yield call(allproducts, payload.payload);

    if (response) {
      yield put({ type: actions.GET_DATA_SUCCESS, payload: response });
    }
    // } catch (error: unknown) {
    //   yield put({ type: actions.GET_DATA_FAIL , error: error });
    // }
  });
}

export function* singleProd() {
  yield takeEvery(actions.FETCH_SINGLE_PRODUCT, function* (payload: any): any {
    const response = yield call(singleProduct, payload.payload);
    console.log(response, "from saga");

    if (response) {
      yield put({ type: actions.FETCH_SINGLE_PRODUCT_SUCCESS, payload: response });
    }
  });
}

export default function* productSaga() {
  yield all([fork(getSaga), fork(singleProd)]);
}
