function solution(){
  var values = Object.keys(arguments).map((item) => arguments[item]);
  var deduped = values.filter(function (el, i, arr) {
    return arr.indexOf(el) === i;
  });
  
  return deduped.length < values.length;
}

//tests
function test(values, expected){
  var actual = solution.apply(null, values);
  Test.assertEquals(actual, expected);
}

test([1,2,3], false);
test([1,2,3,6,5,6], true);
test(['a', 'b', 'c', 'a'], true);
test([1,2,3, 'a', 'b'], false);