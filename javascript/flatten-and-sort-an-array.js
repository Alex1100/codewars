"use strict";

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}

//tests
"use strict";

function generateRandomInteger(lowerBound, upperBound) {
  /*
   * Number, Number -> Number
   *
   * Given two number arguments denoting the lower bound and the upper bound
   * of the number to be generated respectively, returns a number that is
   * greater than or equal than the lower bound and less than the upper bound.
   */
  return Math.floor(lowerBound + (Math.random() * (upperBound - lowerBound)));
}

function generateRandomArray(lowerBound, upperBound, count) {
  /*
   * Number, Number, Number -> Number
   *
   * Given three number denoting the lower bound, the upper bound
   * and the length of the array to be generated, returns an
   * array of length "count" and all of its values within range
   * from the lower bound (inclusive) to the upper bound (exclusive).
   */
  let result = [];
  for (let times = 0; times < count; ++times) {
    let randomValue = generateRandomInteger(lowerBound, upperBound);
    result.push(randomValue);
  }
  return result;
}

function unflattenArray(array, splitCount) {
  /*
   * Array, Number -> Array
   *
   *
   * Given a one-dimensional array "array" and the number of splits to be made
   * upon it to produce a two-dimensional array "splitCount", returns a two-
   * dimensional array with all the values carried over from the original array
   * by shallow-copy with the length equal of the whole array equal to splitCount + 1.
   */
  const SPLIT_MAX_LENGTH = Math.floor(array.length / (splitCount + 1));
  const SPLIT_MIN_LENGTH = 1;
  let result = []
  let startSplitIndex = 0;
  for (let times = 0; times <= splitCount; ++times) {
    let upperBound = startSplitIndex + SPLIT_MAX_LENGTH + 1;
    let lowerBound = startSplitIndex + SPLIT_MIN_LENGTH;
    let endSplitIndex = times == splitCount ? array.length : generateRandomInteger(lowerBound, upperBound);
    let subArray = array.slice(startSplitIndex, endSplitIndex);
    result.push(subArray);
    startSplitIndex = endSplitIndex;
  }
  return result;
}

function TestObject(input, output) {
  /*
   * Basic test object to use for hard-coded testing.
   */
  this.input = input;
  this.output = output;
}

function RandomTestObject(lowerBound, upperBound, count) {
  /*
   * Test object to use for random testing.
   */
  let randomArray = generateRandomArray(lowerBound, upperBound, count);
  let splitCount = generateRandomInteger(1, randomArray.length);
  this.input = unflattenArray(randomArray, splitCount);
  this.output = randomArray.sort(function (a, b) { return a - b; });
}

function getBasicTestCases() {
  return {
    "label": "Basic tests",
    "tests": [
      new TestObject([[]], []),
      new TestObject([[], []], []),
      new TestObject([[], [1]], [1]),
      new TestObject([[], [], [], [2], [], [1]], [1, 2]),
      new TestObject([[3, 2, 1], [7, 9, 8], [6, 4, 5]], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
      new TestObject([[1, 3, 5], [100], [2, 4, 6]], [1, 2, 3, 4, 5, 6, 100]),
      new TestObject([[111, 999], [222], [333], [444], [888], [777], [666], [555]], [111, 222, 333, 444, 555, 666, 777, 888, 999]),
    ],
  }
}

function getCoreTestCases() {
  return {
    "label": "Core tests",
    "tests": [
      new TestObject([[9, 7, 5, 3, 1], [8, 6, 4, 2, 0], [], [1]], [0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      new TestObject([[1], [], [1], [], [], [-1, -2, -1], [0, 3], [1], [2]], [-2, -1, -1, 0, 1, 1, 1, 2, 3]),
      new TestObject([[], [], [64], [], [504, 503], [4096], [], [303], [202], [2500], [], [100]], [64, 100, 202, 303, 503, 504, 2500, 4096]),
      new TestObject([[90, 81, 72], [63, 54, 35], [], [46], [27, 18, 0]], [0, 18, 27, 35, 46, 54, 63, 72, 81, 90]),
      new TestObject([[1], [], [1], [1], [0], [-1], [], [0], [-1], [0], [-1]], [-1, -1, -1, 0, 0, 0, 1, 1, 1]),
      new TestObject([[-9, -8, -7, -6, -5, -4, -3, -2, -1]], [-9, -8, -7, -6, -5, -4, -3, -2, -1]),
      new TestObject([[9, 8, 7, 6, 5, 4, 3, 2, 1]], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
    ],
  }
}

function getRandomTestCases(testCount, valueLowerBound, valueUpperBound, countLowerBound, countUpperBound) {
  let result = {
    "label": "Random tests",
    "tests": []
  }
  for (let times = 0; times < testCount; ++times) {
    let randomCount = generateRandomInteger(countLowerBound, countUpperBound);
    let randomTestObject = new RandomTestObject(valueLowerBound, valueUpperBound, randomCount);
    result.tests.push(randomTestObject);
  }
  return result;
}

let randomTestCaseCount = 64;
let randomTestValueLowerBound = -10000
let randomTestValueUpperBound = 10000
let randomTestSequenceCountLowerBound = 0
let randomTestSequenceCountUpperBound = 256
let TEST_GETTERS = [getBasicTestCases, getCoreTestCases, getRandomTestCases]

for (let testGetter of TEST_GETTERS)
{
  let testGroup = testGetter(
    randomTestCaseCount,
    randomTestValueLowerBound,
    randomTestValueUpperBound,
    randomTestSequenceCountLowerBound,
    randomTestSequenceCountUpperBound
  );
  describe(testGroup.label, function () {
    for (let test of testGroup.tests) {
      let result = flattenAndSort.apply(null, [test.input]);
      Test.assertSimilar(result, test.output);
    }
  });
}
