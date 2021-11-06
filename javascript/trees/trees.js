'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}
}

function PreOrder(current) {
	console.log(current.value);
	if (current.left) {
		PreOrder(current.left);
	}
	if (current.right) {
		PreOrder(current.right);
	}
}

function InOrder(current) {
	if (current.left) {
		InOrder(current.left);
	}
	console.log(current.value);
	if (current.right) {
		InOrder(current.right);
	}
}

function PostOrder(current) {
	if (current.left) {
		PostOrder(current.left);
	}
	if (current.right) {
		PostOrder(current.right);
	}
	console.log(current.value);
}

let tree = new BinaryTree();

tree.root = new Node('A');
tree.root.left = new Node('S');
tree.root.left.left = new Node('R');
tree.root.left.right = new Node('M');
tree.root.right = new Node('Q');
tree.root.right.right = new Node('H');
tree.root.right.left = new Node('L');
tree.root.right.right.left = new Node('F');

console.log('PreOrder');
PreOrder(tree.root);
console.log('------------')
console.log('InOrder');
InOrder(tree.root);
console.log('------------')
console.log('PostOrder');
PostOrder(tree.root);



