'use strict';

const { Queue } = require('./stackandqueue.js');

// class Animal {
// 	constructor(type) {
// 		this.type = type;
// 	}
// }

class AnimalShelter {
	constructor() {
		this.cat = new Queue();
		this.dog = new Queue();
	}

	enqueue(animal) {
		if (animal.type === 'dog') {
			this.dog.enqueue(animal);
			return this.dog;
		} else if (animal.type === 'cat') {
			this.cat.enqueue(animal);
			return this.cat;
		} else {
			return null;
		}
	}

	dequeue(pref) {
		if (pref.type === 'dog') {
			this.dog.dequeue(pref);
			return this.dog;
		} else if (pref.type === 'cat') {
			this.cat.dequeue(pref);
			return this.cat;
		} else {
			return null;
		}
	}
}

let pets = new AnimalShelter;

pets.enqueue({ type: 'cat' });
pets.enqueue({ type: 'cat' });
pets.enqueue({ type: 'dog' });
pets.enqueue({ type: 'cat' });
pets.enqueue({ type: 'cat' });
pets.enqueue({ type: 'dog' });
pets.enqueue({ type: 'cat' });
pets.enqueue({ type: 'dog' });
pets.enqueue({ type: 'cat' });
pets.enqueue({ type: 'dog' });

console.log(pets.dog, pets.cat);

module.exports = { AnimalShelter };
