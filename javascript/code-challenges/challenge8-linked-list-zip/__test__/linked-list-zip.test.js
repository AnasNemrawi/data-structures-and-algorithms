const { LinkedList, zipLists } = require('../linked-list-zip');

describe('Linked list zip function', () => {
    it('should zip two linked lists with alternating nodes', () => {

        const list1 = new LinkedList();
        list1.append(1);
        list1.append(3);
        list1.append(2);

        const list2 = new LinkedList();
        list2.append(5);
        list2.append(9);
        list2.append(4);


        const zippedList = zipLists(list1, list2);


        expect(zippedList.toString()).toBe(`1 -> 5 -> 3 -> 9 -> 2 -> 4 -> NULL`);
    });

    it('should zip two linked lists when one list is empty', () => {

        const list1 = new LinkedList();

        const list2 = new LinkedList();
        list2.append(5);
        list2.append(9);
        list2.append(4);


        const zippedList = zipLists(list1, list2);

        expect(zippedList.toString()).toBe('5 -> 9 -> 4 -> NULL');
    });

    it('should merge two linked lists with different lengths', () => {

        const list1 = new LinkedList();
        list1.append(1);
        list1.append(3);
        list1.append(2);

        const list2 = new LinkedList();

        list2.append(5);
        list2.append(9);


        const zippedList = zipLists(list1, list2);

        expect(zippedList.toString()).toBe('1 -> 5 -> 3 -> 9 -> 2 -> NULL');
    });

    it('should zip two linked lists when both lists are empty', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();

        const zippedList = zipLists(list1, list2);

        expect(zippedList.head).toBeNull();
        expect(zippedList.size).toBe(0);
    });

});
