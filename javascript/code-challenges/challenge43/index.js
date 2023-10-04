function intToRoman(num) {
	const dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	let result = '';

	for (let i = 0; i < dec.length; i++) {
		while (num >= dec[i]) {
			result += rom[i];
			num -= dec[i];
		}
	}

	return result;
}

console.log(intToRoman(15));
console.log(intToRoman(22));
console.log(intToRoman(150));
console.log(intToRoman(1525));
console.log(intToRoman(2500));
