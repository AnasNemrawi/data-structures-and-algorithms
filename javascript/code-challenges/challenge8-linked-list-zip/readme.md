# Zipped Linked Lists 

Write a function  that takes two linked list , and Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.

## Whiteboard Process

![Linked list white board](./white-bord.jpg)

## Solution

``` javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


function zipLists(list1, list2) {
    let zippedList = new LinkedList();
    let first = list1.head;
    let second = list2.head;
    while (first || second) {
        if (first) {
            zippedList.append(first.data);
            first = first.next;
        }
        if (second) {
            zippedList.append(second.data);
            second = second.next;
        }
    }
    return zippedList;
}


```

## For Tests (npm test javascript/code-challenges/challenge8-linked-list-zip)
