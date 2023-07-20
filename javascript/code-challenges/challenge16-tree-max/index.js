'use strict'

const BinaryTree = require('./BinaryTree');
const Node = require('./Node');

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

const binaryTree = new BinaryTree(one);

console.log('preOrder:', binaryTree.preOrder());
console.log('inOrder:', binaryTree.inOrder());
console.log('postOrder:', binaryTree.postOrder());
console.log('Max value:', binaryTree.TreeMax());
