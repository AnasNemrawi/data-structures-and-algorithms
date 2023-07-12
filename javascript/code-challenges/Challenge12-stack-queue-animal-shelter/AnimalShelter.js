
'use strict';

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }

  enqueue(animal) {
    if (animal.species === "dog") {
      this.dogs.push(animal);
    } else if (animal.species === "cat") {
      this.cats.push(animal);
    }
  }

  dequeue(pref) {
    if (pref === "dog") {
      return this.dogs.shift() || null;
    } else if (pref === "cat") {
      return this.cats.shift() || null;
    } else {
      return null;
    }
  }
}

const q = new AnimalShelter();

q.enqueue(new Animal("dog", "name1"));
q.enqueue(new Animal("cat", "name2"));
q.enqueue(new Animal("dog", "name3"));
q.enqueue(new Animal("cat", "name4"));

console.log(q.dequeue("dog"));
console.log(q.dequeue("cat"));
console.log(q.dequeue("dog"));
console.log(q.dequeue("cat"));
console.log(q.dequeue("lion")); // should give null

