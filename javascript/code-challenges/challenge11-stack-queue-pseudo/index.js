'use strict';

const PseudoQueue = require('./PseudoQueue');

const pseudoQueue = new PseudoQueue();

pseudoQueue.enqueue(10);
pseudoQueue.enqueue(15);
pseudoQueue.enqueue(20);

console.log(pseudoQueue.dequeue()); // Output: 10
console.log(pseudoQueue.dequeue()); // Output: 15
console.log(pseudoQueue.dequeue());
