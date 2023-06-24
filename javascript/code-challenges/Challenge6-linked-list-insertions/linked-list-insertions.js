"use strict"

const { Node } = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(newValue) {
        const node1 = new Node(newValue);

        if (!this.head) {
            this.head = node1;
            this.tail = node1;
        } else {
            this.tail.next = node1;
            this.tail = node1;
        }
    }

    insertBefore(value, newValue) {
        const node1 = new Node(newValue);

        if (!this.head) {
            return; // List is empty
        }

        if (this.head.value === value) {
            node1.next = this.head;
            this.head = node1;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                node1.next = currentNode.next;
                currentNode.next = node1;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    insertAfter(value, newValue) {
        const node1 = new Node(newValue);

        if (!this.head) {
            return; // List is empty
        }

        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                node1.next = currentNode.next;
                currentNode.next = node1;
                if (currentNode === this.tail) {
                    this.tail = node1;
                }
                return;
            }
            currentNode = currentNode.next;
        }
    }
}

module.exports = {
    LinkedList
};

const ll = new LinkedList();

ll.append(1);
ll.append(2);
ll.append(3);

console.log(ll);

ll.insertBefore(2, 10);

console.log(ll);

ll.insertAfter(2, 20);

console.log(ll);
