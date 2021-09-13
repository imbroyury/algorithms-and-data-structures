const swap = <T extends any>(array: T[], indexA: number, indexB: number) => {
    const elA = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = elA;
};

export const selectionSort = (input: number[]): number[] => {
    // i is the 'currently unsorted position'
    for (let i = 0; i < input.length - 1; i++) {
        let minIdx = i;

        // find smallest element in the 'tail' after i
        for (let k = i + 1; k < input.length; k++) {
            if (input[k] < input[i]) {
                minIdx = k;
            }
        }

        // make i 'sorted' by swapping it with the lowest element in the 'tail'
        swap(input, i, minIdx);
    }

    return input;
};
