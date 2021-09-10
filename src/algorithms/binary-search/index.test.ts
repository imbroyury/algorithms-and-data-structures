import { expect } from 'chai';
import { binarySearch } from '.';
import faker from 'faker';

describe('binary search', () => {
    it('works as native [].indexOf() on random sets of data', () => {
        for (let i = 0; i < 100; i++) {
            const array = new Array<number>(100)
                .fill(0)
                .map(() => faker.datatype.number())
                .sort((a, b) => a - b);

            const element =
                i % 2 === 0
                    ? faker.datatype.number()
                    : array[Math.floor(Math.random() * array.length)];

            expect(binarySearch(array, element)).equal(array.indexOf(element));
        }
    });
});
