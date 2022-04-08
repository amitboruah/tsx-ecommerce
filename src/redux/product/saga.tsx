import { call, put, takeEvery, fork } from "redux-saga/effects";
import axios from "axios";

const datafetch = async () => {
  const res = await axios
    .get("http://localhost:3000/products")
    .then((response) => {
      return response.data;
    });
  return res;
};

function* getItems(): any {
  const data = yield call(datafetch);
  yield put({ type: "GET_DATA_SUCCESS", data });
}

function* getSaga() {
  yield takeEvery("FETCH_DATA", getItems);
}







const productSaga = [fork(getSaga)];

export default productSaga;
