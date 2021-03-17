import {takeEvery, call, put} from 'redux-saga/effects';
import {API_DATA} from '../constants';
import {ApiData} from '../actions/actions';

function* fetchApiData(){
    try{
        yield call(ApiData);
        yield put(ApiData);
    }
    catch(e){
        console.error(e);
    }
}

export function* waitforApiData() {
    yield takeEvery(API_DATA, fetchApiData);
}