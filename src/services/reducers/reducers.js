import { ADD_TO_CART, REMOVE_TO_CART, INCREMENT, DECREMENT, RESET } from '../constants';

const initialState = {
    cartData: [],
}

export function cartItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:

            return [
                ...state,
                { cartData: action.data }
            ]

        case REMOVE_TO_CART:
            state.pop()
            return [
                ...state,

            ]




            break;

        default:
            return state;
    }
}

export function IncDec(state = 0, action) {
    switch (action.type) {

        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;

        case RESET:
            return 0;

        default:
            return state;
    }
};