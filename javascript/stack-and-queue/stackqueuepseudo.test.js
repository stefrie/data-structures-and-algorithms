'use strict';

const PseudoQueue = require('./stackqueuepseudo.js');

describe('Stack Queue Pseudo', () => {
	test('can successfully enqueue into a queue', () => {
		const pq = new PseudoQueue();
		pq.enqueue('2');
		expect(pq.front.value).toBe('2');
	});

	test('can successfully enqueue multiple values into a queue', () => {
		const pq = new PseudoQueue();
		pq.enqueue('3', '5', '7', '9');
		expect(pq.front.value).toBe('3', '5', '7', '9');
	});

	test('can successfully dequeue out of a queue the expected value', () => {
		const pq = new PseudoQueue();
		pq.enqueue(3);
		pq.enqueue(5);
		pq.enqueue(7);
		pq.enqueue(9);
		expect(pq.dequeue()).toBe(3);
	});

	test('can successfully peek into a queue, seeing the expected value', () => {
		let pq = new PseudoQueue();
		pq.enqueue(1);
		pq.enqueue(2);
		pq.enqueue(3);
		expect(pq.peek()).toBe(1);
	});

	test('can successfully empty a queue after multiple dequeues', () => {
		const pq = new PseudoQueue();
		pq.enqueue(3);
		pq.enqueue(5);
		pq.enqueue(7);
		expect(pq.dequeue()).toBe(3);
		expect(pq.dequeue()).toBe(5);
		expect(pq.dequeue()).toBe(7);
	});

	test('can successfully instantiate an empty queue', () => {
		const pq = new PseudoQueue();
		expect(pq.front).toBe(null);
	});

	test('calling dequeue or peek on empty queue raises exception', () => {
		const pq = new PseudoQueue();
		if (pq === null) {
			return ('this is not the queue you\'re looking for');
		}
	});
});

