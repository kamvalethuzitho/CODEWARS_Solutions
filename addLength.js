const addLength = (string) =>
  string.split(" ").map((word) => `${word} ${word.length}`);
