function calculate(string) {
  var temp = [];
  var stringArray = string.split(' ');
  var nums = stringArray.map((el) => parseInt(el, 10));
  var trueNums = nums.filter((el) => el);
  for(var i = 0; i < trueNums.length; i++){
      temp.push(trueNums[i]);
  }
  return string.includes('loses') ? temp[0] - temp[1] : temp[0] + temp[1];
}

//tests
Test.describe("Basic tests",_=>{
Test.assertEquals(calculate("Panda has 48 apples and loses 4"), 44);
Test.assertEquals(calculate("Jerry has 34 apples and gains 6"), 40);
Test.assertEquals(calculate("Tom has 20 apples and gains 15"), 35);
Test.assertEquals(calculate("Fred has 110 bananas and loses 50"), 60);
Test.assertEquals(calculate("Nebula has 55 pears and loses 19"), 36);
Test.assertEquals(calculate("Sandra has 23461 pears and loses 23461"), 0); 
Test.assertEquals(calculate("Sam has 143 bananas and loses 3"), 140);
})