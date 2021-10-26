'use strict';

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
			console.log('CURRENT STRING', string);
		});
		string = `${string}NULL`;
		return string;
	}

	append(value) {
		let node = new Node(value);

		if (!this.head) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
			console.log(current.next);
		}
	}

	insertBefore(currVal, newVal) {
		if (!this.includes(currVal)) {
			return false;
		} else {
			let prevNode = null;
			let currNode = this.head;
			while (currNode.value !== currVal) {
				prevNode = currNode;
				currNode = currNode.next;
			}
			let newNode = new Node(newVal);
			newNode.next = prevNode.next;
			prevNode.next = newNode;
			console.log(newNode);
			return newNode;
		}
	}

	insertAfter(currVal, newVal) {
		if (!this.currVal === null) {
			return false;
		} else {
			let currNode = this.head;
			let prevNode = this.head;
			while (currNode.value !== currVal) {
				prevNode = currNode;
				currNode = currNode.next;
			}
			let newNode = new Node(newVal);
			newNode.next = currNode.next;
			currNode.next = newNode;
			prevNode.next = newNode;
			console.log(newNode);
		}
	}
}

const list = new LinkedList();

list.head = new Node(10);
list.head.next = new Node(25);
list.head.next.next = new Node(2);
list.head.next.next.next = new Node(13);
// console.log(list);

list.append(23);
// // list.insertBefore(2, 27);
// list.insertAfter(25, 123);

module.exports = LinkedList;
