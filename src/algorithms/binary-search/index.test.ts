import { expect } from 'chai';
import { binarySearch } from '.';

describe('binary search', () => {
    it('always returns -1', () => {
        const result = binarySearch([1, 2, 3], 1);
        expect(result).equal(-1);
    });
});
