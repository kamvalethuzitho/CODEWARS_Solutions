function repeatStr(s, n) {
  var a = [];
  while (a.length < n) {
    a.push(s);
  }
  return a.join(" ");
}
console.log(repeatStr(s, n));