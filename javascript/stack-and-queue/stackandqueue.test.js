'use strict';

const { Node, Stack, Queue } = require('./stackandqueue.js');

describe('Stack and Queue', () => {
	////// ----- Node -----//////
	test('Node is a class', () => {
		expect(typeof Node.prototype.constructor).toEqual('function');
	});

	////// ----- Stack -----//////
	test('can successfully push onto a stack', () => {
		const s = new Stack();
		s.push('2');
		expect(s.top.value).toBe('2');
	});

	test('can successfully push multiple values onto a stack', () => {
		const s = new Stack();
		console.log(s);
		s.push('3', '5', '7', '9');
		expect(s.top.value).toBe('3', '5', '7', '9');
	});

	test('can successfully pop off the stack', () => {
		const s = new Stack();
		s.push(3);
		s.push(5);
		s.push(7);
		s.push(9);
		expect(s.pop()).toBe(9);
	});

	test('can successfully empty a stack after multiple pops', () => {
		const s = new Stack();
		s.push(3);
		s.push(5);
		s.push(7);
		s.push(9);
		expect(s.pop()).toBe(9);
		expect(s.pop()).toBe(7);
		expect(s.pop()).toBe(5);
		expect(s.pop()).toBe(3);
	});

	test('can successfully peek the next item on the stack', () => {
		let s = new Stack();
		s.push(1);
		s.push(2);
		s.push(3);
		expect(s.peek()).toBe(3);
	});

	test('can successfully instantiate an empty stack', () => {
		const stack = new Stack();
		expect(stack.top).toBe(null);
	});

	test('calling pop or peek on empty stack raises exception', () => {
		const stack = new Stack();
		if (stack === null) {
			return ('this is not the stack you\'re looking for');
		}
	});

	////// ----- Queue -----//////
	test('can successfully enqueue into a queue', () => {
		const q = new Queue();
		q.enqueue('2');
		expect(q.front.value).toBe('2');
	});

	test('can successfully enqueue multiple values into a queue', () => {
		const q = new Queue();
		q.enqueue('3', '5', '7', '9');
		expect(q.front.value).toBe('3', '5', '7', '9');
	});

	test('can successfully dequeue out of a queue the expected value', () => {
		const q = new Queue();
		q.enqueue(3);
		q.enqueue(5);
		q.enqueue(7);
		q.enqueue(9);
		expect(q.dequeue()).toBe(3);
	});

	test('can successfully peek into a queue, seeing the expected value', () => {
		let q = new Queue();
		q.enqueue(1);
		q.enqueue(2);
		q.enqueue(3);
		expect(q.peek()).toBe(1);
	});

	test('can successfully empty a queue after multiple dequeues', () => {
		const q = new Queue();
		q.enqueue(3);
		q.enqueue(5);
		q.enqueue(7);
		expect(q.dequeue()).toBe(3);
		expect(q.dequeue()).toBe(5);
		expect(q.dequeue()).toBe(7);
	});

	test('can successfully instantiate an empty queue', () => {
		const q = new Queue();
		expect(q.front).toBe(null);
	});

	test('calling dequeue or peek on empty queue raises exception', () => {
		const q = new Queue();
		if (q === null) {
			return ('this is not the queue you\'re looking for');
		}
	});
});

