import { expect } from 'chai';
import { selectionSort } from '.';
import faker from 'faker';

describe('selection sort', () => {
    it('works as native [].sort()', () => {
        for (let i = 0; i < 100; i++) {
            const array = new Array<number>(5).fill(0).map(() => faker.datatype.number());

            expect(selectionSort([...array])).to.deep.equal([...array].sort((a, b) => a - b));
        }
    });
});
