export const REQUEST_COFFEE_LIST = 'GET_COFFEE_LIST';
export const RECEIVE_COFFEE_LIST = 'RECEIVE_COFFEE_LIST'

export function addCoffee(coffeePayload) {
    return function (dispatch) {
        dispatch(requestCoffeeList())

        return fetch('http://localhost:3001/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({imgUrl: coffeePayload.imgUrl, title: coffeePayload.title, price: coffeePayload.price}) 
        })
            .then(response => response.json())
            .then(json => {
                dispatch(receiveCoffeeList(json.coffeeList))
            })
    }
}

export function removeCoffee(coffeeId) {
    return function (dispatch) {
        dispatch(requestCoffeeList())

        return fetch('http://localhost:3001/coffee/' + coffeeId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                dispatch(receiveCoffeeList(json.coffeeList))
            })
    }
}

export function editCoffee(editedCoffee, coffeeId) {
    return function (dispatch) {
        dispatch(requestCoffeeList())

        return fetch('http://localhost:3001/coffee/' + coffeeId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({imgUrl: editedCoffee.imgUrl, title: editedCoffee.title, price: editedCoffee.price})
        })
            .then(response => response.json())
            .then(json => {
                dispatch(receiveCoffeeList(json.coffeeList))
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
