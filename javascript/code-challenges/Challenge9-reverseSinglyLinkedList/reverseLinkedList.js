class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}


const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

const reversedHead = reverseLinkedList(node1);

currentNode = reversedHead;
while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
}

