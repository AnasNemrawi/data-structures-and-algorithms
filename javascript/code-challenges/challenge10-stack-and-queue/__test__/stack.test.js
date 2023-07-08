'use strict';

const Stack = require('../stack/stack');

describe('Stack testing', () => {
    it('Creates a new stack', () => {
        const stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
    })

    it('peek on an epty stack', () => {
        const stack = new Stack();
        expect(stack.peek()).toBeNull();
    })

    it('push on value to stack', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.top.value).toEqual(1)
        stack.push(2);
        expect(stack.top.value).toEqual(2)
        stack.push(3);
        expect(stack.top.value).toEqual(3)
        expect(stack.length).toEqual(3)
    })
    
    it('Can push multiple values onto a stack', () => {
        const stack = new Stack();
        stack.push(1);
        console.log(stack.top.value)
        console.log(stack.length)

        expect(stack.top.value).toEqual(1)
        stack.push(2);
        expect(stack.top.value).toEqual(2)
        stack.push(3);
        expect(stack.top.value).toEqual(3)
        expect(stack.length).toEqual(3)
    })

    it('peek on push to stack', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toEqual(1)
        stack.push(2);
        expect(stack.peek()).toEqual(2)
        stack.push(3);
        expect(stack.peek()).toEqual(3)
        expect(stack.length).toEqual(3)
    })

    it('pop from the stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        stack.pop();

        expect(stack.top.value).toEqual(4)
        expect(stack.length).toEqual(4)
    })

    it('Can successfully empty a stack after multiple pops', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);


        stack.pop();
        stack.pop();
        stack.pop();


        expect(stack.top).toBeNull()
        expect(stack.length).toEqual(0)
    })

})