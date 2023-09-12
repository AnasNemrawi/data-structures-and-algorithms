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

// let makeHash = new Hashmap(19);
// makeHash.set('Waleed', 'Instructor')
// makeHash.set('Aseel', 'TA')
// makeHash.set('Majed', 'TA')
// makeHash.set('Mohammed', 'TA')
// makeHash.set('Mohammed', 'Student')
// makeHash.set('Mohammed', 'Student')
// makeHash.set('Mohammed', 'Student')
// makeHash.set('Ayah', 'Student')
// makeHash.set('', 'Student')
// makeHash.set('Alaa', 'Student')
// makeHash.set('Hamza', 'Student')
// makeHash.set('Ihab', 'Student')
// makeHash.set('Laith', 'Student')
// makeHash.set('Rama', 'Student')
// makeHash.set('Sham', 'Student')
// makeHash.set('Abdullah', 'Student')
// makeHash.set('Basha', 'Student')
// makeHash.set('Saleh', 'Student')
// makeHash.set('Anas', 'Student')
// makeHash.set('Farah', 'Student')


// console.log('1', makeHash.map)
// console.log('2', makeHash)
// console.log('3', makeHash.get('test'))
// console.log('4', makeHash.get('Aseel'))
// console.log('5', makeHash.get('Anas'))
// console.log('6', makeHash.has('Ihab'))
// console.log('7', makeHash.has('Anas'))
// console.log('8', makeHash.has('t'))
// console.log('9', makeHash.keys())

module.exports = Hashmap