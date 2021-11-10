'use strict';

class Node {
	constructor(value, k = 0) {
		this.value = value;
		this.children = new Array(k);[undefined, undefined];
	}
}

class KaryTree {
	constructor(k) {
		this.k = k;
		this.root = null;
	}
}

function breadthFirst(root) {
	// have a place to store current children
	const array = [];

	let current = root;
	array.unshift(root);
	while (array.length) {
		// take a node off the array
		current = array.pop();

		// read it's value
		console.log(current.value);

		// push all children into array.
		for (let node of current.children) {
			array.unshift(node);
		}
	}
	return array;
}

let kary = new KaryTree(2);

kary.root = new Node(15);
kary.root.children.push(new Node(8), new Node(12));
kary.root.children[0].children.push(new Node(16));
kary.root.children[0].children[0].children.push(new Node(64), new Node(50));
kary.root.children[1].children.push(new Node(35));
kary.root.children[1].children[0].children.push(new Node(83));
kary.root.children[1].children[0].children[0].children.push(new Node(6), new Node(4));

breadthFirst(kary.root);

module.exports = { Node, KaryTree };
