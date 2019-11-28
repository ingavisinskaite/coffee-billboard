export const REQUEST_COFFEE_LIST = 'GET_COFFEE_LIST';
export const RECEIVE_COFFEE_LIST = 'RECEIVE_COFFEE_LIST'
export const ADD_COFFEE = 'ADD_COFFEE';
export const ADD_COFFEE_SUCCESS = 'ADD_COFFEE_SUCCESS';
export const REMOVE_COFFEE = 'REMOVE_COFFEE';
export const REMOVE_COFFEE_SUCCESS = 'REMOVE_COFFEE_SUCCESS';
export const EDIT_COFFEE = 'EDIT_COFFEE';
export const EDIT_COFFEE_SUCCESS = 'EDIT COFFEE SUCCESS';

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

        return fetch('http://localhost:3001/coffee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    imgUrl: coffeePayload.imgUrl,
                    title: coffeePayload.title,
                    price: coffeePayload.price
                })
            })
            .then(response => response.json())
            .then(json => {
                dispatch(addCoffeeSuccess(json.newCoffee));
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

        return fetch('http://localhost:3001/coffee/' + coffeeId, {
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

export function editCoffeeSuccess(editedCoffee, coffeeId) {
    return {
        type: EDIT_COFFEE_SUCCESS,
        coffee: editedCoffee,
        coffeeId
    }
}

export function putCoffee(editedCoffee, coffeeId) {
    return function (dispatch) {
        dispatch(editCoffee())

        return fetch('http://localhost:3001/coffee/' + coffeeId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    imgUrl: editedCoffee.imgUrl,
                    title: editedCoffee.title,
                    price: editedCoffee.price
                })
            })
            .then(response => response.json())
            .then(json => {
                dispatch(editCoffeeSuccess(json.editedCoffee, coffeeId))
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

        return fetch('http://localhost:3001/coffee')
            .then(response => response.json())
            .then(json => {
                dispatch(receiveCoffeeList(json.coffeeList))
            })
    }
}