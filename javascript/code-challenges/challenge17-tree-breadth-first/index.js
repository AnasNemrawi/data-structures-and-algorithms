'use strict';
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        if (this.isEmpty()) throw new Error('The Queue is Empty!!!!');
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    breadthFirst() {
        const res = [];
        if (!this.root) return result;

        const queue = new Queue();
        queue.enqueue(this.root);

        while (!queue.isEmpty()) {
            const currNode = queue.dequeue();
            res.push(currNode.value);

            if (currNode.left) {
                queue.enqueue(currNode.left);
            }

            if (currNode.right) {
                queue.enqueue(currNode.right);
            }
        }

        return res;
    }
}


let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

const tree = new BinaryTree(one);




console.log(tree.breadthFirst());

