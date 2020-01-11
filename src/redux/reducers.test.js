import { coffeeReducer } from './reducers';
import { addCoffee, requestCoffeeList, editCoffee, removeCoffee,
    receiveCoffeeList, removeCoffeeSuccess,
    addCoffeeSuccess, editCoffeeSuccess } from './actions';


describe('Coffee Reducer', () => {
    it('should set is loading when add coffee is dispatched', () => {
        const state = { isLoading: false, coffeeList: []};
        const action = addCoffee({});

        const newState = coffeeReducer(state, action);

        expect(newState.isLoading).toBe(true)
    })

    it('should set is loading when request coffee list is dispatched', () => {
        const state = { isLoading: false, coffeeList: []};
        const action = requestCoffeeList();

        const newState = coffeeReducer(state, action);

        expect(newState.isLoading).toBe(true)
    })

    it('should set is loading when edit coffee is dispatched', () => {
        const state = { isLoading: false, coffeeList: []};
        const action = editCoffee({}, 0);

        const newState = coffeeReducer(state, action);

        expect(newState.isLoading).toBe(true)
    })

    it('should set is loading when remove coffee is dispatched', () => {
        const state = { isLoading: false, coffeeList: []};
        const action = removeCoffee(0);

        const newState = coffeeReducer(state, action);

        expect(newState.isLoading).toBe(true)
    })

    it('should disable is loading and set coffeeList when receive coffee is dispatched', () => {
        const state = { isLoading: true, coffeeList: []};
        const newCoffeeList = [
            {
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
        const action = receiveCoffeeList(newCoffeeList);

        const newState = coffeeReducer(state, action);

        expect(newState.isLoading).toBe(false);
        expect(newState.coffeeList).toBe(newCoffeeList);
    })

    it('should disable is loading and remove coffee when remove coffee success is dispatched', () => {
        const initialCoffeeList = [
            {
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
        const state = { isLoading: true, coffeeList: initialCoffeeList};
        const removedCoffeeId = 0;
        const action = removeCoffeeSuccess(removedCoffeeId);

        const newState = coffeeReducer(state, action);

        expect(newState.isLoading).toBe(false);
        expect(newState.coffeeList.length).toBe(1);
        expect(newState.coffeeList[0].title).toBe('Mocha');
    })

    it('should disable is loading and add coffee when add coffee success is dispatched', () => {
        const initialCoffeeList = [
            {
                id: 0,
                url: './latte.jpg',
                title: 'Latte',
                price: 3
            }
        ]
        const state = { isLoading: true, coffeeList: initialCoffeeList};
        const newCoffee =  {
            id: 1,
            url: './mocha.jpg',
            title: 'Mocha',
            price: 2
        }
        const action = addCoffeeSuccess(newCoffee);

        const newState = coffeeReducer(state, action);

        expect(newState.isLoading).toBe(false);
        expect(newState.coffeeList.length).toBe(2);
        expect(newState.coffeeList[1].title).toBe('Mocha');
    })

    it('should disable is loading and edit coffee when edit coffee success is dispatched', () => {
        const initialCoffeeList = [
            {
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
        const state = { isLoading: true, coffeeList: initialCoffeeList};
        const editedCoffeeId = 0;
        const editedCoffee = {
            id: 0,
            url: './latte.jpg',
            title: 'EditedLatte',
            price: 3
        };
        const action = editCoffeeSuccess(editedCoffee, editedCoffeeId);

        const newState = coffeeReducer(state, action);

        expect(newState.isLoading).toBe(false);
        expect(newState.coffeeList[0].title).toBe('EditedLatte');
    })
})