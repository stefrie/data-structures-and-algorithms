'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	getRoot() {
		return this.root;
	}

	add(value) {
		let current = this.root;

		if (!this.root) {
			this.root = new Node(value);
		}

		while (current) {
			if (value === current.value) {
				return 'No duplicates, please';
			}

			if (value < current.value) {
				if (current.left === null) {
					current.left = new Node(value);
					break;
				} else {
					current = current.left;
				}
			} else {
				if (current.right === null) {
					current.right = new Node(value);
					break;
				} else {
					current = current.right;
				}
			}
		}
	}

	contain(node, data) {
		if (node === null) {
			return null;
		} else if (data < node.data) {
			return this.contain(node.left, data);
		} else if (data > node.data) {
			return this.contain(node.right, data);
		} else {
			return node;
		}
	}

	preOrder(current) {
		console.log(current.value);
		if (current.left) {
			this.preOrder(current.left);
		}
		if (current.right) {
			this.preOrder(current.right);
		}
	}

	inOrder(current) {
		if (current.left) {
			this.inOrder(current.left);
		}
		console.log(current.value);
		if (current.right) {
			this.inOrder(current.right);
		}
	}

	postOrder(current) {
		if (current.left) {
			this.postOrder(current.left);
		}
		if (current.right) {
			this.postOrder(current.right);
		}
		console.log(current.value);
	}
}

let tree = new BinarySearchTree();

tree.add(10);
tree.add(20);
tree.add(30);
tree.add(41);
tree.add(47);
tree.add(45);
tree.add(42);

let root = tree.getRoot();

console.log('preOrder');
tree.preOrder(root);
console.log('------------');
console.log('inOrder');
tree.inOrder(root);
console.log('------------');
console.log('postOrder');
tree.postOrder(root);
console.log('------------');
console.log('add');
tree.add(100);
console.log('------------');
console.log('contain');
tree.contain(41);
console.log('------------');
console.log('add');

module.exports = { Node, BinarySearchTree };


