const LinkedList = require('../linked-list-kth');

describe('Linked lists kth from end test function', () => {
    it('Where k is greater than the length of the linked list', () => {
        let ll = new LinkedList();
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        ll.insert(5);
        expect(ll.kthFromEnd(6)).toEqual('k is greater than the length of the linked list');
    });

    it('Where k is not a positive integer', () => {
        let ll = new LinkedList();
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        expect(ll.kthFromEnd(-2)).toEqual('k should be a positive integer');
        expect(ll.kthFromEnd(0)).toEqual('k should be a positive integer');
    });

    it('Where the linked list is of size 1', () => {
        let ll = new LinkedList();
        ll.insert(1);
        expect(ll.kthFromEnd(1)).toEqual(1);
    });

    it('Where k is in the middle of the linked list', () => {
        let ll = new LinkedList();
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        ll.insert(5);
        expect(ll.kthFromEnd(3)).toEqual(3);
    });
});
