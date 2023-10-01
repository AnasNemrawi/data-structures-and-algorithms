'use strict';

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	insert(value) {
		this.head = new Node(value, this.head);
		this.size++;
	}

	append(newValue) {
		if (this.head === null) {
			this.head = new Node(newValue, null);
			this.size++;
		} else {
			let iterative = this.head;
			while (iterative.next !== null) {
				iterative = iterative.next;
			}
			iterative.next = new Node(newValue, null);
			this.size++;
		}
	}

}



class Navigator {
	constructor() {
		this.backHistory = new LinkedList();
		this.forwardHistory = new LinkedList();
		this.currentLocation = null;
	}

	go(location) {
		// clear forward history
		this.forwardHistory = new LinkedList();

		// Add current location to the back history
		if (this.currentLocation !== null) {
			this.backHistory.insert(this.currentLocation);
		}

		this.currentLocation = location;
	}

	back() {
		if (this.backHistory.size === 0) {
			return null;
		}
		this.forwardHistory.insert(this.currentLocation);

		const previousLocation = this.backHistory.head.value;

		this.backHistory.head = this.backHistory.head.next;
		this.backHistory.size--;

		this.currentLocation = previousLocation;

		return this.currentLocation;
	}

	forward() {
		if (this.forwardHistory.size === 0) {
			return null;
		}
		this.backHistory.insert(this.currentLocation);

		const nextLocation = this.forwardHistory.head.value;

		this.forwardHistory.head = this.forwardHistory.head.next;
		this.forwardHistory.size--;

		this.currentLocation = nextLocation;

		return this.currentLocation;
	}
}

// Usage example
const navigator = new Navigator();
navigator.go('home');
navigator.go('about');
navigator.go('contact');
console.log(navigator.back()); // Should print 'about'
console.log(navigator.forward()); // Should print 'contact'
