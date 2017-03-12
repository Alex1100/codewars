function minValue(arr,n){
  var temp = [];
  var newArray = arr.map((z) => z);
  var result = [];
  
  newArray.forEach(function(el, i){
    temp.push(newArray.slice(newArray.indexOf(el), n + i));
    result.push(Math.min(...temp[i]));
  });
  
  var decrementer = n - 2;
  for(var s = 0; s <= decrementer; s++){
    result.pop();
  }
  
  return n === 1 ? arr : result;
}

//tests
describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

Test.assertDeepEquals(minValue([1,2,3,10,-5],2) , [1,2,3,-5])
Test.assertDeepEquals(minValue([1,-2,3,-4,5,-6,7,8],1) , [1,-2,3,-4,5,-6,7,8])
Test.assertDeepEquals(minValue([1,-2,3,-4,5,-6,7,8],2) , [-2,-2,-4,-4,-6,-6,7])
Test.assertDeepEquals(minValue([1,-2,3,-4,5,-6,7,8],3) , [-2,-4,-4,-6,-6,-6])
Test.assertDeepEquals(minValue([1,-2,3,-4,5,-6,7,8],4) , [-4,-4,-6,-6,-6])

})});