'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0
	}

	add(value) {
		const node = new Node(value);
		if (!this.head) {
			this.head = node;
			return;
		}

		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = node;
		this.size++
		return this.head
	}

	find(key) {
		let current = this.head;
		while (current) {
			if (current.value[key]) {
				return current.value[key];
			}
			current = current.next;
		}
		return null;
	}
	getKeys() {
		let keys = [];
		let current = this.head;
		while (current) {
			keys.push(Object.keys(current.value));
			current = current.next;
		}
		return keys;
	}
}

module.exports = LinkedList;