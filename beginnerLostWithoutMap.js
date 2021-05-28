function maps(numbers) {
  // a place to store the doubled values
  const doubled = [];

  // iterate over the array of numbers
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // double the current value and add to the doubled values array
    const doubledNumber = number * 2;
    doubled.push(doubledNumber);
  }

  // return the doubled array
  return doubled;
}
