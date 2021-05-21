const positiveSum = (array) =>
  array.reduce((a, b) => (Math.sign(b) === 1 ? a + b : a), 0);
