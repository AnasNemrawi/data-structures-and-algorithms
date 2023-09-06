
'use strict';
const LinkedList = require('./LinkedList')

class Hash {
	constructor(size) {
		this.size = size;
		this.map = new Array(size);
	}

	hash(key) {
		let ASCIISum = key.split('').reduce((accu, curr) => {
			return accu + curr.charCodeAt(0)
		}, 0)

		return ASCIISum * 599 % this.size
	}

	set(key, value) {

		let hashedKey = this.hash(key)

		if (!this.map[hashedKey]) this.map[hashedKey] = new LinkedList()
		this.map[hashedKey].add({ [key]: value })
	}

	get(key) {
		let hashedKey = this.hash(key)
		if (!this.map[hashedKey]) return null

		let found = this.map[hashedKey].find(key)

		return found
	}

	has(key) {
		let hashedKey = this.hash(key)
		if (!this.map[hashedKey]) return false
		let found = this.map[hashedKey].find(key)

		if (found) return true
		else return false
	}

	keys() {

		let allkeys = []
		this.map.forEach(bucket => {
			if (bucket) {
				let keys = bucket.getKeys()
				allkeys.push(...keys)
			}
		})
		return allkeys
	}
}



module.exports = Hash