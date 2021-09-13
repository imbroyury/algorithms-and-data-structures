import { expect } from 'chai';
import { selectionSort } from '.';
import faker from 'faker';

describe('selection sort', () => {
    it('works as native [].sort()', () => {
        for (let i = 0; i < 100; i++) {
            const array = new Array<number>(100)
                .fill(0)
                .map(() => faker.datatype.number())
                .sort((a, b) => a - b);

            expect(selectionSort([...array])).to.deep.equal([...array].sort((a, b) => a - b));
        }
    });
});
