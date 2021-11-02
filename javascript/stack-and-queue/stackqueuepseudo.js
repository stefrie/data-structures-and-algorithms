'use strict';

class PseudoQueue {
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
}

module.export = PseudoQueue;
