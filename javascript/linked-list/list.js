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

	kthFromEnd(k) {
		let current = this.head;
		let length = 0;
		let arr = [];

		while (current !== null) {
			arr.push(current.value);
			length++;
			current = current.next;
		}

		if (k < 0) {
			console.log('Please provide a positive number');
		}

		if (k >= length) {
			console.log(`Please provide a number smaller than ${length}`);
			return;
		}

		let last = length - k - 1;
		// console.log('Length:', length);
		return arr[last];
	}

	zipLists(list1, list2) {
		// handle for potential empty LL
		// handle for potential difference in size of LL
		let list1curr = list1, list2curr = list2;
		let list1next, list2next;

		while (list1curr !== null && list2curr != null) {
			list1next = list1curr.next;
			list2next = list2curr.next;

			// Make list2curr as next of list1curr
			list2curr.next = list1next; // Change next pointer of list2curr
			list1curr.next = list2curr; // Change next pointer of list1curr

			// Update current pointers for next iteration
			list1curr = list1next;
			list2curr = list2next;
		}

		list2 = list2curr;
		return list2;
	}
}

// const list = new LinkedList();

// list.head = new Node(1);
// list.head.next = new Node(13);
// list.head.next.next = new Node(4);
// list.head.next.next.next = new Node(9);
// list.head.next.next.next.next = new Node(20);
// console.log(list);

let list1 = new LinkedList(10);
list1.append(20);
list1.append(30);
list1.append(40);

let list2 = new LinkedList(2);
list2.append(4);
list2.append(6);
list2.append(8);

// list.append(23);
// list.insertBefore(2, 27);
// list.insertAfter(25, 123);
// console.log(list.kthFromEnd(4));

// console.log(list.zipLists(listOne, listTwo));

module.exports = LinkedList;
