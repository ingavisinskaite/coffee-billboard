import {
    isCoffeeFormValid
} from './coffee-form-validation';

describe('Coffee Form Validation', () => {
    it('should return false when one input empty', () => {
        const values = ['./latte.jpg', '', 3];
    
        const answer = isCoffeeFormValid(values)
    
        expect(answer).toBe(false);
    })
    
    it('should return true when all inputs filled', () => {
        const values = ['./latte.jpg', 'Latte', 3];
    
        const answer = isCoffeeFormValid(values)
    
        expect(answer).toBe(true);
    })

    it('should return false when price is more than 99.99', () => {
        const values = ['./latte.jpg', 'Latte', 123];
    
        const answer = isCoffeeFormValid(values)
    
        expect(answer).toBe(false);
    })

    it('should return true when price is less than 99.99', () => {
        const values = ['./latte.jpg', 'Latte', 99.98];
    
        const answer = isCoffeeFormValid(values)
    
        expect(answer).toBe(true);
    })

    it('should return false when price has more than two decimal digits', () => {
        const values = ['./latte.jpg', 'Latte', 99.991];
    
        const answer = isCoffeeFormValid(values)
    
        expect(answer).toBe(false);
    })
    
})
