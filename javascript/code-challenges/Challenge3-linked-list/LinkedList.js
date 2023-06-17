const { Node } = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insert(value) {
        this.head = new Node(value, this.head);
        this.size++;

    }

    includes(value) {
        let start = this.head;
        if (!this.head) {
            return false;
        } else {
            while (start.value && start.value !== value) {
                if (start.next === null) return false;
                start = start.next;
            }
            return true;
        }

    }

    toString() {
        let start = this.head;
        if (!this.head) {
            return 'empty linked list';
        } else {
            let stringOfValues = '';
            while (start.value) {
                stringOfValues += `{${start.value}} -> `;
                if (start.next === null) return stringOfValues += 'NULL';
                start = start.next;
            }
        }
    }

}

const List1 = new LinkedList();
List1.insert('insterting 1');
List1.insert('insterting 2');
List1.insert('insterting 3');

console.log(List1.toString());
console.log(List1);

module.exports = { LinkedList };