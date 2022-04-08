import { all } from 'redux-saga/effects';
import mySaga from '../product/saga';


export default function* rootSaga() {
  yield all([...mySaga]);
}