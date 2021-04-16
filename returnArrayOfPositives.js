let array = [1, -10, -5, 8, 11, 3, 20, 9, -59, 35];
const returnPositive = (arr) => {
  let positiveNumbers = [];
  for (let i of arr) {
    if (i > 0) {
      positiveNumbers.push(i);
    }
  }
  return positiveNumbers;
};
returnPositive(array);
