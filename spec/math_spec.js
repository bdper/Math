var math = require('../math2');

describe ("A math program that does arithmetic", function() {
	it("can add two integers together", function() {
		expect(math.add(3, 5)).toBe(8);
	it("can subtract two integers together", function() {
		expect(math.subtract(3, 5)).toBe(-2);
	it("can multiply two integers together", function() {
		expect(math.multiply(3, 5)).toBe(15);
	it("can divide two integers together", function() {
		expect(math.divide(3, 5)).toBe(.6);
	});
});