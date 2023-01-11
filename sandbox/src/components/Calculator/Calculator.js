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
