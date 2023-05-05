import {Country2,Details2} from '../Actions/actions';
import { takeLatest, put } from 'redux-saga/effects';

export function* calls(){
  console.log('I AM LOGS');
  yield takeLatest('country',updateCountry);
  yield takeLatest('details',updateDetails);
}

function* updateCountry(action){
  console.log('I AM UPDATE COUNTRY 1',action.payload);
yield put(Country2(action.payload));
}

function* updateDetails(action){
  console.log('I AM DETAILS',action);
  try{
    const x = action.payload;
    console.log('I AM THE UPDATE 2', x);
    const res = yield fetch(x);
    const ans = yield res.json();
    console.log('I AM RTHE UPDATE 5', ans);
    yield put(Details2(ans));
  }
  catch(error)
  {
    console.log('I AM error');
    yield put(Details2('No Data'));
  }
  
}