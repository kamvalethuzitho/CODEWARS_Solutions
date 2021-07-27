function minValue(values) {
  let arr = [...new Set(values)];

  return parseInt(arr.sort((a, b) => a - b).join(""));
}
minValue([4, 7, 5, 7]);
