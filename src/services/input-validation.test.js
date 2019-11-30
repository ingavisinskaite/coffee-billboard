import {
    inputValidation
} from './input-validation';

test('inputValidation: one input empty, returns false', () => {
    const values = ['./latte.jpg', '', 3];

    const answer = inputValidation(values)

    expect(answer).toBe(false);
})

test('inputValidation: all inputs filled, returns true', () => {
    const values = ['./latte.jpg', 'Latte', 3];

    const answer = inputValidation(values)

    expect(answer).toBe(true);
})