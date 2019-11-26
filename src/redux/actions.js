export const ADD_COFFEE = 'ADD_COFFEE';
export const REMOVE_COFFEE = 'REMOVE_COFFEE';

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