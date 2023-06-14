# array-insert-shift
> Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Whiteboard Process
![Whiteboard](./testImg.png)


## Approach & Efficiency
 > both has the same BigO = O(n) 

## Solution

``` JavaScript

function insertShiftArray(arr, value) {
    var index = Math.ceil(arr.length / 2);
    arr.splice(index, 0, value);
    return arr;
}



//Stretch Goal
function removeShiftArray(arr) {
    var index = Math.floor(arr.length / 2);
    arr.splice(index, 1);
    return arr;
}

module.exports = {
    insertShiftArray,
    removeShiftArray
};
```

![Solution](./testImg.png)

> to run the test (npm test array-insert-shift)