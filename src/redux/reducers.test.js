import {
    coffeeReducer
} from './reducers';
import {
    editCoffee,
    removeCoffee,
    requestCoffeeListSuccess,
    removeCoffeeSuccess,
    addCoffeeSuccess,
    editCoffeeSuccess
} from './actions';


describe('Coffee Reducer', () => {
    it('should set is loading when edit coffee is dispatched', () => {
        const state = {
            coffeeList: [{
                    isLoading: false,
                    id: 1
                },
                {
                    isLoading: false,
                    id: 2
                }
            ]
        };
        const action = editCoffee(2);

        const newState = coffeeReducer(state, action);

        expect(newState.coffeeList[1].isLoading).toBe(true)
    })

    it('should set is loading when remove coffee is dispatched', () => {
        const state = {
            coffeeList: [{
                    isLoading: false,
                    id: 1
                },
                {
                    isLoading: false,
                    id: 2
                }
            ]
        };
        const action = removeCoffee(1);

        const newState = coffeeReducer(state, action);

        expect(newState.coffeeList[0].isLoading).toBe(true) 
    })

    it('should set coffee list when request coffee list success is dispatched', () => {
        const state = {
            coffeeList: []
        };
        const newCoffeeList = [{
                id: 0,
                url: 'http://www.img.com/latte.jpg',
                title: 'Latte',
                price: 3
            },
            {
                id: 1,
                url: 'http://www.img.com/mocha.jpg',
                title: 'Mocha',
                price: 2
            }
        ]
        const action = requestCoffeeListSuccess(newCoffeeList);

        const newState = coffeeReducer(state, action);

        expect(newState.coffeeList).toBe(newCoffeeList);
    })

    it('should remove coffee when remove coffee success is dispatched', () => {
        const initialCoffeeList = [{
                id: 0,
                url: 'http://www.img.com/latte.jpg',
                title: 'Latte',
                price: 3
            },
            {
                id: 1,
                url: 'http://www.img.com/mocha.jpg',
                title: 'Mocha',
                price: 2
            }
        ]
        const state = {
            coffeeList: initialCoffeeList
        };
        const removedCoffeeId = 0;
        const action = removeCoffeeSuccess(removedCoffeeId);

        const newState = coffeeReducer(state, action);

        expect(newState.coffeeList.length).toBe(1);
        expect(newState.coffeeList[0].title).toBe('Mocha');
    })

    it('should add coffee when add coffee success is dispatched', () => {
        const initialCoffeeList = [{
            id: 0,
            url: 'http://www.img.com/mocha.jpg',
            title: 'Latte',
            price: 3
        }]
        const state = {
            coffeeList: initialCoffeeList
        };
        const newCoffee = {
            id: 1,
            url: './mocha.jpg',
            title: 'Mocha',
            price: 2
        }
        const action = addCoffeeSuccess(newCoffee);

        const newState = coffeeReducer(state, action);

        expect(newState.coffeeList.length).toBe(2);
        expect(newState.coffeeList[1].title).toBe('Mocha');
    })

    it('should edit coffee when edit coffee success is dispatched', () => {
        const initialCoffeeList = [{
                id: 0,
                url: './latte.jpg',
                title: 'Latte',
                price: 3
            },
            {
                id: 1,
                url: './mocha.jpg',
                title: 'Mocha',
                price: 2
            }
        ]
        const state = {
            coffeeList: initialCoffeeList
        };
        const editedCoffee = {
            id: 0,
            url: './latte.jpg',
            title: 'EditedLatte',
            price: 3
        };
        const action = editCoffeeSuccess(editedCoffee, editedCoffee.id);

        const newState = coffeeReducer(state, action);

        expect(newState.coffeeList[0].title).toBe('EditedLatte');
    })
})