'use strict';

const LinkedList = require("./LinkedList");

class Hashmap {
	constructor(size) {
		this.size = size;
		this.map = new Array(size);
	}


	hash(key) {
		return key.split('').reduce((p, n) => {
			return p + n.charCodeAt(0);
		}, 0) * 599 % this.size;

	}

	set(key, value) {
		let hashedKey = this.hash(key);
		if (!this.map[hashedKey]) this.map[hashedKey] = new LinkedList();
		const entry = { [key]: value }
		this.map[hashedKey].add(entry);
	}

	get(key) {
		let hashedKey = this.hash(key);
		if (!this.map[hashedKey]) { return 'key not found' }
		return this.map[hashedKey].find(key);
	}

	has(key) {
		let hashedKey = this.hash(key);
		if (this.map[hashedKey]) { return 'true' }
		return false
	}

	keys() {
		let allKeys = [];
		this.map.forEach(list => {
			if (list) {
				let keys = list.getKeys()
				allKeys.push(keys)
			}
		})
		return allKeys;
	}
}

function repeatedWord(string) {
	let value = 1
	const words = string.toLowerCase().split(/[^a-zA-Z]+/);
	const hashmap = new Hashmap(words.length);

	for (let word of words) {
		if (hashmap.has(word)) {
			return word;
		} else {
			hashmap.set(word, value);
			value += 1
		}
	}
	return "no words found"
}

// Example usage:

const string1 = "Once upon a time, there was a brave princess who... "
const String2 = "this is a test test "

console.log(repeatedWord(string1));
console.log(repeatedWord(String2));



module.exports = Hashmap