'use strict';

const Hashmap = require('./hashTable');

const leftJoin = function (HM1, HM2) {
	const result = [];

	const HM1Keys = HM1.keys();

	for (let i = 0; i < HM1Keys.length; i++) {
		const keys = HM1Keys[i];
		for (let j = 0; j < keys.length; j++) {
			const key = keys[j];
			const HM1Value = HM1.get(key);
			const HM2Value = HM2.get(key);
			result.push([key, HM1Value, HM2Value || null]);
		}
	}

	return result;
};

const synonymsHash = new Hashmap(5);

synonymsHash.set('diligent', 'employed');
synonymsHash.set('font', 'enamored');
synonymsHash.set('guide', 'usher');
synonymsHash.set('outfit', 'garb');
synonymsHash.set('wrath', 'anger');

const antonymsHash = new Hashmap(5);

antonymsHash.set('diligent', 'idle');
antonymsHash.set('font', 'averse');
antonymsHash.set('guide', 'follow');
antonymsHash.set('outfit', 'jam');
antonymsHash.set('wrath', 'delight');

const result = leftJoin(synonymsHash, antonymsHash);
console.log(result);
