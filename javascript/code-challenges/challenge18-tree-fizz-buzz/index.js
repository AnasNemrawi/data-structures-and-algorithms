
'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class K_ary {
    constructor(root = null) {
        this.root = root
    }
}

function fizzBuzz(node) {
    if (node.value % 3 === 0 && node.value % 5 === 0) {
        node.value = 'FizzBuzz';
    } else if (node.value % 3 === 0) {
        node.value = 'Fizz';
    } else if (node.value % 5 === 0) {
        node.value = 'Buzz';
    } else {
        node.value = node.value.toString();
    }

    for (const child of node.children) {
        fizzBuzz(child);
    }
}
let node1 = new Node(1)
let node2 = new Node(5)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)
let node8 = new Node(8)
let node9 = new Node(15)

node1.children.push(node2)
node1.children.push(node3)
node1.children.push(node4)
node2.children.push(node5)
node3.children.push(node6)
node4.children.push(node7)
node4.children.push(node8)
node4.children.push(node9)

let kTree = new K_ary(node1);
// console.log(kTree)
console.log(kTree.root)
console.log(kTree.root.children)



fizzBuzz(kTree.root);

console.log(kTree.root);
console.log(kTree.root.children);