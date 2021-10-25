"use strict";

const Node = require('./node.js');

class LinkedList {
	constructor(node = null) {
		this.head = node;
	}

	insert(value) {
		let node = new Node(value);

		if (!this.head) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		return this;
	}

	includes(value) {
		let current = this.head;

		while (current) {
			if (current.value === value) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	toString() {
		let current = this.head;
		let arr = [];
		let string = '{}';

		if (!current) {
			return ('Your list is empty....');
		}

		while (current) {
			arr.push(current.value);
			current = current.next;
		}
		arr.forEach(index => {
			string = string.concat(`{${index}} => `);
			console.log('CURRENT STRING', string)
		});
		string = `${string}NULL`;
		return string;
	}
}

module.exports = LinkedList;
