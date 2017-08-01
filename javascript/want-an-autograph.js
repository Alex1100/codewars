//Prompt
// Description:

// Find the most common Data Type and it's count within a given array. Once found, use that to return a hmac-sha256 signature.

// To return the Signature the crypto library has been loaded.

// For Example, ['1', '2', 2] should result in ['string', 2] and once signed should return "hEenLdJWcXmEjh1pAm1hGXJtJ3cLet09ePiybBzht1M=".

// If there are any ties at all then just return 'We got a tie!'




//Solution
class AutographFinder {

  check(arr){
    let tracker = {};
    let sorted = [];

    arr.forEach((el, i) => {
      tracker[typeof el] === 0 || tracker[typeof el] === undefined ? tracker[typeof el] = 1 : tracker[typeof el]++;
    });

    for(let count in tracker) {
      sorted.push([count, tracker[count]]);
    }

    if(sorted.length > 1){
      sorted.sort((a, b) => {
        return b[1] - a[1];
      });

      if(sorted[0][1] === sorted[1][1]){
        return 'We got a tie!';
      }
    }

    var d = [sorted[0][0], sorted[0][1]];
    var key = (new Buffer(d.toString())).toString('base64');
    var hmac = crypto.createHmac('sha256', key);
    var signature = hmac.update(d.toString()).digest('base64');
    return signature;
  }
}



//Tests
var crypto = require('crypto')

function generateArray(){
  let upTo = 100;

  function getRndUpTo(upTo){
    return Math.floor(Math.random() * upTo);
  };

  let indexLimit = 4;

  function getRndIndex(indexLimit){
    return Math.floor(Math.random() * indexLimit) === 4 ? 3 : Math.floor(Math.random() * indexLimit);
  }


  let arr = [];
  let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randStrings = [];
  let randNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randBools = [true, false];
  let randObjects = [];
  let randObj = {};

  for(let j = 0; j < abc.length; j++){
    randObj[abc[j]] = abc[j];
    randObjects.push(randObj[abc[j]]);
    for(let z = 0; z < abc.length; z++){
      randStrings.push(abc[j] + abc[z]);
    }
  }



  let dataTypes = ['number', 'boolean', 'string', 'object'];
  let a = getRndUpTo(upTo);

  for(let i = 0; i < a; i++){
    if(dataTypes[getRndIndex(indexLimit)] === 'number'){
      arr.push(randNumbers[Math.floor(Math.random() * randNumbers.length - 1)]);
    } else if(dataTypes[getRndIndex(indexLimit)] === 'boolean') {
      arr.push(true);
    } else if(dataTypes[getRndIndex(indexLimit)] === 'string'){
      arr.push(randStrings[Math.floor(Math.random() * randStrings.length - 1)]);
    } else if(dataTypes[getRndIndex(indexLimit)] === 'object'){
      let z = Math.floor(Math.random() * randObjects.length - 1);
      arr.push({z: randObjects[z]});
    }
  }

  return arr.filter(el => el !== undefined);
};



let arrays = [];

for(let i = 0; i < 10; i++){
  arrays.push(generateArray());
}

arrays.push([1, 2, '1', '2'])

var checker = (arr) => {
  let tracker = {};
  let sortable = [];

  arr.forEach((el, i) => {
    tracker[typeof el] === 0 || tracker[typeof el] === undefined ? tracker[typeof el] = 1 : tracker[typeof el]++;
  });

  for(let count in tracker) {
    sortable.push([count, tracker[count]]);
  }

  if(sortable.length > 1){
    sortable.sort((a, b) => {
      return b[1] - a[1];
    });

    if(sortable[0][1] === sortable[1][1]){
      return 'We got a tie!';
    }
  }

  var d = [sortable[0][0], sortable[0][1]];
  var key = (new Buffer(d.toString())).toString('base64');
  var hmac = crypto.createHmac('sha256', key);
  var signature = hmac.update(d.toString()).digest('base64');
  return signature;
}

Test.describe("Testing the function for the most common data type", function () {
  var finder = new AutographFinder();
  for(let s = 0; s < arrays.length; s++){
    if(checker(arrays[s]) !== 'We got a tie!'){
      Test.it("Are They Equal?", function () {
        Test.assertEquals(finder.check(arrays[s]), checker(arrays[s]), 'Try again!');
      });
    } else {
      Test.it("Do we have a tie?", function () {
        Test.assertEquals(finder.check(arrays[s]), checker(arrays[s]), 'Try again!');
      });
    }
  }
});
