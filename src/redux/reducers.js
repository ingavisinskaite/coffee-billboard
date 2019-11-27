import {
    combineReducers
} from 'redux'

import {
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
        default:
            return state;
    }
}

export default combineReducers({
    coffee
})