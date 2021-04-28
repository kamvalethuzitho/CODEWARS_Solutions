

let array = [2, 1, 6, 4, 40, 1, -3];

const findHighestNumbers = (arr) => {
  let twoHighest = [];
  twoHighest.push(arr.sort((a, b) => b - a)[0]);
  twoHighest.push(arr.sort((a, b) => b - a)[1]);
  return twoHighest;
};
findHighestNumbers(array);
console.log(findHighestNumbers(array));