function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min

    return [min, max, diff]
}


//tests
Test.assertSimilar(differenceInAges([16, 22, 31, 44, 3, 38, 27, 41, 88]), [3, 88, 85]);
Test.assertSimilar(differenceInAges([5, 8, 72, 98, 41, 16, 55]), [5, 98, 93]);
Test.assertSimilar(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
Test.assertSimilar(differenceInAges([62, 0, 3, 77, 88, 102, 26, 44, 55]), [0, 102, 102]);
Test.assertSimilar(differenceInAges([2, 44, 34, 67, 88, 76, 31, 67]), [2, 88, 86]);
Test.assertSimilar(differenceInAges([46, 86, 33, 29, 87, 47, 28, 12, 1, 4, 78, 92]), [1, 92, 91]);
Test.assertSimilar(differenceInAges([66, 73, 88, 24, 36, 65, 5]), [5, 88  , 83]);
Test.assertSimilar(differenceInAges([12, 76, 49, 37, 29, 17, 3, 65, 84, 38]), [3, 84, 81]);
Test.assertSimilar(differenceInAges([0, 110]), [0, 110, 110]);
Test.assertSimilar(differenceInAges([33, 33, 33]), [33, 33, 0]);

function randomInt (max) {
    return Math.floor(Math.random() * max);
}

const minAge = 0;
const maxAge = 110;
const minFamilySize = 2;
const maxFamilySize = 12;
function randomIntBetween (min, max) {
    var range = max - min;
    return min + (Math.floor(Math.random() * range));
}
function createFamily () {
    const familySize = randomIntBetween(minFamilySize, maxFamilySize);
    const family = [];
    for (var i = 0; i < familySize; i++){
        var familyMemberAge = randomIntBetween (minAge, maxAge);
        family.push(familyMemberAge);
    }
    return family;
}

function testDifferenceInAges(ages){
    ages = ages.slice();
  var agesSorted = ages.sort(function (a, b) {
      return (b > a) ? 1 : -1;
   });
  var agesArray = [];
  agesArray.push(agesSorted.pop());
  agesArray.push(agesSorted[0]);
  agesArray.push(agesArray[1] - agesArray[0]);
  return agesArray;
}

for (var i = 0; i < 25; i++) {
    var family = createFamily();
    var ourSolution = testDifferenceInAges(family);
    var theirSolution = differenceInAges(family);
    Test.assertSimilar(theirSolution, ourSolution);
}
