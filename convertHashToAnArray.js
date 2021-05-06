function convertHashToArray(hash) {
  let result = [];
  Object.keys(hash)
    .sort()
    .map((arr) => result.push([arr, hash[arr]]));
  return result;
}
