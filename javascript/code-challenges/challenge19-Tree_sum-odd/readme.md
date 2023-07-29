# Binary Search  (Sum Of Odd)
> Sum of all the odd numbers in a binary search tree

## Whiteboard 
![white board](./whitBord.jpg)

## Solution

 ```javascript
class BinarySearchTree extends BinaryTree {
    constructor() {
        super();
    }
    add(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.addNode(this.root, newNode);
        }
    }

    addNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.addNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.addNode(node.right, newNode);
            }
        }
    }

    contains(root, value) {
        if (root === null) {
            return false;
        }

        if (value === root.value) {
            return true;
        }

        if (value < root.value) {
            return this.contains(root.left, value);
        } else {
            return this.contains(root.right, value);
        }
    }

    sumOdd() {
        let sum = 0;

        const inOrder = (node) => {
            if (node === null) {
                return;
            }
            inOrder(node.left);
            if (node.value % 2 !== 0) {
                sum += node.value;
            }
            inOrder(node.right);
        };
        inOrder(this.root);
        return sum;
    }
}

    ```

