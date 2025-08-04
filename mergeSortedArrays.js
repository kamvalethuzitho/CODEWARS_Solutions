function mergeArray(arr1,arr2){
    const combineArray = arr1.concat(arr2);
    const unique = [... new Set (combineArray)];
    return unique.sort((a,b) => a-b);
}

console.log(mergeArray([8, 6, 20,24, 2], [7,30,8,24, 5, 3, 1]));
