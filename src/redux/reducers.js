import {
    combineReducers
} from 'redux'

import {
    REQUEST_COFFEE_LIST,
    RECEIVE_COFFEE_LIST,
    ADD_COFFEE,
    ADD_COFFEE_SUCCESS,
    REMOVE_COFFEE,
    REMOVE_COFFEE_SUCCESS,
    EDIT_COFFEE_SUCCESS,
    EDIT_COFFEE,
    REQUEST_COFFEE_BY_ID,
    REQUEST_COFFEE_BY_ID_SUCCESS
} from './actions';

const initialState = {
    isLoading: false,
    coffeeList: []
}

function updateCoffeeById(coffee, coffeeList) {
    const coffeeIndex = coffeeList.findIndex(c => c.id === coffee.id);
    coffeeList[coffeeIndex] = coffee;
    return coffeeList;
}

export function coffeeReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_COFFEE_BY_ID:
        case EDIT_COFFEE:
        case REMOVE_COFFEE:
        case ADD_COFFEE:
        case REQUEST_COFFEE_LIST:
            return {
                ...state,
                isLoading: false
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
                coffeeList: updateCoffeeById(action.coffee, state.coffeeList),
                isLoading: false
            }
        case REQUEST_COFFEE_BY_ID_SUCCESS: 
            return {
                ...state,
                coffeeList: state.coffeeList.concat(action.coffee),
                isLoading: false
            }
            default:
                return state;
    }
}

export default combineReducers({
    coffee: coffeeReducer
})