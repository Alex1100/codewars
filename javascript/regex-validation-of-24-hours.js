function validateTime(time) {
  res =  /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
  return res
}

//tests
Test.describe("Basic tests",_=>{
Test.assertEquals(validateTime('01:00'), true);
Test.assertEquals(validateTime('1:00'), true);
Test.assertEquals(validateTime('1:00'), true);
Test.assertEquals(validateTime('00:00'), true);
Test.assertEquals(validateTime('13:1'), false);
Test.assertEquals(validateTime('12:60'), false);
Test.assertEquals(validateTime('12: 60'), false);
Test.assertEquals(validateTime('24:00'), false);
Test.assertEquals(validateTime('24o:00'), false);
Test.assertEquals(validateTime('24:000'), false);
Test.assertEquals(validateTime(''), false);
Test.assertEquals(validateTime('2400'), false);
Test.assertEquals(validateTime('foo12:00bar'), false);
Test.assertEquals(validateTime('010:00'), false);
Test.assertEquals(validateTime('1;00'), false);
})


Test.describe("Random tests",_=>{
var h = ()=>~~(Math.random()*24)
var m = ()=>~~((a = Math.random()*60)<10)?'0'+~~String(a):~~String(a)


for (var i=0;i<40;i++){
  str = String(h())+':'+String(m())
  Test.it(`Testing for ${str}`,_=>{
  Test.assertEquals(validateTime(str), true, "It should work for random inputs too")
  })
}
})