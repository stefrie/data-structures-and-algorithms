'use strict';
////// ----- Node -----//////
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
////// ----- Stack -----//////
class Stack {
	constructor() {
		this.top = null;
	}

	push(value) {
		let prevTop = this.top;
		let newNode = new Node(value);
		newNode.next = prevTop;
		this.top = newNode;
	}

	pop() {
		let temp = this.top;
		this.top = temp.next;
		return temp.value;
	}

	peek() {
		return this.top.value;
	}

	isEmpty() {
		return;
	}
}
////// ----- Queue -----//////
class Queue {
	constructor() {
		this.front = null;
		this.back = null;
	}

	enqueue(value) {
		let newNode = new Node(value);
		let currBack = this.back;

		if (currBack) {
			currBack.next = newNode;
		}
		this.back = newNode;

		if (!this.front) {
			this.front = newNode;
		}
	}

	dequeue() {
		let nodeRmv = this.front;
		this.front = nodeRmv.next;

		// account for the back if we are the last node
		if (this.back === nodeRmv) {
			this.back = nodeRmv.next;
		}

		return nodeRmv.value;
	}

	peek() {
		return this.front.value;
	}

	isEmpty() {
		return;
	}
}

let stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);
console.log(JSON.stringify(stack));

let one = stack.pop(); // 5
let two = stack.pop(); // 10
let three = stack.pop(); // 15
// console.log(one, two, three);
// console.log(JSON.stringify(stack));

let queue = new Queue();

queue.enqueue(100);
queue.enqueue(32);

// console.log(JSON.stringify(queue));

let first = queue.dequeue();
let second = queue.dequeue();
// console.log(first, second);
// console.log(JSON.stringify(queue));

module.exports = { Node, Stack, Queue };
