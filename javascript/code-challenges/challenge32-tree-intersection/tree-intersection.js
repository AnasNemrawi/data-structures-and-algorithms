'use strict';

const Node = require('./Node');
const BinaryTree = require('./BinaryTree');
const HashMap = require('./hashMap');
let one = new Node('150');
let TWO = new Node('75');
let three = new Node('100');
let four = new Node('160');
let five = new Node('125');
let six = new Node('200');
let seven = new Node('175');
let eight = new Node('350');
let nine = new Node('250');
let ten = new Node('300');
let elevn = new Node('500');

const tree = new BinaryTree();
tree.root = one;
one.left = three;
one.right = nine;
nine.left = six;
nine.right = eight;
eight.right = elevn;
eight.left = ten;
three.left = TWO;
three.right = four;
four.left = five;
four.right = seven;

const tree2 = new BinaryTree();

let one1 = new Node('42');
let TWO2 = new Node('15');
let THREE3 = new Node('100');
let four4 = new Node('160');
let five5 = new Node('125');
let six6 = new Node('200');
let seven7 = new Node('175');
let eight8 = new Node('350');
let nine9 = new Node('600');
let ten1 = new Node('4');
let elevn1 = new Node('500');

tree2.root = one1;
one1.left = THREE3;
one1.right = nine9;
nine9.left = six6;
nine9.right = eight8;
eight8.right = elevn1;
eight8.left = ten1;
THREE3.left = TWO2;
THREE3.right = four4;
four4.left = five5;
four4.right = seven7;


function tree_intersection(tree1, tree2) {
	const hashmap = new HashMap(22);
	const Tree1 = tree1.inOrder();
	let result = [];

	for (const value of Tree1) {
		hashmap.set(value, 1);
	}
	// Check if values from the second tree are in the hash map
	const Tree2 = tree2.inOrder();
	for (const value of Tree2) {
		if (hashmap.has(value)) {
			result.push(value);
		}
	}
	return result;
}


const intersectionValues = tree_intersection(tree, tree2);
console.log(intersectionValues);
