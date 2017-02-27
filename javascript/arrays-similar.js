function arraysSimilar(arr1, arr2) {
  return arr1.sort().length === arr2.sort().length && arr1.sort().reduce((acc, curr) => curr + acc, 0) === arr2.sort().reduce((acc, curr) => curr + acc, 0) ? true : false;
}
