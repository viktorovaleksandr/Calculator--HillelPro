function createCalculator(initiantCountValue) {
	let count = initiantCountValue;

	return {
		sum(number) {
			return count += number;
		},
		sub(number) {
			return count -= number;
		},
		mult(number) {
			return count *= number;
		},
		div(number) {
			return count /= number;
		},
		set(number) {
			return count = number;
		}
	}
}

const calc = createCalculator(10);
console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.set(100));
