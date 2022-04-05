import { all } from 'redux-saga/effects';
import mySaga from './saga';


export default function* rootSaga() {
  yield all([...mySaga]);
}