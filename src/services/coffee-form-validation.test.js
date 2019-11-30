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
})
