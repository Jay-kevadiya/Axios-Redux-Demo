import { combineReducers } from 'redux';
import { cartItems, IncDec, ApiCall } from './reducers';

export default combineReducers({
    cartItems,
    IncDec,
    ApiCall
})