'use strict';

const { insertShiftArray, removeShiftArray } = require('./array-insert-shift');

describe('Shift Array functions test', () => {
    it('handle insertShiftArray function', () => {
        let arr = [1, 2, 3, 4, 5];
        let value = 10;
        let result = insertShiftArray(arr, value);
        expect(result).toEqual([1, 2, 3, 10, 4, 5]);
    });

    it('handle removeShiftArray function', () => {
        let arr = [1, 2, 3, 4, 5];
        let result = removeShiftArray(arr);
        expect(result).toEqual([1, 2, 4, 5]);
    });
});
