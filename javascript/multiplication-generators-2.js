function* generator(a) {
  let i = 1;
  while (1) {
    yield `${a} x ${i} = ${a * i}`;
    i = i + 1;
  }
}

//tests
//######Security Tests######
if(Math.random == undefined)
  Test.assertEquals(false,true,'Math Object must contain random Method!')
if(Math.floor == undefined)
  Test.assertEquals(false,true,'Math Object must contain floor Method!')
if(Math.random.toString().indexOf('[native code]')==-1||Math.random.toString().length!=35)
  Test.assertEquals(false,true,'Math.random method must be Native!')
if(Math.floor.toString().indexOf('[native code]')==-1||Math.floor.toString().length!=34)
  Test.assertEquals(false,true,'Math.floor method must be Native!')
//######Security Tests######

Test.describe("Fixed Tests", _ => {
  var gen = generator(1);
  Test.assertEquals(gen.next().value, '1 x 1 = 1', '1 x 1 = 1')
  Test.assertEquals(gen.next().value, '1 x 2 = 2', '1 x 2 = 2')
  Test.assertEquals(gen.next().value, '1 x 3 = 3', '1 x 3 = 3')
  Test.assertEquals(gen.next().value, '1 x 4 = 4', '1 x 4 = 4')
  Test.assertEquals(gen.next().value, '1 x 5 = 5', '1 x 5 = 5')
});
    
Test.describe("Random Tests", _ => {
  var tests = genTests();
  for(var i in tests) {
    var test = tests[i]
    Test.it(`${test.a} x ${test.b} = ${test.a * test.b} test`, _ => {
      let gen = generator(test.a);
      for(var x=0;x<10;x++){
        Test.assertEquals(gen.next().value, `${test.a} x ${test.b} = ${test.a * test.b}`, `${test.a} x ${test.b} = ${test.a * test.b}`)
        test.b++;
      }
    });
  }
});
    
    
function genTests(){
  var tests = [];
  
  for(var i=0;i<10;i++){
    var test = {};
    test.a = Math.floor(Math.random()*100);
    test.b = 1;
    tests.push(test)
  }
  
  return tests;
}