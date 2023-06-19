const { LinkedList } = require('../LinkedList');

describe('Linked lists test function', () => {
    it('handle empty LL', () => {
        let ll = new LinkedList;
        expect(ll.head).toEqual(null);
    });
    it('handle insert LL', () => {
        let ll = new LinkedList;
        ll.insert('testing');
        expect(ll.head.value).toEqual('testing');
    });
    it('check head points to first node', () => {
        let ll = new LinkedList;
        ll.insert('testing');
        ll.insert('testing3');
        expect(ll.head.value).toEqual('testing3');
    });
    it('handle insert mutliple to LL', () => {
        let ll = new LinkedList;
        ll.insert('testing');
        ll.insert('testing2');
        ll.insert('testing3');
        expect(ll.head.next.next.value).toEqual('testing');
    });
    it('handle includes LL  exist correct value', () => {
        let ll = new LinkedList;
        ll.insert('testing');
        expect(ll.includes('testing')).toEqual(true);
    });
    it('handle includes LL null value', () => {
        let ll = new LinkedList;
        ll.insert(null);
        expect(ll.includes(null)).toEqual(true);
    });
    it('handle includes with non existant value in LL', () => {
        let ll = new LinkedList;
        expect(ll.includes('testing')).toEqual(false);
    });
    it('handle toString LL with empty LL', () => {
        let ll = new LinkedList;
        expect(ll.toString()).toEqual('empty linked list');
    });
    it('handle toString LL with filled LL', () => {
        let ll = new LinkedList;
        ll.insert('insterting 1');
        ll.insert('insterting 2');
        ll.insert('insterting 3');
        expect(ll.toString()).toEqual('{insterting 3} -> {insterting 2} -> {insterting 1} -> NULL');
    });

});