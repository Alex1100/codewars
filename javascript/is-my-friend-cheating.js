//Prompt
// Description:

// A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (don't worry, n is always strictly greater than 0 and small enough so we shouldn't have overflow) and returns an array of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

// (See examples for each language in "RUN EXAMPLES")

// #Examples:

// removNb(26) should return [(15, 21), (21, 15)]
// or

// removNb(26) should return { {15, 21}, {21, 15} }
// or

// removeNb(26) should return [[15, 21], [21, 15]]
// or

// removNb(26) should return [ {15, 21}, {21, 15} ]
// or

// in C:
// removNb(26) should return  **an array of pairs {{15, 21}{21, 15}}**
// tested by way of strings.



//optimal
function removeNb (n) {
  // from the instruction:
  // a * b = S(n) - a - b

  // and the sum of all first n natural numbers is
  // S(n) = n * (n + 1) / 2

  // so we can refrase the first formula like this:
  // a * b = n * (n + 1) / 2 - a - b
  // a * b + b = n * (n + 1) / 2 - a
  // b * (a + 1) = n * (n + 1) / 2 - a
  // b = (n * (n + 1) / 2 - a) / (a + 1)

  // but a and b are natural and up to n

  var results = [];
  for (var a = 1; a <= n; a++) {
    var b = (n * (n + 1) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) results.push([a, b]);
  }
  return results;
}




//Brute Force
const removeNb = (n) => {
  let temp = [];
  let b = Array.from({length: n + 1}, (d, i) => i);
  b = b.slice(1, b.length);
  let a = 0;
  let g = 0;
  let y = 0;

  for(let z = 0; z < b.length; z++){
    for(let s = 0; s < b.length; s++){
      a = Array.from({length: n + 1}, (d, i) => i);
      a = a.slice(1, a.length);
      g = a.splice(a.indexOf(a[z]), 1);
      y = a.splice(a.indexOf(a[s]), 1);
      if(Number(g) * Number(y) === a.reduce((acc, curr) => curr + acc, 0)){
        temp.push([Number(g), Number(y)]);
      }
    }
  }

  return temp;
};




//Tests
function removeNbSolution (n) {
  var sum = n * (n+1) / 2;
  var result = [];
  for(var a = 1; a < n; a++) {
    if ( (sum-a) % (a+1) === 0) {
      var b = (sum-a)/(a+1);
      if (b < n) result.push([a,b]);
    }
  }
  return result;
}
function testIt(n, expected) {
  Test.assertSimilar(removeNb(n), expected, "n = " + n);
}

describe("Your wonderful implementation...", function() {
  it("should work for some basic numbers", function() {
    testIt(26, [[15,21],[21,15]])
    testIt(101,  [[55,91],[91,55]]);
    testIt(102,  [[70,73],[73,70]]);
    testIt(110,  [[70,85],[85,70]]);
    testIt(1006, [[546,925],[925,546]]);
    testIt(446,  [[252,393],[393,252]]);
    testIt(846,  [[498,717],[717,498]]);
  });

  it("should work when the friend is cheating", function() {
    testIt(100, []);
    testIt(103, []);
  });

  it("should work for higher number", function() {
    testIt(1000003, [[550320,908566],[559756,893250],[893250,559756],[908566,550320]]);
    testIt(1000008,  [[677076,738480],[738480,677076]]);
  });

  it("should work for some random numbers", function() {
    var interestingNs = [
        210, 211, 213, 220, 226, 231, 232, 249, 250, 257, 262,
        263, 265, 266, 282, 290, 297, 300, 304, 311, 312, 314,
        325, 340, 341, 346, 358, 362, 369, 378, 381, 386, 394];
      for(var i = 0; i < 10; i++) {
        var n = interestingNs[~~(Math.random() * interestingNs.length)];
        testIt(n, removeNbSolution(n));
      }
  });
});
