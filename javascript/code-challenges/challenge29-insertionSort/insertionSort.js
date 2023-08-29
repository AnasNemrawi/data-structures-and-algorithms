'use strict'

function insert(SortedArr, intValue) {
	let i = 0;
	while (intValue > SortedArr[i]) {
		i++;
	}

	while (i < SortedArr.length) {
		let temp = SortedArr[i];
		SortedArr[i] = intValue;
		intValue = temp;
		i++;
	}
	SortedArr.push(intValue);
}

function insertSorted(arr) {
	let sorted = [];
	sorted[0] = arr[0];

	for (let i = 1; i < arr.length; i++) {
		insert(sorted, arr[i]);
	}

	return sorted;
}

let array = [8, 4, 23, 42, 16, 15]

console.log(insertSorted(array));



