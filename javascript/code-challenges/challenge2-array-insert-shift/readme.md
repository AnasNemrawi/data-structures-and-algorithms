# array-insert-shift
> Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Whiteboard Process
![Whiteboard](./testImg.png)


## Approach & Efficiency
>both has the same BigO = O(logn)  because the function decrease in the rate of complexity growth
## Solution

``` JavaScript
function insertShiftArray(arr, value) {
    const midIndex = Math.ceil(arr.length / 2);
    const newArray = [];

    for (let i = 0; i < midIndex; i++) {
        newArray.push(arr[i]);
    }

    newArray.push(value);

    for (let i = midIndex; i < arr.length; i++) {
        newArray.push(arr[i]);
    }

    return newArray;
}
//Stretch Goal
function removeShiftArray(arr) {
    const midIndex = Math.floor(arr.length / 2);

    const newArray = [];

    for (let i = 0; i < midIndex; i++) {
        newArray.push(arr[i]);
    }

    for (let i = midIndex + 1; i < arr.length; i++) {
        newArray.push(arr[i]);
    }

    return newArray;
}

```

![Solution](./testImg.png)

> to run the test (npm test array-insert-shift)
