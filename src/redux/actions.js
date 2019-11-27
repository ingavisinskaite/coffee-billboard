export const ADD_COFFEE = 'ADD_COFFEE';
export const REMOVE_COFFEE = 'REMOVE_COFFEE';
export const REQUEST_COFFEE_LIST = 'GET_COFFEE_LIST';
export const RECEIVE_COFFEE_LIST = 'RECEIVE_COFFEE_LIST'

export function addCoffee(coffeePayload) {
    return {
        type: ADD_COFFEE,
        coffeePayload
    }
}

export function removeCoffee(coffeeId) {
    return {
        type: REMOVE_COFFEE,
        coffeeId
    }
}

export function requestCoffeeList() {
    return {
        type: REQUEST_COFFEE_LIST
    }
}

export function receiveCoffeeList(json) {
    return {
        type: RECEIVE_COFFEE_LIST,
        coffeeList: json
    }
}

export function fetchCoffeeList() {
    return function (dispatch) {
        dispatch(requestCoffeeList())

        return fetch('http://localhost:3001/coffee')
            .then(response => response.json())
            .then(json => {
                dispatch(receiveCoffeeList(json.coffeeList))
            })
    }
}

