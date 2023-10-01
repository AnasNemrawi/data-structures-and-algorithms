# Linked List ( Navigator )


## Problem Domain
1. Create a Navigator class responsible for tracking history of locations as well as allowing back and forward movement.
2. Navigator class should have back, forward and go methods.
- back method takes no arguments and returns the previous location or NULL if there is none.
- forward method takes no arguments and returns the next location or NULL if there is none.
- go method should take a string argument representing the desired location.
	
## Whiteboard

![Whiteboard](./Copy%20of%20Untitled.1.jpg)
	


## Code 

```javascript
class Navigator {
	constructor() {
		this.backHistory = new LinkedList();
		this.forwardHistory = new LinkedList();
		this.currentLocation = null;
	}
	go(location) {
		this.forwardHistory = new LinkedList();

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

```
## Algorithm

1. go(location)

- Set the current location to the new location.
- Clear the forward history.

2. back():

- Add the current location to the forward history.
- Get the previous location from the head of the back history.
- Remove the head of the back history and decrement the size.
- Set the current location to the previous location.
- Return the new current location.

3. forward(): 

- Add the current location to the back history.
- Get the next location from the head of the forward history.
- Remove the head of the forward history and decrement the size.
- Set the current location to the next location.
- Return the new current location.
Complexity Analysis: