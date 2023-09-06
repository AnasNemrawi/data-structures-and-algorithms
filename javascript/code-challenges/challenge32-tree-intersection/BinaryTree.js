'use strict';

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}
	inOrder() {
		let arr = [];
		const traversal = (node) => {
			if (node.left) traversal(node.left);
			arr.push(node.value);
			if (node.right) traversal(node.right);
		};

		traversal(this.root);
		return arr;
	}
}

module.exports = BinaryTree;