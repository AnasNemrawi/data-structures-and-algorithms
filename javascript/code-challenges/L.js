'use strict';

const { root } = require("cheerio/lib/static");

class Node {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

class BT {
	constructor(root = null) {
		this.root = root
	}

	inOrder() {
		let arr = [];
		const traversal = node => {
			if (node) {
				traversal(node.left);
				arr.push(node.value);
				traversal(node.right);
			}
		};
		traversal(this.root);
		return arr;
	}
	// min for normal binary tree
	min(node) {
		if (root.value === null) {
			return null
		}
		let curr = node.data
		let currl = min(node.left)
		let currR = min(curr.right)

		if (currl < curr) curr = currl
		if (currR < curr) curr = currR
		return curr.value
	}

}
//------------------------------------------------------------------

class BST {
	constructor() {
		this.root = root
	}
	//------------------------------------------------------------------
	sumOdd() {
		let sum = 0
		let search = function (node) {
			if (node.value === null) { return sum }
			if (node.value % 2 !== 0) {
				sum += node.value;
			}
			search(node.left)
			search(node.right)
		}
		search(this.root)
		return sum
	}
	//------------------------------------------------------------------
	findMin() {
		node = this.root
		while (node.left !== null) {
			node = node.left
		}
		return node.data
	}
	//------------------------------------------------------------------
	findMax() {
		node = this.root
		while (node.right !== null) {
			node = node.right
		}
		return node.data
	}
	//------------------------------------------------------------------
	find(data) {
		cur = this.root
		while (data !== cur.data) {
			if (data < cur.data) {
				cur = cur.left
			} else (data > cur.data) {
				cur = cur.right
			}
			if (cur.data = null) {
				return null
			}
		}
		return cur.data
	}
	//------------------------------------------------------------------
	add(value) {
		cur = this.root
		if (cur.value === null) {
			this.root = new node(value)
			return;
		}
		const addNode = function (node) {
			if (value < cur.value) {
				if (cur.left === null) {
					cur.left = new node(value)
				} else {
					addNode(curr.left)
				}
			}
			else if (value < cur.value) {
				if (cur.right === null) {
					cur.right = new node(value)
				} else {
					addNode(curr.right)
				}
			} else {
				return null
			}
		}
		addNode(cur)
	}
	//------------------------------------------------------------------
	contain(value) {
		newnode = new node(value)
		cur = this.root
		if (this.root = null) { return false }

		const search = function (node) {
			if (newnode.value === node.value) { return true }

			if (newnode.value > cur.value) {
				search(node.right)
			} else {
				search(node.left)
			}

		}
		return search(curr)

	}
	//------------------------------------------------------------------

	remove(data) {
		const removeNode = function (node, data) {
			if (node == null) {
				return null;
			}
			if (data == node.data) {
				// node has no children 
				if (node.left == null && node.right == null) {
					return null;
				}
				// node has no left child 
				if (node.left == null) {
					return node.right;
				}
				// node has no right child 
				if (node.right == null) {
					return node.left;
				}
				// node has two children 
				var tempNode = node.right;
				while (tempNode.left !== null) {
					tempNode = tempNode.left;
				}
				node.data = tempNode.data;
				node.right = removeNode(node.right, tempNode.data);
				return node;
			} else if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else {
				node.right = removeNode(node.right, data);
				return node;
			}
		}
		this.root = removeNode(this.root, data);
	}
	//==================================================

	ismirror(n, a) {
		if (!n && !a) return true
		if (n && a && n.value === a.value) {
			return ismirror(n.left, a.right) && ismorror(n.right, a.left)
		}
		else return false
	}


	maxDepth(node) {
		if (node == null)
			return 0;
		else {
			let lDepth = maxDepth(node.left);
			let rDepth = maxDepth(node.right);
			if (lDepth > rDepth)
				return (lDepth + 1);
			else
				return (rDepth + 1);
		}
	}
}




