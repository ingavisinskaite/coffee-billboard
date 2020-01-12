import {
    combineReducers
} from 'redux'

import {
    REQUEST_COFFEE_LIST_SUCCESS,
    ADD_COFFEE_SUCCESS,
    REMOVE_COFFEE,
    REMOVE_COFFEE_SUCCESS,
    EDIT_COFFEE_SUCCESS,
    EDIT_COFFEE,
} from './actions';

const initialState = {
    coffeeList: []
}

function updateCoffeeById(coffee, coffeeList) {
    const coffeeIndex = coffeeList.findIndex(c => c.id === coffee.id);
    coffeeList[coffeeIndex] = {...coffee, isLoading: false};
    return coffeeList;
}

export function coffeeReducer(state = initialState, action) {
    switch (action.type) {
        case REMOVE_COFFEE:
        case EDIT_COFFEE:
            return {
                coffeeList: state.coffeeList.map((coffee) => ({
                    ...coffee,
                    isLoading: coffee.id === action.coffeeId
                }))
            }
        case REQUEST_COFFEE_LIST_SUCCESS:
            return {
                coffeeList: action.coffeeList
            };
        case REMOVE_COFFEE_SUCCESS:
            return {
                coffeeList: state.coffeeList.filter(c => c.id !== action.coffeeId),
            };
        case ADD_COFFEE_SUCCESS:
            return {
                coffeeList: state.coffeeList.concat(action.coffee),
            };
        case EDIT_COFFEE_SUCCESS:
            return {
                coffeeList: updateCoffeeById(action.coffee, state.coffeeList),
            }
        default:
            return state;
    }
}

export default combineReducers({
    coffee: coffeeReducer
})