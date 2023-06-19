# Binary Search 
>Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.
>The search algorithm used in your function should be a binary search.

## Whiteboard Process
![Whiteboard](./Binary%20Search%20.jpg)

## Approach & Efficiency
Approach:
1.defining two pointers, left and right
2.algorithm calculates the midpoint using while loop
3.compares the value at the midpoint with the target value.
4.The algorithm continues to adjust the left and right pointers and divide until either the target value is found or the subarray has been exhausted 

Efficiency:
The binary search algorithm has a time complexity of O(log n) where n is the number of elements in the array

## Solution

``` javascript
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
```
