'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const Hashmap = require('./hashTable')


describe('Testing Hash Tables', () => {

	let HashedTable = new Hashmap(19);

	beforeAll(() => {
		HashedTable.set('Anas', 'student');
		HashedTable.set('key1', 'val1');
		HashedTable.set('key2', 'val2');
		HashedTable.set('key3', 'val3');
		HashedTable.set('key4', 'val4');
		HashedTable.set('key5', 'val5');
	});

	it('should set a key/value', () => {
		HashedTable.set('newKey', 'newValue');
		expect(HashedTable.get('newKey')).toBe('newValue');
	});

	it('get value based on a key', () => {
		expect(HashedTable.get('Anas')).toBe('student');
	});

	it('return null for a key that does not exist', () => {
		expect(HashedTable.get('AAAAAA')).toBe('key not found');
	});

	it('should handle a collision within the hashtable', () => {
		HashedTable.set('key20', 'collisionValue');
		expect(HashedTable.get('key1')).toBe('val1');
		expect(HashedTable.get('key20')).toBe('collisionValue');
	});

	it('should retrieve a value from a bucket with a collision', () => {
		HashedTable.set('key20', 'collisionValue');
		expect(HashedTable.get('key20')).toBe('collisionValue');
	});

});