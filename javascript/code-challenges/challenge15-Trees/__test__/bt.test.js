'use strict';

const { BinaryTree, BinarySearchTree, Node } = require('../BinaryTree');

let binaryTree = null;
let binarySearchTree = null;

describe('Binary Tree testing', () => {
    beforeAll(() => {

        const one = new Node(1);
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        const five = new Node(5);
        const six = new Node(6);
        const seven = new Node(7);
        const eight = new Node(8);
        const nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        three.right = five;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;

        binaryTree = new BinaryTree(one);
        binarySearchTree = new BinarySearchTree();
    });

    it('constructor', () => {
        const newBinaryTree = new BinaryTree();
        expect(newBinaryTree.root).toBeNull();
        expect(binaryTree.root.value).toEqual(1);
    });

    it('preOrder traversal', () => {
        const expectedResult = [1, 2, 6, 7, 8, 9, 3, 5];
        expect(binaryTree.preOrder()).toEqual(expectedResult);
    });

    it('postOrder traversal', () => {
        const expectedResult = [8, 9, 7, 6, 2, 5, 3, 1];
        expect(binaryTree.postOrder()).toEqual(expectedResult);
    });

    it('inOrder traversal', () => {
        const expectedResult = [6, 8, 7, 9, 2, 1, 3, 5];
        expect(binaryTree.inOrder()).toEqual(expectedResult);
    });

    it('add and contains ', () => {
        binarySearchTree.add(5);
        binarySearchTree.add(3);
        binarySearchTree.add(7);
        binarySearchTree.add(1);
        binarySearchTree.add(4);
        binarySearchTree.add(6);
        binarySearchTree.add(8);

        expect(binarySearchTree.contains(binarySearchTree.root, 3)).toBe(true);
        expect(binarySearchTree.contains(binarySearchTree.root, 9)).toBe(false);
    });
});
