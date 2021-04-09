const nthterm = (first, n, c) => {
  const array = [first];
  for (let i = 0; i < n; i++) {
    array.push(array[i] + c);
  }
  return array[n];
};
