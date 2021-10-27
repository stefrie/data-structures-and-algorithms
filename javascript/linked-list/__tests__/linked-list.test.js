'use strict';

// Require our linked list implementation
const LinkedList = require('../list.js');
const Node = require('../node.js');
// const util = require('util');

describe('Linked List', () => {
	it('works', () => {
		expect(true).toBeTruthy();
	});

	it('can successfully instantiate an empty linked list', () => {
		const list = new LinkedList();
		console.log(list);
		expect(list.head).toEqual(null);
	});

	it('can properly insert into the linked list', () => {
		const list = new LinkedList();
		console.log(list);
		list.insert(27);
		expect(list.head.value).toBe(27);
	});

	it('head property will properly point to the first node in the linked list', () => {
		const list = new LinkedList();
		console.log(list);
		expect(list.head).toEqual(null);
	});

	it('can properly insert multiple nodes into the linked list', () => {
		const list = new LinkedList();
		console.log(list);
		list.insert('awesome possum', 6);
		expect(list.head.value).toBe('awesome possum', 6);
	});

	xit('will return true when finding a value within the linked list that exists', () => {
		const list = new LinkedList();
		console.log(list);
	});

	xit('will return false when searching for a value in the linked list that does not exist', () => {

	});

	xit('can properly return a collection of all the values that exist in the linked list', () => {

	});

	xit('where k is greater than the length of the linked list', () => {

	});

	xit('where k and the length of the list are the same', () => {

	});

	xit('where k is not a positive integer', () => {

	});

	xit('where the linked list is of a size 1', () => {

	});

	xit('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {

	});

});


