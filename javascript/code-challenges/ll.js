const { find, add, is } = require("cheerio/lib/api/traversing")
const { contains } = require("cheerio/lib/static")

function sumOdd() {
	let sum = 0
	let search = function (node) {
		if (node === null) return sum
		if (!node.value % 2 == 0) sum += node.value
		search(node.left)
		search(node.right)

	}
	search(this.root)
	return sum

}

findmin() {
	cur = this.root
	while (cur.left) {
		cur = cur.left

	}
	return curr
}
find(node) {
	cur = this.root
	while (!cur == node) {
		if (node < cur) cur = cur.left
		if (node > cur) cur = cur.right
		if (cur == null) return null
	}
}

add(data) {
	cur = this.root
	if (cur.value === null) {
		return this.root = new node(value)
	}
	const search = function (node) {
		if (data < node.data) {
			if (node.left === null) {
				node.left = new node(data)
			}
			search(node.left)
		}
		else if (data > node.data) {
			if (node.right === null) {
				node.right = new node(data)
			}
			search(node.right)
		}
		else { return null }
	}
	search(cur)
}

contains(node) {
	cur = this.root
	if (this.root = null) { return false }
	const con = function (node) {
		if (cur.data === node.data) {
			return true
		}
		if (cur.data < node.data) {
			con(cur.right)
		} else {
			con(cur.left)
		}
	}
	return con(cur)
}

ismirror(a, b) {
	if (!n && !a) return true
	if (a && b && a.data === b.data) {
		return ismirror(a.left, b.right) && ismirror(a.right, b.left)
	} else return false
}

maxDepth(node) {
	if (node == null)
		return 0;
	else {
		ldepth = maxDepth(node.left)
		rdepth = maxDepth(node.right)

		if (ldepth > rdepth) {
			return ldepth + 1
		} else {
			return rdepth + 1
		}
	}
}



