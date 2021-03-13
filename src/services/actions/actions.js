import Axios from 'axios';
import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    INCREMENT,
    DECREMENT,
    RESET,
    API_DATA
} from '../constants';


export const addToCart = (data) => {
    
    return{
        type: ADD_TO_CART,
        data: data
    }
};

export const RemoveToCart = () => {
    
    return{
        type: REMOVE_TO_CART,
    }
};

export const Increment = () => {
    return{
        type: INCREMENT,
    }
};

export const Decrement = () => {
    return{
        type: DECREMENT,
    }
};

export const Reset = () => {
    return{
        type: RESET,
    }
};

export const ApiData =  () => async(dispatch)  => {
        const response =  await Axios.get('https://reactnative.dev/movies.json')
        .catch((e) => console.error(e));
   return dispatch({
        type: API_DATA,
        payload: response.data
    });
};

