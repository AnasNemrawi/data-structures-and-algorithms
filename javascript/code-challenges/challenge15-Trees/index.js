'use strict';

const { BinaryTree, BinarySearchTree, Node } = require('./BinaryTree');

const binaryTree = new BinaryTree();
const bst1 = new BinarySearchTree();

binaryTree.root = new Node(1);
binaryTree.root.left = new Node(2);
binaryTree.root.right = new Node(3);

bst1.add(5);
bst1.add(3);
bst1.add(7);
bst1.add(1);
bst1.add(4);
bst1.add(6);
bst1.add(8);

console.log('preOrder:', binaryTree.preOrder());
console.log('inOrder:', binaryTree.inOrder());
console.log('postOrder:', binaryTree.postOrder());

console.log(bst1);
console.log(bst1.contains(bst1.root, 3));
console.log(bst1.contains(bst1.root, 9));
