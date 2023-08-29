# Stack And Queue

## Approach & Efficiency

### Approach
Stack:

The Stack class represents a stack data structure. The stack is implemented using a linked list, where the top points to the first element in the stack.

push(value): This method adds a new node with the given value to the top of the stack. It creates a new node, assigns its next to the current top (making it the previous top), and updates the top to the new node. The time complexity of this operation is O(1) since it takes a constant amount of time to add a node to the top of the stack.

pop(): This method removes and returns the value of the node at the top of the stack. It updates the top to point to the next node and removes the reference to the previous top node. The time complexity of this operation is O(1) since it takes a constant amount of time to remove the top node.

peek(): This method returns the value of the node at the top of the stack without removing it. The time complexity of this operation is O(1) since it only involves accessing the value of the top node.

isEmpty(): This method checks if the stack is empty by verifying if the top is null. The time complexity of this operation is O(1) since it only involves a single comparison.

Queue:

The Queue class represents a queue data structure. The queue is implemented using a linked list, where the front points to the first element and the rear points to the last element.

enqueue(value): This method adds a new node with the given value to the rear of the queue. If the queue is empty, both the front and rear are set to the new node. Otherwise, the rear is updated to the new node, and the next of the previous rear is set to the new node. The time complexity of this operation is O(1) since it takes a constant amount of time to add a node to the rear.

dequeue(): This method removes and returns the value of the node at the front of the queue. It updates the front to point to the next node and removes the reference to the previous front node. The time complexity of this operation is O(1) since it takes a constant amount of time to remove the front node.

peek(): This method returns the value of the node at the front of the queue without removing it. The time complexity of this operation is O(1) since it only involves accessing the value of the front node.

isEmpty(): This method checks if the queue is empty by verifying if the front is null. The time complexity of this operation is O(1) since it only involves a single comparison.

#### Efficiency

The time complexity of the key operations (push, pop, enqueue, isEmpty ,peek and dequeue) is O(1)


## Solution

 ```javascript

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.top = newNode;
        } else {
            newNode.next = this.top; // Adding the next element to the new node to be the prev one
            this.top = newNode; // assigning the new node to the top of the stack
        }

        this.length++;
    }

    pop() {
        if (this.isEmpty()) throw new Error('The is Empty!!!');

        const temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp.value;
    }

    peek() {
        if (this.isEmpty()) return null;

        return this.top.value;
    }
    isEmpty() {
        return this.top === null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        console.log(newNode)
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) throw new Error('The Queue is Empty!!!!');
    
        const temp = this.front;
        this.front = this.front.next;
        temp.next = null;
        this.length--;
        return temp.value;
      }

    peek() {
        if (this.isEmpty()) return null;

        return this.front.value;
    }

    isEmpty() {
        return this.front === null;
    }
}
    ```
