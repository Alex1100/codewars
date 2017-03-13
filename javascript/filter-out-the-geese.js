function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((element) => geese.includes(element));
};

//tests
function generateTestArray(){
  var arrayLength = Math.floor(Math.random() * 80);
  var birds = ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested", "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var result = [];
  for (var i = 0; i < arrayLength; i++) {
    result.push(birds[Math.floor(Math.random() * birds.length)]);
  }
  return result;
};

Test.describe("Random tests",function(){
  for (var i = 1; i <= 100; i++) {
    Test.it("Random test " + i, function(){
      var testArray = generateTestArray();
      Test.assertSimilar(testArray.sort((a, b) => a.length > b.length),testArray);
    });
  };
});