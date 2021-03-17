import {all} from 'redux-saga/effects';
import {waitforApiData} from './saga';

export default function* rootSaga(){
    yield all([waitforApiData()]);
}