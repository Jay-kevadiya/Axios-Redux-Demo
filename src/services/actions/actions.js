import axios from 'axios';
import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    INCREMENT,
    DECREMENT,
    RESET
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