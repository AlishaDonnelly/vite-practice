import { describe, it, expect } from 'vitest'; 
import { addTax } from './math.js'; 
describe('addTax', () => {
    it('adds tax correctly', () => {
        expect(addTax(100, 0.1)).toBe(110); 
    }); 
});