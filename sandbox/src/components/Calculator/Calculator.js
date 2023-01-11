const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  square: (a) => a * a,
  squareRoot: (a) => Math.sqrt(a),
  pow: (a, b) => Math.pow(a, b),
  log: (a) => Math.log10(a),
  exp: (a) => Math.exp(a),
  sin: (a) => Math.sin(a),
  cos: (a) => Math.cos(a),
  tan: (a) => Math.tan(a),
  pi: () => Math.PI,
  e: () => Math.E,
  solveExpression: (expression) => {
    try {
      return eval(expression);
    } catch (error) {
      console.error(error.message);
    }
  },
};

console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.subtract(2, 3)); // Output: -1
console.log(calculator.multiply(2, 3)); // Output: 6
console.log(calculator.divide(2, 3)); // Output: 0.6666666666666666
console.log(calculator.square(2)); // Output: 4
console.log(calculator.squareRoot(4)); // Output: 2
console.log(calculator.pow(2, 3)); // Output: 8
console.log(calculator.log(100)); // Output: 2
console.log(calculator.exp(1)); // Output: 2.718281828459045
console.log(calculator.sin(Math.PI / 2)); // Output: 1
console.log(calculator.cos(0)); // Output: 1
console.log(calculator.tan(0)); // Output: 0
console.log(calculator.pi()); // Output: 3.141592653589793
console.log(calculator.e()); // Output: 2.718281828459045
console.log(calculator.solveExpression("2+3*4-1")); // Output: 11
