import axios from 'axios';
import {
    ADD_TO_CART,
    REMOVE_TO_CART
} from '../constants';

export const addToCart = (data) => {
    
    return{
        type: ADD_TO_CART,
        data
    }
};

export const RemoveToCart = () => {
    
    return{
        type: REMOVE_TO_CART,
    }
};