function isVow(a) {
  var i = 0;
  return (
    a.forEach(function (v) {
      v == 97 || v == 101 || v == 105 || v == 111 || v == 117
        ? (a[i++] = String.fromCharCode(v))
        : (a[i++] = v);
    }),
    a
  );
}
