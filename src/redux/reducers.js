import {
    combineReducers
} from 'redux'

import {
    ADD_COFFEE,
    REMOVE_COFFEE,
    REQUEST_COFFEE_LIST,
    RECEIVE_COFFEE_LIST
} from './actions';

const initialState = {
    isLoading: true,
    coffeeList: []
}

function coffee(state = initialState, action) {
    switch (action.type) {
        case REQUEST_COFFEE_LIST:
            return {
                ...state,
                isLoading: true
            };
        case RECEIVE_COFFEE_LIST:
            return {
                ...state,
                coffeeList: action.coffeeList
            };
        case ADD_COFFEE:
            return [
                ...state,
                {
                    imgUrl: action.coffeePayload.imgUrl,
                    title: action.coffeePayload.title,
                    price: action.coffeePayload.price
                }
            ]
        case REMOVE_COFFEE:
        default:
            return state;
    }
}

export default combineReducers({
    coffee
})