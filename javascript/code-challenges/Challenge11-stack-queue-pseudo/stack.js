'use strict';

const PseudoQueue = require('./PseudoQueue');
const Node = require('./node')

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
        return this.length === 0;
    }
}

module.exports = Stack;