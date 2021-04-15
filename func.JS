

function getPositives(arr) {
  const posArr = arr.filter((num) => num > -1);
  return posArr;
}
console.log(getPositives([1, -2 - 3, -4]));
