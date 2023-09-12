'use strict'

const Hashmap = require("./hashTable");

function mostCommonWord(book) {
	const words = book.toLowerCase().split(/\s+/);
	const Map = new Hashmap(100);

	let mostCommonWord = '';
	let maxCount = 0;
	let word
	for (word of words) {
		if (word) {
			let count = Map.get(word) || 0;
			count++;

			Map.set(word, count);
			// Check if this word has a higher count than the current most common word
			if (count > maxCount) {
				mostCommonWord = word;
				maxCount = count;
			}
		}
	}
	return mostCommonWord;
}
const Text = "This is a anas book. The book contains anas text. Sample text is here.";
const mostCommon = mostCommonWord(Text);
console.log("The most common word is: ", mostCommon);





