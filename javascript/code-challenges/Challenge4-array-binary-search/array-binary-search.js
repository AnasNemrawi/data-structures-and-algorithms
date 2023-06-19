function binarySearch(array, value) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === value) {
            return mid;
        } else if (array[mid] < value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Element not found
}


// const sortedArray = [1, 3, 5, 7, 9, 11, 13];
// const value = 7;

// const index = binarySearch(sortedArray, value);
// console.log(index); 

module.exports = {
    binarySearch
}