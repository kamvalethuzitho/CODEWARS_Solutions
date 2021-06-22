function solve(s) {
  return parseInt(
    s
      .replace(/\D/g, " ")
      .split(" ")
      .sort((a, b) => a - b)
      .pop(),
    10
  );
}
