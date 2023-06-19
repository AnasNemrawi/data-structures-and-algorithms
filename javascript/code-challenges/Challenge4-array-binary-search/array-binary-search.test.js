'use strict';

const { binarySearch } = require('./array-binary-search');

describe('Shift Array functions test', () => {
    it('handle binarySearch function', () => {
        let array = [1, 3, 5, 7, 9, 11, 13];
        let value = 7;
        let result = binarySearch(array, value);
        expect(result).toEqual(3);
    });

});
