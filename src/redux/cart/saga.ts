import { call, put, takeEvery, fork, all } from "redux-saga/effects";
import { addToCart, showCart } from "../../service/auth";
import actions from "./action";

export function* Addproduct() {
  yield takeEvery(actions.ADD_TO_CART, function* (payload: any): any {
  yield call(addToCart, payload.payload);

    // if (response) {
    //   yield put({ type: actions.ADD_TO_CART_SUCCESS, payload: response });
    // }
  });
}

export function* Showproduct() {
  yield takeEvery(actions.SHOW_CART, function* (payload: any): any {
    const response = yield call(showCart, payload.payload);

    if (response) {
      yield put({ type: actions.SHOW_CART_SUCCESS, payload: response });
    }
  });
}
