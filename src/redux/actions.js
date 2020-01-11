import { config } from '../config/config';

export const REQUEST_COFFEE_LIST = 'GET_COFFEE_LIST';
export const RECEIVE_COFFEE_LIST = 'RECEIVE_COFFEE_LIST'
export const ADD_COFFEE = 'ADD_COFFEE';
export const ADD_COFFEE_SUCCESS = 'ADD_COFFEE_SUCCESS';
export const REMOVE_COFFEE = 'REMOVE_COFFEE';
export const REMOVE_COFFEE_SUCCESS = 'REMOVE_COFFEE_SUCCESS';
export const EDIT_COFFEE = 'EDIT_COFFEE';
export const EDIT_COFFEE_SUCCESS = 'EDIT COFFEE SUCCESS';
export const GET_COFFEE_BY_ID = 'GET_COFFEE_BY_ID';
export const REQUEST_COFFEE_BY_ID = 'REQUEST_COFFEE_BY_ID';
export const REQUEST_COFFEE_BY_ID_SUCCESS = 'REQUEST_COFFEE_BY_ID_SUCCESS';

export function getCoffeeById(coffeeId, sucessCallback) {
    return function (dispatch) {
        dispatch(requestCoffeeById(coffeeId))

        return fetch(`${config.apiUrl}/coffee/${coffeeId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(coffee => {
                dispatch(sucessCallback(coffee));
            })
    }
}

export function requestCoffeeById(coffeeId) {
    return {
        type: REQUEST_COFFEE_BY_ID,
    }
}

export function requestCoffeeByIdSuccess(coffee) {
    return {
        type: REQUEST_COFFEE_BY_ID_SUCCESS,
        coffee
    }
}


export function addCoffee(coffeePayload) {
    return {
        type: ADD_COFFEE,
        coffee: coffeePayload
    }
}

export function addCoffeeSuccess(coffeePayload) {
    return {
        type: ADD_COFFEE_SUCCESS,
        coffee: coffeePayload
    }
}

export function postCoffee(coffeePayload) {
    return function (dispatch) {
        dispatch(addCoffee())

        return fetch(`${config.apiUrl}/coffee`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: coffeePayload.url,
                    title: coffeePayload.title,
                    price: coffeePayload.price
                })
            })
            .then(response => response.json())
            .then(newCoffeeId => {
                dispatch(getCoffeeById(newCoffeeId, addCoffeeSuccess));
            })
    }
}

export function removeCoffee(coffeeId) {
    return {
        type: REMOVE_COFFEE,
        coffeeId
    }
}

export function removeCoffeeSuccess(coffeeId) {
    return {
        type: REMOVE_COFFEE_SUCCESS,
        coffeeId
    }
}

export function deleteCoffee(coffeeId) {
    return function (dispatch) {
        dispatch(removeCoffee())

        return fetch(`${config.apiUrl}/coffee/${coffeeId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                dispatch(removeCoffeeSuccess(coffeeId))
            })
    }
}

export function editCoffee(editedCoffee, coffeeId) {
    return {
        type: EDIT_COFFEE,
        coffee: editedCoffee,
        coffeeId
    }
}

export function editCoffeeSuccess(editedCoffee) {
    return {
        type: EDIT_COFFEE_SUCCESS,
        coffee: editedCoffee
    }
}

export function putCoffee(editedCoffee, coffeeId) {
    return function (dispatch) {
        dispatch(editCoffee())

        return fetch(`${config.apiUrl}/coffee/${coffeeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: editedCoffee.url,
                    title: editedCoffee.title,
                    price: editedCoffee.price
                })
            })
            .then(response => response.json())
            .then(json => {
                dispatch(getCoffeeById(coffeeId, editCoffeeSuccess))
            })
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

        return fetch(`${config.apiUrl}/coffee`)
            .then(response => response.json())
            .then(coffeeList => {
                dispatch(receiveCoffeeList(coffeeList))
            })
    }
}