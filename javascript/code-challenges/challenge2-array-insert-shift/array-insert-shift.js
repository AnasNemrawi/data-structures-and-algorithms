

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


module.exports = {
    insertShiftArray,
    removeShiftArray
};