const LinkedList = require('../linked-list-kth');

describe('Linked lists kth from end test function', () => {
    it('Where k is greater than the length of the linked list', () => {
        let ll = new LinkedList;
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        ll.insert(5);
        expect(ll.kthFromEnd(15)).toEqual(`The input exceeds the length of the linkedList length is: ${ll.size}`); // k exceeds length case

    });
    it('Where k and the length of the list are the same & Where k and the length of the list are the same & “Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
        let ll = new LinkedList;
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        ll.insert(5);

        expect(ll.kthFromEnd(4)).toEqual(5);
        expect(ll.kthFromEnd(-4)).toEqual('Enter a positive number');
        expect(ll.kthFromEnd(3)).toEqual(4);

    });
    it('Where the linked list is of a size 1', () => {
        let ll = new LinkedList;
        ll.insert(1);
        expect(ll.kthFromEnd(0)).toEqual(1); // k equal to length.


    });

});