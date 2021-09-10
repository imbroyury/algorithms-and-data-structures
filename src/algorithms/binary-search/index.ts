export const binarySearch = (array: number[], num: number): number => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const mid = Math.round((low + high) / 2);
        const guess = array[mid];

        if (guess === num) {
            return mid;
        }

        if (guess < num) {
            low = mid + 1;
        }

        if (guess > num) {
            high = mid - 1;
        }
    }

    return -1;
};
