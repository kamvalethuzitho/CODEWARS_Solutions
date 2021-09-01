function makeLooper(str) {
  let count = 0;
  return () => {
    if (count >= str.length) count = 0;
    const val = str[count];
    count++;
    return val;
  };
}
