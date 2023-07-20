'use strict';

const BinaryTree = require('../BinaryTree');
const Node = require('../Node');

let binaryTree = null;

describe('Binary Tree testing', () => {
    beforeAll(() => {

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

        binaryTree = new BinaryTree(one);
    });

    it('constructor', () => {
        const newBinaryTree = new BinaryTree();
        expect(newBinaryTree.root).toBeNull();
        expect(binaryTree.root.value).toEqual(1);
    });

    it('preOrder traversal', () => {
        const expectedResult = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        expect(binaryTree.preOrder()).toEqual(expectedResult);
    });

    it('postOrder traversal', () => {
        const expectedResult = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        expect(binaryTree.postOrder()).toEqual(expectedResult);
    });

    it('inOrder traversal', () => {
        const expectedResult = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        expect(binaryTree.inOrder()).toEqual(expectedResult);
    });
    it('FInd the max in a tree', () => {
        const expectedResult = 9;
        expect(binaryTree.TreeMax()).toEqual(expectedResult);
    })
});
