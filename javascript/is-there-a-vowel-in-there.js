function isVow(a){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var nums = vowels.map((vowel) => vowel.charCodeAt(0));
  for(var i = 0; i < nums.length; i++){
    for(var j = 0; j < a.length; j++){
      if(nums[i] === a[j]){
        a[j] = String.fromCharCode(nums[i]);
      }
    }
  }
  return a;
}



//tests
Test.describe("Basic tests",_=>{
Test.assertSimilar(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
Test.assertSimilar(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
Test.assertSimilar(isVow([118,103,110,109,104,106]),[118,103,110,109,104,106]);
Test.assertSimilar(isVow([107,99,110,107,118,106,112,102]),[107,99,110,107,118,106,112,102]);
Test.assertSimilar(isVow([100,100,116,105,117,121 ]),[100,100,116,"i","u",121]);
});

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function myisVow(s){
  for (var i = 0; i < s.length; i++) {
    if (s[i] == 97) s[i] = 'a';
    else if (s[i] == 101) s[i] = 'e';
    else if (s[i] == 105) s[i] = 'i';
    else if (s[i] == 111) s[i] = 'o';
    else if (s[i] == 117) s[i] = 'u';
    }
  return s;
}
var nums=[97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];

for (var i=0;i<40;i++){
  var s=[],len=randint(1,20);
  for (var k=0;k<len;k++) s.push(nums[randint(0,nums.length-1)]);

  Test.it(`Testing for ${s}`,_=>{
  Test.assertSimilar(isVow(s),myisVow(s),"It should work for random inputs too");
  })
 }
})
