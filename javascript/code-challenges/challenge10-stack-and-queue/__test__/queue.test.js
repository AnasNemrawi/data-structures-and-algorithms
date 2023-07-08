'use strict';

const Queue = require('../queue/queue');

describe('Queue testing', () => {
    it('Can successfully enqueue multiple values into a queue', () => {
        const theQueue = new Queue();
        theQueue.enqueue(100);
        theQueue.enqueue(250);
        theQueue.enqueue(300);

        expect(theQueue.front.value).toEqual(100);
        expect(theQueue.rear.value).toEqual(300);

    })
    it('Can successfully dequeue out of a queue the expected value', () => {
        const theQueue = new Queue();
        theQueue.enqueue(100);
        theQueue.enqueue(250);
        theQueue.enqueue(300);


        expect(theQueue.dequeue()).toEqual(100);
        expect(theQueue.dequeue()).toEqual(250);
        expect(theQueue.dequeue()).toEqual(300);

    })
    it('Can successfully peek into a queue, seeing the expected value', () => {
        const theQueue = new Queue();
        theQueue.enqueue(100);
        theQueue.enqueue(250);
        theQueue.enqueue(300);

        expect(theQueue.peek()).toEqual(100);

    })
    it('Can successfully empty a queue after multiple dequeues', () => {
        const theQueue = new Queue();
        theQueue.enqueue(100);
        theQueue.enqueue(250);
        theQueue.enqueue(300);


        expect(theQueue.dequeue()).toEqual(100);
        expect(theQueue.dequeue()).toEqual(250);
        expect(theQueue.dequeue()).toEqual(300);
        expect(theQueue.length).toEqual(0)


    })
})