var isValidMXPhoneNumber = function(str) {
  return /^(\(5[56]\)|5[56])( ?\d\d){3}$/.test(str);
};

//tests
Test.assertEquals(isValidMXPhoneNumber('(56) 84 65 52'),true)
Test.assertEquals(isValidMXPhoneNumber('(56) 84 6552'),true)
Test.assertEquals(isValidMXPhoneNumber('(56) 846552'),true)
Test.assertEquals(isValidMXPhoneNumber('(56)846552'),true)
Test.assertEquals(isValidMXPhoneNumber('56 84 65 52'),true)
Test.assertEquals(isValidMXPhoneNumber('56 84 6552'),true)
Test.assertEquals(isValidMXPhoneNumber('56 846552'),true)
Test.assertEquals(isValidMXPhoneNumber('66 846552'),false)
Test.assertEquals(isValidMXPhoneNumber('11846552'),false)
Test.assertEquals(isValidMXPhoneNumber('22958467'),false)
// some randomness
for(var i=0;i<~~(1+Math.random()*11);i++){
  Test.assertEquals(isValidMXPhoneNumber(`55${("000000"+~~(1+Math.random()*999999)).substr(-6)}`),true)
}
for(var i=0;i<~~(1+Math.random()*11);i++){
  Test.assertEquals(isValidMXPhoneNumber(`56${("000000"+~~(1+Math.random()*999999)).substr(-6)}`),true)
}


Test.assertEquals(isValidMXPhoneNumber('(56) 84 65 525'),false)
Test.assertEquals(isValidMXPhoneNumber('(565) 84 65 52'),false)
Test.assertEquals(isValidMXPhoneNumber('1(56) 84 65 52'),false)
Test.assertEquals(isValidMXPhoneNumber('(a6) 84 65 52'),false)
Test.assertEquals(isValidMXPhoneNumber('(56) 84 6a 52'),false)
Test.assertEquals(isValidMXPhoneNumber('(55 84 65 52'),false)
Test.assertEquals(isValidMXPhoneNumber('56) 84 65 52'),false)
Test.assertEquals(isValidMXPhoneNumber('((56) 84 65 52'),false)
Test.assertEquals(isValidMXPhoneNumber('(56)) 84 65 52'),false)
Test.assertEquals(isValidMXPhoneNumber('(46)) 84 65 52'),false)
Test.assertEquals(isValidMXPhoneNumber('(11)) 84 65 52'),false)
Test.assertEquals(isValidMXPhoneNumber('(77)) 84 65 52'),false)
Test.assertEquals(isValidMXPhoneNumber('5697243866'),false)

Test.assertEquals(isValidMXPhoneNumber('(5 6) 84 65 52'),false,"Lada shouldn't have spaces")


var soolatn = function(str) {
  return /^\(5([^a-z12347890\)\s])\)\s?\d{2}\s?\d{2}\s?\d{2}$|^(5[^a-z12347890\)\s])\s?\d{2}\s?\d{2}\s?\d{2}$/.test(str);
};
var poschars='123456789 ';
var randChar=function(){
  return poschars[~~(Math.random()*poschars.length)];
}
var randchars=function(n){
  var res='';
  for(var num=0;num<n;num++){
    res+=randChar();
  }
  return res;
}


for(var i=0;i<~~(5+Math.random()*72);i++){
  var strss=`5${("000000"+~~(1+Math.random()*9999999)).substr(-~~(1+Math.random()*9))}`;
  Test.assertEquals(isValidMXPhoneNumber(strss),soolatn(strss),true)
}

for(var i=0;i<~~(1+Math.random()*30);i++){
`${("0000000"+~~(1+Math.random()*9999999)).substr(-7)}`
  var strr=`${Math.random()>0.5?'(':''}${randChar()+randChar()}${Math.random()>0.5?')':''}${randchars(~~(Math.random()*18))}`;
  Test.assertEquals(soolatn(strr),isValidMXPhoneNumber(strr));
}