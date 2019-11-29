import {
    combineReducers
} from 'redux'

import {
    REMOVE_COFFEE,
    REQUEST_COFFEE_LIST,
    RECEIVE_COFFEE_LIST,
    ADD_COFFEE,
    REMOVE_COFFEE_SUCCESS,
    ADD_COFFEE_SUCCESS,
    EDIT_COFFEE_SUCCESS,
    EDIT_COFFEE
} from './actions';

const initialState = {
    isLoading: true,
    coffeeList: []
}

function updateCoffeeById(coffeeId, coffee, coffeeList) {
    const coffeeIndex = coffeeList.findIndex(c => c.id === coffeeId);
    coffeeList[coffeeIndex] = coffee;
    return coffeeList;
}

function coffee(state = initialState, action) {
    switch (action.type) {
        case EDIT_COFFEE:
        case REMOVE_COFFEE:
        case ADD_COFFEE:
        case REQUEST_COFFEE_LIST:
            return {
                ...state,
                isLoading: true
            };
        case RECEIVE_COFFEE_LIST:
            return {
                ...state,
                coffeeList: action.coffeeList,
                    isLoading: false
            };
        case REMOVE_COFFEE_SUCCESS:
            return {
                ...state,
                coffeeList: state.coffeeList.filter(c => c.id !== action.coffeeId),
                    isLoading: false
            };
        case ADD_COFFEE_SUCCESS:
            return {
                ...state,
                coffeeList: state.coffeeList.concat(action.coffee),
                    isLoading: false
            };
        case EDIT_COFFEE_SUCCESS:
            return {
                ...state,
                coffeeList: updateCoffeeById(action.coffeeId,
                        action.coffee, state.coffeeList),
                    isLoading: false
            }
            default:
                return state;
    }
}

export default combineReducers({
    coffee
})