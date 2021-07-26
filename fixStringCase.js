function solve(s) {
  let up = 0;
  let low = 0;

  s.split("").map((a) => (a == a.toUpperCase() ? up++ : low++));

  return up > low ? s.toUpperCase() : s.toLowerCase();
}
